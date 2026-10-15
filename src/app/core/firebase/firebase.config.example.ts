import { initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { environment } from "src/environments/environments";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

if (!environment.production) {
  connectAuthEmulator(
    auth,
    environment.emulators.auth.url
  )
}