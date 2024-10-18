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
        padding: 20,
        flexDirection: "row"
    },
    title: {
        fontSize: 25,
        fontFamily:Typography.fonts.extraBold,
        fontWeight: "bold",
        color: Typography.colors.white,
        paddingRight: "25%",
    },
    logOutButton: {
        width: "50%",
        height: "120%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.red,
        borderRadius: 25,

    },
    logOutButtonText: {
        color: Typography.colors.black,
        fontFamily: Typography.fonts.extraBold,
        fontWeight: "bold",
        fontSize: 18,
        letterSpacing: 0.5,
        padding: 5,
    },
})