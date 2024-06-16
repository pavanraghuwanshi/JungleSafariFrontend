import React from 'react'
import contact from "../Images/contectimage.jpeg"

export default function About() {
  return (
    <>
       <div>
          <h1 className="d-flex justify-content-center mt-3 mb-4">Safari Venture</h1>

              <p className="Myabouttext">Welcome to Safari Venture, the ultimate destination for your tours and travel needs. Whether you are looking for an adventure in the wild, a cultural exploration, or a relaxing getaway, we have the perfect package for you. Safari Venture offers a range of Ranthambore National Park,Sariska National Park ,Corbett National Park ,Bandhavgarh National Park,Kanha National Park,Panna National Park, Pench Wildlife Sanctuary,Tadoba National Park ,Satpura National Park You can witness diverse wildlife, stunning landscapes, and rich history with our experienced guides and comfortable accommodations. Book your adventure now and experience the wonders of India with Safari Venture!</p>
        </div>

        <div className="contectimage"> 
          <img src={contact} alt=""/>
        </div>


        <div className="contectcomponent">
          
          <ul className="footer-list footer-contact mb-10">
            <li><i className="pe-7s-call"></i>  Mobile: +91 - 8120409279</li>
            <li><i className="pe-7s-call"></i>  Mobile: +91 - 9878569279</li>
           <li><i className="pe-7s-mail"></i> <a 
            className="" href="mailto:tiger@junglesafari.in">Email:
             pavanraghuwanshi77@gamil.com
            </a></li>
           <li><i className="pe-7s-mail"></i> <a 
             className=""  href="mailto:junglesafaritours@gmail.com">raghukulboy@gmail.com</a></li>

         </ul>
        </div>

    </>
  )
}
