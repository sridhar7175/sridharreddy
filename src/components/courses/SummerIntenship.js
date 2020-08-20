import React from "react";

const SummerIntenship = () => {
  return (
    <div>
      <div
        className=""
        style={{
          backgroundImage: "url(images/Summer.png)",
          width: "100%",
          height: "300px",
          backgroundPosition:"center",
          backgroundRepeat:"no-repeat",
          backgroundSize:"cover"
        }}
      >
        <h1 className=" text-center summmer1">Summer Intenship</h1>
      </div>
      <div className="container">
        <div className="summer2">
          <h2 className="mt-5">SUMMER Internship Training 2020</h2>
          <h5 className="mt-3">
            Deva please to announce Summer Internship Training to 3rd / 4th year
            students of Engineering / MCA students to learn about new
            technologies to learn to enter into Software Development and prepare
            you for future career planning and campus interviews.
          </h5>
          <h5>
            We are planning to offer internship program in three categories of
            emerging technologies.
          </h5>
          <ul className="mt-3">
            <li>
              Full Stack Web Development using HTML/CSS/JS/React/Node/MongoDB
              (MERN Stack)
            </li>
            <li>Python Foundations w/ Introduction to Machine Learning</li>
            <li>AWS Cloud Computing w/ Introduction to DevOps</li>
          </ul>
          <h4 className="mt-3">Duration:</h4>
          <h6 className="mt-3">30 Days</h6>
          <h4 className="mt-3">Faculty:</h4>
          <ul>
            <li>Mr Deva (MERN Stack)</li>
            <li>Mr Sridhar (Python/DS)</li>
            <li>Mr Charan (AWS)</li>
          </ul>
          <h4 className="mt-3">Teaching Assistants:</h4>
          <ul>
            <li>Mr Praveensai (MERN Stack)</li>
            <li>Mr Bharth (Python/DS)</li>
            <li>Mr Uday (AWS)</li>
          </ul>
          <p className="mt-4" style={{ fontSize: "25px" }}>
            We will announce more details soon along with batch details...
          </p>
          <div className="fullstack-download mt-5">
            <h1>Download Program Brochure</h1>
            <button
              type="button"
              className="btn btn-danger mt-3"
              style={{ borderRadius: "25px" }}
            >
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummerIntenship;
