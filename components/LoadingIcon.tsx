import {ActivityIndicator, StyleSheet, View} from "react-native";
import React from "react";

const LoadingIcon = () => {

    return (
        <View style = {styles.container} >
                <ActivityIndicator size="large" color="#ffffff" />
        </View>
    )

}

export default LoadingIcon;

const styles = StyleSheet.create({
    container: {
        fontFamily: "Inter-Regular",
        flex: 1,
        backgroundColor: "#131a24",
        paddingTop: 50,
        padding: 20,
    }
})