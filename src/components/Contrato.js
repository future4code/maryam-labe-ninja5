import React from 'react';
import Card from './Cards';
import styled from 'styled-components';

const LayoutCards = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
gap: 12px;
margin: 12px;
`

class Contrato extends React.Component {
    render () {
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
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </LayoutCards>
            </div>
        )
    }
}

export default Contrato