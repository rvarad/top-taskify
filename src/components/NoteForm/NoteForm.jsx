import { useForm } from "react-hook-form"
import { useNoteContext } from "../../context/noteContext"
import StyledNoteForm from "./NoteForm.styled"

function NoteForm(props) {
	const { addNewNote, editNote } = useNoteContext()

	const { register, watch, handleSubmit, formState } = useForm({
		defaultValues: {
			title: props.note?.title || "",
			content: props.note?.content || "",
		},
	})

	function handleFormSubmit(data) {
		props.note ? editNote(props.note.id, data) : addNewNote(data)
		props.setOverlayState("")
	}

	return (
		<StyledNoteForm onSubmit={handleSubmit(handleFormSubmit)}>
			<div className="input-wrapper noteForm_title">
				<label htmlFor="noteForm_inputTitle">Title : </label>
				<input
					type="text"
					id="noteForm_inputTitle"
					placeholder="Favourite food"
					{...register("title", {
						required: { value: true, message: "Title is required" },
					})}
				/>
				<span className="errors">{formState.errors.title?.message}</span>
			</div>
			<div className="input-wrapper noteForm_content">
				<label htmlFor="noteForm_inputContent">Content : </label>
				<textarea
					id="noteForm_inputContent"
					placeholder="Dosa, Idli, etc."
					{...register("content", {
						required: { value: true, message: "Content is required" },
					})}
				/>
				<span className="errors">{formState.errors.content?.message}</span>
			</div>
			<div className="note-form_btns-wrapper">
				<button id="noteForm_inputSubmitBtn">
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
					id="noteForm_inputCancelBtn"
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
		</StyledNoteForm>
	)
}

export default NoteForm
