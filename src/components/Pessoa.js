function Pessoa(props){
    return (
        <div>
        <img src={props.foto} alt={props.nome} />
        <h1>Nome:{props.nome}</h1>
        <h2>Idade:{props.idade}</h2>
        <h3>Profissao:{props.profissao}</h3>
        </div>
    )
}

export default Pessoa;