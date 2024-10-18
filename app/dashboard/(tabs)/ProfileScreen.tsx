import {Alert, View, Text, StyleSheet, Pressable} from "react-native";
import {signOut} from "@firebase/auth";
import {auth} from "@/firebase/config";
import {FontAwesome5} from "@expo/vector-icons";
import { styles } from "@/styles/screens/ProfileScreen.styles";

export default function ProfileScreen() {
    const logOut = () => {
        Alert.alert('Log out', "Are you sure you want to log out?", [
            {
                text: "Log out",
                onPress: () => signOut(auth),
            },
            {
                text: "Cancel",
                onPress: () => console.log("User canceled log out"),
                style: 'cancel'
            }
        ])
    }

    return (
        <View style = {styles.container} >
            <View style={styles.titleContainer}>
                <Text style = {styles.title}>Profile</Text>

                <Pressable style = {styles.logOutButton} onPress={logOut}>
                    <FontAwesome5 name="door-open" size={24} color="black" />
                    <Text style = {styles.logOutButtonText}>Log out</Text>
                </Pressable>
            </View>
        </View>
    )
}
