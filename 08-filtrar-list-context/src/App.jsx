import './App.css'
import { SearchProvider } from './context/SearchContext'
import List from './list/List'

function App() {

  return (
    <>
      <div>
      <SearchProvider>
        <List />
      </SearchProvider>
      </div>
    </>
  )
}

export default App
