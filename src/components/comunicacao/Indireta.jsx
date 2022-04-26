import { useState } from 'react';
import IndiretaFilho from './IndiretaFilho'

const Component = props => {

    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)


    function fornecerInformacoes(nomeParam, idadeParam, nerdParam) {
        setNome(nomeParam)
        setIdade(idadeParam)
        setNerd(nerdParam)
    }

    return (
        <div>
            <div>
                <span>{nome}</span>
                <span>{idade}</span>
                <span>{nerd ? "NERD" : "NÃO NERD"}</span>

            </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}

export default Component;