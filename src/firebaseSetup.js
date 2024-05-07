import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyABV2ye1IeJrI3N8_JlFiVBywW-eOq8jzU",
  authDomain: "taskify-4ec6e.firebaseapp.com",
  projectId: "taskify-4ec6e",
  storageBucket: "taskify-4ec6e.appspot.com",
  messagingSenderId: "960015081085",
  appId: "1:960015081085:web:446e3e92f7787afc9c9b14"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)