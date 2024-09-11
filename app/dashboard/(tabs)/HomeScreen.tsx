import {Button, View, Text, StyleSheet, SafeAreaView} from "react-native";
import * as Font from "expo-font";
import {addDoc, collection, doc, getDoc, setDoc} from "@firebase/firestore";
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
    const getCurrentDate = ()=>{

        var day = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();

        return day + '.' + month + '.' + year;
    }

    const getCurrentTime = () => {
        var hour = new Date().getHours();
        var minutes = new Date().getMinutes();

        return hour + ':' + minutes;
    }
    console.log(getCurrentTime())

    const addMeal = async (email: string, meal: any)  => {
        try {
            const userReference = doc(firestore, "users", email);
            const mealsCollection = collection(userReference, "meals");

            await addDoc(mealsCollection, meal);
            console.log("masa adaugata cu succes esti top")
        } catch(error) {
            console.log("eroare cand adaugi masa: ", error)
        }
    }
    const testButton = () => {
        addMeal("seb@gmail.com", {proteins: 300, carbohydrates:90, fats: 40});
    }
    return (
        <View style = {styles.container} >
            <View style={styles.titleContainer}>
                <Text style = {styles.todayDate}>Tuesday, 10 Sept</Text>
                <Text style = {styles.title}>Dashboard</Text>
            </View>
            <View style = {styles.activityContainer}>
                <Text style = {styles.subtitle}>Recent meals</Text>
            </View>
            <Button title={"test"} onPress={testButton}/>
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