import React from 'react';

class ItemCarrinho extends React.Component {
    render () {
        return (
            <div>
                <h2>{this.props.nome}</h2>
                <p>{this.props.preco}</p>
                <button onClick={this.props.remove}>Remover</button>
            </div>
        )
    }
}

export default ItemCarrinho