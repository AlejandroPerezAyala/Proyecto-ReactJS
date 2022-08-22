// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from  "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4C02AbZuapWMFVlc8MlP34NtkHSqN5oo",
  authDomain: "melisashoes-452ad.firebaseapp.com",
  projectId: "melisashoes-452ad",
  storageBucket: "melisashoes-452ad.appspot.com",
  messagingSenderId: "603021772053",
  appId: "1:603021772053:web:dbaaf47b2ccc7da942951c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db