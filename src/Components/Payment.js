import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

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

const confirmOrder = ()=>{
    
}

const Payment = ()=>{
    return(
        <>
        <button onClick={confirmOrder}>Confirm Order</button>
        </>
    )

}

export default Payment;