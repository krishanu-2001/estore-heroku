import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Cookies from 'js-cookie';
import {useHistory} from 'react-router-dom';

var orderBasket = [];

const Payment = ()=>{

  const history = useHistory();

const confirmOrder = ()=>{
  console.log('Confirm order ran', orderBasket);
 if(orderBasket === []){
history.push('/')
 }
 else{
  Axios.post('http://localhost:5000/order/confirm',{
    orderBasket,
  },
  {headers: {
    'x-auth-token': Cookies.get('token')
  }})
  .then(res=> {
      console.log(res.data);
      history.push('/');
  })
  .catch((err)=>{
    console.log(err);
})  
}
}

  
  useEffect(()=>{
 const orderBasketSTR = Cookies.get('order');
 orderBasket = JSON.parse(orderBasketSTR);
Cookies.remove('order');
  });
    return(
        <>
        <button onClick={confirmOrder}>Confirm Order</button>
        </>
    )

}

export default Payment;