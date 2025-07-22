// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyARtYPK0nYT0SJYqVYalzeRuRjhoqNHawU",
    authDomain: "recap-fbase-mod1.firebaseapp.com",
    projectId: "recap-fbase-mod1",
    storageBucket: "recap-fbase-mod1.firebasestorage.app",
    messagingSenderId: "580759202941",
    appId: "1:580759202941:web:64ba4b48f2ead40a9f9514"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;