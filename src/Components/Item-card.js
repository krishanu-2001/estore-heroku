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
        <div className="myStyleCard" >
                <div>
                    <img src = {("/items-images/"+this.props.name+".png")} alt={"/items-images/"+this.props.name+".png"} className="myImage"/>
                </div>
                <hr></hr>
                <div style={{"marginBottom":"20px",}}>
                    <Link to={"./individual/" + this.props.name}><div style={{"fontSize":"1.5em", "marginBottom":"200px,"}} >{this.props.name}</div></Link>
                </div>
                <div className="myBanner">
                    <div className="myBannertext">
                    1 Packet - Rs {this.props.price}
                    </div>
                </div>
                <div className="myForm">
                    <div>
                        <br></br>
                        <form onSubmit={this.onClick} style={{border:"0px"}}>
                            <input type="number" min="0" placeholder="0" name="quantity" style={{"width":"60%"}} onChange={this.onChangeQuantity }/>
                            <input type="hidden" name="itemName" value={this.props.name}/>
                            <input type="submit" value="add to cart" name="submit" />
                        </form>
                    </div>
                </div>
        </div>

    );
  }
}

export default Card;