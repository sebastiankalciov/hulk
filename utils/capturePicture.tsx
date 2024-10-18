import {CapturePictureProps} from "@/types";

export const capturePicture = async ({cameraReference, setPicture}: CapturePictureProps) => {
    if (cameraReference) {
        const picture = await cameraReference.current?.takePictureAsync();
        setPicture(picture!.uri);
    }
}