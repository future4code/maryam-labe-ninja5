import React from 'react';

class Lobby extends React.Component {
    render () {
        return (
            <div>
                <h2>LabeNinjas</h2>
				<h3>Sua sorte, nossa alegria!</h3>
				<button onClick={this.props.exibeCadastro}>Quero prestar serviços</button>
				<button onClick={this.props.exibeContrato}>Quero contratar serviços</button>
            </div>
        )
    }
}

export default Lobby