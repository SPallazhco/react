import NotesDeleteBtn from "./NotesDeleteBtn"

function Notes({title, message, id}) {
    return (
        <div className='note'>
            <h2> { title } </h2>
            <p> { message } </p>
            <NotesDeleteBtn id={ id }/>
        </div>
    )
}

export default Notes