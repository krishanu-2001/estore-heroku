import React, { useEffect} from 'react';
import Nav from './Components/Nav';
import ItemNavigator from './Components/Item_body';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import ItemHtml from './Components/Individual-item';
import All_products from './Components/All_products';
import Contact_us from './Components/Contact-us';
import Help from './Components/Help';
import Basket from './Components/Basket.js';
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
        "http://localhost:5000/users/userInfo",
        null,
        {headers: {"x-auth-token": token}}
      );
      
      console.log(tokenRes.data.token);
    if(tokenRes.data){
      console.log('Hello');
      setUserData({
        token: tokenRes.data.token,
        userInfo:tokenRes.data.userInfo
      });
    }
    console.log(userData);
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
    </Switch>
    </UserContext.Provider>
    </BrowserRouter>
    </>
  );
}

export default App;
