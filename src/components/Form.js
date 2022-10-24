function Form() {
    return (
        <div>
            <h1>Cadastro de Produtos</h1>
            <form onSubmit={cadastrarProduto}>
                <label>Nome do Produto</label>
                <input type="text" name="nome" />
                <br></br>
                <label>Preço do Produto</label>
                <input type="number" name="preco" />
                <br></br>
                <button type="submit">Cadastrar</button>
                </form>
        </div>
    )
}

// Esse event como parametro ai é o evento que acontece quando o form é submetido
function cadastrarProduto(event){
    event.preventDefault()
    console.log('Evento disparado')
    alert('Evento disparado')
}

export default Form;
