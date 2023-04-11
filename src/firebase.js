import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  // Your Firebase project configuration
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export default database;
