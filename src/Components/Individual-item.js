<<<<<<< HEAD
=======
import axios from 'axios';
import {Link} from 'react-router-dom';
import Cookies from 'js-cookie';
import './Comp-CSS/item-card.css';
>>>>>>> dc47952ab0a5ddca0bbcbdc200ba19fd9d6a5d83
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
<<<<<<< HEAD
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
=======

    this.onChangeQuantity=this.onChangeQuantity.bind(this);
    this.onClick=this.addToBasket.bind(this);

    this.state={
      quantity: 0,
}
  }


  getVAl(){
    var token = "Potato";
    return token;
  }

  componentDidMount(){
    axios.get('http://localhost:5000/items/')
    .then(response=>{
      console.log(response);
      response.data.map(curr=>{
        if(curr.itemname===this.props.match.params.id)
        {
          prices=curr.price;
        }
      })
    }
    )
  }
  

  onChangeQuantity(e){
    this.setState({
      quantity: e.target.valueAsNumber
    });
  }

  addToBasket(e){
    console.log(this.props);
    e.preventDefault();
    
      const newBasketItem={
        itemname: this.props.match.params.id,
        price: prices,
>>>>>>> dc47952ab0a5ddca0bbcbdc200ba19fd9d6a5d83
        quantity: this.state.quantity
      }
  console.log(newBasketItem);

    if(newBasketItem.quantity !== 0)
    {
<<<<<<< HEAD
      Axios.post('http://localhost:5000/basket/add',{
=======
      axios.post('http://localhost:5000/basket/add',{
>>>>>>> dc47952ab0a5ddca0bbcbdc200ba19fd9d6a5d83
      newBasketItem,
    },
    {headers: {
      'x-auth-token': Cookies.get('token')
    }})
    .then(res=> {
        console.log(res.data);
        Cookies.set('basket', JSON.stringify(res.data.basket));
        console.log('Cookies Set', Cookies.get('basket'));
<<<<<<< HEAD
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
}
  
=======
    })
    .catch((err)=>{
      console.log(err);
  })
    }
}

>>>>>>> dc47952ab0a5ddca0bbcbdc200ba19fd9d6a5d83
  render() {

  
    return (
      <>
<<<<<<< HEAD
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
 
=======
      <div classNameName="myStyleCard1">    
                <div>
                  <div classNameName="row">
                    <div classNameName="col-sm-3 col" style={{"height":"410px",}}>
                      <div classNameName="myBox1" >
                        <h2>{name}</h2>
                        <hr />
                        <h4>{description}</h4>
                        <div classNameName="myForm1">
                          <div>
                              <br></br>
                              <form style={{border:"0px"}} onSubmit={this.onClick}>
                                  <input type="number" min="0" placeholder="0" name="quantity" style={{"width":"60%", }} onChange={this.onChangeQuantity }/>
                                  <input type="hidden" name="itemName" value={name}/>
                                  <input type="submit" value="add to cart" name="submit" />
                              </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div classNameName="col-sm-9 col">
                      <div style={{"textAlign":"center"}}>
                      <img src = {("/items-images/"+name+".png")} alt={"/items-images/"+name+".png"} classNameName="myImage1"/>
                      </div>
                      <div style={{"textAlign":"left", "marginTop":"3em", "position":"relative","left":"25%", }}>
                        <img src="/items-images/veg.png" style={{"background-color":"white","width":"20px",}}/><br />
                      </div>
                      <div style={{"textAlign":"center", "marginTop":"2em", }}>
                      <span style={{"fontSize":"2em",}}>{name}</span>
                      </div>
                    </div>
                  </div>
                </div>
        </div>
      
>>>>>>> dc47952ab0a5ddca0bbcbdc200ba19fd9d6a5d83
        
        </>
        
    );
  }
}

export default ItemHtml;

