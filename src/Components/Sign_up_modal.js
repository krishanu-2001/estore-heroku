import React from "react";
import ReactDOM from "react-dom";
import './Comp-CSS/SignInUp_modal.css';
import axios from "axios";
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

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
              }).then((res) => {
                if(res.data.msg === 'userexists')
                {
                  store.addNotification({
                    title: 'Error Occurred !',
                    message: "User already exists",
                    type: 'danger',                         // 'default', 'success', 'info', 'warning'
                    insert: "top",
                    container: 'top-right',                // where to position the notifications
                    animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
                    animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
                    dismiss: {
                      duration: 5000,
                      onScreen: true,
                      pauseOnHover: true
                    }
                  })
                }
                if(res.data.msg === 'done')
                {
                  store.addNotification({
                    title: 'Sign-Up Successfull',
                    message: "Please Log-In Now",
                    type: 'success',                         // 'default', 'success', 'info', 'warning'
                    insert: "top",
                    container: 'top-right',                // where to position the notifications
                    animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
                    animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
                    dismiss: {
                      duration: 5000,
                      onScreen: true,
                      pauseOnHover: true
                    }
                  })
                }
              });
        }
        else
        {
          store.addNotification({
            title: 'Error Occurred !',
            message: "Invalid Credentials",
            type: 'danger',                         // 'default', 'success', 'info', 'warning'
            insert: "top",
            container: 'top-right',                // where to position the notifications
            animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
            animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
            dismiss: {
              duration: 5000,
              onScreen: true,
              pauseOnHover: true
            }
          })
        }
        close();
    }
    
    if(display)
    {
        return ReactDOM.createPortal(
            <>
            <div className = {"modal-wrapper"}>
                <div className={"modal-backdrop"}>
                    
     <form onSubmit={signUpHandler} className="signup-form">
      <img src='avatar.png'/><a onClick={close} class="close-modal">&times;</a>
      <h2>Sign-UP</h2>
      <div className="input-group">
        <input type="text" onChange={e => setEmail(e.target.value)} required/>
        <label>User Name</label>
      </div>
      <div className="input-group">
        <input type="password" onChange={e => setPass(e.target.value)} required/>
        <label>Password</label>
      </div>
      <div className="input-group">
        <input type="password" onChange={e => setCpass(e.target.value)} required/>
        <label>Confirm Password</label>
      </div>
      <button type="submit" className="signup-submit-btn">Sign-UP</button>
    </form>             
                </div>    
            </div> 
          </>,
            document.getElementById('modal-root')
        );
    }
    else{ return null; };
});


export default Modal;