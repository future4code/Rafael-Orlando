import axios from 'axios';
import React from 'react';
import './App.css';


export default class App extends React.Component {

state = {
  listaPokemons: [],
  imagemPokemon: ""
};

componentDidMount() {
  this.pegarListaPokemons();
}

pegarListaPokemons = () => {
  axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((resposta) =>
      this.setState({ listaPokemons: resposta.data.results })
    )
    .catch((erro) => console.log(erro));
};

pegarImagemPokemon = (nome) => {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${nome}`)
    .then((resposta) => {
      this.setState({ imagemPokemon: resposta.data.sprites.front_default });
    })
    .catch((erro) => console.log(erro));
};

mudaSelect = (evento) => {
  const nomePokemon = evento.target.value;
  this.pegarImagemPokemon(nomePokemon);
};

render() {
  return (
    <div className="App">
      <h1>Pokémons</h1>
      <br></br>
      <br></br>
      <div>
        <br></br>
        <br></br>
        <select onChange={this.mudaSelect}>
          <option value={""}></option>
          {this.state.listaPokemons.map((poke) => {
            return (
              <option key={poke.name} value={poke.name}>
                {poke.name}
              </option>
            );
          })}
        </select>
      </div>
      {this.state.imagemPokemon && (
        <img alt={"imagem_pokemon"} src={this.state.imagemPokemon} />
      )}
    </div>
  );
}
}

