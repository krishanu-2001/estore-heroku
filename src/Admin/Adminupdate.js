
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
    axios.get('https://mernstackestore.herokuapp.com/items/')
      .then(res => {
        this.setState({ persons: res.data});
        console.log(res.data);  
      });
  }

  render() {
    
        return (
            <div className="">
                
                <div className="col-md-9" style={{backgroundColor:"#dddddd", height:"100%","margin-top":"0px",}}>
                    <div style={{"text-align":"center", "color":"#555555","margin":"0px","padding":"40px",}}>
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
