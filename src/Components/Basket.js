import React,{Component} from 'react';
import { useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom';
import './Comp-CSS/Basket.css';
import './Comp-CSS/Nav.css';
import Axios from 'axios';
import Cookies from 'js-cookie';
import BasketTable from './BasketList';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import {Redirect} from 'react-router';


class Basket extends Component{
  constructor(props){
    super(props);
    this.clearBasket=this.clearBasket.bind(this);
    this.gotoCheckout=this.gotoCheckout.bind(this);
    this.handler = this.handler.bind(this);
    this.state = {
      temp: 1,
      total: 0
    }
  }

  handler() {
    let temArr = JSON.parse(Cookies.get('basket'));
    let tempTotal = 0;
    temArr.forEach(element => {
      tempTotal += element.price*element.quantity
    });
    this.setState({total: tempTotal});
  }
  gotoCheckout(){
    if(Cookies.get('basket')!=='[]')
    {
     
      this.props.history.push('/checkout');
    }
    else{
      
      store.addNotification({
        title: 'Error Occured !',
        message: "Basket Empty",
        type: 'danger',                         // 'default', 'success', 'info', 'warning'
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
    }
  }

  clearBasket(){
    Axios.post('http://localhost:5000/basket/clear',{
    },
    {headers: {
      'x-auth-token': Cookies.get('token')
    }})
    .then(res=> {
        console.log(res);
        Cookies.set('basket', "[]");
        store.addNotification({
          title: 'Done !',
          message: "Basket Cleared",
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
        let temArr = JSON.parse(Cookies.get('basket'));
    let tempTotal = 0;
    temArr.forEach(element => {
      tempTotal += element.price*element.quantity
    });
    this.setState({total: tempTotal});
        this.setState({temp: Math.random()})
    })
    .catch((err)=>{
      console.log(err);
  })
  }

  componentDidMount(){
    console.log(JSON.parse(Cookies.get('basket')));
    let temArr = JSON.parse(Cookies.get('basket'));
    let tempTotal = 0;
    temArr.forEach(element => {
      tempTotal += element.price*element.quantity
    });
    this.setState({total: tempTotal});
  }


  render(){
  return (
    <>
  <div className="basket-container">
    <span className="basket-head">Your Basket</span>
    <hr style={{color: "black"}}/>
  <div className="basket-body">
  <div className="bt-table-div"><BasketTable lolProp={this.state.temp} action={this.handler}/></div>
    </div><hr/>
    <div style={{display: 'flex', flexDirection: 'row', textDecoration: 'none', fontFamily: "'Alata', sans-serif",padding: '10px'}}>
    <div style={{width: '50%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', textDecoration: 'none'}}>
    <Link to='/' className='basket-action' style={{textDecoration: 'none'}}>Continue Shopping</Link>
    <button className='basket-action' onClick={this.clearBasket}>Empty Basket</button>
    </div>
    <div style={{width: '50%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
  <span>Total &#8377;{this.state.total}</span>
      <button onClick={this.gotoCheckout} style={{textDecoration: 'none',padding: '5px', borderRadius: '3px', background: 'blue', color: 'white'}}>Checkout</button>
    </div>
</div>
</div>
  </>
  )
  }
}

export default Basket;
