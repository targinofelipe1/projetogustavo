// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: "AIzaSyDz79y9I5t4YF0gP3-cRTjdaXQ5gOx-lV8",
    authDomain: "pweb-projeto-8608b.firebaseapp.com",
    projectId: "pweb-projeto-8608b",
    storageBucket: "pweb-projeto-8608b.appspot.com",
    messagingSenderId: "143574525135",
    appId: "1:143574525135:web:391cb9f8d49a8e086c03ba",
    measurementId: "G-S15TRPB5LZ"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);