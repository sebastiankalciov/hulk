import {Button, View, Text, StyleSheet, Pressable} from "react-native";
import {useRef, useState} from "react";
import {CameraType, CameraView, useCameraPermissions} from "expo-camera";
import {getDownloadURL, ref, uploadBytes} from "@firebase/storage";
import {auth, firestore, storage} from "@/firebase/config"
import {addDoc, collection, doc} from "@firebase/firestore";
import {getCurrentDate, getCurrentTime} from "@/hooks/getCurrentDate";
import {FontAwesome5} from "@expo/vector-icons";
export default function CameraScreen() {
    const [facing] = useState<CameraType>('back');
    const [permission, requestPermission] = useCameraPermissions();
    const referenceToImage = useRef(null);
    const [imageUri, setImageUri] = useState(null);

    if (!permission)
        return <View/>

    if (!permission.granted) {
        return (
            <View style = {styles.container}>
                <Text>Please grant the permission to access the camera</Text>
                <Button title={"Grant permission"} onPress={requestPermission}/>
            </View>
        )
    }

    const takePicture = async () => {
        // @ts-ignore
        const photo = await referenceToImage.current.takePictureAsync();
        setImageUri(photo.uri);
    }

    const uploadImage = async (imageURI: any) => {
        try {
            const response = await fetch(imageURI);
            const blob = await response.blob();

            const referenceToImage = ref(storage,  `users/${auth.currentUser?.email}/meals/1/image.jpg`);

            const result = await uploadBytes(referenceToImage, blob);
            const url = await getDownloadURL(result.ref);
            console.log(url);
            return url;

        } catch (error) {
            console.log("eroare la upload image: ", error);
        }
    }

    const addMealInDatabase = async (email: string, meal: any)  => {
        try {
            const userReference = doc(firestore, "users", email);
            const mealsCollection = collection(userReference, "meals");

            await addDoc(mealsCollection, meal);
            console.log("masa adaugata cu succes esti top")
        } catch(error) {
            console.log("eroare cand adaugi masa: ", error)
        }
    }
    const addNewMeal = () => {
        takePicture();
        const imageURL = uploadImage(imageUri).then(image => {
            addMealInDatabase("seb@gmail.com", {imageURL: image, date: getCurrentDate()});
        })

    }

    // const responseJSON = JSON.dummyfunction(getNutritionInfo(imageURL));
    // if the image is not accurate
    // alert("Not a good image")
    // else
    // return to HomeScreen the object
    /*
    {
        "calories" : 1000,
        "proteins" : 100,
        "carbohydrates" : 200,
        "fats" : 30,

     */

    //testButton();
    return (
        <View style = {styles.container} >
            <CameraView style={styles.camera} facing={facing} ref = {referenceToImage}>
                <View style={styles.buttonContainer}>
                    <Pressable style = {styles.takePictureButton} onPress={addNewMeal}>
                        <FontAwesome5 name="circle" size={70} color="#ffffff" />
                    </Pressable>
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

    },
    camera: {
        flex: 1,
        paddingBottom: 5
    },
    buttonContainer: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: 'transparent',

    },
    icon: {
        position: "absolute",
        color: "#f7f7f7"
    },

    takePictureButton: {
        alignItems: "center",
        justifyContent: "center",

    },
})