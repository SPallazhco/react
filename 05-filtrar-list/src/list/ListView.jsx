
import React from 'react';

// Componente de presenacion
function ListView({elements, funcFilterItems}) {
    return (
        <div>
            <input type="text" onChange= { ev =>  funcFilterItems(ev.target.value)  } />
            <ul>
                {
                  elements.map((element, index) => { return (element && <li key= { index }> { element } </li>) }  )
                }
            </ul>
        </div>
      );
}

export default ListView