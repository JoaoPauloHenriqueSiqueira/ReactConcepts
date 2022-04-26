import alunos from '../../data/alunos'

const component = props => {

    const lista = alunos.map((el, i) => {
        return (<li key={el.id}>
            {++i})  - {el.nome} -> {el.nota}
        </li>)
    })

    return (
        <div>
            <ul style={{listStyle: 'none'}}>
                {lista}
            </ul>
        </div>
    )
}

export default component;