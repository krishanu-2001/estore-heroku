import axios from 'axios';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Comp-CSS/item-card.css'; 

export class Card extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeQuantity=this.onChangeQuantity.bind(this);
    this.onClick=this.onClick.bind(this);

    this.state={
      username: "kuchbhi",
      password: "123",
          itemname: this.props.name,
          price: this.props.price,
          quantity: 0,
    }
  }

  componentDidMount(){
    axios.get('http://localhost:3000/users/')
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
      quantity: e.target.value
    });
  }

  onClick(e){
    e.preventDefault();
      const Baskets={
        username: this.state.username,
        password: this.state.password,
        itemname: this.props.name,
        price: this.props.price,
        quantity: this.state.quantity
      }
  
    console.log(Baskets);
    axios.post('http://localhost:3000/users/add',Baskets)
    .then(res=> {
        console.log(res.data);
        console.log(Baskets);
        alert("Successfully Added!");
        window.location='/basket';
    })
    .catch((err)=>{
      console.log(err);
      alert("Item Not added");
  })
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
                        <form style={{border:"0px"}}>
                            <input type="number" min="0" placeholder="0" name="quantity" style={{"width":"60%"}} onChange={this.onChangeQuantity }/>
                            <input type="hidden" name="itemName" value={this.props.name}/>
                            <input onClick={this.onClick} 
                            type="submit" value="add to cart" name="submit" />
                        </form>
                    </div>
                </div>
        </div>

    );
  }
}

export default Card;