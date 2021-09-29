import React from 'react';
import axios from 'axios';

let recebeMetodosDePagamento = []

class Cadastro extends React.Component {

  state = {
    serviços: [{}],
    title:'',
    description:"",
    price:0,
    paymentMethods:[""],
    dueDate:""
  }

  cadastraServiço = () => {
    const novoServico = {
      title: this.state.title,
      description:this.state.description,
      price:Number(this.state.price),
      paymentMethods:this.state.paymentMethods,
      dueDate:this.state.dueDate
    }
    const novaListaServicos = [...this.state.serviços, novoServico]

    this.setState({serviços: novaListaServicos})

    const url = 'https://labeninjas.herokuapp.com/jobs'
    const headers = {
      headers: {
        Authorization: '1725bb6a-854e-4830-a940-3ff06ea11ead'
      }
    }
    const body = novoServico

    axios.post(url, body, headers)
    .then((response) => {
      console.log(response)
    })
    .catch((error => {
      console.log(error)
    }))
  }

  dataNoEstado = (event) => {
    this.setState({dueDate: event.target.value})
  }

  precoNoEstado = (event) => {
    this.setState({price: event.target.value})
  }

  nomeNoEstado = (event) => {
    this.setState({title: event.target.value})
  }

  descricaoNoEstado = (event) => {
    this.setState({description: event.target.value})
  }

  pagamentoNoEstado = (event) => {
    recebeMetodosDePagamento.push(event.target.value)
    this.setState({paymentMethods: recebeMetodosDePagamento})
  }

  render () {
    // console.log(this.state.serviços)
    return (
      <div>
        <h2>Cadastre seu serviço</h2>
        <input 
        placeholder='Nome do serviço'
        value={this.state.title}
        onChange={this.nomeNoEstado}
        />
        <input 
        placeholder='Descrição do serviço'
        value={this.state.description}
        onChange={this.descricaoNoEstado}
        />
        <input
        type='number' 
        placeholder='Preço do serviço'
        value={this.state.price}
        onChange={this.precoNoEstado}
        />
        <select 
        size='4' 
        multiple
        >
          <option onClick={this.pagamentoNoEstado} value='Débito'>Cartão de Débito</option>
          <option onClick={this.pagamentoNoEstado} value='Crédito'>Cartão de Crédito</option>
          <option onClick={this.pagamentoNoEstado} value='PayPal'>PayPal</option>
          <option onClick={this.pagamentoNoEstado} value='Boleto'>Boleto</option>
        </select>
        <input
        id='qualquer'
        type='date'
        value={this.state.dueDate}
        onChange={this.dataNoEstado}
        />
        <button onClick={this.cadastraServiço}>Concluir cadastro</button>
      </div>
    )
  }
}

export default Cadastro