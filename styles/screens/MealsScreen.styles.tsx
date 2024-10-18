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
    todayDate: {
        fontSize: 15,
        color: Typography.colors.grey
    },
    title: {
        fontSize: 30,
        fontFamily: Typography.fonts.extraBold,
        fontWeight: "bold",
        color: Typography.colors.white
    }
})