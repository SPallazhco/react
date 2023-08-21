function SearchInput({funcFilterItems}) {
    return(
        <input type="text" onChange= { ev =>  funcFilterItems(ev.target.value)  } />
    )
}

export default SearchInput