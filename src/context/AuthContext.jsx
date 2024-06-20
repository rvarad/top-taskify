import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth"
import { createContext, useContext, useEffect, useState } from "react"
import { auth, db } from "../firebaseSetup"
import { doc, getDoc } from "firebase/firestore"

const AuthContext = createContext()

function AuthContextProvider({ children }) {
	const [currentUser, setCurrentUser] = useState()
	const [loading, setLoading] = useState(true)
	const [profileImg, setProfileImg] = useState()

	function authSignUpWithEmailAndPassword(email, password) {
		return createUserWithEmailAndPassword(auth, email, password)
	}

	function authSignInWithEmailAndPassword(email, password) {
		return signInWithEmailAndPassword(auth, email, password)
	}

	function authSignOut() {
		return signOut(auth)
	}

	function getUserInfoFromDB(uid) {
		return getDoc(doc(db, "users", uid))
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async (user) => {
			setLoading(false)
			if (user) {
				setCurrentUser(user)
				sessionStorage.setItem(
					"userAccessToken",
					JSON.stringify(user.accessToken)
				)
				setProfileImg(user.photoURL)
			} else {
				sessionStorage.removeItem("userAccessToken")
				setCurrentUser(null)
			}
		})

		return unsubscribe
	}, [])

	const value = {
		currentUser,
		profileImg,
		setProfileImg,
		authSignInWithEmailAndPassword,
		authSignUpWithEmailAndPassword,
		authSignOut,
		getUserInfoFromDB,
	}

	return (
		!loading && (
			<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
		)
	)
}

function useAuthContext() {
	return useContext(AuthContext)
}

export { AuthContextProvider, useAuthContext }
