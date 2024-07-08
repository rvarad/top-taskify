import StyledMain from "./Main.styled"
import { Outlet } from "react-router-dom"

function Main() {
	return (
		<StyledMain>
			<Outlet />
		</StyledMain>
	)
}

export default Main
