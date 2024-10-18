import {collection, doc, getDocs} from "@firebase/firestore";
import {firestore} from "@/firebase/config";

interface FetchMealsProps {
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
        console.log("Error when retrieving meals: ", error);
    } finally {
        setLoading(false);
    }
}