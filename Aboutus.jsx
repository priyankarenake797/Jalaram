import React from "react";
import { useNavigate } from "react-router-dom";
import { GiBowman } from "react-icons/gi";
import { GiAfterburn } from "react-icons/gi";
import { GiDiamondTrophy } from "react-icons/gi";
import { IoHomeSharp } from "react-icons/io5";

const Aboutus = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <>
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
          <h6>__AboutUs</h6>
        </button>
        <h6 className="valuA">About Jalaram life space</h6>

        <p className="card-text">
          We strive to create spaces that significantly improve the quality of
          life for indivisuals and families, by setting gold standards in
          customer-centricity,architectural design, quality and saftey. To
          ensure that our developments are of the highest calibre, we seek the
          world's most renowned and leading experts in the real estate sector to
          collaborate with us.
        </p>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-3">
              <div className="counter">
                <h3>
                  <span className="count">13</span>sq.ft.+
                </h3>
                <p>Developments</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-3">
              <div className="counter">
                <h3>
                  <span className="count">5</span>+
                </h3>
                <p>Years Of Expertise</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-3">
              <div className="counter">
                <h3>
                  <span className="count">5000</span>+
                </h3>
                <p>Happy Families</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <div className="counter">
                <h3>
                  <span className="count">20</span>+
                </h3>
                <p>Developments</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <h1 className="target">
                <GiBowman />
              </h1>
              <h6 className="vision">Vision</h6>

              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis, fugiat animi eos ipsam iure adipisci recusandae
                nesciunt in tempore repellendus a maxime, voluptatem eligendi
                laboriosam quas iusto voluptatibus aperiam eveniet?
              </p>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <h1 className="target">
                <GiAfterburn />
              </h1>
              <h6 className="vision">Mission</h6>

              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis, fugiat animi eos ipsam iure adipisci recusandae
                nesciunt in tempore repellendus a maxime, voluptatem eligendi
                laboriosam quas iusto voluptatibus aperiam eveniet?
              </p>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <imag src="https://tse1.mm.bing.net/th?id=OIP.LNjVpj2TIl9T40rxWMVaqQHaE3&pid=Api&P=0&h=180" />
              <h1 className="target">
                <GiDiamondTrophy />
              </h1>
              <h6 className="vision">Values</h6>

              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis, fugiat animi eos ipsam iure adipisci recusandae
                nesciunt in tempore repellendus a maxime, voluptatem eligendi
                laboriosam quas iusto voluptatibus aperiam eveniet?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
