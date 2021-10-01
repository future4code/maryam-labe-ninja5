import React from "react";
import styled from "styled-components";
import axios from "axios";

const Cartao = styled.div`
  border: 1px solid black;
  background-color: grey;
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
        this.props.handleServiceDelete();
      })
      .catch((err) => {
        alert("Erro! Não foi possível apagar este Serviço.");
        console.log(err);
      });
  };

  render() {
    return (
      <Cartao>
        <h3>{this.props.titulo}</h3>
        <h4>{this.props.preco}</h4>
        <h4>{this.props.prazo}</h4>
        <button>Ver Detalhes</button>
        <button>Adicionar no Carrinho</button>
        <button id={this.props.id} onClick={this.deletarServico}>
          X
        </button>
      </Cartao>
    );
  }
}

export default Card;
