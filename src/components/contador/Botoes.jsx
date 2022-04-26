
const Botoes = props => {
    
    return (
        <div>
            <button className="inc" onClick={props.inc}>+</button>
            <button className="dec" onClick={props.dec}>-</button>
        </div>
    )
}

export default Botoes;