import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Footer from "./components/Footer"
import GlobalStyles from "./globalstyles/GlobalStyles"
import { ThemeProvider } from "styled-components"
import { useEffect, useState } from "react"
import { darkMode, lightMode } from "./globalstyles/ThemeColors"
import useDeviceTheme from "./customHooks/useDeviceTheme"

function App() {
	const prefersDarkTheme = useDeviceTheme()
	const [theme, setTheme] = useState(
		JSON.parse(localStorage.getItem("theme")) || "light"
	)

	function setNewTheme(newTheme) {
		setTheme(newTheme)
		localStorage.setItem("theme", JSON.stringify(newTheme))
	}

	// function mode() {
	// 	if (theme === "light") return "light"
	// 	if (theme === "dark") return "dark"
	// 	if (theme === "device") {
	// 		return window.matchMedia("(prefers-color-scheme: dark)").matches
	// 			? "dark"
	// 			: "light"
	// 	}
	// }

	return (
		<ThemeProvider
			theme={theme === "dark" || prefersDarkTheme ? darkMode : lightMode}
		>
			<>
				<GlobalStyles />
				<Header
					theme={theme}
					setTheme={setNewTheme}
				/>
				<Main />
				<Footer />
			</>
		</ThemeProvider>
	)
}

export default App
