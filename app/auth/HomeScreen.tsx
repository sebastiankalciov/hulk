import {Button, View, Text} from "react-native";
import {signOut} from "@firebase/auth";
import {auth} from "@/firebase/config";
export default function HomeScreen() {

    const logOut = () => {
        signOut(auth);
    }

    return (
        <View style = {{margin: 50}}>
            <Text>blabla</Text>
            <Button onPress={logOut} title = "Sign out"></Button>
        </View>
    )
}