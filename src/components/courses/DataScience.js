import React from "react";

export const DataScience = () => {
  return (
    <div>
      <div className="datascience">
        <div className="container">
          <h1>Data Science</h1>
        </div>
      </div>
      <div className="datascience1">
        <div className="container">
          <h5 className="mt-4">
            Data Science is one of the emerging fields of the 21st century. It
            is in high demand across the globe with high paying salaries and
            perks to data scientists and data engineers.
          </h5>
          <h5 className="mt-4">
            This course takes you one step closer to becoming a data scientist
            by offering a subset of the topics covered in our Data Science
            Bootcamp. You'll get a well-rounded intro to the core concepts and
            technologies taught within the bootcamp, including basic machine
            learning principles and hands-on coding experience. Plus, you'll put
            it all to practice through a mini data science project of your own.
            We'll cover the following:
          </h5>
          <ul className="mt-3">
            <li>Data acquisition, cleaning, and aggregation</li>
            <li>Exploratory data analysis and visualization</li>
            <li>Feature engineering</li>
            <li>Model creation and validation</li>
            <li>
              Basic statistical and mathematical foundations for data science
            </li>
          </ul>
          <h4 className="mt-3">Download Program Brochure</h4>
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
  );
};
