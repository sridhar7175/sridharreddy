import React from "react";
const Cards = () => {
  return (
    <div>
      <div className="card">
        <div className="container">
          <div className="card1" style={{ paddingTop: "90px" }}>
            <h4 className="text-center" style={{ fontWeight: "bold" }}>
              Why Choose Deva
            </h4>
            <p className="text-center">
              Ignites passion to learn and make you successful.
            </p>
          </div>
          <div className="row">
            <div className="col-md-4 wow fadeInLeft text-center mt-4 ">
              <div className="box1  text-center">
                <img
                  src="images/t2.jfif"
                  width="200px"
                  height="100px"
                  style={{ borderRadius: "10px" }}
                  alt="Beach Resort"
                />
                <h4 className="s1" style={{ color: " rgb(35, 156, 35)" }}>
                  Technology Workshop
                </h4>
                <p>
                  Deva conducting several workshops on latest technologies in
                  our locations and colleges near you. Follow our facebook page
                  or download our mobile app to get notified of meetups and
                  workshops.{" "}
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center mt-4 ">
              <div className="box2">
                <img
                  src="images/online.webp"
                  width="200px"
                  height="100px"
                  style={{ borderRadius: "10px" }}
                  alt="Beach Resort"
                />
                <h4 className="s2" style={{ color: " rgb(35, 156, 35)" }}>
                  Learn Courses Online
                </h4>
                <p className="text-center">
                  Hybrid training on latest technologies from convenience of
                  your home without loosing classNameroom experience for
                  practical & project session in classNameroom near you.
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center mt-4">
              <div className="box3">
                <img
                  src="images/training.webp"
                  width="200px"
                  height="100px"
                  style={{ borderRadius: "10px" }}
                  alt="Beach Resort"
                />
                <h4 className="s3" style={{ color: " rgb(35, 156, 35)" }}>
                  World ClassName Training / Dedicated Instructors
                </h4>
                <p>
                  Coding Sastra offers world className training with dedicated
                  experienced instructors in latest technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*--->Popular Courses   <------*/}
      <div className="popularcourses">
        <div className="container">
          <h3 className="text-center text-white">Most Popular Courses</h3>
          <p className="text-center text-white mt-2">
            If you are going to use a passage of Lorem Ipsum, you need to be
            sure <br /> there isn't anything embarrassing hidden in the middle
            of text
          </p>
        </div>
      </div>
    </div>
  );
};
export default Cards;
