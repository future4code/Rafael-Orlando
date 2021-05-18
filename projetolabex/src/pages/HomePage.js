import React from 'react'
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import {useParams} from 'react-router-dom';

const AppContainer = styled.div`
    margin: 30px 0px;
    padding: 0px;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
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

const HomePage = () => {
    const history = useHistory()

    const goToLoginPage = () => {
        history.push("/login")
    }

    const goToListTripPage = () => {
        history.push("/trips/list/:id")
    }


    return(
        <div>
            <EstiloTitulo>Home Page</EstiloTitulo>
            <EstiloBotao onClick={goToLoginPage}>Página Admin</EstiloBotao>
            <EstiloBotao onClick={goToListTripPage}>Página de Viagem</EstiloBotao>
        </div>
    );
};

export default HomePage;