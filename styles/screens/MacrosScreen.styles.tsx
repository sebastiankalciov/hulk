import {StyleSheet} from "react-native";
import {Colors, Typography} from "@/styles";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontFamily: Typography.fonts.regular,
        backgroundColor: Colors.background,
        paddingTop: 50,
        padding: 20,
    },
    titleContainer: {
        flex: 1/6
    },
    title: {
        fontSize: 30,
        fontFamily: "Inter-ExtraBold",
        fontWeight: "bold",
        color: "#ffffff"
    },

    titleNutrient: {
        fontSize: 25,
        fontFamily: "Inter-Regular",
        fontWeight: "bold",
        color: "#ffffff",
    },
    valueText: {
        fontSize: 20,
        fontFamily: "Inter-Regular",
        color: "#ffffff",
        padding: 10
    }
})