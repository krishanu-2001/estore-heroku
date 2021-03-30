import React, { Component } from 'react';
import Card from './Item-card';
import Axios from 'axios';
import './Comp-CSS/Allproducts.css';

class ItemNavigator extends Component {
  constructor(props) {
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      value: 0,
      list: [],
      backupList: []
    }
  }
 
  handleChange(event) {
    console.log(event.target.value);
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.state.value<=0){
      alert('Please enter a positive price rate only.')
    }
    else{
      this.setState({list: []})
      this.state.backupList.forEach(element => {
        if(element.price <= this.state.value)
        {
          let catVAr  = element.category;
        if(catVAr === "staples"){catVAr =  "rice"};
      this.setState(prevState=>({ list: [...prevState.list, <Card name={element.itemname} price = {element.price} category = {catVAr} />] }));
        }

      })
    }
  }

  componentDidMount() {
    Axios.get('https://mernstackestore.herokuapp.com/items/')
      .then((res) => {
          res.data.forEach(element => {
            let catVAr  = element.category;
            if(catVAr === "staples"){catVAr =  "rice"};
          this.setState(prevState=>({ list: [...prevState.list, <Card name={element.itemname} price = {element.price} category = {catVAr} />] }));
          });
          this.setState({backupList: res.data})
          console.log(this.state.list);

        });
  }

  /*<div className="col-lg-3">
        <div className="small">
        <button className="btn" type="submit" onClick={this.goSubmit}>Show All Products</button>
            <h2 className='head'>Apply Filter</h2>
                  <form className="Category-form2" onSubmit={this.handleSubmit}>
                    <span className="mid">Price
                     : <span className="Category-box">Rs 0</span>
                     - <span className="Category-box">Rs <input type="number" value={this.state.value} onChange={this.handleChange} /></span>
                     </span>
                    <br />
                    <br />
                    <br />
                     <button className="btn" value="Submit" type="submit">Apply</button>
                  </form>  
              </div>
              </div>  */
 
 
  render() {

    return (
      <>
      
      <div className="allPro-container"> 
      <div className="price-filter">
      <form className="price-filter-form" onSubmit={this.handleSubmit}>
                    <span >Price
                     : <span>Rs 0</span>
                     - <span >Rs </span><input style={{width:"15%", textAlign: "center"}} type="number" value={this.state.value} onChange={this.handleChange} />
                     </span>
                     <button value="Submit" type="submit">Apply</button>
                  </form>
                  </div>
      {this.state.list}
      </div>
      </>
    );
    
  }
}

export default ItemNavigator;
