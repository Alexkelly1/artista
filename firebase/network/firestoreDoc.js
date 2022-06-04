import { getAuth } from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { firestoreDB } from '../config/initializeApp';

const auth = getAuth();

export const updateFireStoreDoc = (collection, data) => {
    const userId = auth.currentUser.uid;
    const userRef = doc(firestoreDB, collection, userId);

    updateDoc(userRef, data);
}

export const uploadFirestoreDoc = (directory, data) => {
    const userId = auth.currentUser.uid;
    const docRef = doc(firestoreDB, directory, userId);

    setDoc(docRef, data);
}

export const fetchFirestoreDoc = async (directory) => {
    const userId = auth.currentUser.uid;
    const docRef = doc(firestoreDB, directory, userId);
    const snapshot = await getDoc(docRef);

    if (snapshot.exists()) {
        const user = snapshot.data();

        return user;
    } else {
        console.log("No document found");
        return;
    }
}