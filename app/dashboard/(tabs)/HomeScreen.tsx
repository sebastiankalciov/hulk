import {View, Text, StyleSheet, Pressable, RefreshControl, ScrollView} from "react-native";
import * as Font from "expo-font";
import {AntDesign, MaterialCommunityIcons} from "@expo/vector-icons";
import {Link} from "expo-router";
import {getTodayStats} from "@/utils/getTodayStats";
import React, {useEffect, useState} from "react";
import {auth} from "@/firebase/config";
import {getMeals} from "@/utils/getMeals";
import LoadingIcon from "@/components/LoadingIcon";
import PieChartGraph from "@/components/PieChartGraph";

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
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            if (auth.currentUser?.email) {
                getMeals({userEmail: auth.currentUser.email, setMeals: setMeals, setLoading: setLoading});
            }

            // @ts-ignore
            getTodayStats(setStats, meals);

            setRefreshing(false);
        }, 2000);
    }, []);

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

    if (loading) {
        return <LoadingIcon/>
    }

    
    const macros: number = stats.proteins + stats.carbohydrates + stats.fats;

    return (
        <ScrollView contentContainerStyle = {styles.container} refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
        } scrollEnabled={false}>

            <View style={styles.titleContainer}>
                <Text style = {styles.todayDate}>{new Date().toDateString()}</Text>
                <Text style = {styles.title}>Dashboard</Text>
            </View>

            <View style = {styles.activityContainer}>
                <Text style = {styles.subtitle}>Today's activity</Text>

                <View style = {styles.activityInsideContainer}>

                    <View style = {styles.activityTitleBox}>
                        <MaterialCommunityIcons name="food" size={24} color="#f0cd53" />
                        <Text style = {styles.titleCaloriesBox}> Calories </Text>
                    </View>

                    <Text style = {styles.caloriesValueText}>
                        <Text style = {{fontWeight: "bold", fontSize: 20}}>{stats.calories} kcal</Text>
                    </Text>
                </View>

                <View style = {styles.activityInsideContainer}>

                    <View style = {styles.activityTitleBox}>
                        <MaterialCommunityIcons name="weight-gram" size={24} color="#f0cd53" />
                        <Text style = {styles.titleCaloriesBox}> Macro nutrients </Text>
                        <Link href="../(stacks)/MacrosScreen">
                            <Pressable>
                                <AntDesign name="arrowright" size={28} color="#f0cd53" style={{paddingLeft: "40%"}}/>
                            </Pressable>
                        </Link>

                    </View>

                    <Text style = {styles.caloriesValueText}>
                        <Text style = {{fontWeight: "bold", fontSize: 20, color: "white"}}>{macros} g</Text>
                    </Text>
                </View>

                <PieChart proteins={stats.proteins} carbohydrates={stats.carbohydrates} fats={stats.fats}/>
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
        flex: 1/4
    },
    activityContainer: {
        flex: 1

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
        fontSize: 15,
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