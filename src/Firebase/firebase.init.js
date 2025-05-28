// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjiV73Bp4gDhuzGMd7HOZZtuGcZQuoIdo",
  authDomain: "parcelo-project.firebaseapp.com",
  projectId: "parcelo-project",
  storageBucket: "parcelo-project.firebasestorage.app",
  messagingSenderId: "46120115910",
  appId: "1:46120115910:web:eddad61544ef17aaa4c1c7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
