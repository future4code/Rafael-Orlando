import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	state = {
	valorComentario : ''

	};

	onChangeComentario = (event) =>  {
		this.setState({valorComentario : event.target.value})
		
	}

	imprimeValor = () =>{
		console.log(this.state.valorComentario)
		
	}

	render() {
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.state.valorComentario}
				onChange={this.onChangeComentario} value={this.state.valorComentario}
				
				
			/>
			<button onClick={this.props.aoEnviar} onClick={this.imprimeValor} >Enviar</button>
			
		</div>
	}

}

