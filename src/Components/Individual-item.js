
import React, { Component } from 'react';

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
      border:"0px",
    };
    return (
      <div style={myStyleCard}>
               <div>
                    <img src = {("/items-images/"+name+".png")} alt={"/items-images/"+name+".png"} style={myImage}/>
                </div>
                <hr></hr>
                <div style={{"marginBottom":"20px",}}>
                     <div style={{"fontSize":"1.5em", "marginBottom":"200px,"}} >{name}</div>
                </div>
                <div style={myBanner}>
                    <div style={myBannertext}>
                    1 Packet - Rs {123}
                    </div>
                </div>
                <div className={myForm}>
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
    );
  }
}

export default ItemHtml;