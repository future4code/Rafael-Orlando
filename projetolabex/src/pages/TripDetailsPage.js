import axios from 'axios'
import React, { useEffect , useState } from 'react'
import styled from 'styled-components'
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

const TripDetailsPage = () => {

  const [trip , setTrip] = useState({})
  const history = useHistory()


  useEffect(()=> {
    const token = window.localStorage.getItem('token')

    if(token === null){
      history.push('/login') 
    }
    

    getTripDetails("3bUbdB1gvPzWrThpazVC")

  }, [history])


  const getTripDetails = (id) => {
    const token = window.localStorage.getItem('token')

    axios
    .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafael-orlando-cruz/trip/${id}`,{
      headers : {
        auth : token
      }
    })
    .then((res)=> {
      console.log(res.data.trip)
    
    })
    .catch((err)=> {
      console.log(err)
    })
  }

  

  const logout = () => {
    window.localStorage.removeItem('token')
    history.push("/login")
  }

    return(
        <div>
            <h1>Trip Details</h1>
            
            <button onClick={logout}>Voltar </button>
        </div>
    );
};

export default TripDetailsPage;