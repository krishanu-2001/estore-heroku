import axios from 'axios';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Comp-CSS/Categories.css';

const list=[];

export class Categories extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    curItem: (<li className="cat">Please select category</li>),
    keylist: [],
    keyOption: [],
    itemList: [],
    itemOption: [],
    dict: {},
    value:"Please select option",
    list
  };

  /* event to handle category change*/ 
  handleChange = (event) =>{
    var key = event.target.value;
    this.setState({value: event.target.value});
    var curItem, itemOption = [];
    var dict = this.state.dict;
    if(dict[key] !== undefined){
      var temp = [];
      for(var i=0;i<dict[key].length;i++){

        /* styling goes here */
        temp.push(<div>
          <p className='p'>
            {i+1}.
            <img src={"/items-images/" + dict[key][i] +".png"} className="category-image"></img>
            <Link className="Categories-link" to={"./individual/" + dict[key][i]}>{dict[key][i]}</Link>
          
          </p>
          </div>);
          /* styling ends */
          
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

    axios.get('http://localhost:5000/items/')
      .then((res) => {
          this.setState({list: res.data});
          const list = this.state.list;
    const dict = {};
    console.log(list);
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

        
        });
  }

  render() {
    


    return (
        <div  id="_cat">
            <div className="header">
            <h1 style={{textAlign:"center"}}>CATEGORIES</h1>
              <p><a href="/#Top">back to home</a></p>
            </div>
            <span className="category-backtotop"><a href="#_cat">back to top</a></span>
            <div>
              <div className="col-lg-3">
                <form className="Category-form" onSubmit={this.handleSubmit} className="smalls">
                    <select className="Category-select" value={this.state.value} onChange={this.handleChange}>
                      {this.state.keyOption}
                    </select>
                </form>
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
