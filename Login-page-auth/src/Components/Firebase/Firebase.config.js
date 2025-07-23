// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBv94eHM6y5a65RrzwylmdXm-vs_awLhXA",
    authDomain: "login-auth-66acd.firebaseapp.com",
    projectId: "login-auth-66acd",
    storageBucket: "login-auth-66acd.firebasestorage.app",
    messagingSenderId: "965239115956",
    appId: "1:965239115956:web:8007c0feedc8db7b8e87e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;