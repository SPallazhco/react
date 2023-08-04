import { useState, useEffect } from "react";

function Countdown() {
    // Segundos a esperar / Conteo de segundos
    let [targetSeconds, setTargetSeconds] = useState(null)
    let [elapsedSeconds, setElapsedSeconds] = useState(0)

    useEffect(function () {
        if(targetSeconds == null) return
        let interval = setInterval(() => {
            setElapsedSeconds(elapsedSeconds + 1)
        }, 1000);
    }, [])

    function parseForm(ev) {
        ev.preventDefault()
        let seconds = ev.target.seconds.value
        setTargetSeconds(seconds)
        console.log('seconds    =>      ', parseInt(seconds))
    }

    

    if(targetSeconds !== null) {
        return(
            <>
                <p>Tiempo de conteo: {targetSeconds} segundos</p>
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