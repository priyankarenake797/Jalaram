import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="p-10 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap">
            <li>
              <img
                src="https://tse3.mm.bing.net/th?id=OIP.sc3l3SBZk-87D4mqm9WLhAAAAA&pid=Api&P=0&h=50"
                className="logo"
              />
            </li>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="/" className="nav-link px-2 text-white">
                  Home
                </a>
              </li>
              <li>
                <Link to="/Aboutus" className="nav-link px-2 text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/Projects" className="nav-link px-2 text-white">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/Blogs" className="nav-link px-2 text-white">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/FAQs" className="nav-link px-2 text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/Contact" className="nav-link px-2 text-white">
                  Contact
                </Link>
              </li>
            </ul>

            <div className="text-end">
              <button type="button" className="btn btn-warning">
                Let's Connect
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
