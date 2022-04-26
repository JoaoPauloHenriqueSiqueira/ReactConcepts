
const component = props => {
    const sorteou = props.sorteados.length > 0;

    return (
        <div>
            {sorteou ?
                <div>
                    <h3>Números Sorteados</h3>
                    {props.sorteados}
                </div>
                :
                ''}
        </div>
    )
}

export default component;