import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB8aKhBe4uia89TyZZYVc_uU6I-HgnLzhA",
  authDomain: "mercedes-project-2f5ae.firebaseapp.com",
  projectId: "mercedes-project-2f5ae",
  storageBucket: "mercedes-project-2f5ae.appspot.com",
  messagingSenderId: "835754334189",
  appId: "1:835754334189:web:eb6a8799e9e7c7299a79e4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app