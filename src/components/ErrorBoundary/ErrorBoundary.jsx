import { Link, useRouteError } from "react-router-dom"
import StyledErrorBoundary from "./ErrorBoundary.Styled"

function ErrorBoundary() {
	const error = useRouteError()
	console.log(error)
	return (
		<StyledErrorBoundary>
			{/* <h1>Error</h1> */}
			<h1>Error</h1>
			<pre>
				{error.status} - {error.statusText}
			</pre>
			<Link to={"/"}>
				<button>Go Back to Tasks</button>
			</Link>
		</StyledErrorBoundary>
	)
}

export default ErrorBoundary
