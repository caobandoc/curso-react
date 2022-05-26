import React from 'react';

export function TodoItem(props){
    return(
        <li>
            <span>C</span>
            <p>{props.text}</p>
            <span>x</span>
        </li>
    );
}