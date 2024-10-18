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
        flex: 1/4
    },
    activityContainer: {
        flex: 1
    },
    activityInsideContainer: {
        flex: 1/2,
        backgroundColor: Colors.lightGray,
        borderRadius: 15,
        marginBottom: 10
    },
    todayDate: {
        fontSize: 15,
        color: Typography.colors.grey
    },
    title: {
        fontSize: 30,
        fontFamily: Typography.fonts.extraBold,
        fontWeight: "bold",
        color: Typography.colors.white
    },
    subtitle: {
        fontSize: 20,
        fontFamily: Typography.fonts.bold,
        fontWeight: "bold",
        color: Typography.colors.white,
        paddingBottom: 10,
    },
    titleCaloriesBox: {
        fontSize: 15,
        fontFamily: Typography.fonts.regular,
        fontWeight: "bold",
        color: Typography.colors.white,
    },
    caloriesValueText: {
        fontSize: 24,
        fontFamily: Typography.fonts.regular,
        color: Typography.colors.white,
        padding: 10
    },
    activityTitleBox: {
        flex: 1,
        flexDirection: 'row',
        padding: 10
    }
})

