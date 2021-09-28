import React from 'react';

class Cadastro extends React.Component {

  state = {
    serviços: {
      id: 0,
      nome: "atalho",
      descricao: "encurta seu caminho",
      preco: 10,
      pagamento: 'boleto',
      prazo: ''
    }
  }

  dataNoEstado = (event) => {
    this.setState({prazo: event.target.value})
  }

  precoNoEstado = (event) => {
    this.setState({preco: event.target.value})
  }

  confereBotao = () => {
    let input = document.getElementById('qualquer')
    console.log(typeof(input))
    console.log(input)
  }

  render () {
    return (
      <div>
        <h2>Cadastre seu serviço</h2>
        <input 
        placeholder='Nome do serviço'
        
        />
        <input 
        placeholder='Descrição do serviço'
        
        />
        <input
        type='number' 
        placeholder='Preço do serviço'
        value={this.state.serviços.preco}
        onChange={this.precoNoEstado}
        />
        <select size='4'>
          <option value='Débito'>Cartão de Débito</option>
          <option value='Crédito'>Cartão de Crédito</option>
          <option value='PayPal'>PayPal</option>
          <option value='Boleto'>Boleto</option>
        </select>
        <input
        id='qualquer'
        type='date'
        value={this.state.serviços.prazo}
        onChange={this.dataNoEstado}
        />
        <button onClick={this.confereBotao}>Concluir cadastro</button>
      </div>
    )
  }
}

export default Cadastro