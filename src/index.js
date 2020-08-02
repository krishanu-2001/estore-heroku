import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ItemNavigator from './Components/Item_body';
import ItemHtml from './Components/gauss';
import Nav from './Components/Nav';


ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Route exact path="/" component={App}/>
    <Route path="/individual/:id" component={Nav}/>
    <Route path="/individual/:id" component={ItemHtml}/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

