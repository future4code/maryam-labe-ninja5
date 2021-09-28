import React from 'react';
import Cadastro from './components/Cadastro';
import Contrato from './components/Contrato';
import Lobby from './components/Lobby';
import Carrinho from './components/Carrinho';

class App extends React.Component {
	
	state = {
		telaExibida: ""
	}

	componentDidMount = () => {
		this.exibeLobby()
	}

	exibeCarrinho = () => {
		this.setState({telaExibida: 'carrinho'})
	}

	exibeCadastro = () => {
		this.setState({telaExibida: 'cadastro'})
	}

	exibeContrato = () => {
		this.setState({telaExibida: 'contrato'})
	}

	exibeLobby = () => {
		this.setState({telaExibida: 'lobby'})
	}

	trocaTela = () => {
		switch (this.state.telaExibida) {
			case 'cadastro':
				return <Cadastro/>

			case 'contrato':
				return <Contrato/>

			case 'carrinho':
				return <Carrinho/>

			case 'lobby':
				return <Lobby
						exibeCadastro={this.exibeCadastro}
						exibeContrato={this.exibeContrato}
						/>

			default:
				return <p>Cadastre ou contrate um serviço!</p>
		}
	}

	render () {
		return (
			<div>
				<header>
					<h1>LabeNinjas</h1>
					<button onClick={this.exibeLobby}>Lobby</button>
					<button onClick={this.exibeCarrinho}>Carrinho</button>
				</header>
				{this.trocaTela()}
			</div>
		)
	}
 }

 export default App