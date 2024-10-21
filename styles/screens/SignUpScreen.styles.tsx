import {StyleSheet} from "react-native";
import {Typography, Colors} from "@/styles";

export const styles = StyleSheet.create({
    container: {
        fontFamily: Typography.fonts.regular,
        flex: 1,
        backgroundColor: Colors.background,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    },

    inputContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomColor: Typography.colors.white,
        borderBottomWidth: 1.5,
        height: 50,
        marginTop: 20,
    },

    title: {
        fontSize: 30,
        fontFamily: Typography.fonts.extraBold,
        fontWeight: "bold",
        textAlign: 'center',
        color: "#f7f7f7"
    },

    subtitle: {
        fontSize: 30,
        fontFamily: Typography.fonts.extraBold,
        fontWeight: "bold",
        textAlign: 'center',
        marginBottom: 20,
        color: "#f7f7f7"
    },

    textIntro: {
        fontSize: 15,
        fontFamily: Typography.fonts.regular,
        textAlign: 'center',
        marginBottom: 50,
        margin: 10,
        color: "#c0c0c0"
    },

    input: {
        flex: 1,
        paddingLeft: 30,
        color: Typography.colors.white
    },

    icon: {
        position: "absolute",
        color: Typography.colors.white
    },

    signInButton: {
        marginTop: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.yellow,
        borderRadius: 25,
    },

    signInButtonText: {
        color: Typography.colors.black,
        fontFamily: Typography.fonts.extraBold,
        fontWeight: "bold",
        fontSize: 25,
        letterSpacing: 0.5,
        padding: 5,
    },

    createAccountContainer: {
        marginTop: 40,
        flexDirection: "row",
        justifyContent: "center",

    },

    createAccountText: {
        fontSize: 14,
        color: Typography.colors.white,
        lineHeight: 20,
    },

    signUpText: {
        color: Typography.colors.white,
        fontSize: 16,
        lineHeight: 20,
        fontWeight: 'bold',
    },
})