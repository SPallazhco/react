import { useEffect, useState } from "react";


const LOCAL_STORAGE_KEY = 'practica_notas09'

function useNotes() {
    
    const [notes, setNotes] = useState([])

    useEffect(() => {
        if(!notes || notes.length === 0) return
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes))
    },[notes])

    useEffect(() => {
        if (localStorage.getItem(LOCAL_STORAGE_KEY)) {
            setNotes(
                JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
            )
        }
    }, []) //solo corre una vez cuando esta vacia)
    
    function addNotes(title, message) {
        const id = Date.now()
        const noteObj = { title, message, id}
        setNotes([noteObj, ...notes])
    }

    return {
        notes,
        addNotes
    }
}

export default useNotes