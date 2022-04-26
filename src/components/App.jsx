import '../index.css'
import './App.css'

import React from 'react'
import Primeiro from '../components/basicos/Primeiro'
import ComParametro from '../components/basicos/ComParametro'
import Fragment from '../components/basicos/Fragment'
import Random from '../components/basicos/Aleatorio'
import Card from '../components/layout/Card'
import Familia from '../components/basicos/Familia'
import FamiliaMembro from '../components/basicos/FamiliaMembro'
import ListaAlunos from '../components/repeticao/ListaAlunos'
import TabelaProdutos from '../components/repeticao/TabelaProdutos'
import ParImpar from '../components/condicional/ParImpar'
import UsuarioInfo from '../components/condicional/UsuarioInfo'
import Direta from '../components/comunicacao/Direta'
import Indireta from '../components/comunicacao/Indireta'
import Input from '../components/formulario/Input'
import Contador from '../components/contador/Contador'
import MegaSena from '../components/megasena/Sorteador'


const app = () => {
    return (
        <div className="app">
            <h1>Fundamentos React</h1>
            <div className='cards'>
                <Card titulo="#13 MegaSena" color="#327355">
                    <MegaSena></MegaSena>
                </Card>
                <Card titulo="#12 Contador" color="#424242">
                    <Contador numeroInicial={121} passoInicial={3}></Contador>
                </Card>
                <Card titulo="#11 Componente Controlado" color="#F29F05">
                    <Input></Input>
                </Card>
                <Card titulo="#10 Comunicação Indireta" color="#F2CB05">
                    <Indireta></Indireta>
                </Card>
                <Card titulo="#09 Comunicação Direta" color="#F23030">
                    <Direta></Direta>
                </Card>
                <Card titulo="#08 Condicional" color="#080">
                    <ParImpar numero={21}></ParImpar>
                    <UsuarioInfo usuario={{ nome: 'João' }}></UsuarioInfo>
                    <UsuarioInfo usuario={{ email: 'joao@gmail.com' }}></UsuarioInfo>

                </Card>
                <Card titulo="#07 Lista Produtos" color="#1D594E">
                    <TabelaProdutos></TabelaProdutos>
                </Card>
                <Card titulo="#06 Lista Alunos" color="#F23030">
                    <ListaAlunos></ListaAlunos>
                </Card>
                <Card titulo="#05 Componentes com Filhos" color="#F2CB05">
                    <Familia sobrenome="Siqueira">
                        <FamiliaMembro nome="João"></FamiliaMembro>
                        <FamiliaMembro nome="Júlia"></FamiliaMembro>
                        <FamiliaMembro nome="Raquel" sobrenome="Carmelin"></FamiliaMembro>
                    </Familia>
                </Card>
                <Card titulo="#04 Desafio Aleatório" color="#F29F05">
                    <Random min={100} max={80} />
                </Card>

                <Card titulo="#03 Fragmento">
                    <Fragment />
                </Card>

                <Card titulo="#02 Passando parametro">
                    <ComParametro
                        titulo="asdsad"
                        subtitulo="ddddd"
                        nota={9.5}
                    ></ComParametro>
                </Card>

                <Card titulo="#01 Primeiro Componente">
                    <Primeiro></Primeiro>
                </Card>
            </div>
        </div>
    )
}

export default app;