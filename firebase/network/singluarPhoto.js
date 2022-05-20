import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAuth } from "firebase/auth";

const storage = getStorage();
const auth = getAuth();

export const singularPhotoUpload = async (
    { directory },
    imagePath,
    caption,
) => {
    const user = auth.currentUser;
    const userId = auth.currentUser.uid;
    const DIR = caption ? caption : userId;

    const storageRef = ref(storage, `${directory}/${userId}/${DIR}`);

    const response = await fetch(imagePath);
    const conversion = await response.blob();

    if (!imagePath) return;

    if (user) return uploadBytes(storageRef, conversion)
        .then(_ => console.log("Upload completed"))
        .catch(err => console.log(err));
};

export const singularPhotoDownload = ({ directory }) => {
    const user = auth.currentUser;
    const userId = auth.currentUser.uid;
    const storageRef = ref(storage, `${directory}/${userId}/${userId}`);

    if (user) return getDownloadURL(storageRef)
        .then(async (url) => url)
}