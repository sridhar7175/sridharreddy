import React from 'react';

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
            <div style={{ backgroundColor: "black", width: "100%", height: "500px" }}></div>
            <div class="carousel-caption">
              <h4>WELCOME TO CODING SASTRA</h4>
              <p>Ignites Passion To Learn</p>
              <button class="btn warning">Get Started</button>&nbsp;&nbsp;&nbsp;
              <button class="btn1 success">Learn More</button>
            </div>
          </div>
          <div class="carousel-item active">
            <div style={{ backgroundColor: "black", width: "100%", height: "500px" }}></div>
            <div class="carousel-caption">
              <h4>WELCOME TO CODING SASTRA</h4>
              <p>Ignites Passion To Learn</p>
              <button class="btn warning">Get Started</button>&nbsp;&nbsp;&nbsp;
            <button class="btn1 success">Learn More</button>
            </div>
          </div>
          <div class="carousel-item">
            <div style={{ backgroundColor: "black", width: "100%", height: "500px" }}></div>
            <div class="carousel-caption">
              <h4><span style={{ color: "#f5bf2f" }}>EDUCTION</span> FROM A NEW ANGLE</h4>
              <p>Learn to become Software Engineer in 16 Weeks</p>
              <button class="btn warning">Get Started</button>&nbsp;&nbsp;&nbsp;
            <button class="btn1 success">Learn More</button>
            </div>
          </div>
        </div> <a class="carousel-control-prev" href="#carousel-403108" data-slide="prev"><span class="carousel-control-prev-icon"></span> <span class="sr-only">Previous</span></a> <a class="carousel-control-next" href="#carousel-403108" data-slide="next"><span class="carousel-control-next-icon"></span> <span class="sr-only">Next</span></a>
      </div>
    </div>

  )
}
export default Slider;