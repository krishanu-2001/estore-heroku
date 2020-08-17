import React, { useEffect} from 'react';
import Nav from './Components/Nav';
import ItemNavigator from './Components/Item_body';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import ItemHtml from './Components/Individual-item';
import All_products from './Components/All_products';
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
import Axios from 'axios';
import UserContext from './Context/UserContext';



function App() {

  const [userData,setUserData] = React.useState({
    token: undefined,
    userInfo: undefined
  });

  useEffect(()=>{
    const checkLoggedIn = async ()=>{
      let token = localStorage.getItem("auth-token");
      if(token  === null){
        localStorage.setItem("auth-token","");
        token = "";
        console.log('token is null');
      }
      const tokenRes = await Axios.post(
        "http://localhost:3000/users/userInfo",
        null,
        {headers: {"x-auth-token": token}}
      );
      
    if(tokenRes.data){
      setUserData({
        token: tokenRes.data.token,
        userInfo:tokenRes.data.userInfo
      });
    }
    }
    checkLoggedIn();
  },[]);

  return (
    <>
    <BrowserRouter>
    <UserContext.Provider value = {{userData, setUserData}}>
    <Switch>
    <Route exact path="/" render = {(props)=><div><Nav/><br/><ItemNavigator/></div>} />
    <Route exact path="/individual/:id" render = {(props)=><div><Nav/><br/><ItemHtml {...props}/></div>}/>
    <Route exact path="/allProducts" render = {(props)=><div><Nav/><br/><All_products/></div>} />
    <Route exact path="/contact-us" render = {(props)=><div><Nav/><br/><Contact_us/></div>} />
    <Route exact path="/help" render = {(props)=><div><Nav/><br/><Help/></div>} />
    <Route exact path="/basket" render = {(props)=><div><Nav/><br/><Basket/></div>} />
    <Route exact path="/checkout" render = {(props)=><div><Nav/><br/><Checkout/></div>} />
    <Route exact path="/paymentGateway" render = {(props)=><div><Nav/><br/><Payment/></div>} />

    <Route exact path="/adminwebsite" render = {(props)=><div><Xnav/><br/><div className="row"><Admin1/><AdminFace/></div></div>} />
    <Route exact path="/adminwebsite/requests" render = {(props)=><div><Xnav/><br/><div className="row"><Admin1/><AdminRequests/></div></div>} />
    <Route exact path="/adminwebsite/add" render = {(props)=><div><Xnav/><br/><div className="row"><Admin1/><AdminAdd/></div></div>} />
    <Route exact path="/adminwebsite/update" render = {(props)=><div><Xnav/><br/><div className="row"><Admin1/><AdminUpdate/></div></div>} />
    <Route exact path="/adminwebsite/:id" render = {(props)=><div><Xnav/><br/><div className="row"><Admin1/><Xitemupdate {...props}/></div></div>} />
    
    </Switch>
    </UserContext.Provider>
    </BrowserRouter>
    </>
  );
}

export default App;
