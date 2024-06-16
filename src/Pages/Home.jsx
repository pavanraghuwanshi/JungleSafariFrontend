import React from 'react'
import one from "../Images/one.jpg";
import two from "../Images/two.jpg";
import three from "../Images/three.jpg";
import four from "../Images/four.jpg";
import five from "../Images/five.jpg";



function Home() {
  return (
    <>

        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={one} className="d-block w-100" alt="image error"/>
                    </div>
                    <div className="carousel-item">
                      <img src={two} className="d-block w-100"  alt="image error"/>
                    </div>
                    <div className="carousel-item">
                      <img src={three} className="d-block w-100"  alt="image error"/>
                    </div>
                    <div className="carousel-item">
                      <img src={four} className="d-block w-100"  alt="image error"/>
                    </div>
                    <div className="carousel-item">
                      <img src={five} className="d-block w-100"  alt="image error"/>
                    </div>
                  </div>
                </div>

                <script src="	https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>


    </>
  )
}
export default Home;
