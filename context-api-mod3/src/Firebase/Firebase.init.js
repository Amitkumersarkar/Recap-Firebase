// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDvTRqWq48_8Ew35QKsMSRgAgBMEm6GQU4",
    authDomain: "practice-projects-6c295.firebaseapp.com",
    projectId: "practice-projects-6c295",
    storageBucket: "practice-projects-6c295.firebasestorage.app",
    messagingSenderId: "365831664021",
    appId: "1:365831664021:web:00b703237dc3a6fbb8c69c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default(auth);