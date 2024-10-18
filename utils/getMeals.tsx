import {collection, doc, getDocs} from "@firebase/firestore";
import {firestore} from "@/firebase/config";
import {GetMealsProps} from "@/types";

export const getMeals = async ({userEmail, setMeals, setLoading}: GetMealsProps) => {
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