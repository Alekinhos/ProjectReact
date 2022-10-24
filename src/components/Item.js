import PropTypes from 'prop-types'

function Item({alimento,tipo}) {

    return (
        <>
            <li>
                {alimento} - {tipo}
            </li>
        </>
    )
}


// Validações de tipos de dados
Item.prototype = {
    alimento: PropTypes.string.isRequired,
    tipo: PropTypes.string.isRequired
}

Item.DefaultProps = {
    alimento: 'Alimento não informado',
    tipo: 'Tipo não informado'
}


export default Item