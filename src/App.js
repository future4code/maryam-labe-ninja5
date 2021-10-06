import React from "react";
import Cadastro from "./components/Cadastro";
import Contrato from "./components/Contrato";
import Lobby from "./components/Lobby";
import Carrinho from "./components/Carrinho";
import Detalhes from "./components/Detalhes";
import styled from "styled-components";

// const AppContainer = styled.div`
//   background-color: red;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;
const Titulo = styled.div`
  border-bottom: 4px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: red;
  font-style: italic;

  img {
    width: 80px;
    margin: 0 12px;
  }
`;

const Botoes = styled.div`
  background-color: black;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    margin: 12px;
    font-size: 28px;
    background-color: red;
    border: 1px solid red;
    border-radius: 12px;
    font-style: italic;

    :hover {
      font-size: 36px;
      background-color: darkred;
    }
  }
`;

const Footer = styled.footer`
  background-color: black;
  color: red;
  text-align: center;
  font-style: italic;
  font-size: 20px;
  padding: 20px;
`;

class App extends React.Component {
  state = {
    telaExibida: "",
    carrinho: [],
    idDoServico: "",
  };

  componentDidMount = () => {
    this.exibeLobby();
  };

  exibeCarrinho = () => {
    this.setState({ telaExibida: "carrinho" });
  };

  exibeCadastro = () => {
    this.setState({ telaExibida: "cadastro" });
  };

  exibeContrato = () => {
    this.setState({ telaExibida: "contrato" });
  };

  exibeLobby = () => {
    this.setState({ telaExibida: "lobby" });
  };

  exibeDetalhes = (servicoId) => {
    this.setState({ telaExibida: "detalhes", idDoServico: servicoId });
  };

  adicionaNoCarrinho = (servico) => {
    const novoCarrinho = [...this.state.carrinho, servico];
    this.setState({ carrinho: novoCarrinho });
  };

  removeDoCarrinho = (servicoRemovivel) => {
    const outroCarrinho = this.state.carrinho.filter((servico) => {
      if (servicoRemovivel.id !== servico.id) {
        return servico;
      }
    });
    this.setState({ carrinho: outroCarrinho });
  };

  trocaTela = () => {
    switch (this.state.telaExibida) {
      case "cadastro":
        return <Cadastro />;

      case "contrato":
        return (
          <Contrato
            onClick={this.adicionaNoCarrinho}
            mostraDetalhes={this.exibeDetalhes}
          />
        );

      case "carrinho":
        return (
          <Carrinho
            servicosCarrinho={this.state.carrinho}
            removeCarrinho={this.removeDoCarrinho}
          />
        );

      case "lobby":
        return (
          <Lobby
            exibeCadastro={this.exibeCadastro}
            exibeContrato={this.exibeContrato}
          />
        );

      case "detalhes":
        return (
          <Detalhes
            servicoId={this.state.idDoServico}
            exibeContrato={this.exibeContrato}
          />
        );

      default:
        return <p>Cadastre ou contrate um serviço!</p>;
    }
  };

  render() {
    return (
      <div>
        <Titulo>
          <img
            src={
              "https://thumbs.dreamstime.com/b/ninja-warrior-silhouette-na-lua-vermelha-e-no-fundo-preto-97230557.jpg"
            }
          />
          <h1>LabeNinjas</h1>
          <img
            src={
              "https://thumbs.dreamstime.com/b/ninja-warrior-silhouette-na-lua-vermelha-e-no-fundo-preto-97230557.jpg"
            }
          />
        </Titulo>

        <Botoes>
          <button onClick={this.exibeLobby}>Lobby</button>
          <button onClick={this.exibeCarrinho}>Carrinho</button>
        </Botoes>
        {this.trocaTela()}
        <Footer>Todos os serviços que você precisa, você encontra aqui!</Footer>
      </div>
    );
  }
}

export default App;
