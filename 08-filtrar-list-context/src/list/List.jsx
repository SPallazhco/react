import { ItemsProvider } from '../context/ItemsContext';
import { SearchProvider } from '../context/SearchContext';
import ListView from './ListView';
import React from 'react';
import ResultCount from './ResultCount';
// Componentes de presentacion(Como se van a mostrar los datos) 
// Componentes contenedores(Como se va a manejar la informacion)

//Este es contenedor
function List() {
  return (
    
    <SearchProvider>
        <ItemsProvider>
          <ResultCount />
          <ListView />
        </ItemsProvider>
      </SearchProvider>
  );
}
export default List