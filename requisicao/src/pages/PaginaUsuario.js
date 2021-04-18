import React from 'react';
import axios from 'axios';
import {baseUrl, axiosConfig} from '../parametros'

export class PaginaUsuario extends React.Component {
    state = {
        nome : '',
        email : ''
    }

mudarNome = (event) => {
    this.setState({nome : event.target.value})
}

mudarEmail = (event) =>{
    this.setState({email : event.target.value})
}

criarUsuario = () => {
    const body = {
        nome : this.state.nome,
        email : this.state.email
    }

    axios.post(baseUrl , body , axiosConfig)
        .then((resposta)=>{
            console.log(resposta)
        })
        .catch((erro)=>{
            console.log(erro)
        })

 }




    render() {
        return (
            <div>
                <h2>Página de Usuário</h2>
                <input onChange={this.mudarNome} value={this.state.nome} placeholder='Nome'/>
                <input onChange={this.mudarEmail} value={this.state.email} placeholder='Email' />
                <button onClick={this.criarUsuario}>Criar</button>
                
            </div>
        )
    }
}
