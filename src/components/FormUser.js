import { useState } from 'react'




function FormUser() {

    const [nome, setName] = useState()
    const [senha, setPassword] = useState()

    return (

        <div className="form-user">
            <h1>Cadastro de Usuários</h1>
            <form onSubmit={cadastrarUsuario}>
                <label htmlFor="name">Nome:</label>
                <input type="text" id="name"
                    name="name"
                    placeholder='Digite seu nome'
                    onChange={(event) => setName(event.target.value)} />
                <br></br>
                <label htmlFor="password" id="password" name="password" >Senha:</label>
                <input type="password"
                    name="senha"
                    placeholder='Digite sua senha'
                    onChange={(event) => setPassword(event.target.value)} />
                <br></br>
                <button type="submit">Cadastrar</button>
            </form>
        </div>

    )


    function cadastrarUsuario(event) {
        event.preventDefault()
        console.log('Evento disparado')
        console.log('Usuario', nome, 'cadastrado com a senha', senha)
        alert('Usuário cadastrado com sucesso!')

    }
}

export default FormUser;