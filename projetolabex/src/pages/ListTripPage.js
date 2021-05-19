import React, {useState , useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import TripDetailsPage from './TripDetailsPage';
import useRequestData from '../hooks/useRequestData';
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


const ListTripPage = () => {
    const history = useHistory();
    const [joy , setJoy] = useState([]);
    const params = useParams();

  //  const list = () => {
  //      const body = {
  //          
  //      }
  //  }
  
  
    useEffect(()=> {
        getTrip();
    }, [])
    

    const goToHomePage = () => {
        history.push("/")
    }

    const goToApplicationFormPage = () => {
        history.push("/trips/application")
    }

    const getTrip = () => {
        const token = window.localStorage.getItem("token")

        axios .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafael-orlando/trips", 
        {
            headers : {
                auth : localStorage.getItem("token")
            }
        }
        )
        .then((res)=> console.log(res.data.trips))
        .catch((err)=> console.log(err))
    }

    const joyComponents = joy.trips && joy.trips.map((trip)=> {
      
    })
    
    return(
        <div>
            <EstiloTitulo>List Trip</EstiloTitulo>
            <EstiloBotao onClick={goToHomePage}>Voltar</EstiloBotao>
            <EstiloBotao onClick={goToApplicationFormPage}>Increver-se</EstiloBotao>
        </div>
    );
    
};

export default ListTripPage;


