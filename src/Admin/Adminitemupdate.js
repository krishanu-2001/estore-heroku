
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
    category: "",
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

  handleChange_category = event => {
    this.setState({ category: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {match : { params }} = this.props;
    if(this.state.description === "" ||
    this.state.price === "" || this.state.quantity === "" || this.state.category==="") {
      alert('Please fill all details!');
    }
    else{
      const item = {
        "itemname": params.id,
        "description": this.state.description,
        "price": Number(this.state.price),
        "quantity": Number(this.state.quantity),
        "category": this.state.category,
      };
      console.log("item");
      console.log(item);
      axios.post(`http://localhost:5000/items/adminwebsite/update/${params.id}`,
        item
        ,{headers: {'Content-Type': 'application/json'}})
        .then((res)=>{
            console.log(res);
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
                        <h1 >Update </h1>
                        <form style={{"border":"0",}} onSubmit={this.handleSubmit}>
                          <input type="text" className="xText" name="itemname" value={this.state.person.itemname} onChange={this.handleChange_itemname} readonly/><br/>
                          <input type="text" className="xText" name="description" placeholder={this.state.person.description} onChange={this.handleChange_desciption} /><br />
                          <input type="text" className="xText" name="price" placeholder={this.state.person.price} onChange={this.handleChange_price} /><br />
                          <input type="text" className="xText" name="quantity" placeholder={this.state.person.quantity} onChange={this.handleChange_quantity} /><br />
                          <input type="text" className="xText" sname="category" placeholder={this.state.person.category} onChange={this.handleChange_category} /><br />
                          <input type="submit" className="xbtn"  />
                        </form>
                    </div>
                </div>
            </div>   
    );
  }
}

export default Xitemupdate;
