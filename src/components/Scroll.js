import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: "scroll", height: '75vh', border: '1px solid black', padding: '2rem'}}>
            {props.children}
        </div>
    );
}

export default Scroll;