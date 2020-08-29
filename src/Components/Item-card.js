import axios from 'axios';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Cookies from 'js-cookie';
import './Comp-CSS/item-card.css';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';


export class Card extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeQuantity=this.onChangeQuantity.bind(this);
    this.addToBasket=this.addToBasket.bind(this);

    this.state={
          itemname: this.props.name,
          price: this.props.price,
          quantity: 0,
    }
  }



  onChangeQuantity(e){
    this.setState({
      quantity: e.target.valueAsNumber
    });
  }

  addToBasket(e){
    e.preventDefault();
      const newBasketItem={
        itemname: this.state.itemname,
        price: this.state.price,
        quantity: this.state.quantity
      }
  console.log(newBasketItem);

    if(newBasketItem.quantity !== 0)
    {
      axios.post('http://localhost:5000/basket/add',{
      newBasketItem,
    },
    {headers: {
      'x-auth-token': Cookies.get('token')
    }})
    .then(res=> {
        console.log(res.data);
        Cookies.set('basket', JSON.stringify(res.data.basket));
        console.log('Cookies Set', Cookies.get('basket'));
          store.addNotification({
            title: 'Item added to cart',
            message: newBasketItem.quantity +" "+newBasketItem.itemname+" "+ "were added to cart",
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
        
    })
    .catch((err)=>{
      console.log(err);
      store.addNotification({
        title: 'Error Occurred !',
        message: "Please LogIn to Add to cart",
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
  })
    }
    else{
      store.addNotification({
        title: 'Warning!',
        message: "Please fill quantity",
        type: 'warning',                         // 'default', 'success', 'info', 'warning'
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



  render() {
    const menu = this.menuItems;

    return (
      <div class="prod-card-container">
      <div class="prod-card-hp">
        <div class="prod-card-head">
          <img src={"https://source.unsplash.com/100x100/?"+this.props.category} alt={"/items-images/"+this.props.name+".png"}/>
        </div>
        <div class="prod-card-body">
          <div class="product-desc">
          
            <span class="product-title">
            <Link to={"./individual/" + this.props.name}><b>{this.props.name}</b></Link>
            </span>
          </div>
          <hr className = "card-hr"/>
          <div class="product-properties">
          <span class="product-price">
          &#8377;<b>{this.props.price}</b>
                  </span>
          <div className="myForm">
                        <div>
                            <form onSubmit={this.addToBasket} className="card-form">
                            <label className="card-quantity-label">Quantity: </label>
                                <input type="number" min="0" placeholder="0" name="quantity" className="card-quantity" onChange={this.onChangeQuantity }/><br/>
                                <input type="hidden" name="itemName" value={this.props.name}/>
                                <input type="submit" value="Add To Cart" name="submit" className="addToCart" />
                            </form>
                        </div>
                    </div>
          </div>
        </div>
      </div>
    </div>

    );
  }
}

export default Card;