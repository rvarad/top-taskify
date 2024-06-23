import { useEffect, useRef } from "react"
import StyledTaskDetails from "./TaskDetails.styled"

function TaskDetails({ task, setOverlayState }) {
	const taskDetailsRef = useRef()

	useEffect(() => {
		const handler = (e) => {
			if (
				taskDetailsRef.current &&
				!taskDetailsRef.current.contains(e.target)
			) {
				setOverlayState("")
			}
		}

		document.addEventListener("mousedown", handler)

		return () => document.removeEventListener("mousedown", handler)
	})

	return (
		<StyledTaskDetails
			ref={taskDetailsRef}
			className="task-details-popup"
		>
			<div className="task-details-popup_content">
				<div className="task-details-popup_task-title">{task.title}</div>
				<div className="task-details-popup_project task-details-popup_category">
					<span className="task-details-popup_category-title">Project</span>
					<span className="task-details-popup_category-content">
						{task.project}
					</span>
				</div>
				<div className="task-details-popup_details task-details-popup_category">
					<span className="task-details-popup_category-title">Details</span>
					<span className="task-details-popup_category-content">
						{task.details}
					</span>
				</div>
				<div className="task-details-popup_due-date task-details-popup_category">
					<span className="task-details-popup_category-title">Due Date</span>
					<span className="task-details-popup_category-content">
						{task.dueDate}
					</span>
				</div>
				<div className="task-details-popup_priority task-details-popup_category">
					<span className="task-details-popup_category-title">Priority</span>
					<span className="task-details-popup_category-content">
						{task.priority}
					</span>
				</div>
			</div>
			<div
				className="task-details-popup_close-btn"
				onClick={() => setOverlayState("")}
			>
				<svg
					version="1.1"
					id="Layer_1"
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					viewBox="0 0 300.003 300.003"
					xmlSpace="preserve"
				>
					<path d="M150,0C67.159,0,0.001,67.159,0.001,150c0,82.838,67.157,150.003,149.997,150.003S300.002,232.838,300.002,150 C300.002,67.159,232.839,0,150,0z M206.584,207.171c-5.989,5.984-15.691,5.984-21.675,0l-34.132-34.132l-35.686,35.686 c-5.986,5.984-15.689,5.984-21.672,0c-5.989-5.991-5.989-15.691,0-21.68l35.683-35.683L95.878,118.14 c-5.984-5.991-5.984-15.691,0-21.678c5.986-5.986,15.691-5.986,21.678,0l33.222,33.222l31.671-31.673 c5.986-5.984,15.694-5.986,21.675,0c5.989,5.991,5.989,15.697,0,21.678l-31.668,31.671l34.13,34.132 C212.57,191.475,212.573,201.183,206.584,207.171z"></path>
				</svg>
			</div>
		</StyledTaskDetails>
	)
}

export default TaskDetails
