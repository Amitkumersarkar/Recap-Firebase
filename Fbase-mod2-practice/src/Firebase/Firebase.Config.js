// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDDsmppYVNBpH9zfwxR-MpHwGErfxcKAZE",
    authDomain: "fbase-auth-mod-2.firebaseapp.com",
    projectId: "fbase-auth-mod-2",
    storageBucket: "fbase-auth-mod-2.firebasestorage.app",
    messagingSenderId: "974607784275",
    appId: "1:974607784275:web:bc0a7cae6fb376108ea9a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;