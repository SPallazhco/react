import './App.css'
import { NotesProvider } from './contexts/NotesContext'
import NotesList from './notes/Notes.List'
import NotesForm from './notes/NotesForm'

function App() {

  return (
    <div className='App'>
      <NotesProvider>
        <NotesForm />
        <NotesList />
      </NotesProvider>
    </div>
  )
}

export default App
