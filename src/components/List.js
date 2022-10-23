import Item from './Item'

function List(){
    return(
        <>   
            <h1>Lista de Produtos</h1>
            <ul>
                <Item alimento="Arroz" tipo="Integral"/>
                <Item alimento="Feijão" tipo="Preto"/>
                <Item alimento="Macarrão" tipo="Integral"/>
                <Item alimento="Farinha" tipo="Trigo"/>
                
            </ul>
        </>
    )
}

export default List
