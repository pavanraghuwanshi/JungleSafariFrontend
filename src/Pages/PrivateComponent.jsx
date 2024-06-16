import React from 'react';
import {Navigate,Outlet} from 'react-router-dom';
import cookies from 'js-cookie'

function PrivateComponent() {

    const auth = localStorage.getItem('user');
  return auth?<Outlet/>:<Navigate to ="/register"/>

    // const auth = cookies.get('user');
    // return auth?<Outlet/>:<Navigate to = "/login"/>




  
}

export default PrivateComponent;



