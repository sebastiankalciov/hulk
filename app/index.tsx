import {
    Text,
    View,
    StyleSheet,
    KeyboardAvoidingView,
    TextInput,
    Pressable,
    ActivityIndicator, StatusBar, SafeAreaView, Platform
} from "react-native";

import {useState} from "react";
import {FirebaseError} from "@firebase/util";
import {auth} from "@/firebase/config";
import {signInWithEmailAndPassword} from "@firebase/auth";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import * as Font from "expo-font";
import {Link} from "expo-router";
import {styles} from "@/styles/screens/index.styles";

export default function Index() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const [fontsLoaded] = Font.useFonts({
        'Inter-Bold': require('@/assets/fonts/Inter/static/Inter-Bold.ttf'),
        'Inter-ExtraBold': require('@/assets/fonts/Inter/static/Inter-ExtraBold.ttf'),
        'Inter-Regular': require('@/assets/fonts/Inter/static/Inter-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return <View/>
    }

    const signIn = async () => {
        setLoading(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);

        } catch (err: any) {
            const error = err as FirebaseError;
            alert('Failed logging into the account: ' + error.message);

        } finally {
            setLoading(false);
        }
    }

    return (
        <SafeAreaView style = {styles.container} >

            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

            <Text style = {styles.title}>Welcome back to <Text style = {{color: "#f0cd53", fontSize: 35}}>Hulk</Text></Text>
            <Text style = {styles.subtitle}>The calorie tracker</Text>
            <Text style = {styles.textIntro}>Build your meal and use gamma rays to see its power</Text>

            <View style = {styles.inputContainer}>
                <TextInput
                    style = {styles.input}
                    value = {email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    placeholder="Enter your email"
                    placeholderTextColor="#f7f7f7"
                />
                <MaterialIcons style={styles.icon} name="email" size={20} />
            </View>

            <View style = {styles.inputContainer}>
                <TextInput
                    style = {styles.input}
                    value = {password}
                    onChangeText={setPassword}
                    secureTextEntry
                    placeholder="Enter your password"
                    placeholderTextColor="#f7f7f7"
                />
                <MaterialIcons style={styles.icon} name="password" size={20} />
            </View>

                {loading ? (
                    <ActivityIndicator size = 'small' style = {{margin: 20}}/>
                ) : (
                    <>
                        <Pressable style = {styles.signInButton} onPress={signIn}><Text style = {styles.signInButtonText}>Sign in</Text></Pressable>
                        <View style={styles.createAccountContainer}>
                            <Text style={styles.createAccountText}>
                                Don't have an account?{' '}
                                <Link href = "/SignUpScreen">
                                    <Pressable>
                                        <Text style={styles.signUpText}>Sign up</Text>
                                    </Pressable>
                                </Link>
                            </Text>
                        </View>
                    </>
                )}

            </KeyboardAvoidingView>
        </SafeAreaView>

    );
}
