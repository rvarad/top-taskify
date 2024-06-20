import { useEffect, useRef, useState } from "react"
import { useTasksContext } from "../../context/TasksContext"
import StyledProjectTile from "./ProjectTile.styled"

function ProjectTile({ project }) {
	const { currentTab, renameProject, deleteProject, changeCurrentTab } =
		useTasksContext()

	const [newName, setNewName] = useState(project)
	const [renameProjectState, setRenameProjectState] = useState(false)

	const dragref = useRef()

	function handleDeleteProject() {
		deleteProject(project)
		// changeCurrentTab("All Tasks")
	}

	useEffect(() => {
		if (currentTab !== project) {
			setRenameProjectState(false)
			setNewName(project)
		}
	})

	return (
		// <div
		// 	className="project-tile"
		// 	onClick={() => changeCurrentTab(project)}
		// >
		<StyledProjectTile
			className={`nav-btn project-tile ${currentTab === project && "active"}`}
			onClick={() => changeCurrentTab(project)}
			ref={dragref}
			onDragEnd={() => (dragref.current.draggable = false)}
			$renameProjectState={renameProjectState}
		>
			<svg
				className="drag-icon"
				xmlns="http://www.w3.org/2000/svg"
				data-name="Layer 1"
				viewBox="0 0 24 24"
				id="menu"
				onMouseDown={() => (dragref.current.draggable = true)}
			>
				<path d="M8.5,10a2,2,0,1,0,2,2A2,2,0,0,0,8.5,10Zm0,7a2,2,0,1,0,2,2A2,2,0,0,0,8.5,17Zm7-10a2,2,0,1,0-2-2A2,2,0,0,0,15.5,7Zm-7-4a2,2,0,1,0,2,2A2,2,0,0,0,8.5,3Zm7,14a2,2,0,1,0,2,2A2,2,0,0,0,15.5,17Zm0-7a2,2,0,1,0,2,2A2,2,0,0,0,15.5,10Z"></path>
			</svg>
			<form
				className="project-info"
				onSubmit={(e) => {
					e.preventDefault()
					renameProject(project, newName)
				}}
			>
				<input
					className="project-name"
					readOnly={!renameProjectState}
					value={renameProjectState ? newName : project}
					onChange={(e) => setNewName(e.target.value)}
				/>
				{currentTab === project && (
					<div className="project-options">
						{renameProjectState ? (
							<>
								<button
									id="submitRenamedProjectBtn"
									onClick={() => setRenameProjectState(false)}
								>
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
								<button
									id="cancelRenamedProjectBtn"
									onClick={() => {
										setRenameProjectState(false)
										setNewName(project)
									}}
								>
									<svg
										version="1.1"
										id="Layer_1"
										xmlns="http://www.w3.org/2000/svg"
										xmlnsXlink="http://www.w3.org/1999/xlink"
										viewBox="0 0 300.003 300.003"
										xmlSpace="preserve"
									>
										<path d="M150,0C67.159,0,0.001,67.159,0.001,150c0,82.838,67.157,150.003,149.997,150.003S300.002,232.838,300.002,150 C300.002,67.159,232.839,0,150,0z M206.584,207.171c-5.989,5.984-15.691,5.984-21.675,0l-34.132-34.132l-35.686,35.686 c-5.986,5.984-15.689,5.984-21.672,0c-5.989-5.991-5.989-15.691,0-21.68l35.683-35.683L95.878,118.14 c-5.984-5.991-5.984-15.691,0-21.678c5.986-5.986,15.691-5.986,21.678,0l33.222,33.222l31.671-31.673 c5.986-5.984,15.694-5.986,21.675,0c5.989,5.991,5.989,15.697,0,21.678l-31.668,31.671l34.13,34.132 C212.57,191.475,212.573,201.183,206.584,207.171z"></path>
									</svg>
								</button>
							</>
						) : (
							<>
								<button
									id="renameProjectBtn"
									onClick={() => setRenameProjectState(true)}
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
								</button>
								<button
									id="deleteProjectBtn"
									onClick={handleDeleteProject}
								>
									<svg
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M10 11V17"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>
										<path
											d="M14 11V17"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>
										<path
											d="M4 7H20"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>
										<path
											d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>
										<path
											d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>
									</svg>
								</button>
							</>
						)}
						{/* <button onClick={() => setRenameProjectState(true)}>Rename</button>
						<button onClick={handleDeleteProject}>Delete</button> */}
					</div>
				)}
			</form>
			{/* {currentTab === project && renameProjectState && (
				<form
					className="rename-project-form"
					onSubmit={() => {
						renameProject(project, newName)
						changeCurrentTab(newName)
					}}
				>
					<input
						type="text"
						value={newName}
						onChange={(e) => setNewName(e.target.value)}
					/>
					<button>Submit</button>
					<button onClick={() => setRenameProjectState(false)}>Cancel</button>
				</form>
			)} */}
		</StyledProjectTile>
		// </div>
	)
}

export default ProjectTile
