/* eslint-disable no-case-declarations */
import { useState } from "react"
import { useTaskContext } from "../../context/taskContext"
import TaskTile from "../TaskTile/TaskTile"
import TaskDetails from "../TaskDetails/TaskDetails"
import StyledContentPanel from "./ContentPanel.styled"
import TaskForm from "../TaskForm/TaskForm"

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
		<StyledContentPanel
			className="content-panel"
			id="contentPanel"
			$overlayState={overlayState}
		>
			<div className="current-tab-heading">
				<span>{currentTab}</span>
			</div>
			{currentTab !== "Today" &&
				currentTab !== "This Week" &&
				currentTab !== "Important" && (
					<div
						id="addNewTaskBtn"
						onClick={() => setOverlayState("new task")}
					>
						<svg
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z"
								fill="rgb(55, 73, 88)"
							></path>
						</svg>
						<span>Add New Task</span>
					</div>
				)}
			<div id="overlay">
				{(() => {
					switch (overlayState) {
						case "new task":
							return <TaskForm setOverlayState={setOverlayState} />

						case "display task":
							return (
								<TaskDetails
									task={selectedTask}
									setOverlayState={setOverlayState}
								/>
							)

						case "edit task":
							return (
								<TaskForm
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
			<div className="task-list">{taskListElements}</div>
		</StyledContentPanel>
	)
}

export default ContentPanel
