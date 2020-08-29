import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ReactNotifications from 'react-notifications-component';
import {BrowserRouter} from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ReactNotifications breakpoint={800}/>
    <App/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

