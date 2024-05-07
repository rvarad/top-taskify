import { useEffect, useState } from "react"

function useDeviceTheme() {
  const currentDeviceTheme = () => (window.matchMedia(
    "(prefers-color-scheme: dark)").matches)

  const [prefersDarkTheme, setPrefersDarkTheme] = useState(currentDeviceTheme())

  const eventListener = e => setPrefersDarkTheme(e.matches)

  useEffect(() => {
    const darkThemeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    darkThemeMediaQuery.addEventListener("change", eventListener)
    return () => darkThemeMediaQuery.removeEventListener("change", eventListener)
  }, [])

  return prefersDarkTheme
}

export default useDeviceTheme