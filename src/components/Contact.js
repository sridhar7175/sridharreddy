import React from "react";

export const Contact = () => {
  return (
    <div>
      <div className="contact1">
        <div className="container">
          <h2 className="text-center">Get In Touch</h2>
          <p className="text-center">
            Contact us for any training requirements you have.
          </p>
          <div className="row">
            <div className="col-md-6 mt-5">
              <div className="contact2">
                <form>
                  <input
                    type="text"
                    className="mt-5"
                    style={{ width: "470px", height: "40px" }}
                    placeholder="Enter Name.."
                  />
                  <input
                    type="text"
                    className="mt-3"
                    style={{ width: "470px", height: "40px" }}
                    id="fname"
                    name="firstname"
                    placeholder="Enter Email.."
                  />
                  <input
                    type="text"
                    className="mt-3"
                    style={{ width: "470px", height: "40px" }}
                    id="fname"
                    name="firstname"
                    placeholder="Enter Mobile.."
                  />
                  <input
                    type="text"
                    className="mt-3"
                    style={{ width: "470px", height: "40px" }}
                    id="fname"
                    name="firstname"
                    placeholder="Enter Subject.."
                  />
                  <textarea
                    id="subject"
                    className="mt-3"
                    style={{ width: "470px", height: "100px" }}
                    name="subject"
                    placeholder="Message.."
                  ></textarea>
                  <button type="button" className="btn btn-danger mt-3 w-50">
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-6 mt-5">
              <section id="contact" className="map ">
                <iframe
                  width="100%"
                  height="500px"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  title="abc"
                  src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;aq=0&amp;oq=twitter&amp;sll=28.659344,-81.187888&amp;sspn=0.128789,0.264187&amp;ie=UTF8&amp;hq=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;t=m&amp;z=15&amp;iwloc=A&amp;output=embed"
                ></iframe>
                <br />
                <small>
                  <a href="https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;aq=0&amp;oq=twitter&amp;sll=28.659344,-81.187888&amp;sspn=0.128789,0.264187&amp;ie=UTF8&amp;hq=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;t=m&amp;z=15&amp;iwloc=A"></a>
                </small>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className="contact3">
        <div className="container text-center">
          <h3>
            <b>Contact Information</b>
          </h3>
          <p>
            If you are going to use a passage of Lorem Ipsum, you need to be
            sure there
            <br />
            isn't anything embarrassing hidden in the middle of text
          </p>
          <div className="contact4">
            <div className="row">
              <div className="col-md-4 mt-4">
                <div className="contactcard1">
                  <img src="images/p1.png" alt="contact1" />
                  <h5 className="mt-2 text-white">Call Us</h5>
                  <h6 className="mt-2 text-white">+91 9951013133</h6>
                  <h6 className="mt-2 text-white">+91 9951013133</h6>
                </div>
              </div>
              <div className="col-md-4 mt-4">
                <div className="contactcard2">
                  <img src="images/m1.png" alt="contact1" />
                  <h5 className="mt-2 text-white">Address</h5>
                  <h6 className="mt-2 text-white">
                    MIG 27/1, Road #6, Dharma Reddy Colony, Phase 1 Behind VRK
                    Silks, KPHB Colony Hyderabad TS-500072.
                  </h6>
                </div>
              </div>
              <div className="col-md-4 mt-4">
                <div className="contactcard3">
                  <img src="images/e1.png" alt="contact1" />
                  <h5 className="mt-2 text-white">Email</h5>
                  <h6 className="mt-2 text-white">deva@info.com</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
