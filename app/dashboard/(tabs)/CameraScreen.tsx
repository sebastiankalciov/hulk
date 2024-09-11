import {Button, View, Text, StyleSheet, SafeAreaView, Pressable} from "react-native";
import {useRef, useState} from "react";
import {CameraType, CameraView, useCameraPermissions} from "expo-camera";
import {getDownloadURL, ref, uploadBytes} from "@firebase/storage";
import {auth, firestore, storage} from "@/firebase/config"
import {addDoc, collection, doc} from "@firebase/firestore";
import {Link} from "expo-router";
export default function CameraScreen() {
    const [facing] = useState<CameraType>('back');
    const [permission, requestPermission] = useCameraPermissions();
    const reference = useRef(null);
    const [imageUri, setImageUri] = useState(null);

    if (!permission)
        return <View/>

    if (!permission.granted) {
        return (
            <View style = {styles.container}>
                <Text style = {styles.titleContainer}>Please grant the permission to access the camera</Text>
                <Button title={"Grant permission"} onPress={requestPermission}/>
            </View>
        )
    }

    const takePicture = async () => {
        // @ts-ignore
        const photo = await reference.current.takePictureAsync();
        setImageUri(photo.uri);
    }

    const uploadImage = async (imageURI: any) => {
        try {
            const response = await fetch(imageURI);
            const blob = await response.blob();

            const reference = ref(storage,  `users/${auth.currentUser?.email}/meals/1/image.jpg`);

            const result = await uploadBytes(reference, blob);
            const url = await getDownloadURL(result.ref);
            console.log(url);
            return url;

        } catch (error) {
            console.log("eroare la upload image: ", error);
        }
    }

    const addMeal = async (email: string, meal: any)  => {
        try {
            const userReference = doc(firestore, "users", email);
            const mealsCollection = collection(userReference, "meals");

            await addDoc(mealsCollection, meal);
            console.log("masa adaugata cu succes esti top")
        } catch(error) {
            console.log("eroare cand adaugi masa: ", error)
        }
    }
    const testButton = () => {
        const imageURL = uploadImage(imageUri).then(image => {
            addMeal("seb@gmail.com", {imageURL: image});
        })

    }
    testButton();
    return (
        <View style = {styles.container} >
            <CameraView style={styles.camera} facing={facing} ref = {reference}>
                <View style={styles.buttonContainer}>
                    <Button title={"Take picture"} onPress={takePicture}/>
                </View>
            </CameraView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        fontFamily: "Inter-Regular",
        flex: 1,
        backgroundColor: "#131a24",
        paddingTop: 30,
        padding: 10
    },
    titleContainer: {
        padding: 20,
        flex: 1,

    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
})