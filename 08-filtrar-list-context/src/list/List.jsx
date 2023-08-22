import { SearchContext, SearchProvider } from '../context/SearchContext';
import frameworksList from './items';
import ListView from './ListView';
import React, { useContext, useEffect, useState } from 'react';
// Componentes de presentacion(Como se van a mostrar los datos) 
// Componentes contenedores(Como se va a manejar la informacion)

//Este es contenedor
function List() {

  let [items, setItems] = useState(frameworksList)
  let {search} = useContext(SearchContext)

  useEffect(
    function() {
      if (!search || search === '') return
      filterItems(search)
      
    }, [search])

  function filterItems(searchPatter) {
    if(searchPatter === ''){
      setItems(frameworksList)
    } else {
      setItems(filterItemsBySearchPatter(searchPatter))
    }
  }

  function filterItemsBySearchPatter(searchPatter) {
    let filterItems = frameworksList.map( item => item.toLowerCase().includes(searchPatter.toLowerCase()) ? item : null)
    return filterItems
  }

  return (
    <ListView elements={items} />
  );
}
export default List