import {getDownloadURL, ref, uploadBytes} from "@firebase/storage";
import {storage} from "@/firebase/config";

export const getFirestoreImageURL = async (userEmail: string, imageURI: string) => {
    try {
        const response = await fetch(imageURI);
        const blob = await response.blob();

        const referenceToImage = ref(storage,  `users/${userEmail}/meals/1/image.jpg`);

        const result = await uploadBytes(referenceToImage, blob);
        const url = await getDownloadURL(result.ref);

        return url;

    } catch (error) {
        console.log("Error when fetching firestore image url: ", error);
    }
}