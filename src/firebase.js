// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA3nSJ9bdUb8e3v7VhM4rUGV1ufwi4YmIY",
    authDomain: "icope-50726.firebaseapp.com",
    projectId: "icope-50726",
    storageBucket: "icope-50726.appspot.com",
    messagingSenderId: "925317582794",
    appId: "1:925317582794:web:cb195d5294f7cf15e10933",
    measurementId: "G-7MPE52HZJV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {
    db
}