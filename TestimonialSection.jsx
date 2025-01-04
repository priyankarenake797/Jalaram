import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";

const TestimonialSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const testimonials = [
    {
      id: 1,
      content: "On the other hand, we denounce with righteous indignation...",
      author: "Abdiqadiradan Adan",
      imgSrc: "assets/images/testimonials_img.jpeg",
    },
    // Add more testimonials here
  ];

  return (
    <section className="py-5 testimonial_bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-8">
            <div className="heading">
              <span>Testimonials</span>
            </div>
            <div className="big_content">
              <p>
                The passion and panache with which Jalaram group approaches and
                delivers its projects is reflected in our projects and by our
                happy customers.
              </p>
            </div>
          </div>
          <div className="col-lg-12 mt-4">
            <Slider {...settings}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonials mx-md-2 mx-4">
                  <div className="stars mb-3">
                    <ul>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="content text-center mb-3">
                    <p>{testimonial.content}</p>
                  </div>
                  <div className="testimonial_img text-center">
                    <img src={testimonial.imgSrc} alt="" className="mb-3" />
                    <p>{testimonial.author}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
