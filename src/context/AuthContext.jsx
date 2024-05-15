import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth"
import { createContext, useContext, useEffect, useState } from "react"
import { auth } from "../firebaseSetup"

const AuthContext = createContext()

function AuthContextProvider({ children }) {
	const [currentUser, setCurrentUser] = useState()

	// function authSignUpWithEmailAndPassword(email, password) { }

	// function authSignInWithEmailAndPassword(email, password) {
	//   return signInWithEmailAndPassword(auth, email, password)
	// }

	function authSignOut() {}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user)
		})

		return unsubscribe
	}, [])

	const value = {
		currentUser,
		// authSignInWithEmailAndPassword
	}

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

function useAuthContext() {
	return useContext(AuthContext)
}

export { AuthContextProvider, useAuthContext }
