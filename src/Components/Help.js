import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import './Comp-CSS/help.css';

const help = ()=>{

    return(
        <div className="col-md-5">
            <h3><Link to="/">See documentation</Link></h3>
            <h3>Mail us :)</h3>
            <form style={{"border":"0px","margin":"20px" }}>
                <input type="text" className="help-textbox" name="email" placeholder="Enter email here"></input>
                <br />
                <textarea className="help-textbox" placeholder="Describe problem"></textarea>
                <br />
                <input className="btn" style={{"backgroundColor":"#1244ff",}} type="submit" name="mail"></input>
            </form>
        </div>
    );
}

export default help;