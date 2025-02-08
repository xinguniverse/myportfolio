// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBd9Ptkw_Lyr_wGkEGltcJQBpU0K3X95QQ",
  authDomain: "myportfolio-64ec6.firebaseapp.com",
  projectId: "myportfolio-64ec6",
  storageBucket: "myportfolio-64ec6.firebasestorage.app",
  messagingSenderId: "396443769356",
  appId: "1:396443769356:web:65b6ad462b09f880b92c29",
  measurementId: "G-V9DGHMJ6TJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log(app)