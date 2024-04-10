/* eslint-disable jsx-a11y/img-redundant-alt */
import { Component } from "react";
import eCommerceImage from "../../assets/ecommerce-custom.webp";
import twitterCloneImage from "../../assets/twitter-custom.webp";
import chatImage from "../../assets/chat-custom.webp";
import telemedicineImage from "../../assets/telemedicine-custom.webp";
import foodImage from "../../assets/foodAndGrocery-custom.webp";
import bikeImage from "../../assets/bikeTaxi-custom.webp";
import videoImage from "../../assets/videoEditing-custom.webp";
import stockMarketImage from "../../assets/stockMarket-custom.webp";
import businessImage from "../../assets/businessManagement-custom.webp";
import hiringImage from "../../assets/hiring-custom.webp";
import supplyImage from "../../assets/supplyChain-custom.webp";

import themeImage from '../../assets/themeable.svg'
import featuresImage from '../../assets/features.svg'
import savesImage from '../../assets/cost.svg'
import developmentImage from '../../assets/development.svg'

import { FaArrowRight } from "react-icons/fa6";
import Footer from "../footer";
import Navbar from "../navbar";
import "./index.css";

class CustomizableSolutions extends Component {
  render() {
    return (
      <div className="servicesSectionPage">
        <Navbar />

        <div className="servies-landingSection">
          <h1 className="pageHeading">Customizable Solutions</h1>
          <p className="pageDescription">
            Explore how our custom-built apps can be tailored to your business.
            Create your MVP in half the time and cost with these solutions. You
            don’t have to start from scratch!
          </p>
        </div>

        <div className="why-customizable-solutions-section">
            <h2 className="why-customizable-solutions-section-heading">Why to use our customizable solutions?</h2>
            <div className="why-custom-solutions-cards-container">
                <div className="why-custom-solutions-card">
                    <img className="customImage" src={themeImage} alt='custom image' />
                    <p className="customFeature-card-title">100% themeable</p>
                </div>

                <div className="why-custom-solutions-card">
                    <img className="customImage" src={featuresImage} alt='custom image' />
                    <p className="customFeature-card-title">Plug-and-play features</p>
                </div>

                <div className="why-custom-solutions-card">
                    <img className="customImage" src={savesImage} alt='custom image' />
                    <p className="customFeature-card-title">Saves upto 50% cost</p>
                </div>

                <div className="why-custom-solutions-card">
                    <img className="customImage" src={developmentImage} alt='custom image' />
                    <p className="customFeature-card-title">2x faster development</p>
                </div>
            </div>
        </div>

        <div className="servicesContainer">
          <div className="servicesItem webApp rightBorder">
            <img
              className="serviceItemImage"
              src={eCommerceImage}
              alt="service image"
            />
            <div className="serviceSection-info-container rightBorder">
              <h2 className="serviceSection-heading">
                Customizable E‑commerce Web App
              </h2>
              <p className="serviceSection-description">
                If you’re looking to build an e-commerce application designed to
                perform all the essential functions, then don’t build it from
                scratch. Shoppes has all the necessary features to save you
                hundreds of development hours.
              </p>
              <button className="learnMoreButton" type="button">
                Learn More
              </button>
            </div>
          </div>

          <div className="servicesItem mobileApp leftBorder">
            <img
              className="serviceItemImage"
              src={twitterCloneImage}
              alt="service image"
            />
            <div className="serviceSection-info-container rightBorder">
              <h2 className="serviceSection-heading">
                Customizable Twitter Spaces Clone
              </h2>
              <p className="serviceSection-description">
                This is an audio conferencing and social application mimicking
                the functionality of Twitter Spaces. It is created using 100ms
                and Flutter SDK. The application contains all the features
                expected in a modern social media application. Using it, one can
                build various social apps similar to Facebook, Instagram, and
                Messenger.
              </p>
              <button className="learnMoreButton" type="button">
                Learn More
              </button>
            </div>
          </div>

          <div className="servicesItem qualityAssurance rightBorder">
            <img
              className="serviceItemImage"
              src={chatImage}
              alt="service image"
            />
            <div className="serviceSection-info-container rightBorder">
              <h2 className="serviceSection-heading">
                Customizable Chat and Messaging App
              </h2>
              <p className="serviceSection-description">
                Contains features for daily use in healthcare and
                telemedicine-related scenarios like appointment scheduling,
                prescription management, and video consultation. This
                customizable healthcare app uses React Native and Next.js for
                the frontend. The backend is Node.js and PostgreSQL. The app is
                highly customizable and can be created to accommodate multiple
                healthcare needs.
              </p>
              <button className="learnMoreButton" type="button">
                Learn More
              </button>
            </div>
          </div>

          <div className="servicesItem uiuxApp leftBorder">
            <img
              className="serviceItemImage"
              src={foodImage}
              alt="service image"
            />
            <div className="serviceSection-info-container rightBorder">
              <h2 className="serviceSection-heading">
                Customizable Food and Grocery Delivery Application
              </h2>
              <p className="serviceSection-description">
                An ideal delivery application starter kit that is simple to use,
                scale, and maintain. The frontend is built using Flutter, and
                the backend is developed with Node.js, Express.js, TypeScript,
                GraphQL, Hasura, and PostgreSQL. It can be customized to any
                delivery & services-based application according to your needs.
              </p>
              <button className="learnMoreButton" type="button">
                Learn More
              </button>
            </div>
          </div>

          <div className="servicesItem businessAnalysis rightBorder">
            <img
              className="serviceItemImage"
              src={bikeImage}
              alt="service image"
            />
            <div className="serviceSection-info-container rightBorder">
              <h2 className="serviceSection-heading">
                Customizable Bike Taxi Booking App
              </h2>
              <p className="serviceSection-description">
                Check out this E-hailing or ride-hailing app, which is the clone
                of the popular app Rapido that lets users book or schedule rides
                conveniently. Includes features for delivery requests and
                tracking. It is fully customizable with a rich collection of
                stunning UI elements.
              </p>
              <button className="learnMoreButton" type="button">
                Learn More
              </button>
            </div>
          </div>

          <div className="servicesItem fullstack leftBorder">
            <img
              className="serviceItemImage"
              src={videoImage}
              alt="service image"
            />
            <div className="serviceSection-info-container rightBorder">
              <h2 className="serviceSection-heading">
                Customizable Video Editing App
              </h2>
              <p className="serviceSection-description">
                A web-based video editing platform that offers a variety of
                tools for editing and recording video and audio files. Can be
                customized based on your project requirements saving hundreds of
                design & development hours. Create your MVP fast and be
                market-ready in a jiffy.
              </p>
              <button className="learnMoreButton" type="button">
                Learn More
              </button>
            </div>
          </div>

          <div className="servicesItem qualityAssurance rightBorder">
            <img
              className="serviceItemImage"
              src={telemedicineImage}
              alt="service image"
            />
            <div className="serviceSection-info-container rightBorder">
              <h2 className="serviceSection-heading">
              Customizable Telemedicine App
              </h2>
              <p className="serviceSection-description">
              Contains features for daily use in healthcare and telemedicine-related scenarios like appointment scheduling, prescription management, and video consultation. This customizable healthcare app uses React Native and Next.js for the frontend. The backend is Node.js and PostgreSQL. The app is highly customizable and can be created to accommodate multiple healthcare needs.
              </p>
              <button className="learnMoreButton" type="button">
                Learn More
              </button>
            </div>
          </div>

          <div className="servicesItem webApp leftBorder">
            <img
              className="serviceItemImage"
              src={stockMarketImage}
              alt="service image"
            />
            <div className="serviceSection-info-container rightBorder">
              <h2 className="serviceSection-heading">
              Customizable Stock Market Trading App
              </h2>
              <p className="serviceSection-description">
              If you want to build a stock market trading app like Zerodha or Robinhood, we have something that can help you. GeekInvest is a customizable stock trading app and a matching engine that enables buying and selling of orders in a stock market, commodity market, or other financial exchanges. The matching engine was made by merging FIFO (First In, First Out) and Pro Rata algorithms. 
              </p>
              <button className="learnMoreButton" type="button">
                Learn More
              </button>
            </div>
          </div>

          <div className="servicesItem mobileApp rightBorder">
            <img
              className="serviceItemImage"
              src={businessImage}
              alt="service image"
            />
            <div className="serviceSection-info-container rightBorder">
              <h2 className="serviceSection-heading">
              Customizable Business Management Application
              </h2>
              <p className="serviceSection-description">
              A business management system that enables small and medium-sized businesses to manage their stores online end-to-end conveniently. Can be customized based on your project requirements saving hundreds of design & development hours. Create your MVP fast and be market-ready in a jiffy.
              </p>
              <button className="learnMoreButton" type="button">
                Learn More
              </button>
            </div>
          </div>

          <div className="servicesItem qualityAssurance leftBorder">
            <img
              className="serviceItemImage"
              src={hiringImage}
              alt="service image"
            />
            <div className="serviceSection-info-container rightBorder">
              <h2 className="serviceSection-heading">
              Customizable Hiring Application
              </h2>
              <p className="serviceSection-description">
              This is an automated hiring application that reduces the need for manual inputs in the evaluation of candidates. It is created using the latest SQL, Redis, Node.JS, and React versions. The application has features of recording interviews, setting automated workflows, creating approval cycles, and sending communication to the candidates.
              </p>
              <button className="learnMoreButton" type="button">
                Learn More
              </button>
            </div>
          </div>

          <div className="servicesItem uiuxApp rightBorder">
            <img
              className="serviceItemImage"
              src={supplyImage}
              alt="service image"
            />
            <div className="serviceSection-info-container rightBorder">
              <h2 className="serviceSection-heading">
              Customizable Supply Chain Management App
              </h2>
              <p className="serviceSection-description">
              This fully customizable Supply Chain Management app streamlines your supply — from procurement to delivery — with zero hassles. Can be customized based on your project requirements saving hundreds of design & development hours. Create your MVP fast and be market-ready in a jiffy.  
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

export default CustomizableSolutions;
