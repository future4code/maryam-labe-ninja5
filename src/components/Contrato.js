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
        cardsServicos: []
    }

    componentDidMount = () => {
        this.pegaServicos()
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
            console.log(error)
        })
    }

    render () {

        let cardsParaRenderizar = this.state.cardsServicos.map((servico) => {
            return <Card key = {servico.id}
            titulo = {servico.title}
            preco = {servico.description}
            prazo = {servico.price}
            />
        })

        return (
            <div>
                <input
                placeholder="Preço mínimo"
                />
                <input
                placeholder='Preço máximo'
                />
                <input
                placeholder='Busca por nome'
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