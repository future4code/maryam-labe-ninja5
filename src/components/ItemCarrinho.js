import React from "react";
import styled from "styled-components";

const Servico = styled.div`
  border-bottom: 2px solid red;
  padding: 12px;
  background-color: black;
  color: red;
  text-align: center;
  font-style: italic;
`;

class ItemCarrinho extends React.Component {
  render() {
    return (
      <div>
        <Servico>
          <h2>{this.props.nome}</h2>
          <p>{this.props.preco}</p>
          <button onClick={this.props.remove}>Remover</button>
        </Servico>
      </div>
    );
  }
}

export default ItemCarrinho;
