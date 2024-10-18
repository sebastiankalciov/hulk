import {Stack, useRouter, useSegments} from "expo-router";
import {useEffect, useState} from "react";
import {auth} from "@/firebase/config";

import {onAuthStateChanged, User} from "@firebase/auth";
import {ActivityIndicator, View} from "react-native";

export default function RootLayout() {
    const [initializing, setInitiliazing] = useState(true);
    const [user, setUser] = useState<User| null>();

    const router = useRouter();
    const segments = useSegments();

    const authStateChanged = (user: User | null) => {
        console.log('authStateChanged ', user);
        setUser(user);
        if (initializing) setInitiliazing(false);
    }

    useEffect(() => {
        const subscriber = onAuthStateChanged(auth, authStateChanged);
        return subscriber;
    }, []);

    useEffect(() => {
        if (initializing) return;

        const isInAuthDirectory = segments[0] === 'dashboard';

        if (user && !isInAuthDirectory) {
            router.replace('dashboard/HomeScreen');
        } else if (!user && isInAuthDirectory){
            router.replace('/');
        }
    }, [user, initializing]);

    if (initializing)
        return (
            <View>
                <ActivityIndicator size = "large"/>
            </View>
        )

    return (

        <Stack screenOptions = {{headerShown: false}}>
            <Stack.Screen name = "index"/>
        </Stack>

    )
}