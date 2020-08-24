import React, { useEffect } from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import SignIn_Modal from '../Components/Sign_in_modal.js';
import SignUp_Modal from '../Components/Sign_up_modal';
import useWindowDimensions from '../Utilities/WindowDimension'
import '../Components/Comp-CSS/Nav.css';
import Cookies from 'js-cookie';
import {useHistory} from 'react-router-dom';
import Axios from 'axios';


function XNav() {

   
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
  const [navItemList, setNavItemList] = React.useState([]);
  const [navSearchMeBox, setSMB] = React.useState("");
  const [searchThis, setsearchThis] = React.useState("");

  const toggleNav = ()=>{
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
      setTimeout(() => {
        setSNC("shopName");
      setNavClass("");
      }, 1000);
    }
  }

  
    /* search bar */
  const { windowWidth } = useWindowDimensions();
  if(windowWidth>=800 && navSearchOP!=="nav-search-div"){ setNSOP("nav-search-div") }
  const onclickNavSearch = ()=>{
   
    if(windowWidth<=800)
    { setNSOP("nav-search-div open"); }
    
    }



    const onclickNavSearchClose =()=>{
      searchMeClose();
      setNSOP("nav-search-div");
    }

     /* Handles change in search box */
     const onEnterSearch = (e) => {
      var key = e.target.value;
      setsearchThis(key);
      if(key === ""){
        searchMeOpen([])
      }
      var itemListnew = [], showList = [];
      for(var i=0;i<navItemList.length;i++){
        itemListnew.push(navItemList[i].itemname);
      }
      /* processing */
      for(var i=0; i<itemListnew.length; i++){
        var str = itemListnew[i]; 
        var re = new RegExp(key, 'gi');
        var result = str.match(re); 
        if(result === null) continue;
        var Max = 0;
        for(var j=0; j<result.length; j++){
          var items = result[j];
          if(items.length > Max){
            Max = items.length;
          }
        }
        showList.push([str, Max]);
      }
      if(showList.length ===itemListnew.length){
        searchMeOpen([]);
      }
      else
      searchMeOpen(showList);
    }

    function sortFunction(a, b) {
      if (a[1] === b[1]) {
          return 0;
      }
      else {
          return (a[1] > b[1]) ? -1 : 1;
      }
    }
    /* Handles printing of searched box */
    const searchMeOpen = (datalist) => {
      //sort datalist
        if(datalist===null){
          console.log(datalist);
        }
        else{
        datalist.sort(sortFunction);
        }
        var temp = [];
        if(datalist.length === 0){
          setSMB(temp);
        } else {
          var cct = 0;
          temp.push(
            <i className="fa fa-times" aria-hidden="true" 
            onClick={searchMeClose} style={{"float":"right","padding":"5px"}}></i>
          );
          for(var i=0; i<(datalist.length); i++){
            temp.push(<p><Link to={"/individual/" + datalist[i][0]}>{datalist[i][0]}</Link></p>);
            cct += 1;
            if(cct > 5){
              break;
            }
          }
          setSMB(temp);
        }
    }
    /* popup closes on pressing x */
    const searchMeClose = () => {
      setsearchThis("");
      setSMB([]);
    }

    useEffect(() => {
      const fetchData = async () => {
        const res = await Axios.get(
          'http://localhost:5000/items/',
        );
        setNavItemList(res.data);
      };
   
      fetchData();
    }, []);

    /* search ends */

  
    const gotoHome = ()=>{
      history.push('/');
    }
  
  return(
      <>
      <SignIn_Modal ref={signInModalRef}/>
      <SignUp_Modal ref={signUpModalRef}/>
<nav className={navClass}>
    <div className="hamburger" onClick={toggleNav}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
    <img onClick={gotoHome} src='/logo.png' className="logo" />
    <div onClick={gotoHome} className={shopNameClass}>La<br/>Fresco</div>
   
   
   
    <div className="search">
      <div className="searchPanel">
    <input className="inputSearch" placeholder={'Search for Products...'} value={searchThis} onChange = {onEnterSearch}></input>
    <img onClick={onclickNavSearch} src="https://img.icons8.com/pastel-glyph/64/000000/search--v2.png" className="searchImg" />
    </div>
    <div className="navSearchMeBox">
      {navSearchMeBox}
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
      <li><Link to='/'>All Products</Link></li>
      <li><a href='/#Categories'>Categories</a></li>
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
  <input type="text" className="nav-search-op" placeholder="Search for Products ..." value={searchThis} onChange = {onEnterSearch}/>
  <img  className="search-nav-search-op" src="https://img.icons8.com/pastel-glyph/64/000000/search--v2.png" />
 </div>
  
      </>
  );
}

export default XNav;