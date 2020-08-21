import React, { Component } from 'react';
import Card from './Item-card'
import ScrollMenu from 'react-horizontal-scrolling-menu';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import './Comp-CSS/item-body.css';
import Categories from './Categories';
import Allproducts from './All_products';

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
 
const frunveg = React.createRef();
const staples = React.createRef();
const snanam = React.createRef();
const drinbev = React.createRef();
const clenho = React.createRef();
const beanhy = React.createRef();

const scrollCat = (catRef) => {

  switch(catRef) {
    case 'frunveg':
      window.scrollTo(0, frunveg.current.offsetTop);
      break;
    case 'staples':
      window.scrollTo(0, staples.current.offsetTop);
      break;
      case 'snanam':
        window.scrollTo(0, snanam.current.offsetTop);
        break;
        case 'drinbev':
          window.scrollTo(0, drinbev.current.offsetTop);
      break;
      case 'clenho':
        window.scrollTo(0, clenho.current.offsetTop);
      break;
      case 'beanhy':
        window.scrollTo(0, beanhy.current.offsetTop);
      break;
    default:
     console.log('lol');
  }
}

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
    Axios.get('http://localhost:5000/items/')
      .then((res) => {
          this.setState({list: res.data});
          console.log(this.state.list);
          this.setState({menuItems: Menu(this.state.list, selected)})
        });
  }

  
 
 
  render() {
    const { selected } = this.state;
    const menu = this.state.menuItems;
    const list = this.state.list;

    return (
      <>
      <div className="cat-heading"><div>Season's Must-Haves</div></div><hr className="cat-hr"/>
        <div>
          <ScrollMenu
            data={menu}
            arrowLeft={ArrowLeft}
            arrowRight={ArrowRight}
            selected={selected}
            onSelect={this.onSelect}
          />
        </div>

        <div className="cat-heading" ref={frunveg}><div>Fruits and Vegetable Corner</div></div><hr className="cat-hr"/>
        <div>
          <ScrollMenu
            data={menu}
            arrowLeft={ArrowLeft}
            arrowRight={ArrowRight}
            selected={selected}
            onSelect={this.onSelect}
          />
        </div>

        <div className="cat-heading" ref={staples}><div>Your Daily Staples</div></div><hr className="cat-hr"/>
        <div>
          <ScrollMenu
            data={menu}
            arrowLeft={ArrowLeft}
            arrowRight={ArrowRight}
            selected={selected}
            onSelect={this.onSelect}
          />
        </div>

        <div className="cat-heading" ref={snanam}><div>The Snack Corner</div></div><hr className="cat-hr"/>
        <div>
          <ScrollMenu
            data={menu}
            arrowLeft={ArrowLeft}
            arrowRight={ArrowRight}
            selected={selected}
            onSelect={this.onSelect}
          />
        </div>

        <div className="cat-heading" ref={drinbev}><div>Drinks and Beverages</div></div><hr className="cat-hr"/>
        <div>
          <ScrollMenu
            data={menu}
            arrowLeft={ArrowLeft}
            arrowRight={ArrowRight}
            selected={selected}
            onSelect={this.onSelect}
          />
        </div>

        <div className="cat-heading" ref={clenho}><div>Cleaning and Household</div></div><hr className="cat-hr"/>
        <div>
          <ScrollMenu
            data={menu}
            arrowLeft={ArrowLeft}
            arrowRight={ArrowRight}
            selected={selected}
            onSelect={this.onSelect}
          />
        </div>

        <div className="cat-heading" ref={beanhy}><div>Beauty and Hygiene</div></div><hr className="cat-hr"/>
        <div>
          <ScrollMenu
            data={menu}
            arrowLeft={ArrowLeft}
            arrowRight={ArrowRight}
            selected={selected}
            onSelect={this.onSelect}
          />
        </div>
  
      </>
    );
    
  }
}

export default ItemNavigator;
export {scrollCat};