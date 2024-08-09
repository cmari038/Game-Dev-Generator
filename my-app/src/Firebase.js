// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXBNm-nmQegZHiaehhxmZ7Po5UOl3ZaAQ",
  authDomain: "game-dev-generator.firebaseapp.com",
  projectId: "game-dev-generator",
  storageBucket: "game-dev-generator.appspot.com",
  messagingSenderId: "1075821919693",
  appId: "1:1075821919693:web:2b4179edae12af7c2d1884",
  measurementId: "G-81VWGMME9W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;

/*

    import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

    
import { signInWithEmailAndPassword } from "firebase/auth";

//const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  }); */