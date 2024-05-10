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
		</Route>
	)
)

function App() {
	return <RouterProvider router={router} />
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
