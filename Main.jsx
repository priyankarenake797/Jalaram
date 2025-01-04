import React from "react";
import { IoMdStar } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Main = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <main>
      <section>
        <img
          src="https://www.thespruce.com/thmb/r1MoK1vzHukmeTHQdmXFEk_WV08=/1580x1060/filters:no_upscale():max_bytes(150000):strip_icc()/Modern-Gray-Living-Room-Fully-Interiors-586fc33e5f9b584db3125eeb.png"
          alt=""
          className="image"
        />
        <div className="text-overlay">
          Redifining living spaces with over four decades of expertise
        </div>
      </section>

      <section className="next-section">
        <h6 className="valu">About Jalaram life space</h6>

        <p className="our">
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

      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mb-3">
              <div className="value">
                <span>Values we preserve</span>
              </div>
              <div className="big_content">
                <p>
                  We create spaces that enable Everyday Joys; one community, one
                  family, and one home at a time.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-3">
              <div className="values_card">
                <img
                  src="https://img.freepik.com/premium-photo/living-room-with-two-chairs-table-with-potted-plant-generative-ai_97167-14450.jpg"
                  alt=""
                  width="150%"
                  className="table"
                />
                <h6>Quality</h6>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-3">
              <div className="values_card">
                <img
                  src="https://img.freepik.com/premium-photo/they-love-gardening-together-shot-father-son-planting-flowers-garden_590464-23523.jpg"
                  alt
                  width="100%"
                  className="table"
                />
                <h6>Thriving Communities</h6>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-3">
              <div className="values_card">
                <img
                  src="https://img.freepik.com/premium-photo/living-room-with-two-chairs-table-with-potted-plant-generative-ai_97167-14450.jpg"
                  alt=""
                  width="100%"
                  className="table"
                />
                <h6>Thoughtful Design</h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <div className="values_card">
                <img
                  src="https://img.freepik.com/premium-photo/they-love-gardening-together-shot-father-son-planting-flowers-garden_590464-23523.jpg"
                  alt=""
                  width="100%"
                  className="table"
                />
                <h6>Sustainability</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="founder_bg py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mt-5 mb-4">
              <div className="heading">
                <span className="text-white">Founder's Message</span>
              </div>
              <div className="">
                <p>Unveiling the Journey of Jalaram Life Space</p>
              </div>
              <div className="content">
                <p>
                  We strive to create spaces that significantly improve the
                  quality of life for individuals and families, by setting gold
                  standards in customer-centricity, architectural design.
                  quality and safety.
                </p>
              </div>
            </div>
            <div className="col-lg-8">
              <div
                className="you_tube_iframe"
                data-embed-url="https://www.youtube.com/embed/4U_Oz6kpLGA?si=uuIBUNVAtndpLFmV"
              >
                <iframe
                  src="https://www.youtube.com/embed/4U_Oz6kpLGA?si=uuIBUNVAtndpLFmV"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen="true"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h6 className="valu2">Our Projects</h6>
        <h5 className="our">Setting Benchmarks. For Us, it's the New Normal</h5>

        <p className="our">
          Pioneering in transforming Mumbai's skyline with meticulously
          residential projects, blending luxury and functionality. Elevate your
          living experience with iconic developments designed to exceed
          expectations
        </p>
      </section>

      <section>
        <div className="col-lg-3col-md-4 mb-3">
          <div>
            <div className="slider-container">
              <Slider {...settings}>
                <div className="values_card1">
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
                <div className="values_card1">
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

                <div className="values_card1">
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
              </Slider>
            </div>
            <span>
              <a href="#" className="view">
                Veiw Details
              </a>
            </span>
            <button type="button" className="btn btn-warning see">
              <h6 className="all">See All</h6>
            </button>
          </div>
        </div>
      </section>

      <section className="py-5 testimonial_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-9">
              <div className="heading">
                <span>Testimonials</span>
              </div>
              <div className="big_content">
                <p>
                  The passion and panache with which Jalaram group approaches
                  and delivers its projects is reflected in our projects and by
                  our happy customers.
                </p>
              </div>
            </div>

            <div className="col-lg-3col-md-4 mb-3">
              <div className="row1">
                <div className="slider-container">
                  <Slider {...settings}>
                    <div className="cards">
                      <img
                        src="https://i.pinimg.com/originals/24/e6/d9/24e6d982176d54db0a3aa44110bc47fe.jpg"
                        className="card-img-top rounded-circle me-2"
                        alt="..."
                      />

                      <h6 className="alina">Alina Adan</h6>
                      <div className="card-body">
                        <p className="card-text">
                          On the other hand , we denounce with righteous
                          indignation and dislike men who are so beguiled and.
                        </p>

                        <div className="star">
                          <IoMdStar />
                          <IoMdStar />
                          <IoMdStar />
                          <IoMdStar />
                          <IoMdStar />
                        </div>
                      </div>
                    </div>

                    <div className="cards">
                      <img
                        src="https://i.pinimg.com/originals/24/e6/d9/24e6d982176d54db0a3aa44110bc47fe.jpg"
                        className="card-img-top rounded-circle me-20"
                        alt="..."
                      />
                      <h6 className="alina">Alina Adan</h6>
                      <div className="card-body">
                        <p className="card-text">
                          On the other hand , we denounce with righteous
                          indignation and dislike men who are so beguiled and.
                        </p>
                        <div className="star">
                          <IoMdStar />
                          <IoMdStar />
                          <IoMdStar />
                          <IoMdStar />
                          <IoMdStar />
                        </div>
                      </div>
                    </div>
                    <div className="cards">
                      <img
                        src="https://i.pinimg.com/originals/24/e6/d9/24e6d982176d54db0a3aa44110bc47fe.jpg"
                        className="card-img-top rounded-circle me-20"
                        alt="..."
                      />
                      <h6 className="alina">Alina Adan</h6>
                      <div className="card-body">
                        <p className="card-text">
                          On the other hand , we denounce with righteous
                          indignation and dislike men who are so beguiled and.
                        </p>
                        <div className="star">
                          <IoMdStar />
                          <IoMdStar />
                          <IoMdStar />
                          <IoMdStar />
                          <IoMdStar />
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Main;
