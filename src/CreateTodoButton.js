import React from 'react';
import './CreateTodoButton.css';

export function CreateTodoButton(props){
    const onClickButton = (msg) => {
        alert(msg);
    }
    return(
        <button className='CreateTodoButton'
        onClick={() => onClickButton('Aqui abrir el modal')}>
            +
        </button>
    );
}