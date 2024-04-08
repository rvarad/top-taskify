import { useTaskContext } from "../context/taskContext"

function TaskTile({ task, setOverlayState, setSelectedTask }) {
	const { deleteTask } = useTaskContext()

	function handleEditTaskBtnClick() {
		setOverlayState("edit task")
		setSelectedTask(task)
	}

	function handleDisplayTaskBtnClick() {
		setOverlayState("display task")
		setSelectedTask(task)
	}

	return (
		<div className="task-tile">
			<div className="task_status">{task.completed ? "Done" : "Not Done"}</div>
			<div className="task_title">{task.title}</div>
			<button
				className="task_details-btn"
				id="task_detailsBtn"
				onClick={handleDisplayTaskBtnClick}
			>
				Details
			</button>
			<div className="task_due-date">{task.dueDate}</div>
			<div
				className="task_edit"
				onClick={handleEditTaskBtnClick}
			>
				edit
			</div>
			<div
				className="task_delete"
				onClick={() => deleteTask(task.id)}
			>
				delete
			</div>
		</div>
	)
}

export default TaskTile
