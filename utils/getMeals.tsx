import {collection, doc, getDocs, orderBy} from "@firebase/firestore";
import {auth, firestore} from "@/firebase/config";
import {query} from "@firebase/database";

interface Meal {
    id: string;
}
type FetchMealsProps = {
    userEmail: string;
    setMeals: React.Dispatch<React.SetStateAction<never[]>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};
export const getMeals = async ({userEmail, setMeals, setLoading}: FetchMealsProps) => {
    try {
        const userReference = doc(firestore, "users", userEmail);

        const mealsCollection = collection(userReference, "meals");

        const querySnapshot = await getDocs(mealsCollection)

        const meals = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));

        // @ts-ignore
        setMeals(meals);
    } catch (error) {
        console.log("problema la getMeals: ", error);
    } finally {
        setLoading(false);
    }
}