import {
    Button,
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ActivityIndicator,
    FlatList,
    ScrollView,
    Image, Pressable
} from "react-native";
import * as Font from "expo-font";
import {collection, doc, getDocs} from "@firebase/firestore";
import {auth, firestore} from "@/firebase/config"
import {useEffect, useState} from "react";
import {AntDesign, Feather, FontAwesome, FontAwesome5} from "@expo/vector-icons";
import MealBox from "@/components/MealBox";

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
                    {meals.map((mealObject:any) =>(
                        <MealBox meal = {mealObject} key = {mealObject.id}/>
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
        paddingTop: 40,
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