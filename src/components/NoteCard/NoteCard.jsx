import { useNotesContext } from "../../context/NotesContext"
import StyledNoteCard from "./NoteCard.styled"

function NoteCard({ note, setSelectedNote, setOverlayState }) {
	const { deleteNote } = useNotesContext()

	function convertDate(date) {
		let temp = new Date(date)
		return `${temp.getHours()}:${temp.getMinutes()} on ${temp.getDate()}/${
			temp.getMonth() + 1
		}/${temp.getFullYear()}`
	}

	function handleEditBtnClick() {
		setSelectedNote(note)
		setOverlayState("edit note")
	}

	return (
		<StyledNoteCard>
			<div className="note-title">{note.title}</div>
			<div className="note-content">{note.content}</div>
			<div className="note-options">
				{/* <div className="change-label">{note.label}</div> */}
				<div className="note-last-updated">
					Last updated at {convertDate(note.timestamp)}
				</div>
				<div
					className="note-edit"
					onClick={handleEditBtnClick}
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
					className="note-delete"
					onClick={() => deleteNote(note.id)}
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
			</div>
		</StyledNoteCard>
	)
}

export default NoteCard
