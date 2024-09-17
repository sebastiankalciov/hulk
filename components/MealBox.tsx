import {Image, StyleSheet, Text, View} from "react-native";

// @ts-ignore
const MealBox = ({meal}) =>{
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
                    <Text style = {{fontSize: 20, fontWeight: "bold"}}>{meal.proteins}</Text> g
                </Text>

                <Text style = {styles.mealItemText}>
                    Carbohydrates
                </Text>
                <Text style = {styles.mealItemText}>
                    <Text style = {{fontSize: 20, fontWeight: "bold"}}>{meal.carbohydrates}</Text> g
                </Text>

                <Text style = {styles.mealItemText}>
                    Fats
                </Text>
                <Text style = {styles.mealItemText}>
                    <Text style = {{fontSize: 20, fontWeight: "bold"}}>{meal.fats}</Text> g
                </Text>
            </View>
        </View>
    )
}

export default MealBox;

const styles = StyleSheet.create({
    container: {
        fontFamily: "Inter-Regular",
        flex: 1,
        backgroundColor: "#131a24",
        paddingTop: 50,
        padding: 20,
    },
    titleContainer: {
        flex: 1/6
    },
    activityContainer: {
        flex: 1/2,
    },
    activityInsideContainer: {
        flex: 1/2,
        backgroundColor: "#212b39",
        borderRadius: 15,
    },
    todayDate: {
        fontSize: 15,
        color: "#d4d4d4"
    },
    title: {
        fontSize: 30,
        fontFamily: "Inter-ExtraBold",
        fontWeight: "bold",
        color: "#ffffff"
    },
    mealContainer: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#1c2631",
        borderRadius: 15,
        padding: 10,
        marginBottom: 10
    },
    mealItemText: {
        fontSize: 15,
        fontFamily: "Inter-Regular",
        color: "#ffffff",
    },
    mealImage: {
        width: 100,
        height: 100,
    },
    mealTextContainer: {
        flex: 1,
        flexDirection: "column",
        padding: 20

    }
})