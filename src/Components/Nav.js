import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import UserContext from '../Context/UserContext';
import SignIn_Modal from './Sign_in_modal';
import SignUp_Modal from './Sign_up_modal';
import './Comp-CSS/Nav.css';
import Logout from './LogOut_Handler';



function Nav() {

  const {userData, setUserData} = React.useContext(UserContext);
const Logout = ()=>{
        setUserData({
          token: undefined,
          user: undefined,
        });
        localStorage.setItem("auth-token", "");
        return(
          <>
          </>
        )
}
    const signInModalRef = React.useRef();
    const signUpModalRef = React.useRef();
    const openLoginModal = ()=>{
     signInModalRef.current.openModal()
    };
    const openSignupModal = ()=>{
        signUpModalRef.current.openModal()
    };
    const xbtn = {
      backgroundColor: "#3333da",
    };
    
    return(
        <>
        <SignIn_Modal ref={signInModalRef}/>
        <SignUp_Modal ref={signUpModalRef}/>
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
{userData.userInfo ? 
        <div>
        <a onClick={Logout} className="login">LogOut</a>
<small>{userData.userInfo.username}</small>
      </div>
        : 
        <div>
          <a onClick={openLoginModal} className="login">SignIn</a>
  <span className="vl"></span>
  <a onClick={openSignupModal} className="sign">SignUp</a>
        </div>
}
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

export default Nav;