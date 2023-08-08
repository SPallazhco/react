import { useState, useEffect } from "react";

function Countdown() {
    // Segundos a esperar / Conteo de segundos
    let [targetSeconds, setTargetSeconds] = useState(null)
    let [elapsedSeconds, setElapsedSeconds] = useState(0)
    // Usamos el use effect por que no podemos modificar el estado con el use state directamente
    useEffect(function () {
        if(targetSeconds == null) return
        setElapsedSeconds(0)
        let interval = setInterval(() => {
            setElapsedSeconds(elapsedSeconds => elapsedSeconds + 1)
        }, 1000);
        //IMPORTANTE: Limpieza una vez que se desmonte el useeffect
        return () => {
            clearInterval(interval)
        }
    }, [targetSeconds]) // El useEffect se actualiza cada vez que el valor dentro del array se actualize

    function parseForm(ev) {
        ev.preventDefault()
        let seconds = ev.target.seconds.value
        setTargetSeconds(seconds)
        console.log('seconds    =>      ', parseInt(seconds))
    }

    if (elapsedSeconds >= targetSeconds && targetSeconds != null) {
        return (
            <>
                <p>TERMINO!!!!</p>
                <button onClick={() => { setTargetSeconds(null) }}>Reiniciar</button>
            </>
        )
    }

    if(targetSeconds !== null) {
        return(
            <>
                <p>Faltan: {targetSeconds - elapsedSeconds} segundos.</p>
            </>
        )
    }

    return(
        <>
            <div className="countdown">
                <p>¿Cuántos segundos deseas contar?</p>
                <form action="counter" onSubmit={ ev => parseForm(ev)}>
                    <input type="number" name="seconds"/>
                    <button>Iniciar</button>
                </form>
            </div>
        </>
    )
}

export default Countdown