import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAf6LSy1xZJ677uEbYPvEQj3ux8Cldqu4U",
  authDomain: "waclone-bb86b.firebaseapp.com",
  databaseURL: "https://waclone-bb86b-default-rtdb.firebaseio.com",
  projectId: "waclone-bb86b",
  storageBucket: "waclone-bb86b.appspot.com",
  messagingSenderId: "149882958465",
  appId: "1:149882958465:web:b7c2dfbbe36b0b63a59380",
  measurementId: "G-94E4NDH8TF"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;