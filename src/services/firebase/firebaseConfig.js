import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: procces.env.REACT_APP_apiKey,
    authDomain: procces.env.REACT_APP_authDomain,
    projectId: procces.env.REACT_APP_projectId,
    storageBucket: procces.env.REACT_APP_storageBucket,
    messagingSenderId: procces.env.REACT_APP_messagingSenderId,
    appId: procces.env.REACT_APP_appId,
    measurementId: procces.env.REACT_APP_measurementId
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);