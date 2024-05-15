import { useForm } from "react-hook-form"
import StyledSignIn from "./SignIn.Styled"
import {
	Form,
	Link,
	redirect,
	useActionData,
	useNavigate,
	useSubmit,
} from "react-router-dom"
import { useAuthContext } from "../../context/AuthContext"
import { authSignInWithEmailAndPassword } from "../../firebaseSetup"

function loader() {}

export async function action({ request }) {
	const formData = await request.formData()
	// console.log(formData)
	const email = formData.get("email")
	const password = formData.get("password")
	try {
		const loggedin = await authSignInWithEmailAndPassword(email, password)
		console.log(loggedin)
		return redirect("/")
	} catch (error) {
		return error.message
	}
}

function SignIn() {
	const submit = useSubmit()
	const actionData = useActionData()

	const { register, formState, trigger, getValues } = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
	})

	// console.log(formState.errors)

	async function handleFormSubmit(e) {
		const isValid = await trigger()
		e.preventDefault()
		if (isValid) {
			const data = getValues()
			submit(data, {
				method: "post",
			})
		}
		// console.log(data)
		// reset()
	}

	return (
		<StyledSignIn>
			<div className="form-wrapper">
				<div className="heading">
					<span>Sign in to your account</span>
				</div>
				<form
					// replace
					// method="post"
					onSubmit={(e) => handleFormSubmit(e)}
				>
					<div className="submission-error">
						{/* {actionData === "Firebase: Error (auth/invalid-credential)."
							? "Invalid Credentials"
							: actionData} */}
						Submission Error
					</div>
					<div className="input-wrapper">
						<label htmlFor="emailIdInput">Email : </label>
						<input
							type="email"
							id="emailIdInput"
							{...register("email", {
								required: { value: true, message: "Email is required" },
								// validation for email
							})}
						/>
						{/* {formState.errors.email?.message && ( */}
						<p className="errors">{formState.errors.email?.message}</p>
						{/* )} */}
					</div>
					<div className="input-wrapper">
						<label htmlFor="passwordInput">Password : </label>
						<input
							type="password"
							id="passwordInput"
							{...register("password", {
								required: { value: true, message: "Password is required" },
							})}
						/>
						{formState.errors.password?.message && (
							<p className="errors">{formState.errors.password?.message}</p>
						)}
					</div>
					<div className="options">
						<button
							id="signInBtn"
							// onClick={() => reset()}
						>
							Sign In
						</button>
						<div className="signup">
							<span>Don't have an account?</span>{" "}
							<Link
								to="/signup"
								className="signup-link"
							>
								Sign Up
							</Link>
						</div>
						{/* <Link
							to="/signup"
							className="signup-link"
						>
							Or Sign Up if you don't have an account
						</Link> */}
					</div>
				</form>
			</div>
		</StyledSignIn>
	)
}

export default SignIn
