import React, { Component } from 'react';
import Card from './Item-card'
import ScrollMenu from 'react-horizontal-scrolling-menu';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import './Comp-CSS/item-body.css';
import Categories from './Categories';
import Allproducts from './All_Products';
import './Comp-CSS/Allproducts.css';

const list = [];
let x=50;
let l=0;


const MenuItem = ({text, price, selected}) => {
  return <div
    className={`menu-item ${selected ? 'active' : ''}`}
    ><div className="card"><Card name={text} price = {price} /></div></div>;
};
 

const Menu = (list, selected,till) =>
  list.map(el => {
    const {itemname} = el;
    const {price} = el;
    console.log(till);
    if(l===0)
    {
      return <MenuItem text={itemname} key={itemname} price={price} selected={selected} />;
    }
    else if(el.price<=till){ 
    return <MenuItem text={itemname} key={itemname} price={price} selected={selected} />;
    }
    else{
      return(
        <>
        </>
      )
    }
  });
 
 
const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};
 
 
const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });
 
const selected = 'item1';
const menuItems = [];

class ItemNavigator extends Component {
  constructor(props) {
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goSubmit = this.goSubmit.bind(this);
  }
 
  
  state = {
    selected,
    menuItems,
    list,
    value: 0,
  };
 
  handleChange(event) {
    console.log(event.target.value);
    this.setState({value: event.target.value});
  }

  goSubmit(event){
    l=0;
    x=1000000;
    event.preventDefault();
    this.setState({menuItems: Menu(this.state.list, selected,x)})
  }

  

  handleSubmit(event) {
    l=1;
    if(this.state.value<=0){
      alert('Please enter a positive price rate only.')
    }
    else{
    x=parseInt(this.state.value);
    event.preventDefault();
    console.log(this.state.value);
    this.setState({menuItems: Menu(this.state.list, selected,this.state.value)});
    l=0;

    return(
      <>
      {console.log("value "+this.state.value)}
      </>
    )
    }
  //  window.location.reload(false);
  }

  componentDidMount() {
    Axios.get('http://localhost:5000/items/')
      .then((res) => {
          this.setState({list: res.data});
          console.log(this.state.list);
          this.setState({menuItems: Menu(this.state.list, selected,this.state.value)})
        });
  }

  
 
 
  render() {
    const { selected } = this.state;
    const menu = this.state.menuItems;
    const list = this.state.list;

    return (
      <>
      <div className="header">
            <h1 style={{textAlign:"center"}}>All Products</h1>
            </div>
            
      <div className="col-lg-3">
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
              </div>
              <div className="col-lg-9">
              <div className="bodys">
          <ScrollMenu
            data={this.state.menuItems}
            arrowLeft={ArrowLeft}
            arrowRight={ArrowRight}
            selected={selected}
            onSelect={this.onSelect}
          />
          </div>
            
        </div>
              
        
  
      </>
    );
    
  }
}

export default ItemNavigator;
