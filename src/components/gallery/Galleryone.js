import React from "react";
import { Link } from "react-router-dom";

export const Galleryone = () => {
  return (
    <div>
      <div className="gallery">
        <div className="container">
          <div className="row">
            <div className="col-md-6 gallery1">
              <h1 className="text-white">Gallery</h1>
            </div>
            <div className="col-md-6 gallery2 text-white">
              <Link to="/" className="text-white">
                Home
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container gallery3">
        <h3 className="mt-3" style={{ color: "#CF2DE4" }}>
          Full Stack Workshop @ B V Raju Institute of Computer
          <br />
          Education (BVRICE), Bhimavaram
        </h3>
        <a href="images/g1.jpg" data-lightbox="mygallery">
          <img src="images/g1.jpg" width="300px" alt="Beach Resort" />
        </a>
        <a href="images/g2.jpg" data-lightbox="mygallery">
          <img src="images/g2.jpg" width="300px" alt="Beach Resort" />
        </a>
        <a href="images/g3.jpg" data-lightbox="mygallery">
          <img src="images/g3.jpg" width="300px" alt="Beach Resort" />
        </a>
        <a href="images/g4.jpg" data-lightbox="mygallery">
          <img src="images/g4.jpg" width="300px" alt="Beach Resort" />
        </a>
        <a href="images/g5.jpg" data-lightbox="mygallery">
          <img src="images/g5.jpg" width="300px" alt="Beach Resort" />
        </a>
      </div>
      <div className="container gallery3 mt-3">
        <h3 className="mt-3" style={{ color: "#CF2DE4" }}>
          Full Stack Web Development @ St. Mary’s College of Engineering,
          Hyderabad
        </h3>
        <a href="images/g6.jpg" data-lightbox="mygallery">
          <img src="images/g6.jpg" width="300px" alt="Beach Resort" />
        </a>
        <a href="images/g7.jpg" data-lightbox="mygallery">
          <img src="images/g7.jpg" width="300px" alt="Beach Resort" />
        </a>
        <a href="images/g8.jpg" data-lightbox="mygallery">
          <img src="images/g8.jpg" width="300px" alt="Beach Resort" />
        </a>
        <a href="images/g9.jpg" data-lightbox="mygallery">
          <img src="images/g9.jpg" width="300px" alt="Beach Resort" />
        </a>
        <a href="images/g10.jpg" data-lightbox="mygallery">
          <img src="images/g10.jpg" width="300px" alt="Beach Resort" />
        </a>
      </div>

      <div className="container gallery3 mt-3">
        <h3 className="mt-3" style={{ color: "#CF2DE4" }}>
          Full Stack Web Development Workshop @ Gitam, Vizag
        </h3>
        <a href="images/g11.jpg" data-lightbox="mygallery">
          <img src="images/g11.jpg" width="300px" alt="Beach Resort" />
        </a>
        <a href="images/g12.jpg" data-lightbox="mygallery">
          <img src="images/g12.jpg" width="300px" alt="Beach Resort" />
        </a>
        <a href="images/g13.jpg" data-lightbox="mygallery">
          <img src="images/g13.jpg" width="300px" alt="Beach Resort" />
        </a>
        <a href="images/g14.jpg" data-lightbox="mygallery">
          <img src="images/g14.jpg" width="300px" alt="Beach Resort" />
        </a>
        <a href="images/g15.jpg" data-lightbox="mygallery">
          <img src="images/g15.jpg" width="300px" alt="Beach Resort" />
        </a>
      </div>
    </div>
  );
};
