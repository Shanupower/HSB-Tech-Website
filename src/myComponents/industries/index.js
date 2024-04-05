import { Component } from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import IndustryImage from "../../assets/industry.svg";
import { FaArrowRight } from "react-icons/fa6";

import "./index.css";

class Industries extends Component {
  render() {
    return (
      <>
        <div className="industrySection">
          <Navbar />

          <div className="industryLandingSection">
            <div className="servies-landingSection">
              <h1 className="pageHeading">Industries</h1>
              <p className="pageDescription">
                Explore the dynamic world of software development at GeekyAnts.
                Uncover our expertise and solutions that drive innovation across
                industries.
              </p>
            </div>
            <img src={IndustryImage} alt="industry" />
          </div>

          <div className="closingSection">
          <h1 className="sectionHeading">Let's Build Your Product Together!</h1>
          <p className="sectionDescription">
            Get a free discovery session and consulting to start your project
            today.
          </p>
          <button className="letsTalkButton slideRight" type="button">
            LET'S TALK
            <FaArrowRight className="rightArrow" />
          </button>
        </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Industries;
