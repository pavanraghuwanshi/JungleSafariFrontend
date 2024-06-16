import React from 'react'
import { Link } from 'react-router-dom';
import { FaSignInAlt, FaSignOutAlt, FaUserAlt } from 'react-icons/fa';


import logo from "../Images/logo.png"
import Logout from '../Pages/Login';


 function Header() {
  return( 


       <>     
        <header className="d-flex justify-content-center align-item-center mt-0 myheader sticky-top ">
          <h1 className="mywebname font-effect-fire-animation" >Safari Venture</h1>    
        </header>


  <nav className=" d-flex navbar navbar-expand-lg bg-body-tertiary  sticky-top ">
    <div className="container-fluid">
      <img src= {logo}  className="navbar-brand " alt="" height="70px" href="#"/>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">


        <li className="nav-item">
        <Link className="nav-link Mynav ms-lg-5 me-lg-5 " aria-current="page" to="/">Home</Link>
          {/* <a  href="">Home</a> */}
        </li>

         
          <li className="nav-item">
          <Link className="nav-link Mynav ms-lg-5 me-lg-5" aria-current="page"  to="/about">About</Link>

            {/* <a className="nav-link Mynav ms-lg-5 me-lg-5" aria-current="page" href="">About Us</a> */}
          </li>
          <li className="nav-item">
          <Link className="nav-link Mynav ms-lg-5 me-lg-5" aria-current="page" to="/destination">Destination Point</Link>

            {/* <a  href="">Destination Point</a> */}
          </li>
        </ul>
        <form className="d-flex " role="search">
          <input className="form-control me-2 ms-lg-5 Mynav" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success me-lg-5 Mynav" type="submit" >Search</button>
        </form>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
        <ul className="navbar-nav  mb-2 mb-lg-0 ms-lg-5 ">
        <li className="nav-item dropdown myli">

          <Link className="nav-link dropdown-toggle Mynav  me-2 ms-lg-5" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="/">Dropdown</Link>

          <ul className="dropdown-menu ">
            <li><Link className="dropdown-item" to="/memories">Memories Of Visiters</Link></li>
            <li><Link className="dropdown-item" to="/feedback">Review/Feedback</Link></li>
            <li><Link className="dropdown-item" to="/email">Send Email</Link></li>
          </ul>
        </li>
      </ul>
    </div>
      
    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
        <ul className="navbar-nav  mb-2 mb-lg-0 ms-lg-5 ">
        <li className="nav-item dropdown myli">

            <Link className="nav-link  Mynav me-lg-3 ms-0" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="/">
            <FaUserAlt/>
            </Link>
         
            <ul className="dropdown-menu ">
            <li><Link className="dropdown-item" onClick={Logout} >logout
                    <button className='ms-1 btn btn-primary subBtn p-2'>
                      <FaSignOutAlt/>
                    </button>
                    </Link></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><Link className="dropdown-item" to="/register">login/signin 
                    <button className='ms-1 btn btn-primary subBtn p-2'>
                      <FaSignInAlt/>
                    </button>
                    </Link></li>
          </ul>
          </li>
      </ul>
    </div>


        </div>
      </div>
  </nav>
  
  </> 

  )
  
}

export default Header;
