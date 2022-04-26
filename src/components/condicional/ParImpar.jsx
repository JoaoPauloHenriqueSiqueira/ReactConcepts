
const component = (props) => {

    const isPar = props.numero % 2 === 0;
    return (
        <div>
            {isPar}
            {isPar ?
                <div>Par</div>
                :
                <div>Ímpar</div>
            }
        </div>
    );
}

export default component;