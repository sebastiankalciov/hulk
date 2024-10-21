import {Image, Text, View} from "react-native";
import React from "react";
import {MealBoxProps} from "@/types";
import {styles} from "@/styles/components/MealBox.styles";

interface MealProps {
    meal: MealBoxProps;
}

const MealBox: React.FC<MealProps> = ({meal}) => {
    return (
        <View key = {meal.id} style = {styles.mealContainer}>
            <Image style = {styles.mealImage} source={{uri: meal.imageURL}}/>
            <View style = {styles.mealTextContainer}>
                <Text style = {styles.mealItemText}>
                    Calories
                </Text>
                <Text style = {styles.mealItemText}>
                    <Text style = {{fontSize: 20, fontWeight: "bold"}}>{meal.calories}</Text> kcal
                </Text>

                <Text style = {styles.mealItemText}>
                    Proteins
                </Text>
                <Text style = {styles.mealItemText}>
                    <Text style = {{fontSize: 20, fontWeight: "bold"}}>{meal.proteins}</Text>g
                </Text>

                <Text style = {styles.mealItemText}>
                    Carbohydrates
                </Text>
                <Text style = {styles.mealItemText}>
                    <Text style = {{fontSize: 20, fontWeight: "bold"}}>{meal.carbohydrates}</Text>g
                </Text>

                <Text style = {styles.mealItemText}>
                    Fats
                </Text>
                <Text style = {styles.mealItemText}>
                    <Text style = {{fontSize: 20, fontWeight: "bold"}}>{meal.fats}</Text>g
                </Text>
            </View>
        </View>
    )
}

export default MealBox;