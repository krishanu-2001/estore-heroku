import React, { useEffect} from 'react';
import Nav from './Components/Nav';
import ItemNavigator from './Components/Item_body';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import ItemHtml from './Components/Individual-item';
import All_products from './Components/All_Products';
import Contact_us from './Components/Contact-us';
import Help from './Components/Help';
import Basket from './Components/Basket.js';
import Checkout from './Components/Checkout';
import Payment from './Components/Payment';
import Admin1 from './Admin/adminWebpage';
import Xnav from './Admin/xNav';
import AdminFace from './Admin/AdminFace';
import AdminRequests from './Admin/AdminRequests';
import AdminUpdate from './Admin/Adminupdate';
import AdminAdd from './Admin/Adminadd';
import Xitemupdate from './Admin/Adminitemupdate';
import Cookies from 'js-cookie';
import Logout from './Components/LogOut_Handler';
import Categories from './Components/Categories';



function App() {

  console.log(Cookies.get()); 

  return (
    <>
    <BrowserRouter>
    <Switch>
    <Route exact path="/" render = {(props)=><div><Nav/><br/><ItemNavigator/></div>} />
    <Route exact path="/logout" render = {(props)=><div><Nav/><br/><Logout/></div>} />
    <Route exact path="/individual/:id" render = {(props)=><div><Nav/><br/><ItemHtml {...props}/></div>}/>
    <Route exact path="/allProducts" render = {(props)=><div><Nav/><br/><All_products/></div>} />
    <Route exact path="/contact-us" render = {(props)=><div><Nav/><br/><Contact_us/></div>} />
    <Route exact path="/help" render = {(props)=><div><Nav/><br/><Help/></div>} />
    <Route exact path="/basket" render = {(props)=><div><Nav/><br/><Basket/></div>} />
    <Route exact path="/checkout" render = {(props)=><div><Nav/><br/><Checkout/></div>} />
    <Route exact path="/paymentGateway" render = {(props)=><div><Nav/><br/><Payment/></div>} />
    <Route exact path="/categories" render = {(props)=><div><Nav/><br/><Categories/></div>} />

    <Route exact path="/adminwebsite" render = {(props)=><div><Xnav/><br/><div className="row" style={{"margin":"0px"}}><Admin1/><AdminFace/></div></div>} />
    <Route exact path="/adminwebsite/requests" render = {(props)=><div><Xnav/><br/><div className="row" style={{"margin":"0px"}}><Admin1/><AdminRequests/></div></div>} />
    <Route exact path="/adminwebsite/add" render = {(props)=><div><Xnav/><br/><div className="row" style={{"margin":"0px"}}><Admin1/><AdminAdd/></div></div>} />
    <Route exact path="/adminwebsite/update" render = {(props)=><div><Xnav/><br/><div className="row" style={{"margin":"0px"}}><Admin1/><AdminUpdate/></div></div>} />
    <Route exact path="/adminwebsite/:id" render = {(props)=><div><Xnav/><br/><div className="row" style={{"margin":"0px"}}><Admin1/><Xitemupdate {...props}/></div></div>} />
    
    </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
