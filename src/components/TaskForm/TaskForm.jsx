import { useState } from "react"
import { useTaskContext } from "../../context/taskContext"
import { useForm } from "react-hook-form"
import StyledTaskForm from "./TaskForm.styled"

function TaskForm(props) {
	const { addNewTask, editTask, currentTab } = useTaskContext()
	const { register, handleSubmit, watch, formState } = useForm({
		defaultValues: {
			title: props.task?.title || "",
			completed: props.task?.completed || false,
			details: props.task?.details || "",
			dueDate: props.task?.dueDate || new Date().toISOString().substring(0, 10),
			priority: props.task?.priority || "",
			project: currentTab === "All Tasks" ? "misc" : currentTab,
		},
	})
	// const [formData, setFormData] = useState({
	// 	title: task.title || "",
	// 	completed: task.completed || false,
	// 	details: task.details || "",
	// 	dueDate: task.dueDate || "",
	// 	priority: task.priority || "",
	// 	project: currentTab === "All Tasks" ? "misc" : currentTab,
	// })

	function handleInputChange(e) {
		const { name, value } = e.target
		setFormData((prev) => ({ ...prev, [name]: value }))
	}

	function handleFormSubmit(data) {
		props.task ? editTask(props.task.id, data) : addNewTask(data)
		// console.log(data)
		props.setOverlayState("")
	}

	return (
		<StyledTaskForm
			className="task-form"
			// $priority={formData.priority}
			$priority={watch("priority")}
			onSubmit={handleSubmit(handleFormSubmit)}
		>
			<div className="task-form_input-title-wrapper input-wrapper">
				<label htmlFor="taskForm_inputTitle">Title : </label>
				<input
					type="text"
					id="taskForm_inputTitle"
					placeholder="e.g Pay electricity bill"
					// required
					// onChange={handleInputChange}
					// name="title"
					// value={formData.title}
					{...register("title", {
						required: { value: true, message: "Title is required" },
					})}
				/>
				<p className="errors">{formState.errors.title?.message}</p>
			</div>
			<div className="task-form_input-details-wrapper input-wrapper">
				<label htmlFor="taskForm_inputDetails">Details : </label>
				<textarea
					id="taskForm_inputDetails"
					placeholder="e.g Pay from joint account,..."
					// onChange={handleInputChange}
					// name="details"
					// value={formData.details}
					{...register("details")}
				/>
			</div>
			<div className="task-form_input-due-date-wrapper input-wrapper">
				<label htmlFor="taskForm_inputDueDate">Due Date : </label>
				<input
					type="date"
					id="taskForm_inputDueDate"
					// required
					// onChange={handleInputChange}
					// name="dueDate"
					// value={formData.dueDate}
					{...register("dueDate", {
						required: { value: true, message: "Due date is required" },
					})}
				/>
				<p className="errors">{formState.errors.dueDate?.message}</p>
			</div>
			<div className="task-form_input-priority-wrapper input-wrapper">
				<span id="priority-title">Priority : </span>
				<label
					htmlFor="low"
					id="lowPriorityInputLabel"
				>
					Low
				</label>
				<input
					type="radio"
					id="low"
					value="low"
					// name="priority"
					// checked={formData.priority === "low"}
					// onChange={handleInputChange}
					{...register("priority")}
				/>
				<label
					htmlFor="medium"
					id="mediumPriorityInputLabel"
				>
					Medium
				</label>
				<input
					type="radio"
					id="medium"
					value="medium"
					// name="priority"
					// checked={formData.priority === "medium"}
					// onChange={handleInputChange}
					{...register("priority")}
				/>
				<label
					htmlFor="high"
					id="highPriorityInputLabel"
				>
					High
				</label>
				<input
					type="radio"
					id="high"
					value="high"
					// name="priority"
					// checked={formData.priority === "high"}
					// onChange={handleInputChange}
					{...register("priority")}
				/>
			</div>
			<div className="task-form_btns-wrapper">
				<button id="taskForm_inputSubmitBtn">
					<svg
						viewBox="0 0 24 24"
						id="d9090658-f907-4d85-8bc1-743b70378e93"
						data-name="Livello 1"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							id="70fa6808-131f-4233-9c3a-fc089fd0c1c4"
							data-name="done circle"
							d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0ZM11.52,17L6,12.79l1.83-2.37L11.14,13l4.51-5.08,2.24,2Z"
						></path>
					</svg>
				</button>
				<button
					id="taskForm_inputCancelBtn"
					onClick={() => props.setOverlayState("")}
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
				</button>
			</div>
		</StyledTaskForm>
	)
}

export default TaskForm
