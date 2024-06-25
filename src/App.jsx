import { Suspense, lazy } from "react"
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom"
import Layout from "./components/Layout"
// import Tasks from "./pages/Tasks/Tasks"
const LazyTasks = lazy(() => import("./pages/Tasks/Tasks"))
// import Notes from "./pages/Notes/Notes"
const LazyNotes = lazy(() => import("./pages/Notes/Notes"))
// import AccountPage from "./pages/AccountPage/AccountPage"
const LazyAccountPage = lazy(() => import("./pages/AccountPage/AccountPage"))
// import SignIn from "./pages/SignIn/SignIn"
const LazySignIn = lazy(() => import("./pages/SignIn/SignIn"))
import { loader as accountPageLoader } from "./pages/AccountPage/AccountPage"
import { loader as signInLoader } from "./pages/SignIn/SignIn"
import { loader as notesLoader } from "./pages/Notes/Notes"
import { AuthContextProvider } from "./context/AuthContext"
// import SignUp from "./pages/SignUp/SignUp"
const LazySignUp = lazy(() => import("./pages/SignUp/SignUp"))
import { TasksContextProvider } from "./context/TasksContext"
import { NotesContextProvider } from "./context/NotesContext"
import Loading from "./components/Loading/Loading"
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary"

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			element={<Layout />}
			errorElement={<ErrorBoundary />}
		>
			<Route
				index
				element={
					<Suspense fallback={<Loading />}>
						<TasksContextProvider>
							<LazyTasks />
						</TasksContextProvider>
					</Suspense>
				}
			/>
			<Route
				path="notes"
				element={
					<Suspense fallback={<Loading />}>
						<NotesContextProvider>
							<LazyNotes />
						</NotesContextProvider>
					</Suspense>
				}
				loader={notesLoader}
			/>
			<Route
				path="signin"
				element={<LazySignIn />}
				loader={signInLoader}
				// action={signInAction}
			/>
			<Route
				path="account"
				element={<LazyAccountPage />}
				loader={accountPageLoader}
			/>
			<Route
				path="signup"
				element={<LazySignUp />}
			/>
		</Route>
	)
)

function App() {
	return (
		<Suspense fallback={<Loading />}>
			<AuthContextProvider>
				<RouterProvider router={router} />
			</AuthContextProvider>
		</Suspense>
	)
}

export default App
