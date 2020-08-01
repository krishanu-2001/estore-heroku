
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

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
                    <img src = {("./items-images/"+this.props.name+".png")} alt={"./items-images/"+this.props.name+".png"} style={myImage}/>
                </div>
                <hr></hr>
                <div style={{"margin-bottom":"20px",}}>
                    <div style={{"fontSize":"1.5em", "marginBottom":"200px,"}}>{this.props.name}</div>
                </div>
                <div style={myBanner}>
                    <div style={myBannertext}>
                    1 Packet - Rs {this.props.price}
                    </div>
                </div>
                <div className={myForm}>
                    <div>
                        <br></br>
                        <form>
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