import React from 'react';
import styled from 'styled-components';

const Cartao = styled.div`
border: 1px solid black;
background-color: grey;
`

class Card extends React.Component {
    render () {
        return (
            <Cartao>
                <h3>Nome</h3>
                <h4>Preço</h4>
                <h4>Prazo</h4>
                <button>Ver Detalhes</button>
                <button>Adicionar no Carrinho</button>
            </Cartao>
        )
    }
}

export default Card