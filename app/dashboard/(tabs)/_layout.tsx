import {View} from "react-native";
import {Tabs} from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {Feather, FontAwesome, FontAwesome5, MaterialCommunityIcons} from "@expo/vector-icons";

export default function TabLayout() {
    return (
        <Tabs screenOptions = {{headerShown: false, tabBarActiveTintColor: "#f0cd53" }}>
            <Tabs.Screen
                name = "HomeScreen"
                options = {{
                    title: 'Dashboard',
                    tabBarStyle: {backgroundColor: "#131a24", borderTopWidth: 0},
                    tabBarIcon: ({ color }) => <Feather size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name = "MealsScreen"
                options = {{
                    title: 'Meals',
                    tabBarStyle: {backgroundColor: "#131a24", borderTopWidth: 0},
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons size={28} name="food" color={color} />,
                }}
            />
            <Tabs.Screen
                name = "CameraScreen"
                options = {{
                    title: 'Camera',
                    tabBarStyle: {backgroundColor: "#131a24", borderTopWidth: 0},
                    tabBarIcon: ({ color }) => <FontAwesome5 size={28} name="camera" color={color} />,
                }}
            />
            <Tabs.Screen
                name = "ProfileScreen"
                options = {{
                    title: 'Profile',
                    tabBarStyle: {backgroundColor: "#131a24", borderTopWidth: 0},
                    tabBarIcon: ({ color }) => <FontAwesome5 size={28} name="user" color={color} />,
                }}
            />
        </Tabs>
    );
}