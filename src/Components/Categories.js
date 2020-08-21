import axios from 'axios';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Comp-CSS/Categories.css';

export class Categories extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    curItem: (<li>Please select category</li>),
    keylist: [],
    keyOption: [],
    itemList: [],
    itemOption: [],
    dict: {},
    value:"Please select option",
  };

  handleChange = (event) =>{
    var key = event.target.value;
    this.setState({value: event.target.value});
    var curItem, itemOption = [];
    var dict = this.state.dict;
    if(dict[key] !== undefined){
      var temp = [];
      for(var i=0;i<dict[key].length;i++){
        temp.push(<div><p><Link className="Categories-link" to={"./individual/" + dict[key][i]}>{dict[key][i]}</Link></p></div>);
      }
      curItem = temp;
      itemOption.push(
          <p><hr />Items Found: {temp.length}</p>
        );
    }
    else{
      curItem = "Please Select An Option"
    }
    this.setState({
      curItem: curItem,
      itemOption: itemOption,
    });
  }

  componentDidMount(){
    const list = this.props.list;
    const dict = {};

    //// some relevant processing
    for(var i=0;i<list.length;i++){
      if(dict[list[i].description] === undefined){
        dict[list[i].description] = [];
      }
      dict[list[i].description].push(list[i].itemname);
    }

    // here is the main code
    var items = [], itemList = [], keyList=[], curItem = [], keyOption=[];
    for(var key in dict) {
      if(items[key] === undefined){
        items[key]=[];
      }
      if(dict[key] !== undefined) {
        var temp = [];
        for(var i=0;i<dict[key].length;i++){
          temp.push(<div><p><Link to={"./individual/" + dict[key][i]}>{dict[key][i]}</Link></p></div>);
        }
        items[key].push(<p style={{marginLeft:"100px",}}>{temp}</p>);
        
      }
     }

      //implementing main display here
      keyOption.push(<option value="Please select option">Select Option</option>);
      for(var key in dict){
        keyList.push(<p>{key}</p>);
        keyOption.push(
          <option value={key}>{key}</option>
        );
        itemList.push(
        <div className="col-lg-6 categoryDisplay">
          <div className="categoryTitle">
            {key}
            <hr></hr>
          </div>{items[key]}
        </div>
        );
      }

      this.setState({
        dict: dict,
        keyList: keyList,
        keyOption: keyOption,
        itemList: itemList,
      });

  }

  render() {
    


    return (
        <div>
            <div className="header">
            <h1 style={{textAlign:"center"}} >CATEGORIES</h1>
              <p><a href="/#Top">back to top</a></p>
            </div>
            
            <div>
              <div className="col-lg-3">
                <form className="Category-form" onSubmit={this.handleSubmit}>
                    <select className="Category-select" value={this.state.value} onChange={this.handleChange}>
                      {this.state.keyOption}
                    </select>
                </form>
                <div className="Category-itemOption">
                  {this.state.itemOption}
                  <hr></hr>
                  Apply Filter
                  <form className="Category-form2">
                    <input type="radio" /> Price
                     : <span className="Category-box">Rs 0</span>
                     - <span className="Category-box">Rs <input type="number" /></span>

                  </form>
                </div>
              </div>
              <div className="col-lg-9 ">
                <div className="curItem">
                  {this.state.curItem}
                </div>
              </div>
            </div>
        </div>

    );
  }
}

export default Categories;