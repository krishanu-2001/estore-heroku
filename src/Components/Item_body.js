
import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import items from "./Item-data";
import Card from './Item-card.js';


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
  };

  onSelect = key => {
      this.setState({ selected: key });
  }

  

  render() {
    const { selected } = this.state.selected;
    // Create menu from items
    const menu = this.menuItems;
 
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