import React from 'react';
import SignIn_Modal from './Sign_in_modal';
import SignUp_Modal from './Sign_up_modal';
import './Comp-CSS/Nav.css';


function Nav() {

    const signInModalRef = React.useRef();
    const signUpModalRef = React.useRef();
    const openLoginModal = ()=>{
     signInModalRef.current.openModal()
    };
    const openSignupModal = ()=>{
        signUpModalRef.current.openModal()
    };

    return(
        <>
        <SignIn_Modal ref={signInModalRef}/>
        <SignUp_Modal ref={signUpModalRef}/>
        <div className="nav">
  <img src='/logo.png' className="logo"/>
  <span className="shopName">La Fresco</span>

<div>
  <div className="buttons">
    <button className="btn">All Products</button>
    <button className="btn">Categories</button>
    <button className="btn">Help</button>
    <button className="btn">Contact Us</button>
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
  <a onClick={openLoginModal} className="login">SignIn</a>
  <span className="vl"></span>
  <a onClick={openSignupModal} className="sign">SignUp</a>

  <div className="cart">
  <img src="https://image.flaticon.com/icons/svg/126/126083.svg" className="cartLogo"/>
  <div className="cartText">My Cart</div>
  </div>
</div>

  </div>
        </>
    );
}

export default Nav;