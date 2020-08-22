import React, {useContext} from "react";
import ReactDOM from "react-dom";
import {useHistory} from 'react-router-dom';
import Axios from "axios";
import Cookies from 'js-cookie';
import './Comp-CSS/SignInUp_modal.css';


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

           const loginRes = await Axios.post(
                "http://localhost:5000/users/login",
                 {
                  username: email,
                  password: password,
                }
                )
                Cookies.set('username', loginRes.data.user.username)
                Cookies.set('id', loginRes.data.user._id)
                Cookies.set('basket', loginRes.data.user.basket);
                Cookies.set('token', loginRes.data.token);
                console.log(Cookies.get());
                close();
                history.push('/');
            
            
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