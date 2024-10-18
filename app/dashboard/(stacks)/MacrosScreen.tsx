import {View, Text, StyleSheet, Pressable} from "react-native";
import * as Font from "expo-font";
import {AntDesign, Feather, MaterialCommunityIcons} from "@expo/vector-icons";
import {Link} from "expo-router";
import {useEffect, useState} from "react";
import {auth} from "@/firebase/config";
import {getMeals} from "@/utils/getMeals";
import {getTodayStats} from "@/utils/getTodayStats";

interface Stats {
    calories: number;
    proteins: number;
    carbohydrates: number;
    fats: number;
}
export default function HomeScreen() {

    const [stats, setStats] = useState<Stats>({
        calories: 0,
        proteins: 0,
        carbohydrates: 0,
        fats: 0,
    });

    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (auth.currentUser?.email) {
            getMeals({userEmail: auth.currentUser.email, setMeals: setMeals, setLoading: setLoading});
        }
        // @ts-ignore
        getTodayStats(setStats, meals);
    }, []);

    const [fontsLoaded] = Font.useFonts({
        'Inter-Bold': require('@/assets/fonts/Inter/static/Inter-Bold.ttf'),
        'Inter-ExtraBold': require('@/assets/fonts/Inter/static/Inter-ExtraBold.ttf'),
        'Inter-Regular': require('@/assets/fonts/Inter/static/Inter-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return <View/>
    }
    
    return (
        <View style = {styles.container} >
            <Link href="../(tabs)/HomeScreen">
                <Feather name="arrow-left" size={28} color="#f0cd53" />
            </Link>

            <View style={styles.titleContainer}>
                <Text style = {styles.title}>Macronutrients</Text>
            </View>


            <View>
                <Text style = {styles.titleCaloriesBox}> Proteins </Text>

                <Text style = {styles.caloriesValueText}>
                    <Text style = {{fontWeight: "bold", fontSize: 20}}>{stats.proteins} g</Text>
                </Text>
            </View>

            <View>
                <Text style = {styles.titleCaloriesBox}> Carbohydrates </Text>

                <Text style = {styles.caloriesValueText}>
                    <Text style = {{fontWeight: "bold", fontSize: 20}}>{stats.carbohydrates} g</Text>
                </Text>
            </View>

            <View>
                <Text style = {styles.titleCaloriesBox}> Fats </Text>

                <Text style = {styles.caloriesValueText}>
                    <Text style = {{fontWeight: "bold", fontSize: 20}}>{stats.fats} g</Text>
                </Text>
            </View>
        </View>
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
        marginBottom: 10
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
        fontSize: 25,
        fontFamily: "Inter-Regular",
        fontWeight: "bold",
        color: "#ffffff",
    },
    caloriesValueText: {
        fontSize: 24,
        fontFamily: "Inter-Regular",
        color: "#ffffff",
        padding: 10
    },
    activityTitleBox: {
        flex: 1,
        flexDirection: 'row',
        padding: 10
    }
})