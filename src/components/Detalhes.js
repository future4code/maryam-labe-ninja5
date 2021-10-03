import React from 'react';
import axios from 'axios';

class Detalhes extends React.Component {

    state = {
        servico: {}
    }

    componentDidMount = () => {
        this.pegaServicoPorId()
    }

    pegaServicoPorId = () => {
        const url = `https://labeninjas.herokuapp.com/jobs/${this.props.servicoId}`;
        const headers = {
            headers: {
              Authorization: "1725bb6a-854e-4830-a940-3ff06ea11ead",
            },
          };

        axios.get(url, headers)
        .then((response) => {
            this.setState({servico: response.data})
        })
        .catch((error) => {
            console.log(error)
        })
    }

    render () {

        const metodosDePagamento = this.state.servico.paymentMethods && this.state.servico.paymentMethods.map((metodo) => {
            return <li key={metodo}>{metodo}</li>
        })

        return (
            <div>
                {
                    this.state.servico.title && <h2>{this.state.servico.title}</h2>
                }
                {
                    this.state.servico.price && <p>{this.state.servico.price}</p>
                }
                {
                    this.state.servico.dueDate && <p>{this.state.servico.dueDate}</p>
                }
                {
                    this.state.servico.description && <p>{this.state.servico.description}</p>
                }
                <ul>
                    {metodosDePagamento}
                </ul>
                <button onClick={this.props.exibeContrato}>Voltar para lista</button>
            </div>
        )
    }
}

export default Detalhes