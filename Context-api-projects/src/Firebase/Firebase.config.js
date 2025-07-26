// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAMVKKfn9rFc5IAFbk2JTcTVyNYIKWeXds",
    authDomain: "private-route-mod3.firebaseapp.com",
    projectId: "private-route-mod3",
    storageBucket: "private-route-mod3.firebasestorage.app",
    messagingSenderId: "236260502636",
    appId: "1:236260502636:web:873beb7ebc1e8357757c49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;