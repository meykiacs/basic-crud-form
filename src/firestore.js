// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs } from "firebase/firestore/lite"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhgMIpPqh19V4wyWLs3OLDl_Iq8VNvOm4",
  authDomain: "form-crud-sample.firebaseapp.com",
  projectId: "form-crud-sample",
  storageBucket: "form-crud-sample.appspot.com",
  messagingSenderId: "916696022164",
  appId: "1:916696022164:web:5e2e300dc3d834ae8b4881",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app);
