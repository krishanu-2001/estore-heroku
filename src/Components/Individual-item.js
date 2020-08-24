import axios from 'axios';
import {Link} from 'react-router-dom';
import Cookies from 'js-cookie';
import './Comp-CSS/item-card.css';
import React, { Component } from 'react';
import './Comp-CSS/individual-item.css';

var prices;

export class ItemHtml extends React.Component {
  constructor(props) {
    super(props);

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
    var name = this.props.match.params.id;
    var description = "please add description from server here";
    const myStyleCard = {
      color: "black",
      backgroundColor: "#ffffff",
      padding: "10px",
      margin: "10px",
      fontFamily: "Arial",
      height: "100%",
      width: "100%",
      border:"4px solid #dddddd",
      overflow: "hidden",
    };
    const myImage = {
      color: "white",
      backgroundColor: "white",
      fontFamily: "Arial",
      height: "300px",
      width: "400px",
    };
    const myBanner = {
      textAlign:"left",
      marginTop: "0px",
      border:"2px solid green",
    };
    const myBannertext = {
      fontFamily: "Arial",
      padding: "5px",
      backgroundColor: "#22aa22",
    };
    const myForm = {
      marginTop: "10px",
      fontFamily: "Arial",
      color:"red",
      padding: "5px",
      backgroundColor: "#dddddd",
      border:"0px",
    };
    const myBox = {
      marginTop: "10px",
      fontFamily: "Arial",
      color:"black",
      padding: "5px",
      backgroundColor: "#dddddd",
      border:"0px",
      height:"100%",
    };
    return (
      <>
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
      
        
        </>
        
    );
  }
}

export default ItemHtml;

