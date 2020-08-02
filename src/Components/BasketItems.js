import React from 'react';

function BasketItems(props){
    return (
        <>
        <div className="food">
        <span className="basket_left">{props.item}</span>
        <span className="basket_right">Rs. {props.price*props.qty}</span>
        <span className="basket_right">Rs. {props.price}</span>
        <span className="basket_right">{props.qty}</span>
        </div>
        <div className="hl"></div>
        </>
    )
}

export default BasketItems;