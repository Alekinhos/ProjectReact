import Button from './evento/Button'

function Evento(){
    return(
        <>
        <p>Clique para realizar o evento:</p>
        <Button event={meuEvento} text="Primeiro Evento"></Button>
        <Button event={segundoEvento} text="Segundo Evento"></Button>
        </>
    )

function segundoEvento(){
    console.log('Segundo evento disparado')
    alert('Segundo evento disparado')
}


function meuEvento(){
    console.log('Ativando Primeiro Evento')
    alert('Ativando Primeiro Evento')
}
}

export default Evento