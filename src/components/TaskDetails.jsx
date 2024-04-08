function TaskDetails({ task, setOverlayState }) {
	return (
		<div className="task-details-popup">
			<div className="task-details-popup_content">
				<div className="task-details-popup_task-title">{task.title}</div>
				<div className="task-details-popup_project task-details-popup_category">
					<span className="task-details-popup_category-title">Project : </span>
					<span className="task-details-popup_category-content">
						{task.project}
					</span>
				</div>
				<div className="task-details-popup_details task-details-popup_category">
					<span className="task-details-popup_category-title">Details : </span>
					<span className="task-details-popup_category-content">
						{task.details}
					</span>
				</div>
				<div className="task-details-popup_due-date task-details-popup_category">
					<span className="task-details-popup_category-title">Due Date : </span>
					<span className="task-details-popup_category-content">
						{task.dueDate}
					</span>
				</div>
				<div className="task-details-popup_priority task-details-popup_category">
					<span className="task-details-popup_category-title">Priority : </span>
					<span className="task-details-popup_category-content">
						{task.priority}
					</span>
				</div>
			</div>
			<button
				className="task-details-popup_close-btn"
				onClick={() => setOverlayState("")}
			>
				X
			</button>
		</div>
	)
}

export default TaskDetails
