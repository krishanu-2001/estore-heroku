import React from "react";
import ReactDOM from "react-dom";
import './Comp-CSS/SignInUp_modal.css';
import './Comp-CSS/Sign_Up_form.css';
import axios from "axios";

const Modal = React.forwardRef((props, ref)=>{

    const [display, setDisplay] = React.useState(false);

    React.useImperativeHandle(ref, () => {
        return {
         openModal: ()=> open(),
         close: ()=> close()
        }
      });

    const open = ()=>{
    setDisplay(true);
    };
    
    const close = ()=>{
    setDisplay(false);
    };

    const [email,setEmail] = React.useState("");
    const [password,setPass] = React.useState("");
    const [cpassword,setCpass] = React.useState("");

    const signUpHandler = (e)=>{
        e.preventDefault();
        if(email !== "" && password !== "" && cpassword !=="" && password === cpassword)
        {

            axios({
                method: "POST",
                data: {
                  username: email,
                  password: password,
                },
                url: "http://localhost:5000/users/new",
              }).then((res) => console.log(res));
        }
        else
        {
            console.log("Wrong Credentials");
        }
        close();
    }
    
    if(display)
    {
        return ReactDOM.createPortal(
            <div className = {"modal-wrapper"}>
                <div className={"modal-backdrop"}>
                    <div className={"modal-box"}>
                       <form onSubmit={signUpHandler}>
                        <div className="form-container">
                            <h1>Sign Up</h1><br/>
                            <p>Please fill in this form to create an account.</p>
                             <hr/><br/>
                            <label><b>Email</b></label><br/>
                            <input onChange={e => setEmail(e.target.value)} type="text" placeholder="Enter Email" required/><br/>
                            <label><b>Password</b></label><br/>
                            <input onChange={e => setPass(e.target.value)} type="password" placeholder="Enter Password" required/><br/>
                            <label><b>Confirm Password</b></label><br/>
                            <input onChange={e => setCpass(e.target.value)} type="password" placeholder="Repeat Password" required/>

                    <div className="clearfix">
                        <button type="button" class="cancelbtn" onClick={close}>Cancel</button>
                        <button type="submit" class="signupbtn">Sign In</button>
                    </div>
                </div>
            </form>
                    </div>
                </div>
            </div>,
            document.getElementById('modal-root')
        );
    }
    else{ return null; };
});


export default Modal;