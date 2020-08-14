
import React, { Component } from 'react';
import { aliceblue } from 'color-name';
import {Switch, Route, Link} from 'react-router-dom';
import Xnav from './xNav';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Admin-CSS/Admin1.css'

export class Xitemupdate extends React.Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
}

  state = {
    name: this.props.match.params.id,
    persons: [],
    person: [],
    itemname:"",
    description:"",
    price:"",
    quantity:"",
    status: "",
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
    const {match : { params }} = this.props;
    if(this.state.description === "" ||
    this.state.price === "" || this.state.quantity === "") {
      console.log("empty field");
    }
    else{
      const item = {
        "itemname": params.id,
        "description": this.state.description,
        "price": this.state.price,
        "quantity": this.state.quantity,
      };
      console.log("item");
      console.log({item});
      axios.post(`http://localhost:5000/items/adminwebsite/update/${params.id}`,
        item
        ,{headers: {'Content-Type': 'application/json'}})
        .then((res)=>{
            console.log(res);
            window.location.reload();
            alert("Successfully updated");
        })
        .catch((err)=>{
            console.log(err);
            alert("Item Not updated");
        })
            
    }
    
  }

  componentDidMount() {
    const {match : { params }} = this.props;

    axios.get(`http://localhost:5000/items/adminwebsite/update/${params.id}`)
    .then(res => {
    this.setState({ person: res.data});
    console.log(this.state.person);
    })
    .catch(err => console.log(err) )

    }

  render() {
        
        return (
            <div className="">
                <div className="col-md-9" style={{backgroundColor:"#dddddd", height:"550px","margin-top":"0px",}}>
                    <div style={{"text-align":"center", "color":"#555555","margin-top":"0px","padding":"40px",}}>
                        <h1>Update </h1>
                        <form style={{"border":"0",}} onSubmit={this.handleSubmit}>
                          <input type="text" name="itemname" value={this.state.person.itemname} style={{width:"400px",}} onChange={this.handleChange_itemname} readonly/><br/>
                          <input type="text" name="description" placeholder={this.state.person.description} style={{width:"400px",}} onChange={this.handleChange_desciption} /><br />
                          <input type="text" name="price" placeholder={this.state.person.price} style={{width:"400px",}} onChange={this.handleChange_price} /><br />
                          <input type="text" name="quantity" placeholder={this.state.person.quantity} style={{width:"400px",}} onChange={this.handleChange_quantity} /><br />
                          <input type="submit" className="xbtn"  />
                        </form>
                    </div>
                </div>
            </div>   
    );
  }
}

export default Xitemupdate;
