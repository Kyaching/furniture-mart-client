// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,

  //   apiKey: "AIzaSyAu_y6Fg-8DwRLgPbY_gva20qfLlA0wRnA",
  //   authDomain: "esell-furniture.firebaseapp.com",
  //   projectId: "esell-furniture",
  //   storageBucket: "esell-furniture.appspot.com",
  //   messagingSenderId: "838840973591",
  //   appId: "1:838840973591:web:58d708ee4d90bc987d1f52",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
