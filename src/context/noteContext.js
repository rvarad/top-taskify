import { createContext, useContext } from "react";

const NoteContext = createContext({
  notes: [],
  addNewNote: (note) => { },
  editNote: (id, updatedNote) => { },
  deleteNote: (id) => { },
})

const NoteContextProvider = NoteContext.Provider

function useNoteContext() {
  return useContext(NoteContext)
}

export { NoteContextProvider, useNoteContext }