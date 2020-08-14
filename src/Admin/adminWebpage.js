
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
        const xnavbar = {
          display:"inline-block",
          width:"100%",
          heigth:"100%",
          padding:"0px",
          marginTop: "10px",
          paddingLeft: "0px",
          fontSize:"20px",
          backgroundColor:"white",
        };
        const xli = {
          padding:"0px",
          height:"100px",
          backgroundColor:"#3accdc",
          marginTop: "0px",
          paddingLeft: "0px",
          fontSize:"20px",
        };
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