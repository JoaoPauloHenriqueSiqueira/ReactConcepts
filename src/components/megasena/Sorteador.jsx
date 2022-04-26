import { Component } from "react";
import Form from './Form'
import Display from './Display'

class Sorteador extends Component {

    state = {
        numero: this.props.numero || 6,
        sorteados: []
    }

    setNumero = (e) => {
        this.setState({
            numero: +e.target.value
        })
    }

    sortearNumeros = () => {

        let i = 0;
        let numeros = [];
        let qtd = this.state.numero;

        while (i < qtd) {
            let rndInt = Math.floor(Math.random() * 60) + 1

            if (!numeros.includes(rndInt)) {
                numeros.push(rndInt);
                i++;
            }

        }

        numeros = numeros.sort((a, b) => a - b);

        this.setState({
            sorteados: numeros.join(" / ")
        })
    }

    render() {

        return (
            <div>
                <div>SORTEADOR DA MEGA SENA</div>
                <Form numero={this.state.numero} setNumero={this.setNumero} sortearNumeros={this.sortearNumeros}></Form>
                <Display sorteados={this.state.sorteados}></Display>
            </div>
        )
    }
}

export default Sorteador;
