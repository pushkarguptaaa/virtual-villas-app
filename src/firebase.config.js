import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDBgLqp8xxGV-kb4Vbbxv199392QoYBZI",
  authDomain: "virtual-villas-app.firebaseapp.com",
  projectId: "virtual-villas-app",
  storageBucket: "virtual-villas-app.appspot.com",
  messagingSenderId: "78726273959",
  appId: "1:78726273959:web:9a6062d85f48eeb662b482"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();