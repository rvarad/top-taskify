import { useEffect, useState } from "react"
import { TaskContextProvider } from "../context/taskContext"
import { tasksData as initialTasks } from "../initialData"
import ProjectTile from "./ProjectTile"
import ContentPanel from "./ContentPanel"
import { ThemeProvider } from "styled-components"

function Main() {
	const [tasks, setTasks] = useState(
		JSON.parse(localStorage.getItem("tasks")) || initialTasks
	)
	const [currentTab, setCurrentTab] = useState("All Tasks")
	const [newProjectName, setNewProjectName] = useState("")
	const [addNewProjectFormState, setAddNewProjectFormState] = useState(false)

	function addNewTask(task) {
		setTasks((prev) => ({
			...prev,
			tasks: [...prev.tasks, { id: Date.now(), ...task }],
		}))
	}

	function editTask(id, updatedTask) {
		setTasks((prev) => {
			return {
				...prev,
				tasks: prev.tasks.map((prevTask) =>
					prevTask.id === id ? { ...prevTask, ...updatedTask } : prevTask
				),
			}
		})
	}

	function deleteTask(id) {
		setTasks((prev) => {
			return {
				...prev,
				tasks: prev.tasks.filter((prevTask) => prevTask.id !== id),
			}
		})
	}

	function toggleTaskCompleted(id) {
		setTasks((prev) => {
			return {
				...prev,
				tasks: prev.tasks.map((prevTask) =>
					prevTask.id === id
						? { ...prevTask, completed: !prevTask.completed }
						: prevTask
				),
			}
		})
	}

	function toggleTaskImportant(id) {
		setTasks((prev) => {
			return {
				...prev,
				tasks: prev.tasks.map((prevTask) =>
					prevTask.id === id
						? { ...prevTask, important: !prevTask.important }
						: prevTask
				),
			}
		})
	}

	function addNewProject(project) {
		setTasks((prev) => ({ ...prev, projects: [...prev.projects, project] }))
	}

	function renameProject(originalName, newName) {
		setTasks((prev) => {
			return {
				...prev,
				projects: prev.projects.map((prevName) =>
					prevName === originalName ? newName : prevName
				),
				tasks: prev.tasks.map((task) => {
					return task.project === originalName
						? { ...task, project: newName }
						: task
				}),
			}
		})
	}

	function deleteProject(name) {
		setTasks((prev) => {
			return {
				...prev,
				tasks: prev.tasks.filter((task) => task.project !== name),
				projects: prev.projects.filter((prevName) => prevName !== name),
			}
		})
	}

	function changeCurrentTab(tab) {
		setCurrentTab(tab)
	}

	const projectListElements = tasks.projects.map((project) => {
		return (
			project !== "misc" && (
				<ProjectTile
					key={project}
					project={project}
					changeCurrentTab={changeCurrentTab}
				/>
			)
		)
	})

	useEffect(() => {
		changeCurrentTab("All Tasks")
	}, [tasks.projects.length])

	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks))
		console.log(tasks)
	}, [tasks])

	console.log(currentTab)

	return (
		<ThemeProvider>
			<TaskContextProvider
				value={{
					tasks,
					currentTab,
					addNewTask,
					editTask,
					deleteTask,
					toggleTaskCompleted,
					toggleTaskImportant,
					addNewProject,
					renameProject,
					deleteProject,
				}}
			>
				<nav className="navbar">
					<section className="home">
						<h2>Home</h2>
						<div
							className="tab-btn current"
							data-tab-name="All Tasks"
							onClick={() => changeCurrentTab("All Tasks")}
						>
							All Tasks
						</div>
						<div
							className="tab-btn"
							data-tab-name="Today"
							onClick={() => changeCurrentTab("Today")}
						>
							Today
						</div>
						<div
							className="tab-btn"
							data-tab-name="This Week"
							onClick={() => changeCurrentTab("This Week")}
						>
							This Week
						</div>
						<div
							className="tab-btn"
							data-tab-name="Important"
							onClick={() => changeCurrentTab("Important")}
						>
							Important
						</div>
					</section>
					<section className="projects">
						<h2>Projects</h2>
						<button
							id="addNewProjectBtn"
							onClick={() => setAddNewProjectFormState(true)}
						>
							Add New Project
						</button>
						{addNewProjectFormState && (
							<form
								onSubmit={() => {
									addNewProject(newProjectName)
									setAddNewProjectFormState(false)
									setNewProjectName("")
									changeCurrentTab(newProjectName)
								}}
							>
								<input
									type="text"
									placeholder="Enter project name"
									value={newProjectName}
									onChange={(e) => setNewProjectName(e.target.value)}
								/>
								<button>Add</button>
								<button
									onClick={() => {
										setAddNewProjectFormState(false)
										setNewProjectName("")
									}}
								>
									Cancel
								</button>
							</form>
						)}
						<div className="project-list">{projectListElements}</div>
					</section>
				</nav>
				<ContentPanel currentTab={currentTab} />
			</TaskContextProvider>
		</ThemeProvider>
	)
}

export default Main
