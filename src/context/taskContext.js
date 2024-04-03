import { createContext, useContext } from "react";

const TaskContext = createContext({
    tasks: {},
    addNewTask: () => { },
    editTask: () => { },
    deleteTask: () => { },
    toggleTaskCompleted: () => { },
    addNewProject: () => { },
    renameProject: () => { },
    deleteProject: () => { },
})

const TaskContextProvider = TaskContext.Provider

function useTaskContext() {
    return useContext(TaskContext)
}

export { TaskContextProvider, useTaskContext }