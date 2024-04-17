import { useState } from "react"
import { useTaskContext } from "../context/taskContext"

function ProjectTile({ project, changeCurrentTab }) {
	const { currentTab, renameProject, deleteProject } = useTaskContext()

	const [newName, setNewName] = useState(project)
	const [renameProjectState, setRenameProjectState] = useState(false)

	function handleDeleteProject() {
		deleteProject(project)
		// changeCurrentTab("All Tasks")
	}
	return (
		<div
			className="project-tile"
			onClick={() => changeCurrentTab(project)}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				data-name="Layer 1"
				viewBox="0 0 24 24"
				id="menu"
				style={{ width: "50px" }}
			>
				<path d="M8.5,10a2,2,0,1,0,2,2A2,2,0,0,0,8.5,10Zm0,7a2,2,0,1,0,2,2A2,2,0,0,0,8.5,17Zm7-10a2,2,0,1,0-2-2A2,2,0,0,0,15.5,7Zm-7-4a2,2,0,1,0,2,2A2,2,0,0,0,8.5,3Zm7,14a2,2,0,1,0,2,2A2,2,0,0,0,15.5,17Zm0-7a2,2,0,1,0,2,2A2,2,0,0,0,15.5,10Z"></path>
			</svg>
			<span className="project-name">{project}</span>
			{currentTab === project && !renameProjectState && (
				<div>
					<button onClick={() => setRenameProjectState(true)}>
						Rename Project
					</button>
					<button onClick={handleDeleteProject}>Delete Project</button>
				</div>
			)}
			{currentTab === project && renameProjectState && (
				<form
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
			)}
		</div>
	)
}

export default ProjectTile
