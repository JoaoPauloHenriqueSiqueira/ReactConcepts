export default function ComParametro(props) {
    const nota = Math.ceil(props.nota);
    return (
        <div>
            <h2>{props.titulo}</h2>
            <h3>{props.subtitulo}</h3>
            <h3>{nota}</h3>
        </div>
    );

}