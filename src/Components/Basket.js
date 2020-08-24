import React,{Component} from 'react';
import { useEffect } from 'react';
import {Link} from 'react-router-dom';
import './Comp-CSS/Basket.css';
import './Comp-CSS/Nav.css';
import Axios from 'axios';
import Cookies from 'js-cookie';
import BasketTable from './BasketList';


let sub=0;

var basArray = [];



var obj2 = [],cnt=0;


class Basket extends Component{
  constructor(props){
    super(props);


    this.state={items:[]};

  }

  componentDidMount(){
  console.log(Cookies.get('token'));
  }

  Total(){
    var totalPayTemp = 0;
     basArray.forEach((el)=>{
          totalPayTemp+= el.quantity*el.price;
      })
    return <span>{totalPayTemp}</span>;
  }

  render(){
  return (
    <>
  <div className="basket">
  <div className="header">
    <span className="head">Your Basket</span>
    <div className="hl"></div>
  <div className="final">
  <div className="bt-table-div"><BasketTable className="m"/></div>


  </div>

</div>
  </div>
  </>
  )
  }
}

export default Basket;
