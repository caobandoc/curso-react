import React from 'react';
import './TodoSearch.css';

export function TodoSearch({searchValue, setSearchValue}){
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    }

    return(
        <input
            className='TodoSearch'
            placeholder="Escribe"
            value={searchValue}
            onChange={onSearchValueChange}
        />
    );
}