/* eslint-disable jsx-a11y/img-redundant-alt */
import { Component } from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import IndustryImage from "../../assets/industry.svg";
import { FaArrowRight } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';
import ManufacturingIndustry from "../../assets/manufacturing-industry.svg"
import fintechIndustryImage from "../../assets/fintech-industry.svg"
import healthIndustryImage from '../../assets/healthcare-industry.svg'
import eCommerceIndustryImage from '../../assets/ecommerece-industry.svg'
import educationIndustryImage from '../../assets/education-industry.svg'
import travelIndustryImage from '../../assets/travel-industry.svg'
import realestateIndustryImage from '../../assets/realestate-industry.svg'
import gamingIndustryImage from '../../assets/gaming-industry.svg'
import onDemandIndustryImage from "../../assets/on-demand-booking-industry.svg"
import sportsIndustryImage from '../../assets/sports-industry.svg'
import entertainmentIndustryImage from '../../assets/entertainment-industry.svg'
import foodIndustryImage from '../../assets/food-industry.svg'
import socialmediaIndustryImage from "../../assets/socialmedia-industry.svg"
import marketingIndustryImage from '../../assets/marketing-industry.svg'

import "./index.css";

const industriesList = [
  {
    id: uuidv4(),
    industryName: "Manufacturing",
    imageUrl: ManufacturingIndustry,
    description: "Innovative apps and dashboards to simplify product complexities and operational challenges."
  },
  {
    id: uuidv4(),
    industryName: "Fintech",
    imageUrl: fintechIndustryImage,
    description: "Safe and customized financial solutions for a great user experience with real-time updates."
  },
  {
    id: uuidv4(),
    industryName: "Healthcare",
    imageUrl: healthIndustryImage,
    description: "Robust healthcare apps to empower healthcare professionals and family members."
  },
  {
    id: uuidv4(),
    industryName: "E-commerce",
    imageUrl: eCommerceIndustryImage,
    description: "High-performing, customer-centric applications for e-commerce businesses."
  },
  {
    id: uuidv4(),
    industryName: "Education",
    imageUrl: educationIndustryImage,
    description: "Applications with multiple features like live streaming, forums, and more."
  },
  {
    id: uuidv4(),
    industryName: "Travel & Hospitality",
    imageUrl: travelIndustryImage,
    description: "User-friend travel hospitality apps with modern features that increase user satisfaction."
  },
  {
    id: uuidv4(),
    industryName: "Real Estate",
    imageUrl: realestateIndustryImage,
    description: "Let us transform your property buying and selling experience to overcome market challenges."
  },
  {
    id: uuidv4(),
    industryName: "Gaming",
    imageUrl: gamingIndustryImage,
    description: "We help build an immersive gaming experience that caters to the needs of varied users."
  },
  {
    id: uuidv4(),
    industryName: "On-demand Booking",
    imageUrl: onDemandIndustryImage,
    description: "We build customized and intuitive on-demand booking solutions to help you lead the market."
  },
  {
    id: uuidv4(),
    industryName: "Sports",
    imageUrl: sportsIndustryImage,
    description: "We help revolutionize the way traditional sports are broadcasted and presented to the audience."
  },
  {
    id: uuidv4(),
    industryName: "Entertainment",
    imageUrl: entertainmentIndustryImage,
    description: "Interactive applications to deliver an unforgettable entertainment experience."
  },
  {
    id: uuidv4(),
    industryName: "Food & Beverages",
    imageUrl: foodIndustryImage,
    description: "State-of-the-art designs and customized features to help users explore new culinary experiences."
  },
  {
    id: uuidv4(),
    industryName: "Social Media & Communication",
    imageUrl: socialmediaIndustryImage,
    description: "We design and build visually appealing, accessible, and interactive social media platforms with good user flow."
  },
  {
    id: uuidv4(),
    industryName: "Marketing",
    imageUrl: marketingIndustryImage,
    description: "We help you automate marketing to increase your conversions, retention, and revenue."
  },
]

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
            <img className="industryLandingImage" src={IndustryImage} alt="industry" />
          </div>

          <div className="industriesList-Container">
            <div className="searchBar">
              <input placeholder="Search Industries..." className="searchInput" type="search" />
              <FaSearch />
            </div>

            <ul className="indusrtyCardsContainer">
              {
                industriesList.map(eachItem => (
                  <li className="industryCard hoverUp">
                    <img className="industryImage" src={eachItem.imageUrl} alt="industry image" />
                    <p className="industryCardTitle">{eachItem.industryName}</p>
                    <p className="industryCardDescription">{eachItem.description}</p>
                  </li>
                ))
              }
            </ul>

          </div>

          <div className="closingSection">
            <h1 className="sectionHeading">
              Let's Build Your Product Together!
            </h1>
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
