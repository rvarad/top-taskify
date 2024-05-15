import { useEffect, useState } from "react"
import { notesData as initialNotes } from "../../initialData"
import StyledNotes from "./Notes.styled"
import NoteCard from "../../components/NoteCard/NoteCard"
import { NoteContextProvider } from "../../context/noteContext"
import NoteForm from "../../components/NoteForm/NoteForm"

function Notes() {
	const [notes, setNotes] = useState(
		JSON.parse(localStorage.getItem("notes")) || initialNotes
	)

	const [selectedNote, setSelectedNote] = useState(null)

	const [overlayState, setOverlayState] = useState("")

	function addNewNote(note) {
		setNotes((prev) => [
			...prev,
			{ id: Date.now(), ...note, timestamp: Date.now() },
		])
	}

	function editNote(id, updatedNote) {
		setNotes((prev) => {
			return prev
				.map((prevNote) =>
					prevNote.id === id
						? { ...prevNote, ...updatedNote, timestamp: Date.now() }
						: prevNote
				)
				.sort((a, b) => b.timestamp - a.timestamp)
		})
	}

	function deleteNote(id) {
		setNotes((prev) => {
			return prev.filter((prevNote) => prevNote.id !== id)
		})
	}

	const notesListElements = notes
		.sort((a, b) => b.timestamp - a.timestamp)
		.map((note) => (
			<NoteCard
				key={note.id}
				note={note}
				setSelectedNote={setSelectedNote}
				setOverlayState={setOverlayState}
			/>
		))

	useEffect(() => {
		localStorage.setItem("notes", JSON.stringify(notes))
	}, [notes])

	return (
		<NoteContextProvider value={{ notes, addNewNote, editNote, deleteNote }}>
			<StyledNotes
				className="notes"
				$overlayState={overlayState}
			>
				<div className="tab-heading">
					<span>Notes</span>
				</div>
				<div
					id="addNewNoteBtn"
					onClick={() => setOverlayState("new note")}
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
						></path>
					</svg>
					<span>Add New Note</span>
				</div>
				<div className="overlay">
					{(() => {
						switch (overlayState) {
							case "new note":
								return <NoteForm setOverlayState={setOverlayState} />

							case "edit note":
								return (
									<NoteForm
										note={selectedNote}
										setOverlayState={setOverlayState}
									/>
								)

							default:
								null
								break
						}
					})()}
				</div>
				<div className="notes-grid">
					{notesListElements ? notesListElements : "No Notes"}
				</div>
			</StyledNotes>
		</NoteContextProvider>
	)
}

export default Notes
