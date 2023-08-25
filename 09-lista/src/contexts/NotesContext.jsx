import { createContext } from "react";
import useNotes from "../hooks/useNotes";

export const NotesContext = createContext()

export function NotesProvider({children}) {
    const { notes, addNotes } = useNotes()
    return(
        <NotesContext.Provider value={ { notes: notes, addNotes: addNotes } }>
            {children}
        </NotesContext.Provider>
    )
}
