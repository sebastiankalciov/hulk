import {StyleSheet} from "react-native";
import {Colors, Typography} from "@/styles";

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
        fontSize: 35,
        fontFamily: Typography.fonts.extraBold,
        textAlign: 'center',
        color: Typography.colors.white
    },

    subtitle: {
        fontSize: 28,
        fontFamily: Typography.fonts.bold,
        textAlign: 'center',
        marginBottom: 20,
        color: Typography.colors.white
    },

    textIntro: {
        fontSize: 15,
        fontFamily: Typography.fonts.regular,
        textAlign: 'center',
        marginBottom: 50,
        margin: 10,
        color: Typography.colors.grey
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

    },

    signUpText: {
        color: Typography.colors.white,
        fontSize: 16,
        lineHeight: 20,
        fontWeight: 'bold',
    },
})