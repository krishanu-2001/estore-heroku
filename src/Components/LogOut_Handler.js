import React from 'react';
import Cookies from 'js-cookie';
import {useHistory} from 'react-router-dom';



const Logout = ()=>{
        const history = useHistory();
        Cookies.remove('username');
        Cookies.remove('id');
        Cookies.remove('token');
        Cookies.remove('basket');
        history.push('/');
        return(
          <></>
        )
}



export default Logout;