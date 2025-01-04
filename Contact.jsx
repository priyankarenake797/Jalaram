import React from "react";
import { useNavigate } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  return (
    <>
      <div>
        <div>
          <section>
            <img
              src="https://www.thespruce.com/thmb/r1MoK1vzHukmeTHQdmXFEk_WV08=/1580x1060/filters:no_upscale():max_bytes(150000):strip_icc()/Modern-Gray-Living-Room-Fully-Interiors-586fc33e5f9b584db3125eeb.png"
              className="aboutbanner"
            />
          </section>
          <section className="containerA">
            <br />
            <br />
            <button className="btn warning back" onClick={handleBack}>
              <IoHomeSharp />
              <h6>__Contact</h6>
            </button>
            <br />
            <section className="py-5">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 mb-4">
                    <div className="contact-info mb-3">
                      <div className="row">
                        <div className="col-sm-2 col-3">
                          <div className="icon">
                            <FaPhoneSquareAlt />
                          </div>
                        </div>
                        <div className="col-sm-10 col-9">
                          <div className="info">
                            <h4>Reception:</h4>

                            <p>
                              Tel. + <a href="#">(91) 919922300017</a>
                            </p>
                            <p>
                              Tel. + <a href="#">(91) 919922300019</a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="contact-info mb-3">
                      <div className="row">
                        <div className="col-sm-2 col-20">
                          <div className="icon">
                            <FaPhoneSquareAlt />
                          </div>
                        </div>
                        <div className="col-sm-10 col-9">
                          <div className="info">
                            <h4>Business:</h4>
                            <p>
                              Tel. + <a href="#">(91) 917021066037</a>
                            </p>
                            <p>
                              Tel. + <a href="#">(91) 919137643531</a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="contact-info mb-3">
                      <div className="row">
                        <div className="col-sm-2 col-3">
                          <div className="icon">
                            <IoIosMail />
                          </div>
                        </div>
                        <div className="col-sm-10 col-9">
                          <div className="info">
                            <h4>Mail address:</h4>
                            <p>
                              <a href="#">info@example.com</a>
                            </p>
                            <p>
                              <a href="#">support@example.com</a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="contact-info">
                      <div className="row">
                        <div className="col-sm-2 col-3">
                          <div className="icon">
                            <FaPhoneSquareAlt />
                          </div>
                        </div>
                        <div className="col-sm-10 col-9">
                          <div className="info">
                            <h4>Office:</h4>
                            <p>
                              Tel. <a href="#"> 02228910517</a>
                            </p>
                            <p>
                              Tel. <a href="#"> 02228906263</a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="contact-form">
                      <h3>Contact Us</h3>
                      <form action="">
                        <div className="row">
                          <div className="col-lg-6 col-md-6 mb-4">
                            <input
                              type="text"
                              placeholder="Name"
                              fdprocessedid="s1zdlm"
                            />
                          </div>
                          <div className="col-lg-6 col-md-6 mb-4">
                            <input
                              type="email"
                              placeholder="Email"
                              fdprocessedid="vup59g"
                            />
                          </div>
                          <div className="col-lg-6 col-md-6 mb-4">
                            <input
                              type="text"
                              placeholder="Mobile Number"
                              fdprocessedid="x3zgqo"
                            />
                          </div>
                          <div className="col-lg-6 col-md-6 mb-4">
                            <input
                              type="text"
                              placeholder="Subject"
                              fdprocessedid="5vwvme"
                            />
                          </div>
                          <div className="col-lg-12 mb-4">
                            <textarea placeholder="Message" />
                          </div>
                          <div className="col-lg-12">
                            <input
                              type="submit"
                              Value="Message"
                              fdprocessedid="244xti"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-12 mb-4">
                    <div
                      className="you_tube_iframe contact_iframe"
                      data-embed-url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.044446201405!2d72.83021927596525!3d19.061783352417276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c915c7b00001%3A0xefcad2365d93af3b!2s891%20Blue%20Nile!5e0!3m2!1sen!2sin!4v1726748225333!5m2!1sen!2sin"
                    >
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.044446201405!2d72.83021927596525!3d19.061783352417276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c915c7b00001%3A0xefcad2365d93af3b!2s891%20Blue%20Nile!5e0!3m2!1sen!2sin!4v1726748225333!5m2!1sen!2sin"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen="true"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
    </>
  );
};

export default Contact;
