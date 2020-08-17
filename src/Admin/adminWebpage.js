
import React, { Component } from 'react';
import { aliceblue } from 'color-name';
import {Switch, Route, Link} from 'react-router-dom';
import Xnav from './xNav';
import './Admin-CSS/Admin1.css'

export class Admin1 extends React.Component {
  constructor(props) {
    super(props);
  }

  state ={
    name:"null",
  }

  render() {

        return (
            <div className="">
                <div className="col-md-3">
                <h2 style={{backgroundColor:"#1aacdc", margin:"0px",padding:"20px",}}><Link to="/adminwebsite">Admin Controls</Link></h2>
                <ul className="nav nav-stacked xnavbar" >
                <li className="active xli"><Link to="/adminwebsite/requests">Pending requests</Link></li>
                <li className="xli"><Link to="/adminwebsite/add">Add Items</Link></li>
                <li className="xli"><Link to="/adminwebsite/update">Update Items</Link></li>
                </ul>
                </div>
            </div>   
    );
  }
}

export default Admin1;