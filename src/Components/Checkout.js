import React from 'react';
import {Link} from 'react-router-dom'
import './Comp-CSS/Checkout.css';

const list = [
    {
      itemname: 'Potato',
      description: 'Will be added soon',
      price: 120,
      quantity: 786
    },
    {
      itemname: 'Mango',
      description: 'Will be added soon',
      price: 300,
      quantity: 786
    },
    {
      itemname: 'Chocolate',
      description: 'Will be added soon',
      price: 60,
      quantity: 786
    },
    {
      itemname: 'Milk',
      description: 'Will be added soon',
      price: 56,
      quantity: 786
    },
    {
      itemname: 'Chips',
      description: 'Will be added soon',
      price: 40,
      quantity: 786
    },
    {
      itemname: 'Lassi',
      description: 'Will be added soon',
      price: 300,
      quantity: 786
    },
    {
      itemname: 'Namkeen',
      description: 'Will be added soon',
      price: 60,
      quantity: 786
    },
    {
      itemname: 'Onion',
      description: 'Will be added soon',
      price: 56,
      quantity: 786
    }
  ]


  const cardList = [];
  const summaryList = [];


const Checkout = ()=>{

list.forEach((el)=>{
    cardList.push(<div className="prod-card">
    <img src ={"/items-images/"+el.itemname+".png"}/>
     <h2>{el.itemname}</h2>
     <h2>{el.price}</h2>
<h2>x{el.quantity}</h2>
     </div>);
})

list.forEach((el)=>{
    summaryList.push(
        <tr>
            <td>{el.itemname}</td>
    <td>{el.price*el.quantity}</td>
        </tr>
    )
})

var totalPay = 0;
list.forEach((el)=>{
    totalPay+= el.quantity*el.price;
})
return(
    <>
    <div className="main-checkout-container">
    <div className="checkout-container">
        <div className="prod-card">
            <h2>Product Image</h2>
            <h2>Product Name</h2>
            <h2>Price</h2>
            <h2>Quantity</h2>
        </div> 
       {cardList}
 </div>
 <div className="checkout-summary">
     <h3>Summary</h3>
    <table>
        {summaryList}
    </table>
<h3>TOTAL:- RS. {totalPay}</h3>
<div>
     <Link to='/paymentGateway'><button>PAY</button></Link>
 </div>
 </div>
</div>
</>
)
}

export default Checkout;