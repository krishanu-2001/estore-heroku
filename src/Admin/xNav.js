import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import '../Components/Comp-CSS/Nav.css';


function xNav() {

   
    const xbtn = {
      backgroundColor: "#3333da",
    };
    return(
        <>
        <div className="nav"><Link to='/'>
        <img src='/logo.png' className="logo" onClick/>
        </Link><Link to='/'>
        <span className="shopName">La Fresco</span>
        </Link>
        <div>
        <div className="buttons">
        <Link to='/'><button className="btn" style={xbtn}>All Products</button></Link>
        <div className="dropDown">
        <button className="btn" style={xbtn}>Categories</button>
        <div class="dropdown-content">
            <a href="#">vegetable</a>
            <a href="#">fruits</a>
            <a href="#">sweets</a>
            <a href="#">namkeen</a>
            <a href="#">toiletries</a>
            <a href="#">stationary</a>
        </div>
        </div>
        <Link to='/help'><button className="btn" style={xbtn}>Help</button></Link>
        <Link to='/contact-us'><button className="btn" style={xbtn}>Contact Us</button></Link>
        </div>

        <div className="search">
        <a href="#"><img src="https://img.icons8.com/pastel-glyph/64/000000/search--v2.png" className="searchImg" /></a>
        <input className="input" placeholder={'Search for Products'}></input>
        </div>

        <div className="info">
            <img src="https://image.flaticon.com/icons/svg/1216/1216895.svg" className="location"/>
            <a href="www.iiti.ac.in" className="loc">IIT INDORE,MP(452020)</a>
            <img src="https://image.flaticon.com/icons/svg/597/597177.svg" className="phone"/>
            <span className="pho">07324 306 717</span>
        </div>
        </div>

        <div className="others">
        <div className="cart">
        <img src="https://image.flaticon.com/icons/svg/126/126083.svg" className="cartLogo"/>
        <Link to='/basket'><div className="cartText">My Cart</div></Link>
        </div>

        <div style={{"textAlign":"center","margin":"0px",}}>
            <Link to="/adminwebsite">Admin Section</Link>
        </div>
        </div>

        </div>
                </>
        );
}

export default xNav;