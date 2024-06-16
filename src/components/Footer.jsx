import React from 'react'
import { Link } from 'react-router-dom'

import logo from "../Images/logo.png"


export default function Footer() {
  return (
    <>
      <footer className="bg-faded pt-70 pb-40 bg-theme-color-2 myfooter">
          <div className="container">
            <div className="section-content">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="footer-item footer-widget-one">
                      <img className="footer-logo mb-25 mt-5" src={logo} alt="" height="70px"/>
                        <p>Pavan Raghuwanshi that man behind the magic of Safari Venture Tours began with a dream.Safari venture Tours founded in 2023. Running by Myself, This organization operating by nagpur Office. It is a well-established Travel Agency.
                       </p>
                          <hr/>
                          <h6>Follow<span> Us</span></h6>
                         
                    </div>
                </div>
    
                <div className="col-lg-3 col-md-6 col-sm-12 mt-5 ">
                  <div className="footer-item">
                    <div className="footer-title">
                      <h4>Destination <span>Point</span></h4>
                      <div className="border-style-3"></div>
                    </div>
                    <ul className="footer-list myusesection">
    
    <p></p>                                    <a className="myusesection" href="">Ranthambore National Park</a><p></p>
                                              <a  className="myusesection" href="">Sariska National Park</a><p></p>
                                              <a  className="myusesection" href="">Corbett National Park</a><p></p>
                                              <a  className="myusesection" href="">Bandhavgarh National Park</a><p></p>
                                               <a  className="myusesection" href="">Kanha National Park</a><p></p>
                                               <a  className="myusesection" href="">Panna National Park</a><p></p>
                                               <a className="myusesection" href="">Pench Wildlife Sanctuary</a><p></p>
                                               <a  className="myusesection" href="">Tadoba National Park</a><p></p>
                                              <a  className="myusesection" href="">Satpura National Park</a><p></p>
                  
                    </ul>
    
                  </div>
    
                </div>
    
    
                <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
                  <div className="footer-item">
                    <div className="footer-title">
                      <h4>Main <span>Links</span></h4>
                      <div className="border-style-3"></div>
                    </div>
                    <ul className="footer-list ">
                      <Link  className="myusesection" to="/" >Home </Link><p></p>
                      <Link  className="myusesection" to="/About" >About Us </Link><p></p>
                      <Link  className="myusesection" to="" >Services </Link><p></p>
                      <Link  className="myusesection" to="" >Tour Packages </Link><p></p>
                      <Link  className="myusesection" to="" >Team </Link><p></p>
                      <Link  className="myusesection" to="" >Tailor Made Form </Link><p></p>
                      <Link  className="myusesection" to="" >Safari Booking </Link><p></p>
                      <Link  className="myusesection" to="/About" >Contact Us </Link><p></p>

                      
                     {/* <a className="myusesection"  href="index.html"></a>
                     <a className="myusesection"  href="aboutus.html">About Us</a><p></p>
                     <a className="myusesection"  href="our-services.html">Services</a><p></p>
                     <a className="myusesection"  href="wildlife-tour-packages.htm">Tour Packages</a><p></p>
                     <a className="myusesection"  href="our-team.html">Team</a><p></p>
                     <a className="myusesection"  href="tailor-make-form.html">Tailor Made Form</a><p></p>
                     <a className="myusesection"  href="houseboat-booking.html">Safari Booking</a><p></p>
                     <a className="myusesection"  href="/Home">Contact Us</a><p></p>
                    */}
    
                    </ul>
    <p>&nbsp;</p>
                  </div>
             
                </div>
    
                <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
                  <div className="footer-item">
                    <div className="footer-title">
                      <h4>Quick <span>Contact</span></h4>
                      <div className="border-style-3"></div>
                    </div>
    <h6>Jungle<span>&nbsp; Venture Tours</span></h6>
     
                    <ul className="footer-list footer-contact mb-10 myusesection">
                       <li className='myusesection'><i className="pe-7s-call"></i>  Mobile: +91 - 8120409279</li>
                       <li className="myusesection"> <i className="pe-7s-call"></i>  Mobile: +91 - 9878569279</li>
                       <li className=" myusesection">Email:</li>
                      <li><i className="pe-7s-mail"></i> <a 
                        className=" myusesection" href="">
                         pavanraghuwanshi77@gamil.com 
                       </a></li>
                      <li><i className="pe-7s-mail"></i> <a 
                        className=" myusesection"  href="">raghukulboy@gmail.com</a></li>
    
                    </ul>
                    <div className="footer-item">
                     
    <p>&nbsp;</p>
                    
    </div>
   
    </div>
    
                        
                      </div>
                    </div>
    
                  </div>
                </div>
              </footer>
    </>
  )
}
