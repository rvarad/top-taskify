/* eslint-disable no-mixed-spaces-and-tabs */
import { createContext, useContext, useEffect, useState } from "react"
import { addUserTasksAndNotesToDB, getUserTasksFromDB } from "../firebaseSetup"
import { useAuthContext } from "./AuthContext"

const TasksContext = createContext()

function TasksContextProvider({ children }) {
	const { currentUser } = useAuthContext()
	const [tasks, setTasks] = useState()
	const [currentTab, setCurrentTab] = useState("All Tasks")

	console.log(tasks)

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
		changeCurrentTab(project)
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
		changeCurrentTab(newName)
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

	function updateProjectsListAfterSort(updatedList) {
		setTasks((prev) => ({...prev, projects: [...updatedList]}))
	}

	useEffect(() => {
		const getTasksData = async () => {
			if (sessionStorage.getItem("userAccessToken")) {
				const tasksData = await getUserTasksFromDB(currentUser.uid)
				tasksData
					? setTasks(tasksData)
					: setTasks({ projects: ["misc"], tasks: [] })
			} else {
				localStorage.getItem("tasksData")
					? setTasks(JSON.parse(localStorage.getItem("tasksData")))
					: setTasks({ projects: ["misc"], tasks: [] })
			}
		}

		getTasksData()
	}, [currentUser])

	useEffect(() => {
		if (tasks && sessionStorage.getItem("userAccessToken")) {
			addUserTasksAndNotesToDB(currentUser.uid, "tasksData", tasks)
		} else {
			tasks && localStorage.setItem("tasksData", JSON.stringify(tasks))
		}
		console.log("in tasks effect", tasks)
	}, [tasks])

	const values = {
		tasks,
		currentTab,
		changeCurrentTab,
		addNewTask,
		editTask,
		deleteTask,
		toggleTaskCompleted,
		toggleTaskImportant,
		addNewProject,
		renameProject,
		deleteProject,
		updateProjectsListAfterSort,
	}

	return (
		tasks && (
			<TasksContext.Provider value={values}>{children}</TasksContext.Provider>
		)
	)
}

function useTasksContext() {
	return useContext(TasksContext)
}

export { TasksContextProvider, useTasksContext }
