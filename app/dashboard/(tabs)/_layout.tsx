import {View} from "react-native";
import {Tabs} from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {Feather, FontAwesome, FontAwesome5} from "@expo/vector-icons";

export default function TabLayout() {
    return (
        <Tabs screenOptions = {{headerShown: false, tabBarActiveTintColor: "#8292f7" }}>
            <Tabs.Screen
                name = "HomeScreen"
                options = {{
                    title: '',
                    tabBarStyle: {backgroundColor: "#131a24", borderTopWidth: 0},
                    tabBarIcon: ({ color }) => <Feather size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name = "CameraScreen"
                options = {{
                    title: '',
                    tabBarStyle: {backgroundColor: "#131a24", borderTopWidth: 0},
                    tabBarIcon: ({ color }) => <FontAwesome5 size={28} name="camera" color={color} />,
                }}
            />
            <Tabs.Screen
                name = "ProfileScreen"
                options = {{
                    title: '',
                    tabBarStyle: {backgroundColor: "#131a24", borderTopWidth: 0},
                    tabBarIcon: ({ color }) => <FontAwesome5 size={28} name="user" color={color} />,
                }}
            />
        </Tabs>
    );
}