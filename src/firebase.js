import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC4nD1fzzoMhhUsPEavL9yEMd_eow0ETQs",
  authDomain: "hippam-balak-db.firebaseapp.com",
  databaseURL: "https://hippam-balak-db-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hippam-balak-db",
  storageBucket: "hippam-balak-db.appspot.com",
  messagingSenderId: "548003184984",
  appId: "1:548003184984:web:43e04b06a6e8e3fb16e52d"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;