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

interface MealBoxProps {
    id: number,
    imageURL: string | undefined,
    date: string,
    time: string,
    calories: number,
    proteins: number,
    carbohydrates: number,
    fats: number,
}

interface GetMealsProps {
    userEmail: string;
    setMeals: React.Dispatch<React.SetStateAction<never[]>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface CapturePictureProps {
    cameraReference: React.RefObject<CameraView>;
    setPicture: React.Dispatch<React.SetStateAction<string>>;
}

interface StatsProps {
    calories: number;
    proteins: number;
    carbohydrates: number;
    fats: number;
}

export {MealProps, MealBoxProps, GetMealsProps, CapturePictureProps, StatsProps};