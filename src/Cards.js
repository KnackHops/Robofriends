import React from 'react';

const Cards = ({ name, email, id }) => {
    return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img alt="roboprofile" src = {`https://robohash.org/${id}?200x200`}></img>
        <div>
            <h1>{name}</h1>
            <p>{email}</p>
        </div>
    </div>);
}

export default Cards;