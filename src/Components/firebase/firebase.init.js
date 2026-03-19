// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBBJLJX3TFVPwSeBzhbtMzidYPo8qP50xk",
    authDomain: "forth-firebase.firebaseapp.com",
    projectId: "forth-firebase",
    storageBucket: "forth-firebase.firebasestorage.app",
    messagingSenderId: "189820623192",
    appId: "1:189820623192:web:bc8b53f38859926032ad2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);