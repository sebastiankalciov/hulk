import {addDoc, collection, doc} from "@firebase/firestore";
import {firestore} from "@/firebase/config";

export const addMealInDatabase = async (email: string, meal: any) => {
    try {
        const userReference = doc(firestore, "users", email);
        const mealsCollection = collection(userReference, "meals");

        await addDoc(mealsCollection, meal);
        console.log("masa adaugata cu succes esti top")
    } catch(error) {
        console.log("eroare cand adaugi masa: ", error)
    }
}