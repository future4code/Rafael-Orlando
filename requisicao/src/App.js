import React from 'react';
import {ListaPagina} from "./pages/ListaPagina";
import {PaginaUsuario} from "./pages/PaginaUsuario"


export default class App extends React.Component {
  state ={
    pagina : 'criarUsuario',

  }

  mudarPagina = () => {
    if(this.state.pagina === 'criarUsuario'){
      this.setState({pagina : 'listaUsuario'})
    }else if(this.state.pagina === 'listaUsuario'){
      this.setState({pagina : 'criarUsuario'})
    }
  }

renderizaPagina =() => {
  switch (this.state.pagina){
    case 'criarUsuario' : 
      return < PaginaUsuario />
    case 'listaUsuario':
      return <ListaPagina />
    default :
      return 
  } 
}

  render(){ 
    return (
      <div className="App">
        <h2>Labenusers</h2>
        <button onClick={this.mudarPagina}>Mudar página</button>
        {this.renderizaPagina()}
      </div>
    );
  } 
}