import React from "react";
import { LiaFacebookSquare } from "react-icons/lia";
import { PiInstagramLogoThin } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <footer className="pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-3">
              <div className="footer_about">
                <img
                  src="https://tse3.mm.bing.net/th?id=OIP.sc3l3SBZk-87D4mqm9WLhAAAAA&pid=Api&P=0&h=180"
                  alt=""
                  width="100px"
                />
                <div className="content mt-4">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Incidunt accusamus alias odit architecto fugit tempora
                    cupiditate animi quidem aliquam cumque? Animi, nam? Delectus
                    repellendus commodi maiores
                  </p>
                </div>
              </div>
              <ul className="footer_icon">
                <a href="#">
                  <LiaFacebookSquare />
                </a>

                <li>
                  <a href="#">
                    <PiInstagramLogoThin />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaXTwitter />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <CiLinkedin />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-3">
              <div className="footer_head mb-3">
                <h3>ABOUT US</h3>
              </div>
              <ul className="footer_menu">
                <li>
                  <a href="#">Our Story</a>
                </li>
                <li>
                  <a href="#">Blogs</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-3">
              <div className="footer_head mb-3">
                <h3>MEDIA</h3>
              </div>
              <ul className="footer_menu">
                <li>
                  <a href="#">News</a>
                </li>
                <li>
                  <a href="#">Press Releases</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-3">
              <ul className="footer_menu_big">
                <li>
                  <a href="#">NRI CORNER</a>
                </li>
                <li>
                  <a href="#">CAREER</a>
                </li>
                <li>
                  <a href="#">QR CODES</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <div className="footer_head mb-3">
                <h3>Contact Us</h3>
              </div>
              <div className="footer-contact">
                <ul>
                  <li>
                    <FaLocationDot />
                    891, Blue Nile CHS, 4th floor, Near Tavaa Restaurant, 24th
                    Road, Bandra West, Mumbai, Maharashtra 400050
                  </li>
                  <li>
                    <FaPhoneAlt /> 022 2655 6390
                  </li>
                  <li>
                    <FaPhoneAlt /> +91 9821018184 / 9920303061
                  </li>
                  <li>
                    <IoMdMail />
                    info@example.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copy_right_bg mt-4">
          <div className="container">
            <div className="copy_right">
              <p>Copyright © 2024 jalaramgroup.com</p>
              <p>
                Designed &amp; Developed by{" "}
                <a href="https://dynamicvishva.in/" target="_blank">
                  Dynamic Vishva
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
