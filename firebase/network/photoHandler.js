import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAuth } from 'firebase/auth';
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { firestoreDB } from '../config/initializeApp';

const storage = getStorage();
const auth = getAuth();

export const photoUpload = async (
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
        .then(_ => console.log("Upload Complete"))
        .catch(err => console.log(err));
};

export const photoDownload = ({ directory }) => {
    const user = auth.currentUser;
    const userId = auth.currentUser.uid;
    const storageRef = ref(storage, `${directory}/${userId}/${userId}`);

    if (user) return getDownloadURL(storageRef)
        .then(async (url) => url)
}

export const createUserPost = (
    { directory },
    collection,
    caption,
) => {
    const user = auth.currentUser;
    const userId = auth.currentUser.uid;
    const DIR = caption ? caption : userId;
    const storageRef = ref(storage, `${directory}/${userId}/${DIR}`);

    if (user) return getDownloadURL(storageRef)
        .then(url => {
            const postRef = doc(firestoreDB, collection, userId);

            if (!caption) {
                updateDoc(postRef, {
                    avatar: url
                });
            } else {
                updateDoc(postRef, {
                    posts: arrayUnion(url)
                });
            }

            return url;
        });
}