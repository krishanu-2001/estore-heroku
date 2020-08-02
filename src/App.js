import React from 'react';
import Nav from './Components/Nav';
import ItemNavigator from './Components/Item_body';
import {Switch, Route} from 'react-router-dom';
import ItemHtml from './Components/Individual-item';
import All_products from './Components/All_products';
import Contact_us from './Components/Contact-us';
import Help from './Components/Help';
import Basket from './Components/Basket.js';




function App() {

  return (
    <>
    <Switch>
    <Route exact path="/" render = {(props)=><div><Nav/><br/><ItemNavigator/></div>} />
    <Route exact path="/individual/:id" render = {(props)=><div><Nav/><br/><ItemHtml {...props}/></div>}/>
    <Route exact path="/allProducts" render = {(props)=><div><Nav/><br/><All_products/></div>} />
    <Route exact path="/contact-us" render = {(props)=><div><Nav/><br/><Contact_us/></div>} />
    <Route exact path="/help" render = {(props)=><div><Nav/><br/><Help/></div>} />
    <Route exact path="/basket" render = {(props)=><div><Nav/><br/><Basket/></div>} />

    </Switch>
    </>
  );
}

export default App;
