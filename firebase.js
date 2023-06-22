import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvzJNa0Sve8kdiLdIeHM9Eh1y4zTVC4Tc",
  authDomain: "laundry-mobile-app-96414.firebaseapp.com",
  projectId: "laundry-mobile-app-96414",
  storageBucket: "laundry-mobile-app-96414.appspot.com",
  messagingSenderId: "317150960126",
  appId: "1:317150960126:web:b62d0d10b2600b3af948af",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db };
