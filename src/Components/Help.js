import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';

const help = ()=>{
    return(
        <div className="col-md-5">
            <h3><Link to="/">See documentation</Link></h3>
            <h3>Mail us :)</h3>
            <form style={{"border":"0px","margin":"20px" }} method="post">
                <input type="text" name="email" placeholder="Enter email here"></input>
                <input type="text" name="description" placeholder="Describe problem"></input>
                <input className="btn" style={{"backgroundColor":"#1244ff",}} type="submit" name="mail"></input>
            </form>
        </div>
    );
}

export default help;