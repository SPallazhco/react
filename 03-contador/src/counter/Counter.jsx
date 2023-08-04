import { useState } from "react";

function Counter(params) {
    // Estado de un componente para actualizar el estado
    const [contador, setContador] = useState(10)
    return(
        <>
            <div>
                <p>
                    Has hecho click {contador} veces al boton.
                </p>
                <button onClick={() => {setContador(contador + 1)}}>Incrementar</button>
            </div>
        </>
    )
}

export default Counter