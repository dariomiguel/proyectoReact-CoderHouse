import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC3Vm2IvU2SdJoL5tI7c2L77gRKlSmo72g",
    authDomain: "preentrega2miguel.firebaseapp.com",
    projectId: "preentrega2miguel",
    storageBucket: "preentrega2miguel.appspot.com",
    messagingSenderId: "158330658000",
    appId: "1:158330658000:web:2418029ab3e95092bc12d5",
    measurementId: "G-Y525DCTHJY"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);