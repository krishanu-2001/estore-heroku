import React, {useContext} from "react";
import ReactDOM from "react-dom";
import {useHistory} from 'react-router-dom';
import Axios from "axios";
import Cookies from 'js-cookie';
import './Comp-CSS/SignInUp_modal.css';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';


const Modal = React.forwardRef((props, ref)=>{

    const [display, setDisplay] = React.useState(false);

    const history = useHistory();

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

    const signInHandler = async (e)=>{
        e.preventDefault();

           Axios.post(
                "https://mernstackestore.herokuapp.com/users/login",
                 {
                  username: email,
                  password: password,
                }
                )
                .then((res)=>{
                  if(res.data.msg === 'logsuc')
                  {
                    Cookies.set('username', res.data.user.username)
                Cookies.set('id', res.data.user._id)
                Cookies.set('basket', res.data.user.basket);
                Cookies.set('token', res.data.token);
                console.log(Cookies.get());
                  }
                  if(res.data.msg === 'nouser')
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
                  if(res.data.msg === 'nopass')
                  {
                    store.addNotification({
                      title: 'Error Occurred !',
                      message: "Password Incorrect",
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
                  if(res.data.msg === 'logsuc')
                  {
                    store.addNotification({
                      title: 'Welcome '+res.data.user.username,
                      message: "You are now Logged-In ",
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
                  close();
                history.push('/');
                })
            
            
    }
    
    if(display)
    {
        return ReactDOM.createPortal(
            <>
            <div className = {"modal-wrapper"}>
                <div className={"modal-backdrop"}>
                    
     <form onSubmit={signInHandler} className="login-form">
      <img src='avatar.png'/><a onClick={close} class="close-modal">&times;</a>
      <h2>Log-IN</h2>
      <div className="input-group">
        <input type="text" onChange={e => setEmail(e.target.value)} required/>
        <label>User Name</label>
      </div>
      <div className="input-group">
        <input type="password" onChange={e => setPaasword(e.target.value)} required/>
        <label>Password</label>
      </div>
      <button type="submit" className="login-submit-btn">LogIN</button>
    </form>             
                </div>    
            </div> 
          </>
            ,
            document.getElementById('modal-root')
        );
    }
    else{ return null; };
});


export default Modal;