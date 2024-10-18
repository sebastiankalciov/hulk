import {Button, View, Text, StyleSheet, Pressable, Alert} from "react-native";
import {useRef, useState} from "react";
import {CameraType, CameraView, useCameraPermissions} from "expo-camera";
import {FontAwesome5} from "@expo/vector-icons";
import {auth} from "@/firebase/config"
import {getFormattedCurrentDate, getCurrentTime} from "@/utils/getFormattedCurrentDate";
import {getInfo} from "@/utils/getNutritionInfo";
import {capturePicture} from "@/utils/capturePicture";
import {getFirestoreImageURL} from "@/utils/getFirestoreImageURL";
import {addMealToDatabase} from "@/utils/addMealToDatabase";
import {styles} from "@/styles/screens/CameraScreen.styles";

export default function CameraScreen() {
    const [facing] = useState<CameraType>('back');
    const [permission, requestPermission] = useCameraPermissions();
    const cameraReference = useRef<CameraView>(null);
    const [picture, setPicture] = useState<string>("");

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

        await capturePicture({cameraReference, setPicture}).then(r =>
            getFirestoreImageURL(`${auth.currentUser?.email}`, picture).then(async image => {

                if (picture === null) return (
                    Alert.alert("Image", "There was an error when capturing the image. Please try again!")
                );

                const infoJSONObject = await getInfo(image);
                if (infoJSONObject === null) return (
                    Alert.alert("Image unclear", "Please ensure that the image clearly shows a meal.")
                );

                addMealToDatabase(`${auth.currentUser?.email}`, {
                    imageURL: image,
                    date: getFormattedCurrentDate(),
                    time: getCurrentTime(),
                    calories: infoJSONObject.calories,
                    proteins: infoJSONObject.proteins,
                    carbohydrates: infoJSONObject.carbohydrates,
                    fats: infoJSONObject.fats,

                });

                Alert.alert("Meal", "Meal added successfully!");
            })
        );
    }

    return (
        <View style = {styles.container} >
            <CameraView style={styles.camera} facing={facing} ref = {cameraReference}>
                <View style={styles.buttonContainer}>
                    <Pressable style = {styles.takePictureButton} onPress={updateMeal}>
                        <FontAwesome5 name="circle" size={70} color="#ffffff" />
                    </Pressable>
                </View>
            </CameraView>
        </View>
    )
}
