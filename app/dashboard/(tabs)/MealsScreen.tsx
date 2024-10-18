import {View, Text, StyleSheet, ActivityIndicator, ScrollView, RefreshControl,} from "react-native";
import * as Font from "expo-font";
import {auth} from "@/firebase/config"
import React, {useEffect, useState} from "react";
import MealBox from "@/components/MealBox";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {getMeals} from "@/utils/getMeals";
import LoadingIcon from "@/components/LoadingIcon";

export default function MealsScreen() {

    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            if (auth.currentUser?.email) {
                getMeals({userEmail: auth.currentUser.email, setMeals: setMeals, setLoading: setLoading});
            }
            setRefreshing(false);
        }, 2000);
    }, []);

    useEffect(() => {
        if (auth.currentUser?.email) {
            getMeals({userEmail: auth.currentUser.email, setMeals: setMeals, setLoading: setLoading});
        }
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

    if (meals.length === 0) {
        return (
            <View style = {styles.container} >
                <View style={styles.titleContainer}>
                    <Text style = {styles.todayDate}>{new Date().toDateString()}</Text>
                    <Text style = {styles.title}>Recent meals</Text>
                    <MaterialIcons name="sentiment-dissatisfied" size={24} color="white" />
                </View>
            </View>
        )
    }

    return (
        <ScrollView style = {styles.container} refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
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
    todayDate: {
        fontSize: 15,
        color: "#d4d4d4"
    },
    title: {
        fontSize: 30,
        fontFamily: "Inter-ExtraBold",
        fontWeight: "bold",
        color: "#ffffff"
    }
})