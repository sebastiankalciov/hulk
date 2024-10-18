import {View, Text, StyleSheet, Pressable} from "react-native";
import * as Font from "expo-font";
import {Feather} from "@expo/vector-icons";
import {Link} from "expo-router";
import {useEffect, useState} from "react";
import {auth} from "@/firebase/config";
import {getMeals} from "@/utils/getMeals";
import {getTodayStats} from "@/utils/getTodayStats";
import {StatsProps} from "@/types";
import {styles} from "@/styles/screens/MacrosScreen.styles";

export default function MacrosScreen() {

    const [stats, setStats] = useState<StatsProps>({
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
                <Text style = {styles.titleNutrient}> Proteins </Text>
                <Text style = {styles.valueText}>
                    <Text>{stats.proteins} g</Text>
                </Text>
            </View>

            <View>
                <Text style = {styles.titleNutrient}> Carbohydrates </Text>
                <Text style = {styles.valueText}>
                    <Text>{stats.carbohydrates} g</Text>
                </Text>
            </View>

            <View>
                <Text style = {styles.titleNutrient}> Fats </Text>
                <Text style = {styles.valueText}>
                    <Text>{stats.fats} g</Text>
                </Text>
            </View>
        </View>
    )
}
