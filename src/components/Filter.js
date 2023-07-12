const Filter = ({onSortMax,onSortMin,currentFilter,categories,onFilter}) => {
    return (
        <div>
            <h1>Filter</h1>
            <button onClick={onSortMax}>sort by price asc</button>
            <button onClick = {onSortMin} >sort by price desc</button>

            <p>current Filter : <strong>{currentFilter}</strong></p>
            <div>
                {
                    categories.map((elm, i) => {
                        let style = elm == currentFilter ? "btn btn-dark mx-1" : 'btn btn-outline-info mx-2'
                        return <button key={i} className={style} onClick={() => onFilter(elm)}> {elm} </button>
                    })
                }
            </div>
        </div>
    )
}
export default Filter