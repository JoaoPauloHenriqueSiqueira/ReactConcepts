
import "./Card.css"

const component = props => {

    const style = {
        backgroundColor: props.color || "#F28705",
        borderColor: props.color || "#F28705"

    }

    return (
        <div className="card" style={style}>
            <div className="title">{props.titulo}</div>
            <div className="content">{props.children}</div>
        </div>
    )
}

export default component;