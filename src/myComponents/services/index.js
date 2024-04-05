/* eslint-disable jsx-a11y/img-redundant-alt */
import { Component } from "react";
import webAppImage from "../../assets/webapp-sevice.webp";
import mobileAppImage from "../../assets/mobileApp.webp";
import qualityAssuranceImage from "../../assets/quality-assurance.webp";
import uiuxImage from "../../assets/uiux.webp";
import businessAnalysis from "../../assets/business-analysis.webp";
import fullstackImage from "../../assets/fullstack.webp";
import { FaArrowRight } from "react-icons/fa6";
import Footer from "../footer";
import Navbar from "../navbar";
import "./index.css";

class Services extends Component {
  render() {
    return (
      <div className="servicesSectionPage">

        <Navbar />

        <div className="servies-landingSection">
          <h1 className="pageHeading">Services</h1>
          <p className="pageDescription">
            500+ projects deep and still going deeper in the mobile & web app
            development space. From A to Z of building beautiful apps, we do
            everything in-house, GeekyAnts style.
          </p>
        </div>

        <div className="servicesContainer">
          <div className="servicesItem webApp rightBorder">
            <img
              className="serviceItemImage"
              src={webAppImage}
              alt="service image"
            />
            <div className="serviceSection-info-container rightBorder">
              <h2 className="serviceSection-heading">
                Web App Development Services
              </h2>
              <p className="serviceSection-description">
                Global leaders like Google, Darden, and PayPoint trust the
                GeekyAnts web app development team. Our experience and expertise
                allow us to deliver a solution that aligns with your business
                goals. Partner with us today. Let us create something awesome.
              </p>
              <button className="learnMoreButton" type="button">
                {" "}
                Learn More
              </button>
            </div>
          </div>

          <div className="servicesItem mobileApp leftBorder">
            <img
              className="serviceItemImage"
              src={mobileAppImage}
              alt="service image"
            />
            <div className="serviceSection-info-container rightBorder">
              <h2 className="serviceSection-heading">
                Mobile App Development Services
              </h2>
              <p className="serviceSection-description">
                The GeekyAnts mobile app development team are core contributors
                to popular frameworks like React Native and Flutter. We
                understand the nuances of building a mobile app better than
                most. Collaborate with us today to develop a mobile app that is
                engaging and impactful.
              </p>
              <button className="learnMoreButton" type="button">
                Learn More
              </button>
            </div>
          </div>

          <div className="servicesItem qualityAssurance rightBorder">
            <img
              className="serviceItemImage"
              src={qualityAssuranceImage}
              alt="service image"
            />
            <div className="serviceSection-info-container rightBorder">
              <h2 className="serviceSection-heading">
                Quality Assurance and Software Testing Services
              </h2>
              <p className="serviceSection-description">
                Ensure that your product meets the highest standards of quality,
                performance, and reliability.
              </p>
              <button className="learnMoreButton" type="button">
                {" "}
                Learn More
              </button>
            </div>
          </div>

          <div className="servicesItem uiuxApp leftBorder">
            <img
              className="serviceItemImage"
              src={uiuxImage}
              alt="service image"
            />
            <div className="serviceSection-info-container rightBorder">
              <h2 className="serviceSection-heading">
                UI/UX Design And Development Services
              </h2>
              <p className="serviceSection-description">
                We create exceptionally stunning and highly intuitive visual
                interfaces for your app. Our expert UI/UX designers guarantee
                engaging user interfaces that deliver memorable user experiences
                for every project.
              </p>
              <button className="learnMoreButton" type="button">
                Learn More
              </button>
            </div>
          </div>

          <div className="servicesItem businessAnalysis rightBorder">
            <img
              className="serviceItemImage"
              src={businessAnalysis}
              alt="service image"
            />
            <div className="serviceSection-info-container rightBorder">
              <h2 className="serviceSection-heading">
                Business Analysis Services
              </h2>
              <p className="serviceSection-description">
                Our business analysis services will help you unlock the true
                potential of your business. From identifying growth
                opportunities to optimizing processes, we've got you covered.
              </p>
              <button className="learnMoreButton" type="button">
                Learn More
              </button>
            </div>
          </div>

          <div className="servicesItem fullstack leftBorder">
            <img
              className="serviceItemImage"
              src={fullstackImage}
              alt="service image"
            />
            <div className="serviceSection-info-container rightBorder">
              <h2 className="serviceSection-heading">
                Full Stack App Development Services
              </h2>
              <p className="serviceSection-description">
                We specialize in bringing together the best of both worlds —
                front-end and back-end — to create a high-performance app. Our
                team consists of core contributors on various tech stacks and
                are skilled in building apps with great user experience.
              </p>
              <button className="learnMoreButton" type="button">
                Learn More
              </button>
            </div>
          </div>
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

        <Footer />
      </div>
    );
  }
}

export default Services;
