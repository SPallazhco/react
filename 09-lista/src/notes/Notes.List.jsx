import { useContext } from "react"
import Notes from "./Notes"
import { NotesContext } from "../contexts/NotesContext"

function NotesList() {
    const {notes} = useContext(NotesContext)
    return(
        <>
            <p style={ {textAlign: "right", color: "pink"} }>Usted tiene { notes.length } notas guardadas.</p>
            <div>
                {
                    notes.map( note => <Notes key={note.id} id={note.id} title={note.title} message={note.message}/> )
                }
            </div>
        </>
    )
}

export default NotesList