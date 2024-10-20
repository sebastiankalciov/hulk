import {View, Text, Pressable, RefreshControl, ScrollView} from "react-native";
import React, {useCallback, useEffect, useState} from "react";
import * as Font from "expo-font";
import {AntDesign, MaterialCommunityIcons} from "@expo/vector-icons";
import {Link} from "expo-router";
import {auth} from "@/firebase/config";
import {getTodayStats} from "@/utils/getTodayStats";
import {getMeals} from "@/utils/getMeals";
import LoadingIcon from "@/components/LoadingIcon";
import PieChartGraph from "@/components/PieChartGraph";
import {StatsProps} from "@/types";
import {styles} from "@/styles/screens/HomeScreen.styles";

export default function HomeScreen() {

    const [stats, setStats] = useState<StatsProps>({
        calories: 0,
        proteins: 0,
        carbohydrates: 0,
        fats: 0,
    });

    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);

        if (auth.currentUser?.email) {
            getMeals({userEmail: auth.currentUser.email, setMeals: setMeals, setLoading: setLoading});
        }

        setRefreshing(false);
    }, []);

    useEffect(() => {
        if (auth.currentUser?.email) {
            getMeals({userEmail: auth.currentUser.email, setMeals: setMeals, setLoading: setLoading});
        }
    }, []);

    useEffect(() => {
        getTodayStats(setStats, meals);
    }, [meals]);

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

                <PieChartGraph proteins={stats.proteins} carbohydrates={stats.carbohydrates} fats={stats.fats} calories={stats.calories}/>
            </View>
        </ScrollView>
    )
}
