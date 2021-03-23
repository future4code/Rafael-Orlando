import axios from 'axios';
import React from 'react';
import './App.css';



export default class App extends React.Component {


getAllUsers = () => {
  axios.get()
}





  render() {
    return(
      <div className="App">
          <button>Ir para página de lista</button>
          <label>
            <p>Nome :</p>
            <input
            />
            <p>Email :</p>
            <input></input>
            <br></br>
            <button
            >Salvar</button>
          </label>
      </div>








    );




  }
     

}