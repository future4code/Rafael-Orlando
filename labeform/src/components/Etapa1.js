import React from "react"

export default class Etapa1 extends React.Component {
    render(){
        return(
            <div>
          <div>
            <h1>Etapa 1</h1>
          </div>
          <div>
              <p>1. Qual o seu nome ?</p>
              <input></input>
          </div>
          <div>
              <p>2. Qual a sua idade ?</p>
              <input></input>
          </div>
          <div>
              <p>3. Qual o seu email ?</p>
              <input></input>
          </div>
          <div>
              <p>4. Qual a sua escolaridade ?</p>
              <input></input>
          </div>
          <button onClick={this.irParaProximaEtapa}>Proxima Etapa</button>
      </div>
        );
    }
}