import {View, Text, StyleSheet, Pressable} from "react-native";
import * as Font from "expo-font";
import {AntDesign, MaterialCommunityIcons} from "@expo/vector-icons";
import {Link} from "expo-router";
import {PieChart} from "react-native-chart-kit";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;

const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
};
export default function HomeScreen() {

    const [fontsLoaded] = Font.useFonts({
        'Inter-Bold': require('@/assets/fonts/Inter/static/Inter-Bold.ttf'),
        'Inter-ExtraBold': require('@/assets/fonts/Inter/static/Inter-ExtraBold.ttf'),
        'Inter-Regular': require('@/assets/fonts/Inter/static/Inter-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return <View/>
    }

    // to-do: add protein/carbs/fats intake from today
    const data = [
        {
            name: "Proteins",
            quantity: 150,
            color: "rgb(190,72,72)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Carbohydrates",
            quantity: 280,
            color: "rgb(210,164,131)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Fats",
            quantity: 52,
            color: "rgb(229,206,106)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        }
    ];

    return (
        <View style = {styles.container} >
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
                        <Text style = {{fontWeight: "bold", fontSize: 20}}>2018 kcal</Text>
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
                        <Text style = {{fontWeight: "bold", fontSize: 20, color: "white"}}>480g</Text>
                    </Text>
                </View>
                <PieChart
                    data={data}
                    width={screenWidth}
                    height={150}
                    chartConfig={chartConfig}
                    accessor={"quantity"}
                    backgroundColor={"transparent"}
                    paddingLeft={"-30"}
                />
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
        flex: 1/1.5,

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