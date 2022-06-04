import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAuth } from 'firebase/auth';
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { firestoreDB } from '../config/initializeApp';

const storage = getStorage();
const auth = getAuth();

export const photoUpload = async (
    { directory },
    imagePath,
    postPhotoID,
) => {
    const user = auth.currentUser;
    const userId = auth.currentUser.uid;
    const DIR = postPhotoID ? postPhotoID : userId;
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
    postPhotoID,
    caption
) => {
    const user = auth.currentUser;
    const userId = auth.currentUser.uid;
    const DIR = postPhotoID ? postPhotoID : userId;
    const storageRef = ref(storage, `${directory}/${userId}/${DIR}`);

    if (user) return getDownloadURL(storageRef)
        .then(url => {
            const userRef = doc(firestoreDB, collection, userId);

            if (!postPhotoID) {
                updateDoc(userRef, {
                    avatar: url
                });
            } else {
                updateDoc(userRef, {
                    posts: arrayUnion(
                        {
                            post_id: Math.random().toString(15),
                            author: auth.currentUser.uid,
                            photo: url,
                            caption: caption
                        }
                    )
                });
            }

            return url;
        });
}