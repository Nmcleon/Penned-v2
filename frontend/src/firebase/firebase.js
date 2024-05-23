import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDylr8JiHGVGnksyCrKsAxdb2KX7y9oTDo',
  authDomain: 'penned-2a514.firebaseapp.com',
  databaseURL: 'https://penned-2a514-default-rtdb.firebaseio.com',
  projectId: 'penned-2a514',
  storageBucket: 'penned-2a514.appspot.com',
  messagingSenderId: '233864443225',
  appId: '1:233864443225:web:2dd9ca807a17b5126a0848',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
