import React from 'react';
import Card from './Cards';
import styled from 'styled-components';
import axios from 'axios';

const LayoutCards = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
gap: 12px;
margin: 12px;
`

class Contrato extends React.Component {

    state = {
        cardsServicos: [],
        filtroMinimo: 0,
        filtroMaximo: 0,
        filtroNome: ''
    }

    componentDidMount = () => {
        this.pegaServicos()
    }

    preencheFiltroMinimo = (event) => {
        this.setState({filtroMinimo: event.target.value})
    }

    preencheFiltroMaximo = (event) => {
        this.setState({filtroMaximo: event.target.value})
    }

    preencheFiltroNome = (event) => {
        this.setState({filtroNome: event.target.value})
    }

    pegaServicos = () => {
        const url = 'https://labeninjas.herokuapp.com/jobs'
        const headers = {
            headers: {
                Authorization: '1725bb6a-854e-4830-a940-3ff06ea11ead'
            }
        }
        axios.get(url, headers)
        .then((response => {
            this.setState({cardsServicos: response.data.jobs})
        }))
        .catch((error) => {
            alert(error)
        })
    }        

    filtraServicos = () => {
        let filtrosMinimos = this.state.cardsServicos.filter((servico) => {
            if (this.state.filtroMinimo) {
                return servico.price >= this.state.filtroMinimo
            } else {
                return servico
            }
        })

        let filtrosMaximos = filtrosMinimos.filter((servico) => {
            if (this.state.filtroMaximo) {
                return servico.price <= this.state.filtroMaximo
            } else {
                return servico
            }
        })

        let filtrosNome = filtrosMaximos.filter((servico) => {
            if (this.state.filtroNome) {
                return servico.title.toLowerCase().includes(this.state.filtroNome.toLowerCase())
            } else {
                return servico
            }
        })
        return filtrosNome
    }

    render () {

        const servicosFiltrados = this.filtraServicos()
        console.log(servicosFiltrados)

        let cardsParaRenderizar = servicosFiltrados.map((servico) => {
            return <Card key = {servico.id}
            titulo = {servico.title}
            preco = {servico.price}
            prazo = {servico.dueDate}
            />
        })

        return (
            <div>
                <input
                type='search'
                placeholder="Preço mínimo"
                value = {this.state.filtroMinimo}
                onChange = {this.preencheFiltroMinimo}
                />
                <input
                type='search'
                placeholder='Preço máximo'
                value = {this.state.filtroMaximo}
                onChange = {this.preencheFiltroMaximo}
                />
                <input
                type='search'
                placeholder='Busca por nome'
                value = {this.state.filtroNome}
                onChange = {this.preencheFiltroNome}
                />
                <select>
                    <option value='Sem ordenação'>Sem ordenação</option>
                    <option value='Menor valor'>Menor valor</option>
                    <option value='Maior valor'>Maior valor</option>
                    <option value='Nome'>Nome</option>
                    <option value='Prazo'>Prazo</option>
                </select>
                <LayoutCards>
                    {cardsParaRenderizar}
                </LayoutCards>
            </div>
        )
    }
}

export default Contrato