function Evento(){
    return(
        <>
        <p>Clique para realizar o evento:</p>
        
        <button onClick={meuEvento}>Clique aqui</button>

        </>
    )
}

function meuEvento(){
    console.log('Evento realizado com sucesso!')
    alert('Evento disparado')
}

export default Evento