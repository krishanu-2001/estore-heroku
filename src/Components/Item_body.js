import React, { Component } from 'react';
import Card from './Item-card'
import ScrollMenu from 'react-horizontal-scrolling-menu';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import './Comp-CSS/item-body.css';

const list = [];
 
const MenuItem = ({text, price, selected, category}) => {
  return <div
    className={`menu-item ${selected ? 'active' : ''}`}
    ><div className="card"><Card name={text} price = {price} category = {category} /></div></div>;
};
 

export const Menu = (list, selected) =>
  list.map(el => {
    const {itemname} = el;
    const {price} = el;
    const {category} = el;
    if(category === "staples"){return <MenuItem text={itemname} key={itemname} price={price} category="rice" selected={selected} /> }
    else{ return <MenuItem text={itemname} key={itemname} price={price} category={category} selected={selected} />;}
 
    
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
const staple = [];const stationery = [];const fruits = [];const beverages = [];const household = [];const snacks = [];const beauty = [];
 
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
    staple, fruits, snacks, stationery, beverages, household, beauty,

  };
 
  onSelect = key => {
    this.setState({ selected: key });
  }

  componentDidMount() {
    Axios.get('http://localhost:5000/items/')
      .then((res) => {
        res.data.forEach(element => {
          if(element.category === "staples"){ this.setState(prevState=>({ staple: [...prevState.staple, element] })); };
          if(element.category === "fruits"){ this.setState({ fruits: [...this.state.fruits, element] }); };
          if(element.category === "snacks"){ this.setState({ snacks: [...this.state.snacks, element] }); };
          if(element.category === "stationery"){ this.setState({ stationery: [...this.state.stationery, element] }); };
          if(element.category === "beverage"){ this.setState({ beverages: [...this.state.beverages, element] }); };
          if(element.category === "cleaning"){ this.setState({ household: [...this.state.household, element] }); };
          if(element.category === "beauty"){ this.setState({ beauty: [...this.state.beauty, element] }); }
        });
        });
  }

  render() {
    const { selected } = this.state;

    return (
      <>
      
      <div className="cat-heading" ref={staples}><div>Your Daily Staples</div></div><hr className="cat-hr"/>
        <div className="scroller-div-hp">
          <ScrollMenu
            data={Menu(this.state.staple, selected)}
            arrowLeft={ArrowLeft}
            arrowRight={ArrowRight}
            selected={selected}
            onSelect={this.onSelect}
          />
        </div>

        <div className="cat-heading" ref={frunveg}><div>Fruits and Vegetable Corner</div></div><hr className="cat-hr"/>
        <div className="scroller-div-hp">
          <ScrollMenu
            data={Menu(this.state.fruits, selected)}
            arrowLeft={ArrowLeft}
            arrowRight={ArrowRight}
            selected={selected}
            onSelect={this.onSelect}
          />
        </div>

        <div className="cat-heading" ref={snanam}><div>The Snack Corner</div></div><hr className="cat-hr"/>
        <div className="scroller-div-hp">
          <ScrollMenu
            data={Menu(this.state.snacks, selected)}
            arrowLeft={ArrowLeft}
            arrowRight={ArrowRight}
            selected={selected}
            onSelect={this.onSelect}
          />
        </div>

        <div className="cat-heading"><div>Stationery</div></div><hr className="cat-hr"/>
        <div  className="scroller-div-hp">
          <ScrollMenu
            data={Menu(this.state.stationery, selected)}
            arrowLeft={ArrowLeft}
            arrowRight={ArrowRight}
            selected={selected}
            onSelect={this.onSelect}
          />
        </div>

        <div className="cat-heading" ref={drinbev}><div>Drinks and Beverages</div></div><hr className="cat-hr"/>
        <div className="scroller-div-hp">
          <ScrollMenu
            data={Menu(this.state.beverages, selected)}
            arrowLeft={ArrowLeft}
            arrowRight={ArrowRight}
            selected={selected}
            onSelect={this.onSelect}
          />
        </div>

        <div className="cat-heading" ref={clenho}><div>Cleaning and Household</div></div><hr className="cat-hr"/>
        <div className="scroller-div-hp">
          <ScrollMenu
            data={Menu(this.state.household, selected)}
            arrowLeft={ArrowLeft}
            arrowRight={ArrowRight}
            selected={selected}
            onSelect={this.onSelect}
          />
        </div>

        <div className="cat-heading" ref={beanhy}><div>Beauty and Hygiene</div></div><hr className="cat-hr"/>
        <div className="scroller-div-hp">
          <ScrollMenu
            data={Menu(this.state.beauty, selected)}
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