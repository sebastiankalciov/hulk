import {CameraView} from "expo-camera";
import React from "react";

interface MealProps {

    imageURL: string | undefined,
    date: string,
    time: string,
    calories: number,
    proteins: number,
    carbohydrates: number,
    fats: number,

}

interface CapturePictureProps {
    cameraReference: React.RefObject<CameraView>;
    setPicture: React.Dispatch<React.SetStateAction<string>>;
}

interface Stats {
    proteins: number;
    carbohydrates: number;
    fats: number;
}

export {MealProps, CapturePictureProps, Stats};