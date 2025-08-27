import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Optionally import the services that you want to use
// import {...} from 'firebase/auth';
// import {...} from 'firebase/database';
// import {...} from 'firebase/firestore';
// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCmg5kdOoT4hXFehf3X0qEXG1C0-mjD70k",
  authDomain: "app-react-highsanity.firebaseapp.com",
  projectId: "app-react-highsanity",
  storageBucket: "app-react-highsanity.firebasestorage.app",
  messagingSenderId: "1025754871047",
  appId: "1:1025754871047:web:f8d88c770a55036c9f81a2"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export {auth};