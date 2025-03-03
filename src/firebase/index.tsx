// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "leevyy-b7ab7.firebaseapp.com",
    projectId: "leevyy-b7ab7",
    storageBucket: "leevyy-b7ab7.firebasestorage.app",
    messagingSenderId: "726958400339",
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: "G-25HRJ58MTK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
const storageRef = ref(storage);

export {
    storage, storageRef
}
