import { useForm } from "react-hook-form"
import StyledSignUp from "./SignUp.Styled"
import {
	addUserInfoToDB,
	authSignUpWithEmailAndPassword,
} from "../../firebaseSetup"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export function loader() {
	return sessionStorage.getItem("userAccessToken") ? redirect("/") : null
}

function SignUp() {
	const navigate = useNavigate()

	const [submissionErrors, setSubmissionErrors] = useState()

	const { register, formState, handleSubmit, reset, watch } = useForm()

	async function handleFormSubmit(data) {
		// console.log(data)
		try {
			await authSignUpWithEmailAndPassword(data.email, data.password)
			// const uid = newUser.user.uid
			// await addUserInfoToDB(
			// 	uid,
			// 	data.firstName,
			// 	data.lastName,
			// 	data.displayName
			// )
			navigate("/account?newuser=true", { replace: true })
		} catch (error) {
			setSubmissionErrors(error.message)
		}
	}

	// addUserInfoToDB()

	return (
		<StyledSignUp>
			<div className="form-wrapper">
				<div className="heading">
					<span>Create a new account</span>
				</div>
				<form onSubmit={handleSubmit(handleFormSubmit)}>
					<div className="submission-error">
						{/* {submissionErrors === "Firebase: Error (auth/invalid-credential)."
							? "Invalid Credentials"
							: submissionErrors} */}
						{/* submission error */}
					</div>
					{/* <div className="input-wrapper">
						<label htmlFor="firstNameInput">First Name : </label>
						<input
							type="text"
							id="firstNameInput"
							{...register("firstName", {
								required: { value: true, message: "First Name is required" },
							})}
						/>
						<p className="errors">{formState.errors.firstName?.message}</p>
					</div>
					<div className="input-wrapper">
						<label htmlFor="lastNameInput">Last Name : </label>
						<input
							type="text"
							id="lastNameInput"
							{...register("lastName", {
								required: { value: true, message: "Last Name is required" },
							})}
						/>
						<p className="errors">{formState.errors.lastName?.message}</p>
					</div>
					<div className="input-wrapper">
						<label htmlFor="displayNameInput">Display Name : </label>
						<input
							type="text"
							id="displayNameInput"
							{...register("displayName")}
						/>
						<p className="errors">{formState.errors.displayName?.message}</p>
					</div> */}
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
						<p className="errors">{formState.errors.email?.message}</p>
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
						<p className="errors">{formState.errors.password?.message}</p>
					</div>
					<div className="input-wrapper">
						<label htmlFor="confirmPasswordInput">Confirm Password : </label>
						<input
							type="password"
							id="confirmPasswordInput"
							{...register("confirmPassword", {
								required: {
									value: true,
									message: "Please re-enter your password",
								},
								validate: (value) =>
									value === watch("password") || "Passwords do not match",
							})}
						/>
						<p className="errors">
							{formState.errors.confirmPassword?.message}
						</p>
					</div>
					<button id="submitBtn">Sign Up</button>
				</form>
			</div>
		</StyledSignUp>
	)
}

export default SignUp
