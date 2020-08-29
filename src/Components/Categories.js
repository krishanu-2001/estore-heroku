import React, { Component } from 'react';
import Axios from 'axios';
import Card from './Item-card';
import './Comp-CSS/Categories.css';

const list=[];
const staple = [];const stationery = [];const fruits = [];const beverages = [];const household = [];const snacks = [];const beauty = [];

const frunveg = React.createRef();
const staples = React.createRef();
const snanam = React.createRef();
const drinbev = React.createRef();
const clenho = React.createRef();
const beanhy = React.createRef();
const staery = React.createRef();

const scrollCatNav = (catRef) => {

  switch(catRef) {
    case 'frunveg':
      window.scrollTo(0, frunveg.current.offsetTop-120);
      break;
    case 'staples':
      window.scrollTo(0, staples.current.offsetTop-120);
      break;
      case 'snanam':
        window.scrollTo(0, snanam.current.offsetTop-120);
        break;
        case 'drinbev':
          window.scrollTo(0, drinbev.current.offsetTop-120);
      break;
      case 'clenho':
        window.scrollTo(0, clenho.current.offsetTop-120);
      break;
      case 'beanhy':
        window.scrollTo(0, beanhy.current.offsetTop-120);
      break;
      case 'staery':
        window.scrollTo(0, staery.current.offsetTop-120);
      break;
    default:
     console.log('lol');
  }
}

export class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      staple, fruits, snacks, stationery, beverages, household, beauty  
    };
  }

  componentDidMount() {
    Axios.get('http://localhost:5000/items/')
      .then((res) => {
        res.data.forEach(element => {
          let catVAr  = element.category;
            if(catVAr === "staples"){catVAr =  "rice"};
          if(element.category === "staples"){ this.setState(prevState=>({ staple: [...prevState.staple, <Card name={element.itemname} price = {element.price} category = {catVAr} />] })); };
          if(element.category === "fruits"){ this.setState({ fruits: [...this.state.fruits, <Card name={element.itemname} price = {element.price} category = {catVAr} />] }); };
          if(element.category === "snacks"){ this.setState({ snacks: [...this.state.snacks,<Card name={element.itemname} price = {element.price} category = {catVAr} />] }); };
          if(element.category === "stationery"){ this.setState({ stationery: [...this.state.stationery, <Card name={element.itemname} price = {element.price} category = {catVAr} />] }); };
          if(element.category === "beverage"){ this.setState({ beverages: [...this.state.beverages, <Card name={element.itemname} price = {element.price} category = {catVAr} />] }); };
          if(element.category === "cleaning"){ this.setState({ household: [...this.state.household, <Card name={element.itemname} price = {element.price} category = {catVAr} />] }); };
          if(element.category === "beauty"){ this.setState({ beauty: [...this.state.beauty, <Card name={element.itemname} price = {element.price} category = {catVAr} />] }); }
        });
        });
  }

  
  
  render() {
    


    return (
        <>
        <div className="category-container">
          <div className="side-cat-nav">
            <span>Categories</span>
            <ul>
              <li onClick={()=>scrollCatNav('frunveg')}>Fruits and Vegetables</li>
              <li onClick={()=>scrollCatNav('staery')}>Stationery</li>
              <li onClick={()=>scrollCatNav('staples')}>Staples</li>
              <li onClick={()=>scrollCatNav('snanam')}>Snacks</li>
              <li onClick={()=>scrollCatNav('drinbev')}>Beverages</li>
              <li onClick={()=>scrollCatNav('clenho')}>Household</li>
              <li onClick={()=>scrollCatNav('beanhy')}>Hygeine</li>

            </ul>
          </div>
          <div className="category-items">
          <div className="cat-heading" ref={staples}><div>Your Daily Staples</div></div><hr className="cat-hr"/>
          <div className="cat-sub-container">{this.state.staple}</div>
        <div className="cat-heading" ref={frunveg}><div>Fruits and Vegetable Corner</div></div><hr className="cat-hr"/>
          <div className="cat-sub-container">{this.state.fruits}</div>
        <div className="cat-heading" ref={snanam}><div>The Snack Corner</div></div><hr className="cat-hr"/>
          <div className="cat-sub-container">{this.state.snacks}</div>
        <div className="cat-heading" ref={staery}><div>Stationery</div></div><hr className="cat-hr"/>
          <div className="cat-sub-container">{this.state.stationery}</div>
        <div className="cat-heading" ref={drinbev}><div>Drinks and Beverages</div></div><hr className="cat-hr"/>
          <div className="cat-sub-container">{this.state.beverages}</div>
        <div className="cat-heading" ref={clenho}><div>Cleaning and Household</div></div><hr className="cat-hr"/>
          <div className="cat-sub-container">{this.state.household}</div>
        <div className="cat-heading" ref={beanhy}><div>Beauty and Hygiene</div></div><hr className="cat-hr"/>
        <div className="cat-sub-container">{this.state.beauty}</div>
          </div>
        </div>
        </>
    )
  }
}

export default Categories;
