import { useForm } from "react-hook-form"
import StyledAccountPage from "./AccountPage.styled"
import { useEffect, useRef, useState } from "react"
import { redirect, useLoaderData, useNavigate } from "react-router-dom"
import { useAuthContext } from "../../context/AuthContext"
import {
	addUserInfoToDB,
	addUserProfileImageToStorage,
	getUserInfo,
	removePhotoURL,
} from "../../firebaseSetup"

export function loader({ request }) {
	if (!sessionStorage.getItem("userAccessToken")) {
		return redirect("/signin")
	} else {
		return new URL(request.url).searchParams.get("newuser")
	}
}

function AccountPage() {
	const { currentUser, profileImg, setProfileImg, getUserInfoFromDB } =
		useAuthContext()
	const loaderData = useLoaderData()
	const [formEdit, setFormEdit] = useState(loaderData || false)
	const [selectedImg, setSelectedImg] = useState()
	// const [profileImg, setProfileImg] = useState()
	const [uploadImg, setUploadImg] = useState(false)
	const [submissionError, setSubmissionError] = useState()

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
		try {
			const uid = currentUser.uid
			// console.log(uid)
			await addUserInfoToDB(
				uid,
				data.firstName,
				data.lastName,
				data.displayName
			)
			setFormEdit(false)
		} catch (error) {
			setSubmissionError(error.message)
		}
	}

	function handleImageSelection(e) {
		setUploadImg(true)
		setSelectedImg(e.target.files[0])
		// console.log(e.target.files[0])
	}

	async function uploadImage() {
		const photoURL = await addUserProfileImageToStorage(
			selectedImg,
			currentUser.uid
		)
		setProfileImg(photoURL)
		console.log(photoURL)
		setUploadImg(false)
	}

	function cancelUpload() {
		setSelectedImg(null)
		setUploadImg(false)
	}

	useEffect(() => {
		setProfileImg(currentUser.photoURL)
	}, [currentUser.photoURL])

	return (
		<StyledAccountPage>
			{/* <div className="signin">Sign in</div>
			<div className="signup">Sign up</div> */}
			<div className="form-wrapper">
				<button
					style={{ position: "absolute", top: "10px", right: "10px" }}
					onClick={removePhotoURL}
				>
					remove photo
				</button>
				<div className="heading">
					<span>Your Account</span>
				</div>
				<div className="account-info-wrapper">
					<div
						className="profile-picture"
						style={
							profileImg
								? { backgroundColor: "transparent" }
								: { backgroundColor: "white" }
						}
					>
						{profileImg && !uploadImg ? (
							<img
								src={profileImg}
								alt="profile-pic"
							/>
						) : selectedImg && uploadImg ? (
							<img
								src={URL.createObjectURL(selectedImg)}
								alt="profile-pic"
							/>
						) : (
							<svg
								fill="#000000"
								viewBox="0 0 32 32"
								id="icon"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M16,8a5,5,0,1,0,5,5A5,5,0,0,0,16,8Zm0,8a3,3,0,1,1,3-3A3.0034,3.0034,0,0,1,16,16Z"></path>
								<path d="M16,2A14,14,0,1,0,30,16,14.0158,14.0158,0,0,0,16,2ZM10,26.3765V25a3.0033,3.0033,0,0,1,3-3h6a3.0033,3.0033,0,0,1,3,3v1.3765a11.8989,11.8989,0,0,1-12,0Zm13.9925-1.4507A5.0016,5.0016,0,0,0,19,20H13a5.0016,5.0016,0,0,0-4.9925,4.9258,12,12,0,1,1,15.985,0Z"></path>
							</svg>
						)}
						<label
							htmlFor="profilePictureInput"
							className="profile-picture-label"
						>
							<svg
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="m3.99 16.854-1.314 3.504a.75.75 0 0 0 .966.965l3.503-1.314a3 3 0 0 0 1.068-.687L18.36 9.175s-.354-1.061-1.414-2.122c-1.06-1.06-2.122-1.414-2.122-1.414L4.677 15.786a3 3 0 0 0-.687 1.068zm12.249-12.63 1.383-1.383c.248-.248.579-.406.925-.348.487.08 1.232.322 1.934 1.025.703.703.945 1.447 1.025 1.934.058.346-.1.677-.348.925L19.774 7.76s-.353-1.06-1.414-2.12c-1.06-1.062-2.121-1.415-2.121-1.415z"
									fill="#000000"
								></path>
							</svg>
						</label>
						<input
							type="file"
							accept="image/*"
							onChange={(e) => handleImageSelection(e)}
							id="profilePictureInput"
						/>
						{uploadImg && (
							<div className="uploadProfilePicOptions">
								<button
									onClick={uploadImage}
									id="profilePictureUploadBtn"
								>
									Choose this image
								</button>
								<button
									onClick={cancelUpload}
									id="profilePictureUploadCancelBtn"
								>
									Cancel
								</button>
							</div>
						)}
					</div>
					<form onSubmit={handleSubmit(handleFormSubmit)}>
						<div className="submission-errors">
							{submissionError ? "Submission Error" : ""}
						</div>
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
								<svg
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M12 3.99997H6C4.89543 3.99997 4 4.8954 4 5.99997V18C4 19.1045 4.89543 20 6 20H18C19.1046 20 20 19.1045 20 18V12M18.4142 8.41417L19.5 7.32842C20.281 6.54737 20.281 5.28104 19.5 4.5C18.7189 3.71895 17.4526 3.71895 16.6715 4.50001L15.5858 5.58575M18.4142 8.41417L12.3779 14.4505C12.0987 14.7297 11.7431 14.9201 11.356 14.9975L8.41422 15.5858L9.00257 12.6441C9.08001 12.2569 9.27032 11.9013 9.54951 11.6221L15.5858 5.58575M18.4142 8.41417L15.5858 5.58575"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									></path>
								</svg>
							</div>
						)}
						{formEdit && (
							<button id="saveButton">
								<svg
									viewBox="0 0 24 24"
									id="d9090658-f907-4d85-8bc1-743b70378e93"
									data-name="Livello 1"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										id="70fa6808-131f-4233-9c3a-fc089fd0c1c4"
										data-name="done circle"
										d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0ZM11.52,17L6,12.79l1.83-2.37L11.14,13l4.51-5.08,2.24,2Z"
									></path>
								</svg>
							</button>
						)}
					</form>
				</div>
			</div>
		</StyledAccountPage>
	)
}

export default AccountPage
