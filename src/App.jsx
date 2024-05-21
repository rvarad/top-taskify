import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Footer from "./components/Footer"
import GlobalStyles from "./globalstyles/GlobalStyles"
import { ThemeProvider } from "styled-components"
import { useEffect, useState } from "react"
import { darkMode, lightMode } from "./globalstyles/ThemeColors"
import useDeviceTheme from "./customHooks/useDeviceTheme"
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom"
import Layout from "./components/Layout"
import Tasks from "./pages/Tasks/Tasks"
import Notes from "./pages/Notes/Notes"
import AccountPage from "./pages/AccountPage/AccountPage"
import SignIn from "./pages/SignIn/SignIn"
import { loader as accountPageLoader } from "./pages/AccountPage/AccountPage"
import { loader as signInLoader } from "./pages/SignIn/SignIn"
import { AuthContextProvider } from "./context/AuthContext"
import SignUp from "./pages/SignUp/SignUp"

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<Layout />}>
			<Route
				index
				element={<Tasks />}
			/>
			<Route
				path="notes"
				element={<Notes />}
			/>
			<Route
				path="signin"
				element={<SignIn />}
				loader={signInLoader}
				// action={signInAction}
			/>
			<Route
				path="account"
				element={<AccountPage />}
				loader={accountPageLoader}
			/>
			<Route
				path="signup"
				element={<SignUp />}
			/>
		</Route>
	)
)

function App() {
	return (
		<AuthContextProvider>
			<RouterProvider router={router} />
		</AuthContextProvider>
	)
	// const prefersDarkTheme = useDeviceTheme()
	// const [theme, setTheme] = useState(
	// 	JSON.parse(localStorage.getItem("theme")) || "light"
	// )

	// function setNewTheme(newTheme) {
	// 	setTheme(newTheme)
	// 	localStorage.setItem("theme", JSON.stringify(newTheme))
	// }

	// return (
	// 	<ThemeProvider
	// 		theme={theme === "dark" || prefersDarkTheme ? darkMode : lightMode}
	// 	>
	// 		<>
	// 			<GlobalStyles />
	// 			<Header
	// 				theme={theme}
	// 				setTheme={setNewTheme}
	// 			/>
	// 			<Main />
	// 			<Footer />
	// 		</>
	// 	</ThemeProvider>
	// )
}

export default App
