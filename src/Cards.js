import React from 'react';

const Cards = ({ name, email, id }) => {
    return (
    <div>
        <img alt="roboprofile" src = {`https://robohash.org/${id}`}></img>
        <div>
            <h1>{name}</h1>
            <p>{email}</p>
        </div>
    </div>);
}

export default Cards;