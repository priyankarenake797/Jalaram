import React from "react";
import { useNavigate } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";

const Projects = () => {
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
              <h6>__Projects</h6>
            </button>

            <div className="col-lg-3col-md-4 mb-3">
              <div className="row">
                <div className="values_card2">
                  <img
                    src="http://media.timeout.com/images/101657513/image.jpg"
                    className="table"
                  />
                  <h5>
                    Lorem ipsum dolor sit amet. <br />
                    One World, Endless Luxuries
                  </h5>
                  <h6>Location: Ranibaug, Byculla, South Mumbai.</h6>
                </div>

                <div className="values_card2">
                  <div>
                    <img
                      src="http://upload.wikimedia.org/wikipedia/commons/a/a0/BuildingsLiningChicagoRiver.jpg"
                      className="table"
                    />
                    <h5>
                      Lorem ipsum dolor sit amet. <br />
                      One World, Endless Luxuries
                    </h5>
                    <h6>Location: Ranibaug, Byculla, South Mumbai</h6>
                  </div>
                </div>

                <div className="values_card2">
                  <img
                    src="http://media.timeout.com/images/101657513/image.jpg"
                    className="table"
                  />
                  <h5>
                    Lorem ipsum dolor sit amet. <br />
                    One World, Endless Luxuries
                  </h5>
                  <h6>Location: Ranibaug, Byculla, South Mumbai</h6>
                </div>

                <div className="values_card2">
                  <img
                    src="http://upload.wikimedia.org/wikipedia/commons/a/a0/BuildingsLiningChicagoRiver.jpg"
                    className="table"
                  />
                  <h5>
                    Lorem ipsum dolor sit amet. <br />
                    One World, Endless Luxuries
                  </h5>
                  <h6>Location: Ranibaug, Byculla, South Mumbai</h6>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Projects;
