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
import NavigationBar from "../navigationBar";
import "./index.css";

class CustomizableSolutions extends Component {
  render() {
    return (
      <div className="servicesSectionPage">
        <NavigationBar />

        <div className="servies-landingSection">
          <h1 className="pageHeading">Customizable Solutions</h1>
          <p className="pageDescription">
            Save more on your time and cost through our custom-built apps that can be tailored to your business requirements. Our customizable solutions are built-in applications that serves as an immediate solutions to your needs.
          </p>
        </div>

        <div className="why-customizable-solutions-section">
            <h2 className="why-customizable-solutions-section-heading">Make the Most of Our Customizable Solutions
</h2>
            <div className="why-custom-solutions-cards-container">
                <div className="why-custom-solutions-card">
                    <img className="customImage" src={themeImage} alt='custom image' />
                    <p className="customFeature-card-title">Plug-and-play features</p>
                </div>

                <div className="why-custom-solutions-card">
                    <img className="customImage" src={featuresImage} alt='custom image' />
                    <p className="customFeature-card-title">Saves time as you don’t have to begin from scratch</p>
                </div>

                <div className="why-custom-solutions-card">
                    <img className="customImage" src={savesImage} alt='custom image' />
                    <p className="customFeature-card-title">Fully-customizable themes</p>
                </div>

                <div className="why-custom-solutions-card">
                    <img className="customImage" src={developmentImage} alt='custom image' />
                    <p className="customFeature-card-title">Faster development</p>
                </div>
                <div className="why-custom-solutions-card">
                    <img className="customImage" src={developmentImage} alt='custom image' />
                    <p className="customFeature-card-title">Saves cost on end-to-end development</p>
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
               Customer Relationship Management (CRM)
              </h2>
              <p className="serviceSection-description">
               “Customer is the king”. This quote is not unusual for businesses, especially, where customer service drives your business. Check out our comprehensive Customer Relationship Management application, you can select the required modules and we customize them as per your preference.
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
               Document Management System              
              </h2>
              <p className="serviceSection-description">
                Leverage our ready-to-use Document Management System to upload, store, and share documents for your non-desk employees. It also has lots of other helpful tools for managing your team from anywhere. Let us know how your requirement and we can modify it for you. 
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
               Hospital Management System
              </h2>
              <p className="serviceSection-description">
               Being in healthcare industry, it becomes more crucial for your business to handle and attend patients and their details responsibly. Our end-to-end Hospital Management System is a secure application for all your daily transactions and storage. It can be simplified to your convenience quickly and easily.
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
              Invoice Management System
              </h2>
              <p className="serviceSection-description">
                Our Invoicing Management Software ensures faster and easier invoice generations, invoice and payment tracking, applicable taxes, tax returns and many more. Streamline all your invoicing operations and save on resources and time. It can be customized to match our business requirements very quickly
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
                Inventory Management 
              </h2>
              <p className="serviceSection-description">
                Your business efficiency lies at the core of inventory management. Adjust stock on-the-go through our Inventory Management application. Also support faster billing and barcode scanning. Get our Inventory Management customized for your business and free yourself from the hassles of manual entries.
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
               Learning Management System 
              </h2>
              <p className="serviceSection-description">
               Our Learning Management System (LMS) enables online education and eLearning by providing a framework to create, manage, and deliver learning content. You can choose the required modules and get them customized as per your brand. It helps you to enhance the learning experience as well as attracts more number of students from different landscapes.
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
              Assessment App / Online Evaluation App
              </h2>
              <p className="serviceSection-description">
               Wouldn’t it be easy if you can conduct online tests for your students and assess their performances through pre-defined algorithms? Our online Evaluation App not just allows you to feed large number of questions but also let you display the scores soon immediately the student completes the test              </p>
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
