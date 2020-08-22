import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import SignIn_Modal from './Sign_in_modal';
import SignUp_Modal from './Sign_up_modal';
import useWindowDimensions from '../Utilities/WindowDimension'
import './Comp-CSS/Nav.css';
import Cookies from 'js-cookie';
import {useHistory} from 'react-router-dom';
import { scrollCat } from "./Item_body";

var navTransi = true;
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)



function Nav() {

    const history = useHistory();
    const signInModalRef = React.useRef();
    const signUpModalRef = React.useRef();
    const openLoginModal = ()=>{
     signInModalRef.current.openModal()
    };
    const openSignupModal = ()=>{
        signUpModalRef.current.openModal()
    };
    const [navStyle, setNavStyle] = React.useState("nav-links");
    const [navPanelStyle, setNPS] = React.useState("navPanel");
    const [shopNameClass, setSNC] = React.useState("shopName");
    const [navClass, setNavClass] = React.useState("");
    const [navSearchOP, setNSOP] = React.useState("nav-search-div");
    const [categoryDropdown, setCDD] = React.useState("dropdown-category");
    const [catClass, setCatClass] = React.useState(["Category","cat-class"]);
    
    const toggleCat = () =>{
      if(categoryDropdown === 'dropdown-category')
      {
        setCDD('dropdown-category show');
        setCatClass(["Close","cat-class show"]);
      }
      else
      {
        setCDD('dropdown-category');
        setCatClass(["Category","cat-class"]);
      }
    }

    const toggleNav = ()=>{
      if(navTransi){
      if(navStyle === "nav-links")
      {
        setNavStyle("nav-links open");
        setNPS("navPanel open");
        setSNC("shopName open");
        setNavClass("nav-open");
            }
      else
      {
        setNavStyle("nav-links");
        setNPS("navPanel");
        navTransi = false;
        setTimeout(() => {
          setSNC("shopName");
        setNavClass("");
        navTransi = true;
        }, 1000)
      
      }
    }
    }
    const { windowWidth } = useWindowDimensions();
    if(windowWidth>=800 && navSearchOP!=="nav-search-div"){ setNSOP("nav-search-div") }
    const onclickNavSearch = ()=>{
     
      if(windowWidth<=800)
      { setNSOP("nav-search-div open"); }
      
      }

      const onclickNavSearchClose =()=>{
        setNSOP("nav-search-div");
      }
    
      const gotoHome = ()=>{
        history.push('/');
      }

      const scrollCatNav = (catRef)=>{
        toggleCat();
        if(windowWidth<=800)toggleNav();
        scrollCat(catRef);
      }
      

    return(
        <>
        <SignIn_Modal ref={signInModalRef}/>
        <SignUp_Modal ref={signUpModalRef}/>
<nav className={navClass} id = "Top">
      <div className="hamburger" onClick={toggleNav}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <img onClick={gotoHome} src='/logo.png' className="logo" />
      <div onClick={gotoHome} className={shopNameClass}>La<br/>Fresco</div>
      <div className="search">
        <div className="searchPanel">
      <input className="inputSearch" placeholder={'Search for Products...'}></input>
      <img onClick={onclickNavSearch} src="https://img.icons8.com/pastel-glyph/64/000000/search--v2.png" className="searchImg" />
      </div>
      <div className="navInfo">
        <img src="https://image.flaticon.com/icons/svg/1216/1216895.svg"/>
        <a href="www.iiti.ac.in" className="loc">IIT INDORE,MP(452020)</a>
        <p>   </p>
        <img src="https://image.flaticon.com/icons/svg/597/597177.svg" />
        <span>07324 306 717</span>
      </div>
      </div>
      <ul className={navStyle}>
        <li><Link to='/allProducts'>All Products</Link></li>
    <li><a className={catClass[1]} onClick={toggleCat}>{catClass[0]}</a><div class={categoryDropdown}>
    <a style={windowWidth>800?{fontSize: "1vw",textShadow: 'none'}:{fontSize: "6vw", textShadow: 'none'}} onClick={()=>scrollCatNav('frunveg')}>Fruits and Vegetables</a>
    <a style={windowWidth>800?{fontSize: "1vw", textShadow: 'none'}:{fontSize: "6vw", textShadow: 'none'}} onClick={()=>scrollCatNav('staples')}>Staples</a>
    <a style={windowWidth>800?{fontSize: "1vw", textShadow: 'none'}:{fontSize: "6vw", textShadow: 'none'}} onClick={()=>scrollCatNav('snanam')}>Snacks and Namkeen</a>
    <a style={windowWidth>800?{fontSize: "1vw", textShadow: 'none'}:{fontSize: "6vw", textShadow: 'none'}} onClick={()=>scrollCatNav('drinbev')}>Drinks and Beverages</a>
    <a style={windowWidth>800?{fontSize: "1vw", textShadow: 'none'}:{fontSize: "6vw", textShadow: 'none'}} onClick={()=>scrollCatNav('clenho')}>Cleaning and Household</a>
    <a style={windowWidth>800?{fontSize: "1vw", textShadow: 'none'}:{fontSize: "6vw", textShadow: 'none'}} onClick={()=>scrollCatNav('beanhy')}>Beauty and Hygiene</a>
    <Link onClick={toggleCat} to='/categories' style={windowWidth>800?{fontSize: "1vw",textShadow: 'none'}:{fontSize: "6vw", textShadow: 'none'}}>Show All</Link>
  </div></li>
        <li><Link to='/help'>Help</Link></li>
      </ul>
     {
       Cookies.get('token')
        ?
        <div className={navPanelStyle}>
        <Link to='/basket'><img src="https://image.flaticon.com/icons/svg/126/126083.svg" className="cartLogo"/>Cart</Link>
        <p style={{fontSize:"2vw"}}>|</p>
        <Link to='/logout'>Logout</Link>
      </div>
       :
       <div className={navPanelStyle}>
       <a onClick={openSignupModal}>Sign UP</a>
       <p style={{fontSize:"2vw"}}>|</p>
       <a onClick={openLoginModal}>Log IN</a>
     </div>
     }
    </nav>
    <div className={navSearchOP}>
    <img onClick={onclickNavSearchClose} className="close-nav-search-op" src="https://img.icons8.com/emoji/48/000000/cross-mark-emoji.png"/>
    <input type="text" className="nav-search-op" placeholder="Search for Products ..."/>
    <img  className="search-nav-search-op" src="https://img.icons8.com/pastel-glyph/64/000000/search--v2.png" />
   </div>
    
        </>
    );
}

export default Nav;