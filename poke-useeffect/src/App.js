import React, {useEffect , useState} from "react";
import axios from "axios";
import './App.css';

const App = () => {
  const [pokeList , setPokeList] = useState({});
  

  useEffect(()=>{
    getPokemon();
  }, [])
  
  
  const getPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/1/")
    .then((resposta)=> setPokeList(resposta.data))
    .catch((erro)=> console.log(erro));
  }

  
  const getUrl = async () => {
    try {
      const resposta = await axios.get("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png")
      setPokeList(resposta.data.name);
    } catch(erro) {
        console.log(erro);
    }
  }


  return (
    <div>
      <h1>Pokedex do Bulbasaur</h1>
      <p>Nome : {pokeList.name}</p>
      <p>Peso : {pokeList.weight}Kg</p>
      {pokeList.types &&
      <p>Tipo : {pokeList.types[0].type.name}</p>}
      {pokeList.sprites && (
      <img src={pokeList.sprites.front_default} alt={pokeList.name} />
        )}
    </div>
  );
}

export default App;
