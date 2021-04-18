import React, {useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import {useParams} from 'react-router-dom';

const AppContainer = styled.div`
    margin: 30px 0px;
    padding: 0px;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
`

const EstiloInput = styled.input`
  width: 80%;
  height: 30px;
  border-radius: 10px;
  padding: 5px 8px;
  border-width: 1px;
  border-color: gray;
  margin: 0px 0px 5px 80px;;
`


const EstiloBotao = styled.button`
  margin-bottom: 15px;
  height: 40px;
  padding: 0px 20px;
  border-radius: 20px;
  border: medium none;
  color: white;
  font-size: 16px;
  background-color: #9370DB;
  min-width: 100px;
  margin: 200px 250px
  
`

const EstiloTitulo = styled.h1`
  text-align: center;
  font-family: Open-Sans, Helvetica, sans-serif;
  color : #9370DB;
  display : flex;
  justify-content : center;
  margin: 100px -80px;
  padding: 0px;
  width: 100vw;

`

const LoginPage = () => {
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const history = useHistory()
  
  

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const login = () => {
    const body = {
      email : email,
      password : password
    }

    axios
      .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafael-orlando/login", body)
      .then((res)=>{
          console.log(res.data)
          window.localStorage.setItem('token', res.data.token)
          history.push('/admin/trips/list')
      })
      .catch((err)=>{
        console.log(err)
        alert("Usuário não cadastrado, incluir email e senha de usuário válido")
      })
      

  }
  
  const goToHomePage = () => {
        history.push("/")
    }
    
    return(
        <div>
            <EstiloTitulo>Login Page</EstiloTitulo>
            <EstiloInput value={email} onChange={handleEmail} placeholder="Email"></EstiloInput>
            <EstiloInput value={password} onChange={handlePassword} placeholder="Senha"></EstiloInput>
            <EstiloBotao onClick={login}>Login</EstiloBotao>
            <EstiloBotao onClick={goToHomePage}>Voltar</EstiloBotao>
        </div>
    );
};

export default LoginPage;