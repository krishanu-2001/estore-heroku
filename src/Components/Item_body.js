import React, { Component } from 'react';
import Card from './Item-card'
import ScrollMenu from 'react-horizontal-scrolling-menu';
import Axios from 'axios';
import './Comp-CSS/item-body.css';
 
const list = [];
 
const MenuItem = ({text, price, selected}) => {
  return <div
    className={`menu-item ${selected ? 'active' : ''}`}
    ><div className="card"><Card name={text} price = {price} /></div></div>;
};
 

export const Menu = (list, selected) =>
  list.map(el => {
    const {itemname} = el;
    const {price} = el;
 
    return <MenuItem text={itemname} key={itemname} price={price} selected={selected} />;
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
  }
 
  
  state = {
    selected,
    menuItems,
    list
  };
 
  onSelect = key => {
    this.setState({ selected: key });
  }

  componentDidMount() {
    Axios.get('http://localhost:3000/items/')
      .then((res) => {
          this.setState({list: res.data});
          console.log(this.state.list);
          this.setState({menuItems: Menu(this.state.list, selected)})
        });        
  }
 
 
  render() {
    const { selected } = this.state;
    const menu = this.state.menuItems;
 
    return (
      <div className="App">
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