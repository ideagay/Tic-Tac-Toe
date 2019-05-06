import React from 'react';
import './Square.css';

function Square(props)  {
    let className = 'square';
    if (props.active) {
        className += ' active';
    }
    return (<div className={className}
        onClick={props.onClick}>
            {props.value}
        </div>);
}

export default Square;