import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC1_ajj56nSde6IQv2fS0EtutXAZ4Nk9_s",
    authDomain: "test-react-5b22c.firebaseapp.com",
    projectId: "test-react-5b22c",
    storageBucket: "test-react-5b22c.appspot.com",
    messagingSenderId: "246361156712",
    appId: "1:246361156712:web:52d4eba024d01b43801fdd"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const authUsr = getAuth(app)