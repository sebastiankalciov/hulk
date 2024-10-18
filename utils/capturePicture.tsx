
type TakePictureProps = {
    referenceToImage: React.MutableRefObject<null>
    setImageUri: React.Dispatch<React.SetStateAction<null>>;
};
export const capturePicture = async ({referenceToImage, setImageUri}: TakePictureProps) => {

    // @ts-ignore
    const photo = await referenceToImage.current.takePictureAsync();
    setImageUri(photo.uri);

}