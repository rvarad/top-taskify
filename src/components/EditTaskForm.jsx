import { useState } from "react"
import { useTaskContext } from "../context/taskContext"

function EditTaskForm({ task, setOverlayState }) {
	const { editTask } = useTaskContext()
	const [formData, setFormData] = useState({
		title: task.title,
		completed: task.completed,
		details: task.details,
		dueDate: task.dueDate,
		priority: task.priority,
	})

	function handleInputChange(e) {
		const { name, value } = e.target
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}))
	}

	function handleFormSubmit(e) {
		e.preventDefault()
		editTask(task.id, formData)
		setOverlayState("")
	}

	return (
		<form
			className="edit-task-form"
			onSubmit={handleFormSubmit}
		>
			<input
				className="edit-task-form_task-title"
				type="text"
				name="title"
				onChange={handleInputChange}
				value={formData.title}
			/>
			<textarea
				className="edit-task-form_input-details"
				onChange={handleInputChange}
				name="details"
				value={formData.details}
			/>
			<div className="edit-task-form_input-due-date-wrapper">
				<label htmlFor="editTaskForm_inputDueDate">Due Date : </label>
				<input
					type="date"
					id="editTaskForm_inputDueDate"
					onChange={handleInputChange}
					name="dueDate"
					value={formData.dueDate}
				/>
			</div>
			<div className="edit-task-form_input-priority-wrapper">
				<span id="priority-title">Priority : </span>
				<label htmlFor="low">Low</label>
				<input
					type="radio"
					id="low"
					checked={formData.priority === "low"}
					onChange={handleInputChange}
					name="priority"
					value="low"
				/>
				<label htmlFor="medium">Medium</label>
				<input
					type="radio"
					id="medium"
					checked={formData.priority === "medium"}
					onChange={handleInputChange}
					name="priority"
					value="medium"
				/>
				<label htmlFor="high">High</label>
				<input
					type="radio"
					id="high"
					checked={formData.priority === "high"}
					onChange={handleInputChange}
					name="priority"
					value="high"
				/>
			</div>
			<div className="edit-task-form_btns-wrapper">
				<button id="editTaskFrom_inputSubmitBtn">Submit</button>
				<button
					id="editTaskFrom_inputCancelBtn"
					onClick={() => setOverlayState("")}
				>
					Cancel
				</button>
			</div>
		</form>
	)
}

export default EditTaskForm
