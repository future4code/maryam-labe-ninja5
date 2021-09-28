import React from 'react';

class Cadastro extends React.Component {

  confereBotao = () => {
    alert('OK')
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
        
        />
        <select size='4'>
          <option value='Cartão de Débito'>Cartão de Débito</option>
          <option value='Cartão de Crédito'>Cartão de Crédito</option>
          <option value='PayPal'>PayPal</option>
          <option value='Boleto'>Boleto</option>
        </select>
        <input
        type='date'

        />
        <button onClick={this.confereBotao}>Concluir cadastro</button>
      </div>
    )
  }
}

export default Cadastro