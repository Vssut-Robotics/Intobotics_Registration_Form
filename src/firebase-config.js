import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDmCMf761VUkrrWn4hM8lfOabOs88z2rgM",
  authDomain: "rs-registration-4897f.firebaseapp.com",
  projectId: "rs-registration-4897f",
  storageBucket: "rs-registration-4897f.appspot.com",
  messagingSenderId: "887986914328",
  appId: "1:887986914328:web:ff2988fe76754c07d66f6d",
};


const app = initializeApp(firebaseConfig);

export const db= getFirestore(app)