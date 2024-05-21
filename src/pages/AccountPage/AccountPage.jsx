import { useForm } from "react-hook-form"
import StyledAccountPage from "./AccountPage.styled"
import { useEffect, useState } from "react"
import { redirect, useLoaderData, useNavigate } from "react-router-dom"
import { useAuthContext } from "../../context/AuthContext"
import { addUserInfoToDB, getUserInfo } from "../../firebaseSetup"

export function loader({ request }) {
	if (!sessionStorage.getItem("userAccessToken")) {
		return redirect("/signin")
	} else {
		return new URL(request.url).searchParams.get("newuser")
	}
}

function AccountPage() {
	const loaderData = useLoaderData()
	const navigate = useNavigate()
	const { currentUser, getUserInfoFromDB } = useAuthContext()
	const [userFormInfo, setUserFormInfo] = useState()
	const [formEdit, setFormEdit] = useState(loaderData || false)

	// console.log(currentUser)

	const { register, formState, handleSubmit } = useForm({
		defaultValues: async () => {
			const userInfo = await getUserInfoFromDB(currentUser.uid)
			// console.log(userInfo)
			return {
				firstName: userInfo.data()?.firstName || "",
				lastName: userInfo.data()?.lastName || "",
				displayName: userInfo.data()?.displayName || "",
			}
		},
	})

	async function handleFormSubmit(data) {
		const uid = currentUser.uid
		// console.log(uid)
		await addUserInfoToDB(uid, data.firstName, data.lastName, data.displayName)
		setFormEdit(false)
	}

	return (
		<StyledAccountPage>
			{/* <div className="signin">Sign in</div>
			<div className="signup">Sign up</div> */}
			<div className="form-wrapper">
				<div className="heading">
					<span>Your Account</span>
				</div>
				<div className="profile-picture"></div>
				<form onSubmit={handleSubmit(handleFormSubmit)}>
					<div className="submission-errors"></div>
					<div className="input-wrapper">
						<label htmlFor="firstNameInput">First Name : </label>
						<input
							type="text"
							id="firstNameInput"
							{...register("firstName", {
								required: { value: true, message: "First Name is required" },
							})}
							readOnly={!formEdit}
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
							readOnly={!formEdit}
						/>
						<p className="errors">{formState.errors.lastName?.message}</p>
					</div>
					<div className="input-wrapper">
						<label htmlFor="displayNameInput">Display Name : </label>
						<input
							type="text"
							id="displayNameInput"
							{...register("displayName", {
								required: {
									value: true,
									message: "Display Name is required",
								},
							})}
							readOnly={!formEdit}
						/>
						<p className="errors">{formState.errors.displayName?.message}</p>
					</div>
					{!formEdit && (
						<div
							id="editIcon"
							onClick={() => setFormEdit(true)}
						>
							edit
						</div>
					)}
					{formEdit && <button id="saveButton">Save</button>}
				</form>
			</div>
		</StyledAccountPage>
	)
}

export default AccountPage
