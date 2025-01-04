import React from "react";
import { useNavigate } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";

const Blogs = () => {
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
            <button className="btn warning back" onClick={handleBack}>
              <IoHomeSharp />
              <h6>__Blogs</h6>
            </button>
            <br />

            <section className="py-5">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 col-md-6 mb-5">
                    <a href="#">
                      <div className="blog">
                        <figure>
                          <img
                            src="https://www.thespruce.com/thmb/r1MoK1vzHukmeTHQdmXFEk_WV08=/1580x1060/filters:no_upscale():max_bytes(150000):strip_icc()/Modern-Gray-Living-Room-Fully-Interiors-586fc33e5f9b584db3125eeb.png"
                            alt="Blog"
                            width="100%"
                          />
                        </figure>
                        <div className="date">
                          <span>29 Dec</span>
                        </div>
                        <h2>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Laborum, omnis!
                        </h2>
                        <div className="more-btn">
                          <span>Read More</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-5">
                    <a href="#">
                      <div className="blog">
                        <figure>
                          <img
                            src="https://www.thespruce.com/thmb/r1MoK1vzHukmeTHQdmXFEk_WV08=/1580x1060/filters:no_upscale():max_bytes(150000):strip_icc()/Modern-Gray-Living-Room-Fully-Interiors-586fc33e5f9b584db3125eeb.png"
                            alt="Blog"
                            width="100%"
                          />
                        </figure>
                        <div className="date">
                          <span>29 Dec</span>
                        </div>
                        <h2>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Laborum, omnis!
                        </h2>
                        <div className="more-btn">
                          <span>Read More</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-5">
                    <a href="#">
                      <div className="blog">
                        <figure>
                          <img
                            src="https://www.thespruce.com/thmb/r1MoK1vzHukmeTHQdmXFEk_WV08=/1580x1060/filters:no_upscale():max_bytes(150000):strip_icc()/Modern-Gray-Living-Room-Fully-Interiors-586fc33e5f9b584db3125eeb.png"
                            alt="Blog"
                            width="100%"
                          />
                        </figure>
                        <div className="date">
                          <span>29 Dec</span>
                        </div>
                        <h2>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Laborum, omnis!
                        </h2>
                        <div className="more-btn">
                          <span>Read More</span>
                        </div>
                      </div>
                    </a>
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

export default Blogs;
