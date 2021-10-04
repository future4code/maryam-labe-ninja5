import React from "react";
import styled from "styled-components";

const LobbyTitulo = styled.div`
  background-color: black;
  color: red;
  padding: 20px;
  font-size: 20px;
  text-align: center;
  font-style: italic;
`;

const Botoes = styled.div`
  background-color: black;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  button {
    margin: 12px;
    width: 200px;
    height: 100px;
    font-size: 24px;
    background-color: red;
    border: 1px solid red;
    border-radius: 12px;
    font-style: italic;

    :hover {
      background-color: darkred;
    }
  }
`;

class Lobby extends React.Component {
  render() {
    return (
      <div>
        <LobbyTitulo>
          <h2>LabeNinja Serviços</h2>
        </LobbyTitulo>
        <Botoes>
          <button onClick={this.props.exibeCadastro}>
            Quero prestar serviços
          </button>
          <button onClick={this.props.exibeContrato}>
            Quero contratar serviços
          </button>
        </Botoes>
      </div>
    );
  }
}

export default Lobby;
