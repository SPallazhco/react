import { useContext } from "react"
import { ItemsContext } from "../context/ItemsContext"
import { SearchContext } from "../context/SearchContext"

function ResultCount() {
    const elements = useContext(ItemsContext)
    const {search} = useContext(SearchContext)

    return(
        <p>
            Seencontraron { elements.filter(el => !!el).length } elementos para la busqueda '{search}'
        </p>
    )
}

export default ResultCount