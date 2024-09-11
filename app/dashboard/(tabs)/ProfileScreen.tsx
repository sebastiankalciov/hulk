import {Button, View, Text, StyleSheet, SafeAreaView, Pressable} from "react-native";
import {signOut} from "@firebase/auth";
import {auth} from "@/firebase/config";
export default function ProfileScreen() {

    const logOut = () => {
        signOut(auth);
    }

    return (
        <View style = {styles.container} >
            <View style={styles.titleContainer}>
                <Text style = {styles.title}>Profile</Text>
            </View>
            <Pressable style = {styles.logOutButton} onPress={logOut}><Text style = {styles.logOutButtonText}>Log out</Text></Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        fontFamily: "Inter-Regular",
        flex: 1,
        backgroundColor: "#131a24",
        paddingTop: 30,
        padding: 10
    },
    titleContainer: {
        padding: 20,
        flex: 1,

    },
    title: {
        fontSize: 25,
        fontFamily: "Inter-ExtraBold",
        fontWeight: "bold",
        color: "#f7f7f7"
    },
    logOutButton: {
        marginBottom: 30,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f04b4b",
        borderRadius: 25,

    },
    logOutButtonText: {
        color: "#161616",
        fontFamily: "Inter-ExtraBold",
        fontWeight: "bold",
        fontSize: 25,
        letterSpacing: 0.5,
        padding: 5,
    },
})