import { useContext } from "react"
import { NotesContext } from "../contexts/NotesContext"

function NotesDeleteBtn({ id }) {
    let { removeNotes } = useContext(NotesContext)
    return(
        <button onClick={ ev => removeNotes(id) }>Eliminar</button>
    )
}

export default NotesDeleteBtn