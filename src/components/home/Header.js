import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaMobileAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { Modal } from "react-bootstrap";

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="header1">
        <div className="container ">
          <div className="row">
            <div className="col-md-4 text-white mt-2">
              <div className="text-center">
                <Link to="/">
                  {" "}
                  <FaMobileAlt /> +91 7337213134{" "}
                </Link>
                &nbsp;
                <a href="mailto:info@codingsastra.com">
                  {" "}
                  <AiOutlineMail /> info@deva.com{" "}
                </a>
              </div>
            </div>
            <div className="col-md-4 mt-2">
              <div className="text-center" style={{ fontSize: "20px" }}>
                <a
                  href="https://www.facebook.com/codingsastra/"
                  target="_blank"
                >
                  <FaFacebook />
                </a>{" "}
                &nbsp;&nbsp;
                <a
                  href="https://twitter.com/codingsastra?lang=en"
                  target="_blank"
                >
                  <AiFillTwitterCircle />
                </a>{" "}
                &nbsp;&nbsp;
                <a href="https://www.codingsastra.com/" target="_blank">
                  <AiFillGoogleCircle />
                </a>
                &nbsp;&nbsp;
              </div>
            </div>
            <div className="col-md-4 mt-2">
              <div className="text-center">
                <Link to="/applynow">ApplyNow</Link>&nbsp; &nbsp; &nbsp; &nbsp;
                <Link onClick={handleShow}>Login </Link>
                <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    <h3>Login</h3>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="login2">
                      <form>
                        <input
                          type="text"
                          className="mt-3"
                          placeholder="Email*"
                        />
                        <input
                          type="text"
                          className="mt-3"
                          id="fname"
                          name="firstname"
                          placeholder="Password*"
                        />
                        <br />
                        <input type="checkbox" className="mt-3" /> &nbsp;&nbsp;
                        <label class="form-check-label" for="exampleCheck1">
                          Check me out
                        </label>
                        <button
                          type="button"
                          style={{ width: "400px", height: "40px" }}
                          className="btn btn-danger mt-3"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </Modal.Body>
                </Modal>
                &nbsp; &nbsp; &nbsp; &nbsp;
                <Link>Register </Link>
              </div>
              <div className="mb-2"></div>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};
export default Header;
