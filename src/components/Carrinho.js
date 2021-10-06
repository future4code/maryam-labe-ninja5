import React from 'react';
import ItemCarrinho from './ItemCarrinho';

class Carrinho extends React.Component {
    render () {

        const servicoCarrinho = this.props.servicosCarrinho.map(servico => {
            return <ItemCarrinho key={servico.id}
                    nome={servico.title}
                    preco={servico.price}
                    remove={() => this.props.removeCarrinho(servico)}
                    />
        })

        return (
            <div>
                {servicoCarrinho}
            </div>
        )
    }
}

export default Carrinho