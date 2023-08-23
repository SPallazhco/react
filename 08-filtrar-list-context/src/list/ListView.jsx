
import React, { useContext } from 'react';
import SearchInput from '../form/Searchinput';
import { ItemsContext } from '../context/ItemsContext';

// Componente de presenacion
function ListView() {
  let elements = useContext(ItemsContext)
    return (
        <div>
          <SearchInput />
            <ul>
                {
                  elements.map((element, index) => { return (element && <li key= { index }> { element } </li>) }  )
                }
            </ul>
        </div>
      );
}

export default ListView