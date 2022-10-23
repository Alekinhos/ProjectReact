import Item from './Item'

function List(){
    return(
        <>   
            <h1>Lista de Produtos</h1>
            <ul>
                <Item name="Arroz"/>
                <Item name="Feijão"/>
                <Item name="Macarrão"/>
                <Item name="Carne"/>
                <Item name="Frango"/>
            </ul>
        </>
    )
}

export default List
