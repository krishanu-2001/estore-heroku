import React, { useEffect } from 'react';
import {Link} from 'react-router-dom'
import './Comp-CSS/Checkout.css';
import Cookies, { set } from 'js-cookie';

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
  ];

  var basArray = [];

const Checkout = ()=>{

  const [displayCardList, setDisplayCardList] = React.useState([]);
  const [summaryList, setSummaryList] = React.useState([]);
  const [totalPay, setTotalPay] = React.useState([0]);

  

  useEffect(()=>{
    const userBasketSTR = Cookies.get('basket');
    const userBasket = JSON.parse(userBasketSTR);

          var holder = {};

          userBasket.forEach(function(element) {
            if (holder.hasOwnProperty(element.itemname)) {
              holder[element.itemname] = parseInt(holder[element.itemname]) + parseInt(element.quantity);
          
            } else {
              holder[element.itemname] = element.quantity;
            }
          });

          let map= new Map();
      userBasket.map(element=>{
        map.set(element.itemname,element.price);
      });

      var obj2 = [];
        
        for (var prop in holder) {
          obj2.push({ itemname: prop, quantity: holder[prop], price: map.get(prop)});
        }
        
        console.log(obj2.length);
        console.log(obj2);         
        basArray = [];
          obj2.forEach((element,index) => {
              let remItemName = element.itemname;
              basArray.push({
                  'itemname': element.itemname,
                  'quantity': element.quantity,
                  'price': element.price,
              })
          })

          var listTemp1 = [];
        
          basArray.forEach((el)=>{
            listTemp1.push(<div className="prod-card">
            <img src ={"/items-images/"+el.itemname+".png"}/>
             <h2>{el.itemname}</h2>
             <h2>{el.price}</h2>
        <h2>x{el.quantity}</h2>
             </div>);
        })

        var listTemp2 = [];
        basArray.forEach((el)=>{
          listTemp2.push(
              <tr>
                  <td>{el.itemname}</td>
          <td>{el.price*el.quantity}</td>
              </tr>
          )
      })
      
      var totalPayTemp = 0;
      basArray.forEach((el)=>{
          totalPayTemp+= el.quantity*el.price;
      })

         setDisplayCardList(listTemp1);
         setSummaryList(listTemp2);
         setTotalPay(totalPayTemp);

  },[]);

  const confirmOrder = ()=>{
    console.log('Order Confirmed');
    console.log(basArray);
    Cookies.set('order',JSON.stringify(basArray));
  }





return(
    <>
    <span className = "checkout-heading">Confirm Order</span>
    <div className="main-checkout-container">
    <div className="checkout-container">
        <div className="prod-card">
            <h2>Product Image</h2>
            <h2>Product Name</h2>
            <h2>Price</h2>
            <h2>Quantity</h2>
        </div> 
       {displayCardList}
 </div>
 <div className="checkout-summary">
     <h3>Summary</h3>
    <table>
        {summaryList}
    </table>
<h3>TOTAL:- RS. {totalPay}</h3>
<div className="co-summary-btn">
     <Link to='/paymentGateway' onClick={confirmOrder}><button>PAY</button></Link>
     <Link to='/basket'><button>Back</button></Link>
 </div>
 </div>
</div>
</>
)
}

export default Checkout;