
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Comp-CSS/item-card.css'; 

export class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const menu = this.menuItems;

    return (
        <div className="myStyleCard" >
                <div>
                    <img src = {("/items-images/"+this.props.name+".png")} alt={"/items-images/"+this.props.name+".png"} className="myImage"/>
                </div>
                <hr></hr>
                <div style={{"marginBottom":"20px",}}>
                    <Link to={"./individual/" + this.props.name}><div style={{"fontSize":"1.5em", "marginBottom":"200px,"}} >{this.props.name}</div></Link>
                </div>
                <div className="myBanner">
                    <div className="myBannertext">
                    1 Packet - Rs {this.props.price}
                    </div>
                </div>
                <div className="myForm">
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