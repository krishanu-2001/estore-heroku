import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Cookies from 'js-cookie';
import {useHistory} from 'react-router-dom';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import Swal from 'sweetalert2';


var orderBasket = [];



const Payment = ()=>{

  const history = useHistory();

const confirmOrder = ()=>{
  console.log('Confirm order ran', orderBasket);
 if(orderBasket === []){
history.push('/')
 }
 else{
  Axios.post('https://mernstackestore.herokuapp.com/order/confirm',{
    orderBasket,
  },
  {headers: {
    'x-auth-token': Cookies.get('token')
  }})
  .then(res=> {
      console.log(res.data);
      Swal.fire(
        'Order Placed',
        '',
        'success'
      )
      Axios.post('https://mernstackestore.herokuapp.com/basket/clear',{
    },
    {headers: {
      'x-auth-token': Cookies.get('token')
    }})
    .then(res=> {
        console.log(res);
        Cookies.set('basket', "[]");
        history.push('/myOrders');
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