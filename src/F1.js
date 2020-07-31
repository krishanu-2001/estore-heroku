
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import users from "./users-data";
import './F1.css';


// One item component
// selected prop will be passed
const MenuItem = ({text, selected}) => {
    return <div
      className={`menu-item ${selected ? 'active' : ''}`}
      ><div className="card">{text}</div></div>;
  };
   
  // All items component
  // Important! add unique key
  export const Menu = (users, selected) =>
    users.map((el) => {
      const {name} = el;
      return <MenuItem text={name} key={name} selected={selected} />;
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
   
  const selected = "😃 William";

export class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['Pizza', 'Potato', 'Ketchup', 'Graphs'],
      model: "version1",
    };
    this.menuItems = Menu(users, selected);
  }

  state = {
      selected
  };

  onSelect = key => {
      this.setState({ selected: key });
  }

  render() {
    const { selected } = this.state;
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