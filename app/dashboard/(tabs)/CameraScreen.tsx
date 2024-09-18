import {Button, View, Text, StyleSheet, Pressable} from "react-native";
import {useEffect, useRef, useState} from "react";
import {CameraType, CameraView, useCameraPermissions} from "expo-camera";
import {getDownloadURL, ref, uploadBytes} from "@firebase/storage";
import {auth, firestore, storage} from "@/firebase/config"
import {addDoc, collection, doc} from "@firebase/firestore";
import {getCurrentDate, getCurrentTime} from "@/hooks/getCurrentDate";
import getInfo from "@/constants/getNutritionInfo";
import {FontAwesome5} from "@expo/vector-icons";
import {takePicture} from "@/constants/takePicture";
import {fetchFirestoreImageURL} from "@/constants/fetchFirestoreImageURL";
import {addMealInDatabase} from "@/constants/addMealInDatabase";
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


    const updateMeal = async () => {

        await takePicture({referenceToImage, setImageUri}).then(r =>
            fetchFirestoreImageURL(`${auth.currentUser?.email}`, imageUri).then(async image => {
                if (imageUri === null) return;
                const infoJSONObject = await getInfo(image);
                addMealInDatabase(`${auth.currentUser?.email}`, {
                    imageURL: image,
                    date: getCurrentDate(),
                    time: getCurrentTime(),
                    calories: infoJSONObject.calories,
                    proteins: infoJSONObject.proteins,
                    carbohydrates: infoJSONObject.carbohydrates,
                    fats: infoJSONObject.fats,

                });
                alert("Meal added successfully!")
            })
        );

    }

    return (
        <View style = {styles.container} >
            <CameraView style={styles.camera} facing={facing} ref = {referenceToImage}>
                <View style={styles.buttonContainer}>
                    <Pressable style = {styles.takePictureButton} onPress={updateMeal}>
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