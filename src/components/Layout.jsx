import { useState } from "react"
import useDeviceTheme from "../customHooks/useDeviceTheme"
import { ThemeProvider } from "styled-components"
import { darkMode, lightMode } from "../globalstyles/ThemeColors"
import GlobalStyles from "../globalstyles/GlobalStyles"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import Main from "./Main/Main"

function Layout() {
	const prefersDarkTheme = useDeviceTheme()
	const [theme, setTheme] = useState(
		JSON.parse(localStorage.getItem("theme")) || "light"
	)

	function setNewTheme(newTheme) {
		setTheme(newTheme)
		localStorage.setItem("theme", JSON.stringify(newTheme))
	}
	return (
		// <div className="site-wrapper">
		<ThemeProvider
			theme={
				theme === "dark"
					? darkMode
					: theme === "device" && prefersDarkTheme
					? darkMode
					: lightMode
			}
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
		// </div>
	)
}

export default Layout
