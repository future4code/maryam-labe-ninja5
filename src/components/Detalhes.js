import React from "react";
import axios from "axios";
import styled from "styled-components";

const VerDetalhes = styled.div`
  background-color: black;
  color: red;
  padding: 8px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  li {
    list-style-type: none;
  }

  button {
    background-color: red;
    border: 1px solid red;
    border-radius: 12px;
    font-style: italic;

    :hover {
      font-size: 20px;
    }
  }
`;

class Detalhes extends React.Component {
  state = {
    servico: {},
  };

  componentDidMount = () => {
    this.pegaServicoPorId();
  };

  pegaServicoPorId = () => {
    const url = `https://labeninjas.herokuapp.com/jobs/${this.props.servicoId}`;
    const headers = {
      headers: {
        Authorization: "1725bb6a-854e-4830-a940-3ff06ea11ead",
      },
    };

    axios
      .get(url, headers)
      .then((response) => {
        this.setState({ servico: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const metodosDePagamento =
      this.state.servico.paymentMethods &&
      this.state.servico.paymentMethods.map((metodo) => {
        return <li key={metodo}>{metodo}</li>;
      });

    return (
      <VerDetalhes>
        {this.state.servico.title && (
          <h2>Serviço: {this.state.servico.title}</h2>
        )}
        {this.state.servico.price && <p>Preço: {this.state.servico.price}</p>}
        {this.state.servico.dueDate && (
          <p>Prazo: {this.state.servico.dueDate}</p>
        )}
        {this.state.servico.description && (
          <p>Descrição: {this.state.servico.description}</p>
        )}
        <ul>{metodosDePagamento}</ul>
        <button onClick={this.props.exibeContrato}>Voltar para lista</button>
      </VerDetalhes>
    );
  }
}

export default Detalhes;
