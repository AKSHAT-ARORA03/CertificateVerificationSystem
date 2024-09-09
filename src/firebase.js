import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsf5Zq373hu0NUKtRE34OJiSQuznL-Dgc",
  authDomain: "certificate-verification-sys.firebaseapp.com",
  projectId: "certificate-verification-sys",
  storageBucket: "certificate-verification-sys.appspot.com",
  messagingSenderId: "663400284770",
  appId: "1:663400284770:web:79076fbcf89a5e12d8873b",
  measurementId: "G-CJJ2KWHBVB"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();