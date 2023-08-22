
import React from 'react';
import SearchInput from '../form/Searchinput';

// Componente de presenacion
function ListView({elements}) {
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