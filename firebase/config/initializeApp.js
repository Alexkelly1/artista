import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import Constants from 'expo-constants';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: Constants.manifest?.extra?.firebaseApiKey,
    authDomain: Constants.manifest?.extra?.firebaseAuthDomain,
    databaseURL: Constants.manifest?.extra?.firebaseDatabaseUrl,
    projectId: Constants.manifest?.extra?.firebaseProjectId,
    storageBucket: Constants.manifest?.extra?.firebaseStorageBucket,
    messagingSenderId: Constants.manifest?.extra?.firebaseMessagingSenderId,
    appId: Constants.manifest?.extra?.firebaseAppId,
    measurementId: Constants.manifest?.extra?.firebaseMeasurementId
};
const app = initializeApp(firebaseConfig);

export const firestoreDB = getFirestore(app);

export default app;