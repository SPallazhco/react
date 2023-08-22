
import { createContext, useState } from 'react'

export const SearchContext = createContext({ message:'CONTEXT' })

export function SearchProvider({ children }) {
    // Guardar en una propiedad del estado la palabra de busqueda
    let [search, setSearch] = useState()
    return(
        <SearchContext.Provider value={ { search, setSearch } }>
            {
                children
            }
        </SearchContext.Provider>
    )
}

