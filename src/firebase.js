import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyAWWE2mHgJ-0OxzzRkmzV8YdhzXVRrch-A",
  authDomain: "first-app-dd4fa.firebaseapp.com",
  projectId: "first-app-dd4fa",
  storageBucket: "first-app-dd4fa.appspot.com",
  messagingSenderId: "113988323390",
  appId: "1:113988323390:web:1b9ead882cd21c56d9e96f"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app; 