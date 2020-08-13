import React from "react";
import { Link } from "react-router-dom";

const Workshop = () => {
  return (
    <div>
      <div className="workshop">
        <div className="container">
          <div className="workshop-title">
            <h1>workshops</h1>
          </div>
        </div>
      </div>
      <div className="workshop-description">
        <div className="container">
          <div className="latestworkshop mt-4">
            <h4 className="text-left" style={{ color: "#AE1438" }}>
              Latest Workshops
            </h4>
          </div>
          <div className="workshop-box mt-4">
            <div className="row">
              <div className="col-md-3">
                <div className="box-one">
                  <img src="images/workshop.jpg" alt="workshop" />
                </div>
              </div>
              <div className="col-md-9">
                <div className="box-two">
                  <Link>Backend Develop using NodeJS (Two Day Workshop)</Link>
                  <br />
                </div>
                <div className="box-three">
                  <Link className="">Sridhar</Link>
                </div>
                <div className="box-four">
                  <Link>Feb 15 03:30--Feb 16 11:30</Link>
                </div>
                <div className="box-five">
                  <Link>2000</Link>
                </div>
                <div className="box-six">
                  <Link>Venue: Coding Sastra Hyderabad, KPHB</Link>
                </div>
                <div className="box-seven">
                  <button className="btn btn-danger">Download Brochure</button>
                  <button className="btn btn-success">Register Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="workshop-description">
      <div className="container">
        <div className="workshop-box mt-4">
          <div className="row">
            <div className="col-md-3">
              <div className="box-one">
                <img src="images/workshop.jpg" alt="workshop" />
              </div>
            </div>
            <div className="col-md-9">
              <div className="box-two">
                <Link>Front End Development using React (Two Day Workshop)</Link>
                <br />
              </div>
              <div className="box-three">
                <Link className="">Sridhar</Link>
              </div>
              <div className="box-four">
                <Link>Feb 15 03:30--Feb 16 11:30</Link>
              </div>
              <div className="box-five">
                <Link>2000</Link>
              </div>
              <div className="box-six">
                <Link>Venue: Coding Sastra Hyderabad, KPHB</Link>
              </div>
              <div className="box-seven">
                <button className="btn btn-danger">Download Brochure</button>
                <button className="btn btn-success">Register Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
};

export default Workshop;
