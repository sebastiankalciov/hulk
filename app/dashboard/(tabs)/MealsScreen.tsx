import {
    Button,
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ActivityIndicator,
    FlatList,
    ScrollView,
    Image
} from "react-native";
import * as Font from "expo-font";
import {collection, doc, getDocs} from "@firebase/firestore";
import {auth, firestore} from "@/firebase/config"
import {useEffect, useState} from "react";

export default function MealsScreen() {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);

    const [fontsLoaded] = Font.useFonts({
        'Inter-Bold': require('@/assets/fonts/Inter/static/Inter-Bold.ttf'),
        'Inter-ExtraBold': require('@/assets/fonts/Inter/static/Inter-ExtraBold.ttf'),
        'Inter-Regular': require('@/assets/fonts/Inter/static/Inter-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return <View/>
    }

    const fetchMeals = async () => {
        try {
            const userReference = doc(firestore, "users", `${auth.currentUser?.email}`);

            const mealsCollection = collection(userReference, "meals");
            const querySnapshot = await getDocs(mealsCollection);

            const meals = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
            // @ts-ignore
            setMeals(meals);
        } catch (error) {
            console.log("problema la fetchMeals: ", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchMeals();
    }, []);

    if (loading) {
        return (
            <View style = {styles.container} >
                <View style={styles.titleContainer}>
                    <Text style = {styles.todayDate}>{new Date().toDateString()}</Text>
                    <Text style = {styles.title}>Recent meals</Text>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            </View>
        )
    }

    if (meals.length === 0) {
        return (
            <View style = {styles.container} >
                <View style={styles.titleContainer}>
                    <Text style = {styles.todayDate}>{new Date().toDateString()}</Text>
                    <Text style = {styles.title}>Recent meals</Text>
                    <Text>(sum icon do be added for no meals)</Text>
                </View>
            </View>
        )
    }

    return (
        <ScrollView style = {styles.container} >
            <View style={styles.titleContainer}>
                <Text style = {styles.todayDate}>{new Date().toDateString()}</Text>
                <Text style = {styles.title}>Recent meals</Text>
                <View>
                    {meals.map((meal:any) =>(
                        <View key = {meal.id} style = {styles.mealContainer}>
                            <Image style = {styles.mealImage} source={{uri: meal.imageURL}}/>
                            <Text style = {styles.mealItemText}>Calories: {meal.calories}</Text>
                            <Text style = {styles.mealItemText}>Proteins: {meal.proteins}</Text>
                            <Text style = {styles.mealItemText}>Carbohydrates: {meal.carbohydrates}</Text>
                            <Text style = {styles.mealItemText}>Fats: {meal.fats}</Text>
                        </View>
                    ))}
                </View>

            </View>

        </ScrollView>
    )
}

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
    subtitle: {
        fontSize: 20,
        fontFamily: "Inter-Bold",
        fontWeight: "bold",
        color: "#ffffff",
        paddingBottom: 10,
    },
    titleCaloriesBox: {
        fontSize: 15,
        fontFamily: "Inter-Regular",
        fontWeight: "bold",
        color: "#ffffff",
    },
    caloriesValueText: {
        fontSize: 18,
        fontFamily: "Inter-Regular",

        color: "#ffffff",
        padding: 10
    },
    activityTitleBox: {
        flex: 1/2,
        flexDirection: 'row',
        padding: 10
    },
    mealContainer: {
        flex: 1,
        backgroundColor: "#1c2631",
        borderRadius: 15,
    },
    mealItemText: {
        fontSize: 15,
        fontFamily: "Inter-Regular",
        fontWeight: "bold",
        color: "#ffffff",
    },
    mealImage: {

        width: 100,
        height: 100,
    }
})