import React from 'react';

function Item_body (Title, Price, Quantity) {
    return(
        <>
        <h2>Item {Title}</h2>
        <h3>Item {Price}</h3>
        <h4>Item {Quantity}</h4>
        </>
    );
}

export default Item_body;