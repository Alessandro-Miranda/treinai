// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: 'XXXXXXXXXXXXXXXXXXXXX',
  authDomain: 'app-name.firebaseapp.com',
  projectId: 'project_id',
  storageBucket: 'storage_bucket',
  messagingSenderId: 'XXXXXXXX',
  appId: 'app_id',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
