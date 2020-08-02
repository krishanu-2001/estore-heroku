
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

function fileExists(url) {
  if(url){
      var req = new XMLHttpRequest();
      req.open('GET', url, false);
      req.send();
      return req.status==200;
  } else {
      return false;
  }
}

export class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  

  render() {
    const menu = this.menuItems;
    const myStyleCard = {
        color: "black",
        backgroundColor: "#ffffff",
        padding: "10px",
        margin: "10px",
        fontFamily: "Arial",
        height: "400px",
        width: "250px",
        border:"4px solid #dddddd",
        overflow: "hidden",
      };
      const myImage = {
        color: "white",
        backgroundColor: "white",
        fontFamily: "Arial",
        height: "150px",
        width: "200px",
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
      };

    return (
        <div style={myStyleCard}>
                <div>
                    <img src = {("/items-images/"+this.props.name+".png")} alt={"/items-images/"+this.props.name+".png"} style={myImage}/>
                </div>
                <hr></hr>
                <div style={{"marginBottom":"20px",}}>
                    <Link to={"./individual/" + this.props.name}><div style={{"fontSize":"1.5em", "marginBottom":"200px,"}} >{this.props.name}</div></Link>
                </div>
                <div style={myBanner}>
                    <div style={myBannertext}>
                    1 Packet - Rs {this.props.price}
                    </div>
                </div>
                <div className={myForm}>
                    <div>
                        <br></br>
                        <form style={{border:"0px"}}>
                            <input type="number" min="0" placeholder="0" name="quantity" style={{"width":"60%", }}/>
                            <input type="hidden" name="itemName" value={this.props.name}/>
                            <input type="submit" value="add to cart" name="submit" />
                        </form>
                    </div>
                </div>
        </div>

    );
  }
}

export default Card;