import {getDownloadURL, ref, uploadBytes} from "@firebase/storage";
import {auth, storage} from "@/firebase/config";

export const getFirestoreImageURL = async (userEmail: string, imageURI: any) => {
    try {
        const response = await fetch(imageURI);
        const blob = await response.blob();

        const referenceToImage = ref(storage,  `users/${userEmail}/meals/1/image.jpg`);

        const result = await uploadBytes(referenceToImage, blob);
        const url = await getDownloadURL(result.ref);

        return url;

    } catch (error) {
        console.log("eroare la fetch firestore image url: ", error);
    }
}