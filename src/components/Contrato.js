import React from "react";
import Card from "./Cards";
import styled from "styled-components";
import axios from "axios";

const LayoutCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 12px;

  background-color: black;
`;

const Titulo = styled.div`
  background-color: black;
  color: red;
  font-style: italic;
  text-align: center;
  padding: 20px;
`;

const Inputs = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    border: 2px solid red;
    margin: 12px;
    font-style: italic;
  }

  select {
    margin: 12px;
  }
`;

class Contrato extends React.Component {
  state = {
    cardsServicos: [],
    filtroMinimo: "",
    filtroMaximo: "",
    filtroNome: "",
    ordem: "",
  };

  componentDidMount = () => {
    this.pegaServicos();
  };

  preencheOrdem = (event) => {
    this.setState({ ordem: event.target.value });
  };

  preencheFiltroMinimo = (event) => {
    this.setState({ filtroMinimo: event.target.value });
  };

  preencheFiltroMaximo = (event) => {
    this.setState({ filtroMaximo: event.target.value });
  };

  preencheFiltroNome = (event) => {
    this.setState({ filtroNome: event.target.value });
  };

  handleDeletarServico = () => {
    this.pegaServicos();
  };

  pegaServicos = () => {
    const url = "https://labeninjas.herokuapp.com/jobs";
    const headers = {
      headers: {
        Authorization: "1725bb6a-854e-4830-a940-3ff06ea11ead",
      },
    };
    axios
      .get(url, headers)
      .then((response) => {
        this.setState({ cardsServicos: response.data.jobs });
      })
      .catch((error) => {
        alert(error);
      });
  };

  filtraServicos = () => {
    let filtrosMinimos = this.state.cardsServicos.filter((servico) => {
      if (this.state.filtroMinimo) {
        return servico.price >= this.state.filtroMinimo;
      } else {
        return servico;
      }
    });

    let filtrosMaximos = filtrosMinimos.filter((servico) => {
      if (this.state.filtroMaximo) {
        return servico.price <= this.state.filtroMaximo;
      } else {
        return servico;
      }
    });

    let filtrosNome = filtrosMaximos.filter((servico) => {
      if (this.state.filtroNome) {
        return servico.title
          .toLowerCase()
          .includes(this.state.filtroNome.toLowerCase());
      } else {
        return servico;
      }
    });

    let ordenacaoDeServicos = filtrosNome.sort((a, b) => {
      switch (this.state.ordem) {
        case "Menor valor":
          return a.price - b.price;

        case "Maior valor":
          return b.price - a.price;

        case "Nome":
          if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1;
          }
          if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1;
          }
          return 0;

        case "Prazo":
          return new Date(a.dueDate) - new Date(b.dueDate);

        default:
          return this.state.cardsServicos;
      }
    });

    return ordenacaoDeServicos;
  };

  render() {
    const servicosFiltrados = this.filtraServicos();

    let cardsParaRenderizar = servicosFiltrados.map((servico) => {
      return (
        <Card
          key={servico.id}
          id={servico.id}
          titulo={servico.title}
          preco={servico.price}
          prazo={servico.dueDate}
          servicoId={servico.id}
          adicionaCarrinho={() => this.props.onClick(servico)}
          handleDeletarServico={this.handleDeletarServico}
          detalhes={this.props.mostraDetalhes}
        />
      );
    });

    return (
      <div>
        <Titulo>
          <h2>Servi??os</h2>
        </Titulo>
        <Inputs>
          <input
            type="search"
            placeholder="Pre??o m??nimo"
            value={this.state.filtroMinimo}
            onChange={this.preencheFiltroMinimo}
          />
          <input
            type="search"
            placeholder="Pre??o m??ximo"
            value={this.state.filtroMaximo}
            onChange={this.preencheFiltroMaximo}
          />
          <input
            type="search"
            placeholder="Busca por nome"
            value={this.state.filtroNome}
            onChange={this.preencheFiltroNome}
          />
          <select onChange={this.preencheOrdem}>
            <option value="Sem ordena????o">Sem ordena????o</option>
            <option value="Menor valor">Menor valor</option>
            <option value="Maior valor">Maior valor</option>
            <option value="Nome">Nome</option>
            <option value="Prazo">Prazo</option>
          </select>
        </Inputs>
        <LayoutCards>{cardsParaRenderizar}</LayoutCards>
      </div>
    );
  }
}

export default Contrato;
