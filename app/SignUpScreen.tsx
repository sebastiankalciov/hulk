import {Text, View, StyleSheet, KeyboardAvoidingView, TextInput, Pressable, ActivityIndicator, SafeAreaView} from "react-native";
import {useState} from "react";
import {FirebaseError} from "@firebase/util";
import {auth, firestore} from "@/firebase/config";
import {doc, setDoc} from "@firebase/firestore";
import {createUserWithEmailAndPassword} from "@firebase/auth";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import * as Font from "expo-font";
import {Link} from "expo-router";
import {styles} from "@/styles/screens/SignUpScreen.styles";

export default function SignUpScreen() {
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
    const addUser = async (email: string)  => {
        try {
            await setDoc(
                doc(
                    firestore,
                    "users",
                    email
                ), {
                }
            )
            console.log("User added successfully");
        } catch(error) {
            console.log("Error when adding user: ", error);
        }
    }
    const signUp = async () => {
        setLoading(true);
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            await addUser(email);

        } catch (err: any) {
            const error = err as FirebaseError;
            alert('Failed creating an account: ' + error.message);

        } finally {
            setLoading(false);
        }
    }

    return (
        <SafeAreaView style = {styles.container} >

            <KeyboardAvoidingView behavior = "padding">
                <Text style = {styles.title}>Welcome to <Text style = {{color: "#f0cd53", fontSize: 35}}>Hulk</Text></Text>
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
                        <Pressable style = {styles.signInButton} onPress={signUp}><Text style = {styles.signInButtonText}>Create an account</Text></Pressable>
                        <View style={styles.createAccountContainer}>
                            <Text style={styles.createAccountText}>
                                Already have an account?{' '}
                                <Link push href = "/">
                                    <Pressable>
                                        <Text style={styles.signUpText}>Sign in</Text>
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
