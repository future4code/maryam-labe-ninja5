import React from 'react';
import Cadastro from './components/Cadastro';
import Contrato from './components/Contrato';
import Lobby from './components/Lobby';
import Carrinho from './components/Carrinho';

class App extends React.Component {
	
	state = {
		telaExibida: "",
		carrinho: []
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

	adicionaNoCarrinho = (servico) => {
		const novoCarrinho = [...this.state.carrinho, servico]
		this.setState({carrinho: novoCarrinho})
	}

	removeDoCarrinho = (servicoRemovivel) => {
		const outroCarrinho = this.state.carrinho.filter(servico => {
			if(servicoRemovivel.id !== servico.id) {
				return servico
			}
		})
		this.setState({carrinho: outroCarrinho})
	}

	trocaTela = () => {
		switch (this.state.telaExibida) {
			case 'cadastro':
				return <Cadastro/>

			case 'contrato':
				return <Contrato
						onClick={this.adicionaNoCarrinho}
						/>

			case 'carrinho':
				return <Carrinho
						servicosCarrinho={this.state.carrinho}
						removeCarrinho={this.removeDoCarrinho}
						/>

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