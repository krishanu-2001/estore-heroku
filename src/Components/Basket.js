import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './Comp-CSS/Basket.css';
import BasketItems from './BasketItems';
import Nav from './Nav';
import './Comp-CSS/Nav.css';



const Basket=()=>{
  return (
    <>
  <div className="basket">
  <div className="header">
    Your Basket
    <div className="hl"></div>
  </div>
  <button className="offers">View Available Offers</button>
  
  <div className="description">
    <span className="left">ITEM DESCRIPTION</span>
    <span className="right">SUB TOTAL</span>
    <span className="right">UNIT PRICE</span>
    <span className="right">QUANTITY</span>
  </div>

  <BasketItems item="Capscicum" price="50" qty="02" />
  <BasketItems item="Potato" price="50" qty="03" />

  <div className="final">
  <Link to="/"><button className="cntshp">Continue Shopping</button></Link>
  <button className="cntshp">Empty Cart</button>
  <div className="payment">
  <h2 className="total">TOTAL</h2>
  <h2 className="amt">Rs. 250</h2>
  <br />
  <br />
  <br />
  <div className="hl1"></div>
  <button className="checkout">CHECKOUT..</button>

  </div>


  </div>
  


  </div>
  </>
  );
}

export default Basket;
