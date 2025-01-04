import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Aboutus from "./components/Aboutus";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import FAQs from "./components/FAQs";
import Contact from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

const AppContent = () => {
  // const location = useLocation();

  // Check if the current path is not "/" (or other paths where you want to hide Welcome)
  // const showWelcome = location.pathname === "/";

  return (
    <>
      <Header />
      <div className="app-container">
        {/* {showWelcome && <Main />} */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/FAQs" element={<FAQs />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
