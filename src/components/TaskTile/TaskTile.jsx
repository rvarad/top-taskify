import { useTaskContext } from "../../context/taskContext"
import StyledTaskTile from "./TaskTile.styled"

function TaskTile({ task, setOverlayState, setSelectedTask }) {
	const { deleteTask, toggleTaskCompleted, toggleTaskImportant } =
		useTaskContext()

	function handleEditTaskBtnClick() {
		setOverlayState("edit task")
		setSelectedTask(task)
	}

	function handleDisplayTaskBtnClick() {
		setOverlayState("display task")
		setSelectedTask(task)
	}

	return (
		<StyledTaskTile
			className="task-tile"
			$priority={task.priority}
			$completed={task.completed}
		>
			<input
				className="task_status"
				type="checkbox"
				checked={task.completed}
				onChange={() => toggleTaskCompleted(task.id)}
			/>
			<div className="task_title">{task.title}</div>
			<div
				className="task_details-btn"
				id="task_detailsBtn"
				onClick={handleDisplayTaskBtnClick}
			>
				<svg
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						id="Vector"
						d="M12 11V16M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21ZM12.0498 8V8.1L11.9502 8.1002V8H12.0498Z"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					></path>
				</svg>
			</div>
			<div className="task_due-date">
				{task.dueDate ? task.dueDate : "No due date"}
			</div>
			<div
				className="task_important"
				onClick={() => toggleTaskImportant(task.id)}
			>
				<svg
					viewBox="0 0 24.00 24.00"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					strokeWidth="2"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M11.0137 2.76683C11.379 1.89022 12.6208 1.89022 12.9861 2.76683L14.9102 7.38462C15.0654 7.75726 15.4295 8 15.8332 8H20.893C21.8234 8 22.2893 9.12483 21.6314 9.78268L17.5391 13.875C17.2823 14.1318 17.185 14.5076 17.2847 14.8568L18.9076 20.5369C19.1816 21.496 18.1122 22.2767 17.2822 21.7234L12.5546 18.5716C12.2187 18.3477 11.7811 18.3477 11.4452 18.5717L6.72544 21.7182C5.89284 22.2732 4.81988 21.49 5.09479 20.5279L6.71509 14.8568C6.81486 14.5076 6.71747 14.1318 6.46068 13.875L2.38859 9.8029C1.72328 9.13758 2.19448 8 3.13538 8H8.16658C8.57028 8 8.93438 7.75726 9.08965 7.38462L11.0137 2.76683Z"
						fill={task.important ? "#ffd700" : ""}
					></path>
				</svg>
			</div>
			<div
				className="task_edit"
				onClick={handleEditTaskBtnClick}
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
			</div>
			<div
				className="task_delete"
				onClick={() => deleteTask(task.id)}
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
			</div>
		</StyledTaskTile>
	)
}

export default TaskTile
