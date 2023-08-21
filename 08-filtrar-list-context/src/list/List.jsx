import frameworksList from './items';
import ListView from './ListView';
import React, { useState } from 'react';
// Componentes de presentacion(Como se van a mostrar los datos) 
// Componentes contenedores(Como se va a manejar la informacion)

//Este es contenedor
function List() {

  let [items, setItems] = useState(frameworksList)

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
      <ListView elements={items}  funcFilterItems = {filterItems}/>
  );
}
export default List