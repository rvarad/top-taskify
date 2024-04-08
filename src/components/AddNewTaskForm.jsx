import { useState } from "react"
import { useTaskContext } from "../context/taskContext"

function AddNewTaskForm({ setOverlayState }) {
	const { addNewTask, currentTab } = useTaskContext()
	const [formData, setFormData] = useState({
		title: "",
		completed: false,
		details: "",
		dueDate: "",
		priority: "",
		project: currentTab === "All Tasks" ? "misc" : currentTab,
	})

	function handleInputChange(e) {
		const { name, value } = e.target
		setFormData((prev) => ({ ...prev, [name]: value }))
	}

	function handleFormSubmit(e) {
		e.preventDefault()
		addNewTask(formData)
		setOverlayState("")
	}

	return (
		<form
			className="add-new-task-form"
			onSubmit={handleFormSubmit}
		>
			<input
				type="text"
				className="add-new-task-form_input-title"
				placeholder="Title : e.g Pay electricity bill"
				onChange={handleInputChange}
				name="title"
				value={formData.title}
			/>
			<textarea
				className="add-new-task-form_input-details"
				placeholder="Details : e.g Pay from joint account,..."
				onChange={handleInputChange}
				name="details"
				value={formData.details}
			/>
			<div className="add-new-task-form_input-due-date-wrapper">
				<label htmlFor="addNewTaskForm_inputDueDate">Due Date : </label>
				<input
					type="date"
					id="addNewTaskForm_inputDueDate"
					onChange={handleInputChange}
					name="dueDate"
					value={formData.dueDate}
				/>
			</div>
			<div className="add-new-task-form_input-priority-wrapper">
				<span id="priority-title">Priority : </span>
				<label htmlFor="low">Low</label>
				<input
					type="radio"
					id="low"
					name="priority"
					value="low"
					checked={formData.priority === "low"}
					onChange={handleInputChange}
				/>
				<label htmlFor="medium">Medium</label>
				<input
					type="radio"
					id="medium"
					name="priority"
					value="medium"
					checked={formData.priority === "medium"}
					onChange={handleInputChange}
				/>
				<label htmlFor="high">High</label>
				<input
					type="radio"
					id="high"
					name="priority"
					value="high"
					checked={formData.priority === "high"}
					onChange={handleInputChange}
				/>
			</div>
			<div className="add-new-task-form_btns-wrapper">
				<button id="addNewTaskFrom_inputSubmitBtn">Submit</button>
				<button
					id="addNewTaskFrom_inputCancelBtn"
					onClick={() => setOverlayState("")}
				>
					Cancel
				</button>
			</div>
		</form>
	)
}

export default AddNewTaskForm
