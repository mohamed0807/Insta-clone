import {initializeApp,getApp,getApps} from 'firebase/app';
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBx9RHSzMZzuZAxzOsFUrS9V1hXBZoMjKs",
    authDomain: "insta-da49e.firebaseapp.com",
    projectId: "insta-da49e",
    storageBucket: "insta-da49e.appspot.com",
    messagingSenderId: "891400875893",
    appId: "1:891400875893:web:5f02d438c0454dcf78ed3c"
  };

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {app,db,storage};