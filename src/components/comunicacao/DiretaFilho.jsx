

const component = props => {
    return (
        <div>
            <div>{props.texto}</div>
            <div>{props.numero}</div>
            <div>{props.bool ? 'TRUE' : 'FALSE'}</div>
        </div>
    )

}

export default component;