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
import NavigationBar from "../navigationBar";
import "./index.css";
import { useMediaQuery } from "@mui/material";
import manufacturingImage from "../../assets/manufacturing-landingpage.webp";

const Services = () => {
  const isMd = useMediaQuery("(max-width:1067px)");
  return (
    <div className="servicesSectionPage">
      {!isMd && <NavigationBar />}

      <div
        className="servies-landingSection"
        style={{
          padding: "0 12%",
        }}
      >
        <h1 className="pageHeading">Services</h1>
        <p className="pageDescription">
          We are a blend of mature methodologies, innovative technologies, and
          unbeatable domain expertise. Being flexible in our delivery models,
          HSB designs a progressive workflow for your application development
          process.
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
            <h2 className="serviceSection-heading">Web App Development</h2>
            <p className="serviceSection-description">
              Transforming your custom ideas into future-rich and
              fast-performing web application is our forte.
            </p>
            <p className="serviceSection-description">
              Starting from basic website designs, including CMS and online
              store building to highly complex business website apps and design
              solutions, we will customize the best of web development solutions
              for you.
            </p>
            <button className="learnMoreButton" type="button">
              Learn More
            </button>
          </div>
        </div>

        <div
          className="servicesItem mobileApp leftBorder"
          style={{
            position: "relative",
          }}
        >
          <img
            className="serviceItemImage"
            src={manufacturingImage}
            alt="service image"
            style={{
              height: "320px",
              width: "300px",
              left: "0",
              bottom: "0",
            }}
          />
          <div className="serviceSection-info-container rightBorder">
            <h2 className="serviceSection-heading">
              Mobile App Development Services
            </h2>
            <p className="serviceSection-description">
              We are a mobile app development company that offers end-to-end
              mobile development services tailored to your business needs.{" "}
            </p>
            <p className="serviceSection-description">
              Intuitive designs combined with compelling user experience are
              what makes our apps stand ahead in the digital age. Seamless
              experience driven by out-of-the-box ideas help your business
              accomplish its goals.
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
              We offer bug-free software products with our top-notch quality
              assurance services.{" "}
            </p>
            <p className="serviceSection-description">
              We are committed to delivering exceptional software and digital
              products by ensuring top-notch quality and reliability. Our team
              of certified experts follows a meticulous QA testing life cycle to
              guarantee that your applications meet the highest standards,
              leaving a lasting impact on your users and stakeholders.
            </p>
            <button className="learnMoreButton" type="button">
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
              We follow a “goals-first approach” to ensure the best and most
              practical solutions for your business analytical needs.{" "}
            </p>
            <p className="serviceSection-description">
              Accomplish your business goals and push the limits of your success
              with top-quality business analysis consulting services. By
              identifying core areas of improvement in your business, we uncover
              new potential and guarantee the best outcomes in the long run.
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
              Full Stack development services that includes frontend, backend,
              database management, and all that it takes for a complete
              development setup.{" "}
            </p>
            <p className="serviceSection-description">
              As a Full Stack development company, we ensure that our developers
              are all set to assist you with needed expertise in all areas,
              identifying roles and responsibilities with corresponding
              challenges.
            </p>
            <button className="learnMoreButton" type="button">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="closingSection section">
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
};

export default Services;
