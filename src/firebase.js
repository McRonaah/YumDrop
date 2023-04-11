import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";
// import database from "./firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDr7s7OIivPPCh6mJ7D69Pn2yT5iPpB2Ow",
  authDomain: "food-delivery-app-9e7fa.firebaseapp.com",
  databaseURL: "https://food-delivery-app-9e7fa-default-rtdb.firebaseio.com",
  projectId: "food-delivery-app-9e7fa",
  storageBucket: "food-delivery-app-9e7fa.appspot.com",
  messagingSenderId: "696861491754",
  appId: "1:696861491754:web:a468282247acbaa08c7953"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app)

export default database;
