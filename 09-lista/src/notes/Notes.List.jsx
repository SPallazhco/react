import Notes from "./Notes"

const list = [
    {
        tittle: 'Hola',
        message: 'React notes',
        id: '234'
    },
    {
        tittle: 'Hola2',
        message: 'React2 notes2',
        id: '34'
    },
    {
        tittle: 'Hola3',
        message: 'React3 notes3',
        id: '4'
    }
    
]

function NotesList() {
    return(
        <div>
            {
                list.map( note => <Notes key={note.id} tittle={note.tittle} message={note.message}/> )
            }
        </div>
    )
}

export default NotesList