// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth} from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBo4abS8kBopfz70BtglLkA9za75PU0ZU",
  authDomain: "plivo-project.firebaseapp.com",
  projectId: "plivo-project",
  storageBucket: "plivo-project.appspot.com",
  messagingSenderId: "239359888953",
  appId: "1:239359888953:web:365e879596be82a0da07e8",
  measurementId: "G-D4FKGLX39X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app); 

