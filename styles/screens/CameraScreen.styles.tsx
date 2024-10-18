import {StyleSheet} from "react-native";
import {Colors, Typography} from "@/styles";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontFamily: Typography.fonts.regular,
        backgroundColor: Colors.background,
        paddingTop: 30,
    },
    camera: {
        flex: 1,
        paddingBottom: 5
    },
    buttonContainer: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: 'transparent',

    },
    icon: {
        position: "absolute",
        color: Typography.colors.grey
    },
    takePictureButton: {
        alignItems: "center",
        justifyContent: "center",
    },
})