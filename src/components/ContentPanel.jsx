import { useState } from "react"
import { useTaskContext } from "../context/taskContext"
import TaskTile from "./TaskTile"
import TaskDetails from "./TaskDetails"
import EditTaskForm from "./EditTaskForm"
import AddNewTaskForm from "./AddNewTaskForm"

function ContentPanel({ currentTab }) {
	const { tasks } = useTaskContext()
	const [overlayState, setOverlayState] = useState("")
	const [selectedTask, setSelectedTask] = useState(null)

	function generateTaskList(tab) {
		switch (tab) {
			case "All Tasks":
				return tasks.tasks

			default:
				return tasks.tasks.filter((task) => task.project === tab)
		}
	}

	const taskListElements = generateTaskList(currentTab).map((task) => {
		return (
			<TaskTile
				key={task.id}
				task={task}
				setOverlayState={setOverlayState}
				setSelectedTask={setSelectedTask}
			/>
		)
	})

	console.log(tasks)

	return (
		<div
			className="content-panel"
			id="contentPanel"
		>
			<div className="content-panel__header">
				<div className="current-tab-heading">{currentTab}</div>
				{currentTab !== "Today" && currentTab !== "This Week" && (
					<button
						id="addNewTaskBtn"
						onClick={() => setOverlayState("new task")}
					>
						Add New Task
					</button>
				)}
			</div>
			<div id="overlay">
				{/* {overlayState === "new task" ? <AddNewTaskForm addNewTask={addNewTask} /> : null} */}
				{(() => {
					switch (overlayState) {
						case "new task":
							return <AddNewTaskForm setOverlayState={setOverlayState} />

						case "display task":
							return (
								<TaskDetails
									task={selectedTask}
									setOverlayState={setOverlayState}
								/>
							)

						case "edit task":
							return (
								<EditTaskForm
									task={selectedTask}
									setOverlayState={setOverlayState}
								/>
							)

						default:
							null
							break
					}
				})()}
			</div>
			<div className="task-list">
				{/* {taskListElements} */}
				{taskListElements}
			</div>
		</div>
	)
}

export default ContentPanel
