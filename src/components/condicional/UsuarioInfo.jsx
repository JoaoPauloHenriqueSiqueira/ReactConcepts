import If, { Else } from './if';

const component = props => {
    const usuario = props.usuario || {};

    return (
        <If test={usuario && usuario.nome}>
            <div>
                Seja bem vindo <strong>{usuario.nome}</strong>
                <Else>
                    Seja bem vindo Amigão =)
                </Else>
            </div>
        </If>

    )

}

export default component;