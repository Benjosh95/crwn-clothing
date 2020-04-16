import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBq8Q9tvtXY6Dnz2T2wGou3BY0S4tRA8CU",
    authDomain: "crwn-db-6d260.firebaseapp.com",
    databaseURL: "https://crwn-db-6d260.firebaseio.com",
    projectId: "crwn-db-6d260",
    storageBucket: "crwn-db-6d260.appspot.com",
    messagingSenderId: "89152247758",
    appId: "1:89152247758:web:b53a00e4419594aa6cfd9f",
    measurementId: "G-KQD152Y6W9"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore(); 

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;