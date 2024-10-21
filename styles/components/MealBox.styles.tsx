import {StyleSheet} from "react-native";
import {Colors, Typography} from "@/styles";

export const styles = StyleSheet.create({
    container: {
        fontFamily: Typography.fonts.regular,
        flex: 1,
        backgroundColor: Colors.background,
        paddingTop: 50,
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
        fontFamily: Typography.fonts.extraBold,
        fontWeight: "bold",
        color: Typography.colors.white
    },
    mealContainer: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: Colors.lightGray,
        borderRadius: 15,
        padding: 10,
        marginBottom: 10
    },
    mealItemText: {
        fontSize: 15,
        fontFamily: Typography.fonts.regular,
        color: Typography.colors.white,
    },
    mealImage: {
        width: 100,
        height: 100,
    },
    mealTextContainer: {
        flex: 1,
        flexDirection: "column",
        padding: 20

    }
})