import {Alert, View, Text, StyleSheet, Pressable} from "react-native";
import {signOut} from "@firebase/auth";
import {auth} from "@/firebase/config";
import {FontAwesome5} from "@expo/vector-icons";
export default function ProfileScreen() {

    const logOut = () => {
        Alert.alert('Log out', "Are you sure you want to log out?", [
            {
                text: "Log out",
                onPress: () => signOut(auth),
            },
            {
                text: "Cancel",
                onPress: () => console.log("n-a vrut sa iasa afar"),
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

        flexDirection: "row"
    },
    title: {
        fontSize: 25,
        fontFamily: "Inter-ExtraBold",
        fontWeight: "bold",
        color: "#f7f7f7",
        paddingRight: "25%",
    },
    logOutButton: {
        width: "50%",
        height: "120%",

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f04b4b",
        borderRadius: 25,

    },
    logOutButtonText: {

        color: "#161616",
        fontFamily: "Inter-ExtraBold",
        fontWeight: "bold",
        fontSize: 18,
        letterSpacing: 0.5,
        padding: 5,
    },
})