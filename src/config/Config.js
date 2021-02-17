import * as firebase from './firebase';
import 'firebase/auth'; 
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDfRqG6kvx0BP3Woma8CK0JRtPqULBqBcQ",
    authDomain: "fir-bbd56.firebaseapp.com",
    projectId: "fir-bbd56",
    storageBucket: "fir-bbd56.appspot.com",
    messagingSenderId: "73281543052",
    appId: "1:73281543052:web:bc9603de69b87776c514a9"
  };

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
  const storage = firebase.firestorage();
  export {auth,db,storage};