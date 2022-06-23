import React from 'react';
import './TodoSearch.css';

export function TodoSearch(){
    
    const [searchValue, setSearchValue] = React.useState('');

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    }

    return[
        <input
            className='TodoSearch'
            placeholder="Escribe"
            value={searchValue}
            onChange={onSearchValueChange}
        />,
        <p>{searchValue}</p>
    ];
}