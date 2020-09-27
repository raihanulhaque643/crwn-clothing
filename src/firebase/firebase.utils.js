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
  };

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;