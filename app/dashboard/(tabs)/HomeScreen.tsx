import {Button, View, Text, StyleSheet, SafeAreaView} from "react-native";
import * as Font from "expo-font";
import {addDoc, collection, doc} from "@firebase/firestore";
import {auth, firestore} from "@/firebase/config"
export default function HomeScreen() {

    const [fontsLoaded] = Font.useFonts({
        'Inter-Bold': require('@/assets/fonts/Inter/static/Inter-Bold.ttf'),
        'Inter-ExtraBold': require('@/assets/fonts/Inter/static/Inter-ExtraBold.ttf'),
        'Inter-Regular': require('@/assets/fonts/Inter/static/Inter-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return <View/>
    }
    // TO-DO
    // Render the recent meals
    // Add statistics (if possible)

    return (
        <View style = {styles.container} >
            <View style={styles.titleContainer}>
                <Text style = {styles.todayDate}>{new Date().toDateString()}</Text>
                <Text style = {styles.title}>Dashboard</Text>
            </View>
            <View style = {styles.activityContainer}>
                <Text style = {styles.subtitle}>Recent meals</Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        fontFamily: "Inter-Regular",
        flex: 1,
        backgroundColor: "#131a24",
        paddingTop: 30,
        padding: 10
    },
    titleContainer: {
        padding: 20,

    },
    activityContainer: {
        flex: 1/2,
        padding: 20,
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
        color: "#ffffff"
    }
})