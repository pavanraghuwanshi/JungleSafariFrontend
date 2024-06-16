import React from 'react'
import { Link } from 'react-router-dom';




import bandhav from "../Images/bandhavgarh.jpeg"
import kanha from "../Images/kanha.jpeg"
import panna from "../Images/panna.jpeg"
import rantham from "../Images/rantham.jpeg"
import sariska from "../Images/sariska.jpeg"
import corbett from "../Images/corbett.jpeg"







export default function Destination() {
  return (
    <>
      
        
      <div className=" col-sm-12 col-md-6 col-lg-4 mt-4 d-md-flex d-lg-flex justify-content-around w-100">

<div className="card width" >


    <img src={rantham} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Ranthambore National Park</h5>
      <p className="card-text">Ranthambore National Park, located in the Sawai Madhopur district of Rajasthan, India, is a captivating wildlife reserve.</p>

      <Link className="btn btn-primary" to="aboutmore">About More</Link>
      {/* <a href="#" className="btn btn-primary">About More</a> */}
    </div>
  </div>
<div className="card width" >
    <img src={sariska} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Sariska National Park</h5>
      <p className="card-text">Sariska Tiger Reserve is a tiger reserve in Alwar district, Rajasthan, India.It stretches over an area of 881 km2 comprising scrub-thorn arid forests, dry deciduous forests, grasslands, and rocky hills.
      </p>

      <Link className="btn btn-primary" to="aboutmore">About More</Link>
      {/* <a href="#" className="btn btn-primary">About More</a> */}
    </div>
  </div>
<div className="card width" >
    <img src={corbett} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Corbett National Park</h5>
      <p className="card-text">Jim Corbett National Park is a national park in India located in the Nainital district of Uttarakhand state. The first national park in India.</p>

      <Link className="btn btn-primary" to="aboutmore">About More</Link>
      {/* <a href="#" className="btn btn-primary">About More</a> */}
    </div>
  </div>


</div>


<div className=" col-sm-12 col-md-6 col-lg-4 mt-4 d-md-flex d-lg-flex justify-content-around w-100">


  <div className="card width" >
      <img src={bandhav} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Bandhavgarh National Park</h5>
        <p className="card-text">Ranthambore National Park, located in the Sawai Madhopur district of Rajasthan, India, is a captivating wildlife reserve.</p>

        <Link className="btn btn-primary" to="aboutmore">About More</Link>
        {/* <a href="#" className="btn btn-primary">About More</a> */}
      </div>
    </div>
  <div className="card width" >
      <img src={kanha} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Kanha National Park</h5>
        <p className="card-text">Kanha Tiger Reserve, also known as Kanha-Kisli National Park, is one of the tiger reserves of India and the largest national park of the state of Madhya Pradesh. 
        </p>

        <Link className="btn btn-primary" to="aboutmore">About More</Link>
        {/* <a href="#" className="btn btn-primary">About More</a> */}
      </div>
    </div>
  <div className="card width" >
      <img src={panna} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Panna National Park</h5>
        <p className="card-text">Panna National Park is an Indian national park in Panna and Chhatarpur Districts of Madhya Pradesh. It was declared in 1994 as the twenty second Tiger reserve of India.</p>
        
        <Link className="btn btn-primary" to="aboutmore">About More</Link>
        {/* <a href="#" className="btn btn-primary">About More</a> */}
      </div>
    </div>

  </div>

    </>
  )
}
