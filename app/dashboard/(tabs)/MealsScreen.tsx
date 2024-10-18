import {View, Text, StyleSheet, ScrollView, RefreshControl,} from "react-native";
import {useCallback, useEffect, useState} from "react";
import * as Font from "expo-font";
import {auth} from "@/firebase/config"
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {getMeals} from "@/utils/getMeals";
import LoadingIcon from "@/components/LoadingIcon";
import MealBox from "@/components/MealBox";
import {styles} from "@/styles/screens/MealsScreen.styles";

export default function MealsScreen() {

    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
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
