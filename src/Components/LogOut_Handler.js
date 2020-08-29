import React from 'react';
import Cookies from 'js-cookie';
import {useHistory} from 'react-router-dom';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';



const Logout = ()=>{
        const history = useHistory();
        Cookies.remove('username');
        Cookies.remove('id');
        Cookies.remove('token');
        Cookies.remove('basket');
        store.addNotification({
          title: 'Logged Out',
          message: "Have a nice day.",
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
        history.push('/');
        return(
          <></>
        )
}



export default Logout;