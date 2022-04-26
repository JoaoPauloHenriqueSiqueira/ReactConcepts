import { Component } from "react";
import './Contador.css'
import Display from './Display'
import Botoes from './Botoes'
import Form from './PassoForm'

class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 1
    }

    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         numero: this.props.numeroInicial
    //     }
    // }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    // changePasso = (e) =>{
    //     this.setState({
    //         passo: +e.target.value
    //     })
    // }

    changePasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }

    render() {
        return (
            <div className="contador">
                <h2>Contador</h2>
                <Form changePasso={this.changePasso} passo={this.state.passo} setPasso={this.changePasso}></Form>
                <Display numero={this.state.numero}></Display>
                <Botoes inc={this.inc} dec={this.dec}></Botoes>
            </div>
        )
    }
}


export default Contador;