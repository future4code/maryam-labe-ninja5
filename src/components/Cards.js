import React from "react";
import styled from "styled-components";
import axios from "axios";

const Cartao = styled.div`
  border: 1px solid red;
  background-color: red;
  border-radius: 12px;
  text-align: justify;
  padding: 4px;
  margin: 4px;
  font-style: italic;

  button {
    background-color: black;
    border: 1px solid black;
    color: red;
    margin: 4px;
    border-radius: 12px;
    font-size: 16px;
    font-style: italic;

    :hover {
      font-size: 20px;
    }
  }
`;

class Card extends React.Component {
  deletarServico = () => {
    const url = `https://labeninjas.herokuapp.com/jobs/${this.props.id}`;
    const headers = {
      headers: {
        Authorization: "1725bb6a-854e-4830-a940-3ff06ea11ead",
      },
    };
    axios
      .delete(url, headers)
      .then((res) => {
        alert("Serviço apagado com sucesso!");
        this.props.handleDeletarServico();
      })
      .catch((err) => {
        alert("Erro! Não foi possível apagar este Serviço.");
        console.log(err);
      });
  };

  render() {
    return (
      <Cartao>
        <h3>Serviço: {this.props.titulo}</h3>
        <h4>Preço: {this.props.preco}</h4>
        <h4>Prazo: {this.props.prazo}</h4>
        <button onClick={this.props.adicionaCarrinho}>Adicionar</button>
        <button onClick={() => this.props.detalhes(this.props.servicoId)}>
          Ver Detalhes
        </button>
        <button id={this.props.id} onClick={this.deletarServico}>
          X
        </button>
      </Cartao>
    );
  }
}

export default Card;
