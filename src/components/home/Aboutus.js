import React from "react";

export const Aboutus = () => {
  return (
    <div>
      {/*---> About Us */}
      <div className="aboutus">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <h2>About Us</h2>
              <p>
                ‘DEVA’ is an expert level ‘skill development center’ started by
                industry veterans, having a solid 3 year experience in the
                Hyderabad in multiple technologies.
              </p>
              <p className="mt-3">
                It was started as an initiative to provide ‘qualitative’ &
                ‘affordable’ training to both freshers & working professionals
                on some of the most cutting edge technologies, which are in
                utmost demand in the current market. In the process, we’ve been
                consistently successful in our attempt to, train & place
                freshers/professionals (like you) in highly rewarding careers
                with some of the top corporate companies.
              </p>
              <h3 className="mt-2">
                “Believe in your passion, it drives your career.”
              </h3>
              <p className="mt-2 text-right">--Sridhar Reddy, Founder</p>
            </div>
            <div class="col-md-6 mt-3">
              <img
                src="images/maxresdefault.jpg"
                width="600px"
                style={{ borderRadius: "10px" }}
                alt="Beach Resort"
              />
            </div>
          </div>
        </div>
      </div>
      {/*---> Students */}
      <div className="students-main">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-3 text-white text-center mt-2">
              <img
                src="images/counter_icon1.png"
                style={{ color: "white", paddingBottom: "10px" }}
                alt="Beach Resort"
              />
              <h3>1000+</h3>
              <p>Students</p>
            </div>
            <div className="col-md-3 text-white text-center mt-2">
              <img
                src="images/counter_icon2.png"
                style={{ color: "white", paddingBottom: "10px" }}
                alt="Beach Resort"
              />
              <h3>20+</h3>
              <p>Courses</p>
            </div>
            <div className="col-md-3 text-white text-center mt-2">
              <img
                src="images/counter_icon3.png"
                style={{ color: "white", paddingBottom: "10px" }}
                alt="Beach Resort"
              />
              <h3>20+</h3>
              <p>Certified Teachers</p>
            </div>
            <div className="col-md-3 text-white text-center mt-2">
              <img
                src="images/counter_icon4.png"
                style={{ color: "white", paddingBottom: "10px" }}
                alt="Beach Resort"
              />
              <h3>100+</h3>
              <p>Award Winning</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
