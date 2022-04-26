
const random = (props) => {
    const { min, max } = props;
    return (
        <div>
            <h2>Valor Aleatório:</h2>
            <p>{Math.floor(Math.random() * (max - min + 1)) + min}</p>
        </div>
    );
}

export default random;
