import lista from '../../data/produtos'

const component = () => {

    const body = lista.map(
        (el, i) => {
            return (
                <tr key={el.id}
                    className={i % 2 === 0 ? 'par' : 'impar'}
                >
                    <td>{el.id}</td><td>{el.nome}</td><td>{el.valor}</td>
                </tr>
            )
        }
    )
    return (
        <table>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Nome</td>
                    <td>Preço</td>
                </tr>
            </thead>
            <tbody>
                {body}
            </tbody>
        </table>
    )



}

export default component;