import './App.css'
import { ItemsProvider } from './context/ItemsContext'
import { SearchProvider } from './context/SearchContext'
import List from './list/List'

function App() {

  return (
    <>
      <div>
      <SearchProvider>
        <ItemsProvider>
          <List />
        </ItemsProvider>
      </SearchProvider>
      </div>
    </>
  )
}

export default App
