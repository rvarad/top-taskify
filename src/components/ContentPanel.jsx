/* eslint-disable no-case-declarations */
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
		const today = new Date()
		switch (tab) {
			case "All Tasks":
				return tasks.tasks

			case "Today":
				return tasks.tasks.filter((task) => {
					const dueDate = new Date(task.dueDate)
					return (
						dueDate.getDate() === today.getDate() &&
						dueDate.getMonth() === today.getMonth() &&
						dueDate.getFullYear() === today.getFullYear()
					)
				})

			case "This Week":
				const weekStart = new Date(
					today.getFullYear(),
					today.getMonth(),
					today.getDate() - today.getDay()
				)
				const weekEnd = new Date(
					weekStart.getFullYear(),
					weekStart.getMonth(),
					weekStart.getDate() + 6
				)
				console.log(weekStart, weekEnd)
				return tasks.tasks.filter(
					(task) =>
						weekStart <= new Date(task.dueDate) &&
						new Date(task.dueDate) <= weekEnd
				)

			case "Important":
				return tasks.tasks.filter((task) => task.important === true)

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

	// console.log(tasks)

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
