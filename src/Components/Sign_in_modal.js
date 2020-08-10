import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import './Comp-CSS/SignInUp_modal.css';
import './Comp-CSS/Sign_Up_form.css';

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

    const [email, setEmail] = React.useState("");
    const [password, setPaasword] = React.useState("");

    const signInHandler = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:5000/users/login',
            {
                "username": email,
                "password": password
            }
            ,{headers: {'Accept': 'application/json'}})
            .then((res)=>{
                console.log(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })

            close();
    }
    
    if(display)
    {
        return ReactDOM.createPortal(
            <div className = {"modal-wrapper"}>
                <div className={"modal-backdrop"}>
                    <div className={"modal-box"}>
                    <form onSubmit={signInHandler}>
                        <div className="form-container">
                            <h1>Sign In</h1><br/>
                            <p>Please fill in this form to create an account.</p>
                             <hr/><br/>
                            <label><b>Email</b></label><br/>
                            <input type="text" onChange={e => setEmail(e.target.value)} placeholder="Enter Email" required/><br/>
                            <label><b>Password</b></label><br/>
                            <input type="password" onChange={e => setPaasword(e.target.value)} placeholder="Enter Password" required/><br/>

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