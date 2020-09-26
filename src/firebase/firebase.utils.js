import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCRlEb6xEMt666fN-Uhx_ySqbuBWueURPs",
    authDomain: "crwn-db-722e8.firebaseapp.com",
    databaseURL: "https://crwn-db-722e8.firebaseio.com",
    projectId: "crwn-db-722e8",
    storageBucket: "crwn-db-722e8.appspot.com",
    messagingSenderId: "705883510491",
    appId: "1:705883510491:web:265dcee6f662325d851efe",
    measurementId: "G-8D0GTE4D2Q"
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;