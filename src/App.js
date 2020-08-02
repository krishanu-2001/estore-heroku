import React from 'react';
import Nav from './Components/Nav';
import ItemNavigator from './Components/Item_body';
import {Switch, Route} from 'react-router-dom';
import ItemHtml from './Components/Individual-item';




function App() {

  return (
    <>
    <Switch>
    <Route exact path="/" render = {(props)=><div><Nav/><br/><ItemNavigator/></div>} />
    <Route exact path="/individual/:id" render = {(props)=><div><Nav/><br/><ItemHtml {...props}/></div>}/>
    </Switch>
    </>
  );
}

export default App;
