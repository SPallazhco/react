import React, { useContext, useEffect, useState, createContext } from 'react'
import { SearchContext } from './SearchContext';
import frameworksList from '../list/items';

export const ItemsContext = createContext([])

export function ItemsProvider({children}) {

    let [items, setItems] = useState(frameworksList)
    let {search} = useContext(SearchContext)
  
    useEffect(
      function() {
        if (!search || search === '') {
          setItems(frameworksList)
          return
        }
        filterItems(search)
        
      }, [search])
  
    function filterItems(searchPatter) {
        setItems(filterItemsBySearchPatter(searchPatter))
    }
  
    function filterItemsBySearchPatter(searchPatter) {
      let filterItems = frameworksList.map( item => item.toLowerCase().includes(searchPatter.toLowerCase()) ? item : null)
      return filterItems
    }

    return(
        <ItemsContext.Provider value={ items }>
            { children }
        </ItemsContext.Provider>
    )
}