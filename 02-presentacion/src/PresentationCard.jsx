import imagenEjemplo from "./assets/img-ejm.png"
import './PresentationCard.css'

function PresentatioCard() {
    const name = "Sergio"
    return (
        <>
            <div className="presentation-card"> 
                <img src={imagenEjemplo} ></img>
                <h1>
                    Nombre: {name}
                </h1>

            </div>
        </>
    )
}

export default PresentatioCard;