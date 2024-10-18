import {addDoc, collection, doc} from "@firebase/firestore";
import {firestore} from "@/firebase/config";
import {MealProps} from "@/types";

export const addMealToDatabase = async (email: string, meal: MealProps) => {
    try {
        const userReference = doc(firestore, "users", email);
        const mealsCollection = collection(userReference, "meals");

        await addDoc(mealsCollection, meal);
        console.log("Meal added successfully!")
    } catch(error) {
        console.log("Error when adding meal in db: ", error)
    }
}