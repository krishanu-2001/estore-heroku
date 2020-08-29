import React, { Component } from 'react';
import './Comp-CSS/individual-item.css';
import Axios from 'axios';
import Cookies from 'js-cookie';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';



var prices;

export class ItemHtml extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeQuantity=this.onChangeQuantity.bind(this);
    this.addToBasket=this.addToBasket.bind(this);
    this.state ={
      itemname: this.props.match.params.id,
      price: null,
      desc: null,
      quantity: 0,
    }
  }


  componentDidMount(){
    var itemnamePost = {itemname: this.state.itemname};
    Axios.post('http://localhost:5000/items/ind',{
      itemnamePost
    })
    .then(res=> {
        console.log(res.data);
        this.setState(
          {
            itemname: res.data.itemname,
            price: res.data.price,
            desc: res.data.description
          }
        )
    })
    .catch((err)=>{
      console.log(err);
  })

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
      Axios.post('http://localhost:5000/basket/add',{
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

  
    return (
      <>
      <div class="ind-container">
  <div class="ind-image">
    <img src={"https://source.unsplash.com/500x350/?"+this.state.itemname }/>
  </div>
  <div class="ind-product">
    <span className="ind-heading">{this.state.itemname}</span>
    <span className="ind-price">&#8377;{this.state.price}</span>
    <span className="ind-desc">{this.state.desc}</span>
    <form onSubmit={this.addToBasket} className="ind-form">
                            <label className="ind-quantity-label">Quantity: </label>
                                <input type="number" min="0" placeholder="0" name="quantity" className="ind-quantity" onChange={this.onChangeQuantity }/><br/>
                                <input type="hidden" name="itemName" value={this.props.name}/>
                                <input type="submit" value="Add To Cart" name="submit" className="addToCart-ind" />
                            </form>
  </div>
</div>
 
        
        </>
        
    );
  }
}

export default ItemHtml;

