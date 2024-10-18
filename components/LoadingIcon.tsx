import {ActivityIndicator, StyleSheet, View} from "react-native";
import React from "react";
import {styles} from "@/styles/screens/HomeScreen.styles";

const LoadingIcon = () => {
    return (
        <View style = {styles.container} >
                <ActivityIndicator size="large" color="#ffffff" />
        </View>
    )
}

export default LoadingIcon;
