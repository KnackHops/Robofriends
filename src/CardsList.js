import React from 'react';
import Cards from './Cards';

const CardsList = ({ profile }) => {
    return (
        <div>
            {
                profile.map((user) => {
                    return (
                        <Cards 
                        key={user.id}
                        name={user.name}
                        email={user.email}
                        id={user.id}
                        />
                    )
                })
            }
        </div>
    );
}

export default CardsList;