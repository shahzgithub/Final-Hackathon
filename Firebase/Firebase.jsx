// import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCUFfKxz83HKjyOEyXPdPrSVr6MH71jDSo",
  authDomain: "final-test-97db7.firebaseapp.com",
  projectId: "final-test-97db7",
  storageBucket: "final-test-97db7.appspot.com",
  messagingSenderId: "18072493005",
  appId: "1:18072493005:web:cf6549509668ffabb7c284"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

