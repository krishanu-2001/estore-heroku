import React from 'react';

const contactUs = ()=>{
    return(
        <div className="col md-5" style={{"margin":"20px"}}>
            <h3>Contact us</h3>
            <div style={{"background-color":"#d3d3d3","margin":"20px", "padding":"15px",}}>
                <h4>Address</h4>
                <p style={{"fontFamily":"lucida sans"}}>
                    1st floor, calcium building
                </p>
                <h4>Contact number</h4>
                <p style={{"fontFamily":"lucida sans"}}>
                    +101 <i>extension</i><br />
                    +91 6752xxxxxx

                </p>
                <h4>Email at</h4>
                <p style={{"fontFamily":"lucida sans"}}>
                    xyz@edu.in 
                </p>
            </div>
        </div>
    );
}

export default contactUs;