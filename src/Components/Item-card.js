import axios from 'axios';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Cookies from 'js-cookie';
import './Comp-CSS/item-card.css';


export class Card extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeQuantity=this.onChangeQuantity.bind(this);
    this.onClick=this.addToBasket.bind(this);

    this.state={
          itemname: this.props.name,
          price: this.props.price,
          quantity: 0,
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/users/')
    .then(response=>{
      this.setState({
      username: this.state.username,
      password: this.state.password,
      basket:[
        {
          itemname: this.state.name,
          price: this.state.price,
          quantity: this.state.quantity,
        }
      ]
    })
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
        itemname: this.props.name,
        price: this.props.price,
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
    })
    .catch((err)=>{
      console.log(err);
  })
    }
}



  render() {
    const menu = this.menuItems;

    return (
      <div class="prod-card-container">
      <div class="prod-card-hp">
        <div class="prod-card-head">
          <img src={("/items-images/"+this.props.name+".png")} alt={"/items-images/"+this.props.name+".png"}/>
        </div>
        <div class="prod-card-body">
          <div class="product-desc">
          
            <span class="product-title">
            <Link to={"./individual/" + this.props.name}><b>{this.props.name}</b></Link>
            </span>
          </div>
          <hr className = "card-hr"/>
          <div class="product-properties">
          <div className="myForm">
                        <div>
                            <br></br>
                            <form onSubmit={this.onClick} className="card-form">
                            <label className="card-quantity-label">Quantity: </label>
                                <input type="number" min="0" placeholder="0" name="quantity" className="card-quantity" onChange={this.onChangeQuantity }/><br/>
                                <input type="hidden" name="itemName" value={this.props.name}/>
                                <input type="submit" value="Add To Cart" name="submit" className="addToCart" />
                            </form>
                        </div>
                    </div>
            <span class="product-price">
                    RS.<b>{this.props.price}</b>
                  </span>
          </div>
        </div>
      </div>
    </div>

    );
  }
}

export default Card;