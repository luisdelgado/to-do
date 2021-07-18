import firebase from "firebase";
const firebaseConfig = {
  //   databaseURL: "YOUR DATABASE URL",
  apiKey: "AIzaSyB97m2HIXQxvvYKj3_GHiNgg1PU6K460i4",
  authDomain: "to-do-d5175.firebaseapp.com",
  projectId: "to-do-d5175",
  storageBucket: "to-do-d5175.appspot.com",
  messagingSenderId: "773145440205",
  appId: "1:773145440205:web:c2f99471c090c74e181e84",
};
try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}
const fire = firebase;
export default fire;
