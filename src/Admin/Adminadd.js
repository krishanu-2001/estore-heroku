
import React, { Component } from 'react';
import { aliceblue } from 'color-name';
import {Switch, Route} from 'react-router-dom';
import Xnav from './xNav';
import { existsTypeAnnotation } from '@babel/types';
import axios from 'axios';
import './Admin-CSS/Admin1.css'

export class AdminAdd extends React.Component {
  constructor(props) {
    super(props);
  }

  state ={
    itemname:"",
    description:"",
    price:"",
    quantity:"",
    status: "",
  }

  handleChange_itemname = event => {
    this.setState({ itemname: event.target.value });
  }

  handleChange_desciption = event => {
    this.setState({ description: event.target.value });
  }

  handleChange_price = event => {
    this.setState({ price: event.target.value });
  }

  handleChange_quantity = event => {
    this.setState({ quantity: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    if(this.state.itemname === "" || this.state.description === "" ||
    this.state.price === "" || this.state.quantity === "") {
      console.log("empty field");
    }
    else{
      const item = {
        "itemname": this.state.itemname,
        "description": this.state.description,
        "price": this.state.price,
       // quantity: this.state.quantity,
      };
      console.log("item");
      console.log({item});
      axios.post('http://localhost:5000/items/add',
            item
            ,{headers: {'Content-Type': 'application/json'}})
            .then((res)=>{
                console.log(res);
                window.location.reload();
                alert("Successfully Added");
            })
            .catch((err)=>{
                console.log(err);
                alert("Item Not added");
            })
            
    }
    
  }
    

  render() {

        return (
            <div className="">
                
                <div className="col-md-9" style={{backgroundColor:"#dddddd", height:"550px","margin-top":"0px",}}>
                    <div style={{"text-align":"center", "color":"#555555","margin-top":"0px","padding":"40px",}}>
                        <h1>Add items here</h1>
                        <form style={{"border":"0",}} onSubmit={this.handleSubmit}>
                          <input type="text" name="itemname" placeholder="item name" style={{width:"40%",}} onChange={this.handleChange_itemname} /><br/>
                          <input type="text" name="description" placeholder="desciption" style={{width:"40%",}} onChange={this.handleChange_desciption} /><br />
                          <input type="text" name="price" placeholder="price" style={{width:"40%",}} onChange={this.handleChange_price} /><br />
                          <input type="text" name="quantity" placeholder="quantity" style={{width:"40%",}} onChange={this.handleChange_quantity} /><br />
                          <input type="submit" className="" className="xbtn" />
                        </form>
                    </div>
                </div>
            </div>   
    );
  }
}

export default AdminAdd;