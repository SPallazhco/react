import { useRef, useState } from "react"
import Tooltip from "./Tooltip"

function TooltipText(props) {

    let [tooltipDomRect, setTooltipDomRect] = useState()
    let [showTooltip, setShowTooltip] = useState(false)

    let spanElement = useRef()

    function handleMouseOver() {
        let domData = spanElement.current.getBoundingClientRect()
        setTooltipDomRect(domData)
        setShowTooltip(true)
    }
    
    return(
        <>
            <span 
            className="tooltip-text" 
            ref={spanElement} 
            onMouseOver={ ev => handleMouseOver(ev) }
            onMouseLeave={ev => {return setShowTooltip(false)}}>
                {props.children}
            </span>
            {
                showTooltip && <Tooltip domRect={tooltipDomRect} text={props.tooltipe} />
            }
        </>
    )
}

export default TooltipText