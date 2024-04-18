/* eslint-disable jsx-a11y/img-redundant-alt */
import { Component } from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import IndustryImage from "../../assets/industry.svg";
import { FaArrowRight } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import ManufacturingIndustry from "../../assets/manufacturing-industry.svg";
import fintechIndustryImage from "../../assets/fintech-industry.svg";
import healthIndustryImage from "../../assets/healthcare-industry.svg";
import eCommerceIndustryImage from "../../assets/ecommerece-industry.svg";
import educationIndustryImage from "../../assets/education-industry.svg";
import travelIndustryImage from "../../assets/travel-industry.svg";
import realestateIndustryImage from "../../assets/realestate-industry.svg";
import foodIndustryImage from "../../assets/food-industry.svg";
import marketingIndustryImage from "../../assets/marketing-industry.svg";

import "./index.css";

const industriesList = [
  {
    id: uuidv4(),
    industryName: "Manufacturing & Retail",
    imageUrl: ManufacturingIndustry,
    description:
      "Applications and dashboard to simplify data, processes, and operational challenges.",
  },
  {
    id: uuidv4(),
    industryName: "Fintech",
    imageUrl: fintechIndustryImage,
    description:
      "Financial solutions driven by data security and real-time updates.",
  },
  {
    id: uuidv4(),
    industryName: "Healthcare",
    imageUrl: healthIndustryImage,
    description:
      "Apps and tools that help in wellness management, data tracking, and promotes healthy lifestyle.",
  },
  {
    id: uuidv4(),
    industryName: "E-commerce",
    imageUrl: eCommerceIndustryImage,
    description:
      "High-performing e-commerce applications designed with customer-centric approach.",
  },
  {
    id: uuidv4(),
    industryName: "Education",
    imageUrl: educationIndustryImage,
    description:
      "Applications to benefit students with multiple features such as live classroom, forums, etc.",
  },
  {
    id: uuidv4(),
    industryName: "Travel & Hospitality",
    imageUrl: travelIndustryImage,
    description:
      "Tourism related apps that provide amazing experience to the users.",
  },
  {
    id: uuidv4(),
    industryName: "Real Estate",
    imageUrl: realestateIndustryImage,
    description:
      "Enhanced experience to buy or sell properties to overcome middlemen challenges.",
  },
  {
    id: uuidv4(),
    industryName: "Food & Beverages",
    imageUrl: foodIndustryImage,
    description:
      "Applications that are visual treats to attract consumers to food and beverages.",
  },
  {
    id: uuidv4(),
    industryName: "Banking & Insurance",
    imageUrl: marketingIndustryImage,
    description:
      "BFSI applications with many APIs to serve various financial purposes.",
  },
  {
    id: uuidv4(),
    industryName: "Telecom",
    imageUrl: marketingIndustryImage,
    description:
      "Scalable and cloud-ready applications to handle complex telecom platform with many components.",
  },
];

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
                We serve different industries through our innovative solutions.
                Explore the dynamic world of software development at HSB and
                uncover customized solutions for your business synchronized with
                industry requirements.
              </p>
            </div>
            <img
              className="industryLandingImage"
              src={IndustryImage}
              alt="industry"
            />
          </div>

          <div className="industriesList-Container">
            <div className="searchBar">
              <input
                placeholder="Search Industries..."
                className="searchInput"
                type="search"
              />
              <FaSearch />
            </div>

            <ul className="indusrtyCardsContainer">
              {industriesList.map((eachItem) => (
                <li className="industryCard hoverUp">
                  <img
                    className="industryImage"
                    src={eachItem.imageUrl}
                    alt="industry image"
                  />
                  <p className="industryCardTitle">{eachItem.industryName}</p>
                  <p className="industryCardDescription">
                    {eachItem.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="closingSection">
            <h1 className="sectionHeading">
              Let’s connect to learn more about your requirement.
            </h1>
            <button className="letsTalkButton slideRight" type="button">
              Contact Now
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
