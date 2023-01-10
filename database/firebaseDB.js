import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDqZQmqDeCb_TNy01HBL-07asnf62R7ZMk",
  authDomain: "newspaper-81ed7.firebaseapp.com",
  projectId: "newspaper-81ed7",
  storageBucket: "newspaper-81ed7.appspot.com",
  messagingSenderId: "685957888423",
  appId: "1:685957888423:web:4912ecbd43f489a738de82",
  measurementId: "G-ZS8RR3RERY"
};


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export {firebase};