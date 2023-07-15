// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBApVsgW2fcz3aCVX4lsDLkCg_S13ZH9As",
  authDomain: "boighor-8ed71.firebaseapp.com",
  projectId: "boighor-8ed71",
  storageBucket: "boighor-8ed71.appspot.com",
  messagingSenderId: "732393353073",
  appId: "1:732393353073:web:65012a025b3f21c2ed90d0"
};

// Initialize Firebase
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
const app:FirebaseApp = initializeApp(firebaseConfig);

export default app;