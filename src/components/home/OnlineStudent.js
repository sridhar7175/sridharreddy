import React from "react";

export const OnlineStudent = () => {
  return (
    <div>
      <div className="student1">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="student2">
                <h4>
                  Get A Free
                  <span style={{ color: "#FFBC09" }}>Online Courses</span>
                </h4>
                <p>Our domain expertise lies in</p>
                <h6 className="mt-4">• Web Development</h6>
                <h6>• Mobile App Development</h6>
                <form>
                  <div class="form-group ">
                    <div class="row">
                      <div class="col-md-6 mt-3">
                        <input
                          type="text"
                          name="name"
                          className="lastname"
                          id="lastname"
                          placeholder="Enter Name*"
                        />
                      </div>
                      <div class="col-md-6 mt-3">
                        <input
                          type="text"
                          name="name"
                          id="lastname"
                          className="lastname"
                          placeholder="Enter Email*"
                        />
                      </div>
                      <div class="col-md-6 mt-3">
                        <input
                          type="text"
                          name="name"
                          className="lastname"
                          id="lastname"
                          placeholder="Enter Phone*"
                        />
                      </div>
                      <div class="col-md-6 mt-3">
                        <select className="lastname" style={{ width: "200px" }}>
                          <option>MERN</option>
                          <option>MEAN</option>
                          <option>Python/ML</option>
                          <option>Others</option>
                        </select>
                      </div>
                      <div class="col-md-12 mt-3">
                        <textarea
                          class="lastname"
                          id="exampleFormControlTextarea1"
                          rows="5"
                          placeholder="Enter Message*"
                        ></textarea>
                      </div>
                      <button class="btn3 success mt-3">Register Now</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-4 student3">
              <img src="images/student.png" width="300px" height="700px" alt="student" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
