
import React, { Component } from 'react';
import { aliceblue } from 'color-name';
import {Switch, Route, Link} from 'react-router-dom';
import Xnav from './xNav';
import axios from 'axios';


export class AdminUpdate extends React.Component {
  constructor(props) {
    super(props);
  }

  state ={
    name:"null",
    persons: [],
  }

  componentDidMount() {
    axios.get('http://localhost:5000/items/')
      .then(res => {
        this.setState({ persons: res.data});
        console.log(res.data);  
      });
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
                
                <div className="col-md-9" style={{backgroundColor:"#dddddd", height:"550px","margin-top":"0px",}}>
                    <div style={{"text-align":"center", "color":"#555555","margin-top":"0px","padding":"40px",}}>
                        <h1>Update items here</h1>
                        <ul>

                        { this.state.persons.map(person => <li><Link to={person.itemname}>{person.itemname}</Link></li>)}
                        </ul>
                    </div>
                </div>
            </div>   
    );
  }
}

export default AdminUpdate;
