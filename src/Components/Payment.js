import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Cookies from 'js-cookie';
import {useHistory} from 'react-router-dom';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';


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
      store.addNotification({
        title: 'Payment Successfull',
        message: "Your order has been placed",
        type: 'success',                         // 'default', 'success', 'info', 'warning'
        insert: "top",
        container: 'top-right',                // where to position the notifications
        animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
        animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
        dismiss: {
          duration: 5000,
          onScreen: true,
          pauseOnHover: true
        }
      })
      Axios.post('http://localhost:5000/basket/clear',{
    },
    {headers: {
      'x-auth-token': Cookies.get('token')
    }})
    .then(res=> {
        console.log(res);
        Cookies.set('basket', "[]");
        history.push('/');
    })
  
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