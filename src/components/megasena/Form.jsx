
const component = props => {

    return (
        <div>
            <label htmlFor="quantidadeNumeros">Quantidade de números a serem sorteados</label>
            <input type="number" value={props.numero} onChange={props.setNumero} min={6} max={15}></input>
            <button onClick={props.sortearNumeros}>Sortear</button>
        </div>
    )
}

export default component;