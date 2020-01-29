import React from 'react';

const SearchFunc = ({ onSearchChange }) => {
    return (
        <div className='pa2'>
            <input
            className = 'pa3 ba b--green bg-lightest-blue'
            type = 'search'
            placeholder = 'Search Robots'
            onChange =  { onSearchChange }
            />
        </div>
    );
}

export default SearchFunc;