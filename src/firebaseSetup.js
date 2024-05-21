import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { collection, doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

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
const db = getFirestore(app)

// const usersRef = collection(db, "users")

export { auth, db }


///////utils

export function authSignUpWithEmailAndPassword(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
}

export function authSignInWithEmailAndPassword(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
}

export function authSignOut() {
  return signOut(auth)
}

export function getUserInfo(uid) {
  return getDoc(doc(db, "users", uid))
}

// export function addUserInfoToDB ({uid, firstName, lastName, displayName}) {
export function addUserInfoToDB(uid, firstName, lastName, displayName) {
  return setDoc(doc(db, "users", uid), {
    firstName: firstName,
    lastName: lastName,
    displayName: displayName
  })
  // getDoc(doc(usersRef, "oFeFFb37EFPI3amV02kTlbyZy652")).then((res) => console.log(res.data()))
}