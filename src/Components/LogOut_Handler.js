import React, { useContext } from 'react';
import UserContext from '../Context/UserContext';

const Logout = ()=>{
    const {userData, setUserData} = useContext(UserContext);
        setUserData({
          token: undefined,
          user: undefined,
        });
        localStorage.setItem("auth-token", "");
}



export default Logout;