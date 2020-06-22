import React from 'react';
import { Link } from 'react-router-dom';

const Slider = () => {
  return (
    <div>

      <div class="carousel slide" id="carousel-403108">
        <ol class="carousel-indicators">
          <li data-slide-to="0" data-target="#carousel-403108">
          </li>
          <li data-slide-to="1" data-target="#carousel-403108" class="active">
          </li>
          <li data-slide-to="2" data-target="#carousel-403108">
          </li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item">
            <div style={{ backgroundColor: "#207BEE", width: "100%", height: "500px" }}></div>
            <div class="carousel-caption">
              <h4>“Learning Never Stops”</h4>
              <p>Take interactive Online Classroom Training during COVID-19 Lockdown.</p>
              <Link to='/courses'><button class="btn1 success mt-3 text-left">View Programs</button></Link>
            </div>
          </div>
          <div class="carousel-item active">
            <div style={{ backgroundColor: "#207BEE", width: "100%", height: "500px" }}></div>
            <div class="carousel-caption">
              <h4>Your Reliable Career Growth Partner</h4>
              <p>More than 10,000 People opted Deva Lync for Skilling and Upskilling in
            Disruptive Technologies</p>

              <Link to='/courses'><button class="btn1 success mt-3">View Programs</button></Link>
            </div>
          </div>
          <div class="carousel-item">
            <div style={{ backgroundColor: "#207BEE", width: "100%", height: "500px" }}></div>
            <div class="carousel-caption">
              <h4>Your Reliable Career Growth Partner</h4>
              <p>More than 10,000 People opted Deva Lync for Skilling and Upskilling in
            Disruptive Technologies</p>
              <Link to='/courses'><button class="btn1 success mt-3">View Programs</button></Link>
            </div>
          </div>
        </div> <a class="carousel-control-prev" href="#carousel-403108" data-slide="prev"><span class="carousel-control-prev-icon"></span> <span class="sr-only">Previous</span></a> <a class="carousel-control-next" href="#carousel-403108" data-slide="next"><span class="carousel-control-next-icon"></span> <span class="sr-only">Next</span></a>
      </div>
    </div>

  )
}
export default Slider;