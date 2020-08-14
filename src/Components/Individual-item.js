
import React, { Component } from 'react';
import './Comp-CSS/individual-item.css';

export class ItemHtml extends React.Component {
  constructor(props) {
    super(props);
  }

  state ={
    name:"null",
  }

  getVAl(){
    var token = "Potato";
    return token;
  }

  render() {
    var name = this.props.match.params.id;
    var description = "please add description from server here";
    const myStyleCard = {
      color: "black",
      backgroundColor: "#ffffff",
      padding: "10px",
      margin: "10px",
      fontFamily: "Arial",
      height: "100%",
      width: "100%",
      border:"4px solid #dddddd",
      overflow: "hidden",
    };
    const myImage = {
      color: "white",
      backgroundColor: "white",
      fontFamily: "Arial",
      height: "300px",
      width: "400px",
    };
    const myBanner = {
      textAlign:"left",
      marginTop: "0px",
      border:"2px solid green",
    };
    const myBannertext = {
      fontFamily: "Arial",
      padding: "5px",
      backgroundColor: "#22aa22",
    };
    const myForm = {
      marginTop: "10px",
      fontFamily: "Arial",
      color:"red",
      padding: "5px",
      backgroundColor: "#dddddd",
      border:"0px",
    };
    const myBox = {
      marginTop: "10px",
      fontFamily: "Arial",
      color:"black",
      padding: "5px",
      backgroundColor: "#dddddd",
      border:"0px",
      height:"100%",
    };
    return (
      <div className="myStyleCard1">    
                <div>
                  <div className="row">
                    <div className="col-sm-3 col" style={{"height":"410px",}}>
                      <div className="myBox1" >
                        <h2>{name}</h2>
                        <hr />
                        <h4>{description}</h4>
                        <div className="myForm1">
                          <div>
                              <br></br>
                              <form style={{border:"0px"}}>
                                  <input type="number" min="0" placeholder="0" name="quantity" style={{"width":"60%", }}/>
                                  <input type="hidden" name="itemName" value={name}/>
                                  <input type="submit" value="add to cart" name="submit" />
                              </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-sm-9 col">
                      <div style={{"textAlign":"center"}}>
                      <img src = {("/items-images/"+name+".png")} alt={"/items-images/"+name+".png"} className="myImage1"/>
                      </div>
                      <div style={{"textAlign":"left", "marginTop":"3em", "position":"relative","left":"25%", }}>
                        <img src="/items-images/veg.png" style={{"background-color":"white","width":"20px",}}/><br />
                      </div>
                      <div style={{"textAlign":"center", "marginTop":"2em", }}>
                      <span style={{"fontSize":"2em",}}>{name}</span>
                      </div>
                    </div>
                  </div>
                </div>
        </div>
        
    );
  }
}

export default ItemHtml;