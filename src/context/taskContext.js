import { createContext, useContext } from "react";

const TaskContext = createContext({
	tasks: {},
	currentTab: "",
	addNewTask: (task) => { },
	editTask: (id, updatedTask) => { },
	deleteTask: (id) => { },
	toggleTaskCompleted: (id) => { },
	addNewProject: (project) => { },
	renameProject: (originalName, newName) => { },
	deleteProject: (name) => { },
})

const TaskContextProvider = TaskContext.Provider

function useTaskContext() {
	return useContext(TaskContext)
}

export { TaskContextProvider, useTaskContext }