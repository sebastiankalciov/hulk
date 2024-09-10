import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
	apiKey: "AIzaSyCiHR6SOo4eS2r6N-AQ8PLM5zR9bg75sU4",
	authDomain: "hulk-194aa.firebaseapp.com",
	projectId: "hulk-194aa",
	storageBucket: "hulk-194aa.appspot.com",
	messagingSenderId: "529259231325",
	appId: "1:529259231325:web:4c18a4b2ca89c6906835b4",
	measurementId: "G-S94QF3PJ2E"
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
	persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

// Export the instance to use it when building your app
export {auth}