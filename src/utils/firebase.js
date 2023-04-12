import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import "firebase/compat/storage";

//Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAG2Pa3A3RAi8WCwhcosQ4LM1whE27PQco",
    authDomain: "redsocial-d0461.firebaseapp.com",
    projectId: "redsocial-d0461",
    storageBucket: "redsocial-d0461.appspot.com",
    messagingSenderId: "580487213697",
    appId: "1:580487213697:web:b4ed0ffe15478f85841380"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  
  //Utiles
  const auth = firebase.auth();
  
  //Exportaciones
  export {auth};