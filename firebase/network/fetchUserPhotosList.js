import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { getAuth } from 'firebase/auth'

const storage = getStorage();
const auth = getAuth();

export const fetchUserPhotosList = async ({ directory }) => {
    const user = auth.currentUser;
    const userId = auth.currentUser.uid;
    const userPhotoDIR = ref(storage, `${directory}/${userId}`)

    if (user) {
        return listAll(userPhotoDIR)
            .then(async (res) => {
                let photosList = Promise.all(
                    res.items.map(imgRef => {
                        return getDownloadURL(ref(storage, imgRef))
                    }));
                return photosList;
            })
            .catch(err => console.log(err));
    }
};
