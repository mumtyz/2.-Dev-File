import app from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


//  API KEYS Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDSfMLWAKAWU_9t45L_uhPSoB9mSn2-JlU",
  authDomain: "mumtazah.firebaseapp.com",
  projectId: "mumtazah",
  storageBucket: "mumtazah.appspot.com",
  messagingSenderId: "395024982451",
  appId: "1:395024982451:web:2e28b00fe5887ccef0ebc6",
  measurementId: "G-VG045WDNHN"
  //- keyy
};

const firebase = app.initializeApp(firebaseConfig);
const firestore = app.firestore();
const auth = app.auth();

export { firebase, firestore, auth, app };
