import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,

  } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBLm-iwxcFAu0n-AsHp5td9pyAzH1ofejI",
  authDomain: "shoppah-f3c71.firebaseapp.com",
  projectId: "shoppah-f3c71",
  storageBucket: "shoppah-f3c71.appspot.com",
  messagingSenderId: "905845568530",
  appId: "1:905845568530:web:a2f8e4bf82c532d89d54cb",
  measurementId: "G-VTGQL6E427"
};

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore();

export const auth = getAuth();

export const createUserDocumentFromAuth = async (
  userAuth, 
  additionalInformation = {}
  ) => {
  if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);
    // user data does not exist
    // create / set the documen with the data from userAuth in my collection

    if(!userSnapshot.exists()) {
      const { email, password } = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          email,
          password,
          createdAt,
          ...additionalInformation,
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }

    // user data exists
    // return userDocRef

    return userDocRef;
  };

export const createAuthUserWithEmailAndPassword = async (email, password) => {

  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password)
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {

  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password)
};