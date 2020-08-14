
import React, { Component } from 'react';
import { aliceblue } from 'color-name';
import {Switch, Route} from 'react-router-dom';
import Xnav from './xNav';


export class AdminFace extends React.Component {
  constructor(props) {
    super(props);
  }

  state ={
    name:"null",
  }

  render() {
        
        return (
            <div className="">
                
                <div className="col-md-9" style={{backgroundColor:"#dddddd", height:"550px","margin-top":"0px",}}>
                    <div style={{"text-align":"center", "color":"#555555","margin-top":"0px","padding":"40px",}}>
                        <h1>Welcome Admin :)</h1>
                    </div>
                </div>
            </div>   
    );
  }
}

export default AdminFace;