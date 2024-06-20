/* eslint-disable no-mixed-spaces-and-tabs */
import { createContext, useContext, useEffect, useState } from "react"
import { useAuthContext } from "./AuthContext"
import { addUserTasksAndNotesToDB, getUserNotesFromDB } from "../firebaseSetup"

// const NoteContext = createContext({
//   notes: [],
//   addNewNote: (note) => { },
//   editNote: (id, updatedNote) => { },
//   deleteNote: (id) => { },
// })

const NotesContext = createContext()

// const NoteContextProvider = NoteContext.Provider

function NotesContextProvider({ children }) {
	const { currentUser } = useAuthContext()
	const [notes, setNotes] = useState()

	function addNewNote(note) {
		setNotes((prev) => [
			...prev,
			{ id: Date.now(), ...note, timestamp: Date.now() },
		])
	}

	function editNote(id, updatedNote) {
		setNotes((prev) => {
			return prev.map((prevNote) =>
				prevNote.id === id
					? { ...prevNote, ...updatedNote, timestamp: Date.now() }
					: prevNote
			)
		})
	}

	function deleteNote(id) {
		setNotes((prev) => {
			return prev.filter((prevNote) => prevNote.id !== id)
		})
	}

	useEffect(() => {
		const getNotesData = async () => {
			if (sessionStorage.getItem("userAccessToken")) {
				const notesData = await getUserNotesFromDB(currentUser.uid)
				console.log(notesData)
				notesData
					? setNotes(notesData)
					: setNotes([
							{
								id: Date.now(),
								title: "note 1",
								content: "this is a sample note",
								timestamp: Date.now(),
							},
					  ])
				// localStorage.removeItem("notesData")
			}
			// else {
			// 	setNotes([
			// 		{
			// 			id: 1712039907013,
			// 			title: "note 1",
			// 			content: "this is a sample note",
			// 			timestamp: 1712039907013,
			// 		},
			// 	])
			// }
			// } else {
			// 	setNotes(JSON.parse(localStorage.getItem("notesData")) || [])
			// }
		}

		return getNotesData
	}, [currentUser])

	useEffect(() => {
		if (notes && sessionStorage.getItem("userAccessToken")) {
			addUserTasksAndNotesToDB(currentUser.uid, "notesData", notes)
		} else {
			localStorage.setItem("notesData", JSON.stringify(notes))
		}
	}, [notes])

	const values = {
		notes,
		addNewNote,
		editNote,
		deleteNote,
	}

	return (
		<NotesContext.Provider value={values}>{children}</NotesContext.Provider>
	)
}

function useNotesContext() {
	return useContext(NotesContext)
}

export { NotesContextProvider, useNotesContext }
