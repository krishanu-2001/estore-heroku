
import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import items from "./Item-data";
import Card from './Item-card.js';
import axios from 'axios';
import { timeout } from 'q';


// One item component
// selected prop will be passed
const MenuItem = ({text, price, selected}) => {
    return <div
      className={`menu-item ${selected ? 'active' : ''}`}
      ><div className="card"><Card name={text} price={price}/></div></div>;
  };
   
  // All items component
  // Important! add unique key
  export const Menu = (items, selected) =>
    items.map((el) => {
      const {name} = el;
      const {price} = el;
      return <MenuItem text={name} price={price} key={name} selected={selected} />;
    });
   
  const myStyle = {
    color: "#000000",
    backgroundColor: "#dddddd",
    padding: "10px",
    fontFamily: "Arial"
    };


  const Arrow = ({ text, myStyle }) => {
    return (
      <div
        style={myStyle}
      >{text}</div>
    );
  };

  var xtemp = [];
   
   
  const ArrowLeft = Arrow({ text: '<', myStyle: myStyle });
  const ArrowRight = Arrow({ text: '>', myStyle: myStyle });   
  const selected = "potato";

export class ItemNavigator extends React.Component {

  constructor(props) {
    super(props);
    this.menuItems = Menu(items, selected);
  }

  state = {
      selected,
      persons: [],
      menuItems: xtemp,
  };

  onSelect = key => {
      this.setState({ selected: key });
  }

  xparser(xres) {
    var temp = [];
    for(var i=0; i<xres.data.length; i++){
      temp.push({
        name: xres.data[i].itemname,
        price: xres.data[i].price,
      });
     
    } 
    xtemp = temp;
    var xfacts = Menu(xtemp, this.state.selected);
    this.setState({menuItems: xfacts});
    return temp;
  }



  componentWillMount() {
    axios.get('http://localhost:5000/items/')
      .then(res => {
        this.setState({ persons: res.data});
        this.xparser(res);
        });
  }

  render() {
    const { selected } = this.state.selected;
    // Create menu from items
    const menu = this.state.menuItems;

    if(this.menuItems.length === 0 || menu.length === 0 || menu === undefined){
      return (<div>/loading</div>);

    }
    if(this.state.persons.length === 0){
      return (<span>/loading...</span>);
    }
    return (
      <div className="card">
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}

export default ItemNavigator;
