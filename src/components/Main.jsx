import { useState } from "react"
import { TaskContextProvider } from "../context/taskContext"
import { tasksData as initialTasks } from "../initialData"

function Main() {
	const [tasks, setTasks] = useState(
		JSON.parse(localStorage.getItem("tasks")) || initialTasks
	)

	function addNewTask(task) {
		setTasks((prev) => ({ ...prev, tasks: [...prev.tasks, task] }))
	}

	function editTask(id, updatedTask) {
		setTasks((prev) => {
			return {
				...prev,
				tasks: prev.tasks.map((prevTask) =>
					prevTask.id === id ? updatedTask : prevTask
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
			}
		})
	}

	function deleteProject(name) {
		setTasks((prev) => {
			return {
				...prev,
				projects: prev.projects.filter((prevName) => prevName !== name),
			}
		})
	}

	return (
		<TaskContextProvider
			value={{
				tasks,
				addNewTask,
				editTask,
				deleteTask,
				toggleTaskCompleted,
				addNewProject,
				renameProject,
				deleteProject,
			}}
		></TaskContextProvider>
	)
}

export default Main
