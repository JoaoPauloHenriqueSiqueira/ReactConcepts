import React, { cloneElement } from "react";

const component = props => {
    return (
        <div>
            {/* {
                React.Children.map(props.children, (el) => {
                    return cloneElement(el, props);
                })
            } */}

            {props.children.map((el, i) => {
                return cloneElement(el, { ...props, key: i });
            })}

            {/* <FamiliaMembro nome="João" sobrenome={props.sobrenome}></FamiliaMembro> */}
            {/* <FamiliaMembro nome="Júlia" {...props}></FamiliaMembro> */}
            {/* <FamiliaMembro nome="Raquel" sobrenome="Carmelin"></FamiliaMembro> */}
        </div>
    )
}

export default component;