import React from "react";

export const Fullstackweb = () => {
  return (
    <div>
      <div className="fullstackweb">
        <div className="container">
          <h1>
            Full Stack Mobile App <br />
            Development
          </h1>
        </div>
      </div>
      <div className="container">
        <div className="fullweb-description">
          <h1>Full Stack Mobile App Development</h1>
          <h5 className="mt-5 text-left">
            React Native has been chosen by various renowned companies to
            develop mobile apps as this is one of the most robust and reliable
            cross-platform development frameworks. The curriculum is based on:
          </h5>
          <ul className="mt-4">
            <li>
              <p style={{ fontSize: "18px" }}>
                You will learn JavaScript, React, React Native
              </p>
            </li>
            <li>
              <p style={{ fontSize: "18px" }}>
                App Development Basics, Firebase
              </p>
            </li>
            <li>
              <p style={{ fontSize: "18px" }}>AWS Amplify/AppSync.</p>
            </li>
          </ul>
          <h5 className="mt-5">
            React Native is an open-source framework that allows you to build a
            mobile app with only JavaScript. It was introduced by Jordan Walke,
            a Facebook software engineer, as a new technology for simpler
            development and a better user experience.
          </h5>
          <div className="fullstack-bentifies mt-4">
            <h1 className="text-left">Additional Benefits:</h1>
            <ul className="mt-3">
              <li>
                <p style={{ fontSize: "20px" }}>
                  Placement Assistance & Job Support.
                </p>
              </li>
              <li>
                <p style={{ fontSize: "20px" }}>
                  Internships in Hiring Partner Companies.
                </p>
              </li>
              <li>
                <p style={{ fontSize: "20px" }}>
                  Candidates will be certified as Full-Stack Mobile App Developers.
                </p>
              </li>
            </ul>
            <div className="fullstack-download mt-5">
              <h1>Download Program Brochure</h1>
              <button type="button" className="btn btn-danger mt-3">
                Download
              </button>
            </div>
            <div className="fullstack-tabledata mt-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
