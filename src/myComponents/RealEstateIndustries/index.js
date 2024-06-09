/* eslint-disable jsx-a11y/img-redundant-alt */
import { Component, useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Typography from "@mui/material/Typography";

import manufacturingImage from "../../assets/manufacturing-landingpage.webp";
import { FaArrowRight } from "react-icons/fa";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import { Chrono } from "react-chrono";

import reactImage from "../../assets/react.png";
import flutterImage from "../../assets/flutter.png";
import javaScript from "../../assets/javascript-logo.png";
import HtmlImage from "../../assets/html.webp";
import angular from "../../assets/angular.webp";
import cssImage from "../../assets/css.png";
import nodeJs from "../../assets/nodejs.png";
import goLang from "../../assets/goLanguage.png";
import SupplyChain from "../../assets/icons/icons8-supply-chain-60.png";
import Data from "../../assets/icons/icons8-data-migration-60.png";
import Production from "../../assets/icons/icons8-production-machine-60.png";
import QualityChain from "../../assets/icons/icons8-quality-control-60.png";
import Technoligy from "../../assets/icons/icons8-technology-60.png";
import Opreation from "../../assets/icons/icons8-operations-60.png";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AWS from "../../assets/icons/images.png";
import Azure from "../../assets/icons/download.png";

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import "./index.css";
import { useMediaQuery } from "@mui/material";
import Footer from "../footer";
import Navigationbar from "../navigationBar";

const breadcrumbs = [
  <Link underline="hover" key="1" href="/" style={{ color: "#e8e8e8" }}>
    Home
  </Link>,
  <Link
    underline="hover"
    key="2"
    color="inherit"
    href="/services"
    style={{ color: "#e8e8e8" }}
  >
    Industries
  </Link>,
  <Typography
    key="3"
    color="text.primary"
    sx={{ color: "#fff", fontSize: "16px" }}
  >
    Real Estate App Development Services
  </Typography>,
];

const frontendTab = [
  {
    imageUrl: reactImage,
    name: "React Native",
  },
  {
    imageUrl: reactImage,
    name: "React.js",
  },
  {
    imageUrl: flutterImage,
    name: "Flutter",
  },
  {
    imageUrl: javaScript,
    name: "Javascript",
  },
  {
    imageUrl: HtmlImage,
    name: "HTML",
  },
  {
    imageUrl: cssImage,
    name: "CSS",
  },
  {
    imageUrl: angular,
    name: "Angular",
  },
];

const backendTab = [
  {
    imageUrl: nodeJs,
    name: "Node.js",
  },
  {
    imageUrl: javaScript,
    name: "Javascript",
  },
  {
    imageUrl: goLang,
    name: "GoLang",
  },
];
const databasetab = [
  {
    imageUrl: AWS,
    name: "AWS",
  },
  {
    imageUrl: Azure,
    name: "Azure",
  },
];
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const educationProcessTimelineItems = [
  {
    title: "Step 1",
  },
  {
    title: "Step 2",
  },
  {
    title: "Step 3",
  },
  {
    title: "Step 4",
  },
  {
    title: "Step 5",
  },
  {
    title: "Step 6",
  },
  {
    title: "Step 7",
  },
  {
    title: "Step 8",
  },
  {
    title: "Step 9",
  },
  {
    title: "Step 10",
  },
  {
    title: "Step 11",
  },
  {
    title: "Step 12",
  },
];
CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const RealEstateIndustries = () => {
  const isMd = useMediaQuery("(max-width:1068px)");
  const [value, setValue] = useState(0);
  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="servicesDetailsSection">
      {!isMd && <Navigationbar />}
      <div
        className="landingSection-services manufacturing section"
        style={{
          paddingInline: isMd ? " 2rem" : " 14%",
          display: "flex",
          gap: "5%",
          position: "relative",
        }}
      >
        <div style={{ width: isMd ? " 100%" : "60%" }}>
          <Breadcrumbs
            style={{ color: "#fff" }}
            className="breadcrumb-industries"
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
          <h1
            className="sectionHeading"
            style={{ marginTop: "3.2rem", fontSize: isMd ? " 30px" : "48px" }}
          >
            Real Estate App Development Services
          </h1>
          <p
            className="sectionDescription"
            style={{ fontSize: "20px", marginTop: "2rem" }}
          >
            Bespoke real estate IT solutions that uplifts the entire real estate
            ecosystem. Integrating excellence with innovation to build
            world-class scalable mobile apps best suited for the needs of real
            estate buyers, sellers, and other stakeholders.
          </p>
          <button
            className="letsTalkButton slideRight"
            type="button"
            style={{
              display: "flex",
              position: "relative",
              alignItems: "center",
              textAlign: "center",
              paddingLeft: "1.2rem",
              textWrap: "nowrap",
              minWidth: "fit-content",
            }}
          >
            GET QUOTE
            <FaArrowRight
              className="rightArrow"
              style={{ position: "absolute", right: ".6rem" }}
            />
          </button>
        </div>
        {!isMd && (
          <div
            style={{
              position: "absolute",
              right: "14%",
              bottom: "0",
              width: "320px",
              height: "460px",
            }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              className="landingSectionImage-sericesPage"
              src={manufacturingImage}
              alt="web development image"
            />
          </div>
        )}
      </div>

      <div
        className="solutions section"
        style={{ paddingInline: isMd ? " 2rem" : " 14%" }}
      >
        <h1
          className="sectionHeading"
          style={{ fontSize: isMd ? " 30px" : "48px" }}
        >
          Solutions We Deliver
        </h1>
        <p className="sectionSubHeading" style={{ fontSize: "22px" }}>
          We provide customer-centric real estate software development services
          leveraging the latest tools, techniques, and transformative
          technologies for realtors, brokers, and other real estate
          professionals. Our varied tech solutions can drive your business
          forward through better project planning, faster implementation and
          accurate cost estimation.
        </p>
        <div
          className="cardsContainer-services"
          style={{ marginTop: "3.2rem" }}
        >
          <div
            className="card-service"
            style={{
              padding: "1rem 2rem",
              borderRadius: "10px",
              boxShadow: " 0 4px 12px #080a0d0d, 0 8px 16px #080a0d0d",
            }}
          >
            <img src={QualityChain} alt="ene" />

            <p className="cardTitle-service" style={{ fontSize: "28px" }}>
              Real Estate Website Development
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              Website to create an online presence and promote business. We
              design, develop front-end and back-end with intriguing features
              such as customized app flow, AI based product recommendations,
              etc.
            </p>
          </div>
          <div
            className="card-service"
            style={{
              padding: "1rem 2rem",
              borderRadius: "10px",
              boxShadow: " 0 4px 12px #080a0d0d, 0 8px 16px #080a0d0d",
            }}
          >
            <img src={SupplyChain} alt="ene" />
            <p className="cardTitle-service" style={{ fontSize: "28px" }}>
              Real Estate Mobile App Development
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              Convenience of mobile app for realtors by creating robust AR/VR
              integrated applications that support 3D property viewing, latest
              listings, cost calculator, and more.
            </p>
          </div>
          <div
            className="card-service"
            style={{
              padding: "1rem 2rem",
              borderRadius: "10px",
              boxShadow: " 0 4px 12px #080a0d0d, 0 8px 16px #080a0d0d",
            }}
          >
            <img src={Production} alt="ene" />

            <p className="cardTitle-service" style={{ fontSize: "28px" }}>
              Real Estate CRM Development
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              Custom CRM in efficiently augmenting sales by tracking client data
              and managing customer interactions. We develop CRM software that
              best compliments your business operations by implying latest
              technological inputs.
            </p>
          </div>
          <div
            className="card-service"
            style={{
              padding: "1rem 2rem",
              borderRadius: "10px",
              boxShadow: " 0 4px 12px #080a0d0d, 0 8px 16px #080a0d0d",
            }}
          >
            <img src={Data} alt="ene" />

            <p className="cardTitle-service" style={{ fontSize: "28px" }}>
              Real Estate ERP Solutions
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              Our team of dedicated ERP developers are well-versed with building
              software that can easily manage commercial and residential
              property data, inventory administration, financial transactions
              recording, and other processes.
            </p>
          </div>
          <div
            className="card-service"
            style={{
              padding: "1rem 2rem",
              borderRadius: "10px",
              boxShadow: " 0 4px 12px #080a0d0d, 0 8px 16px #080a0d0d",
            }}
          >
            <img src={Technoligy} alt="ene" />

            <p className="cardTitle-service" style={{ fontSize: "28px" }}>
              Property Management System Development (PMS)
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              Our strength lies in developing property management software using
              interactive interfaces and task automation tools to align
              tabulation techniques help administer and monitor different
              properties.
            </p>
          </div>
          <div
            className="card-service"
            style={{
              padding: "1rem 2rem",
              borderRadius: "10px",
              boxShadow: " 0 4px 12px #080a0d0d, 0 8px 16px #080a0d0d",
            }}
          >
            <img src={Opreation} alt="ene" />

            <p className="cardTitle-service" style={{ fontSize: "28px" }}>
              Auction Software Development
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              Using Cloud and other technologies that can be integrated for
              offline and online auction. Our customized auction software
              collaborates with real estate owners and bidders for successful
              outcomes.
            </p>
          </div>
        </div>
      </div>

      <div
        className="section whyChooseHSB"
        style={{ paddingInline: isMd ? " 2rem" : " 14%" }}
      >
        <h1
          className="sectionHeading"
          style={{ fontSize: isMd ? " 30px" : "48px" }}
        >
          Why Hire HSB As Your Real Estate App Development Company?
        </h1>
        <p className="sectionSubHeading" style={{ fontSize: "22px" }}>
          HSB employs state-of-the-art technology to build your Real Estate
          application that multiplies the worth of your property. We offer
          comprehensive solutions to develop and maintain high-end applications.
        </p>
        <div
          className="cardsContainer-services"
          style={{ marginTop: "3.2rem" }}
        >
          <div
            className="card-service"
            style={{
              padding: "1rem 2rem",
              borderRadius: "10px",
              boxShadow: " 0 4px 12px #080a0d0d, 0 8px 16px #080a0d0d",
            }}
          >
            <p className="cardTitle-service" style={{ fontSize: "28px" }}>
              Advanced Technology
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              There has been a lot of advancement in the structural displays
              where technologies related to AR/VR are used to create a realistic
              experience to the prospective buyers. We create web and mobile
              applications with realistic visuals and a complete augmented
              reality to enhance realtime experience of possessing the property.
            </p>
          </div>
          <div
            className="card-service"
            style={{
              padding: "1rem 2rem",
              borderRadius: "10px",
              boxShadow: " 0 4px 12px #080a0d0d, 0 8px 16px #080a0d0d",
            }}
          >
            <p className="cardTitle-service" style={{ fontSize: "28px" }}>
              Scalable Solution
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              We create real estate platforms that can be leveraged for sale,
              rental, or lease. It can be used for agricultural, commercial, or
              residential properties or for multiple types of properties.
            </p>
          </div>
          <div
            className="card-service"
            style={{
              padding: "1rem 2rem",
              borderRadius: "10px",
              boxShadow: " 0 4px 12px #080a0d0d, 0 8px 16px #080a0d0d",
            }}
          >
            <p className="cardTitle-service" style={{ fontSize: "28px" }}>
              High Returns on Investment
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              Investing on a high-end mobile or web application will add more
              value to your property. Through realistic experience, the
              customers will be in a better position to make informed choices
              and initiate considering the property quickly.
            </p>
          </div>
          <div
            className="card-service"
            style={{
              padding: "1rem 2rem",
              borderRadius: "10px",
              boxShadow: " 0 4px 12px #080a0d0d, 0 8px 16px #080a0d0d",
            }}
          >
            <p className="cardTitle-service" style={{ fontSize: "28px" }}>
              End-to-End Development and Maintenance
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              We develop applications for your various real estate requirements
              such as sale, rental, auction, etc. The real estate modules track
              the live status of property dealings and keep you updated with the
              real-time transactions.
            </p>
          </div>
        </div>
      </div>

      <div
        className="section"
        style={{ paddingInline: isMd ? " 2rem" : " 14%" }}
      >
        <h1
          className="sectionHeading"
          style={{ fontSize: isMd ? " 30px" : "48px" }}
        >
          Few Modules for Your Custom Real Estate App
        </h1>
        <p className="sectionSubHeading" style={{ fontSize: "22px" }}>
          We deliver turnkey solutions that remove the major roadblocks in the
          real estate business and help firms grow faster. We ensure quality
          results that meet the expectations and emerging demands of the
          customers in this industry. Following are the various modules that can
          be customized for your real estate business requirement –
        </p>

        <div
          className="moduleItems-industries"
          style={{
            display: "grid",
            gridTemplateColumns: isMd ? "1fr" : "repeat(3, 1fr)",
            gap: "1.4rem",
          }}
        >
          <div
            style={{
              padding: "1rem 2rem",
              borderRadius: "10px",
              boxShadow: " 0 4px 12px #080a0d0d, 0 8px 16px #080a0d0d",
              backgroundColor: "#f4f4f4",
              display: "flex",
              alignItems: "center",
              minWidth: "fit-content",
              gap: ".3rem",
            }}
          >
            <FaArrowRight className="moduleItemBullet" />
            <p>Online property booking app </p>
          </div>
          <div
            style={{
              padding: "1rem 2rem",
              borderRadius: "10px",
              boxShadow: " 0 4px 12px #080a0d0d, 0 8px 16px #080a0d0d",
              backgroundColor: "#f4f4f4",
              display: "flex",
              alignItems: "center",
              minWidth: "fit-content",
              gap: ".3rem",
            }}
          >
            <FaArrowRight className="moduleItemBullet" />
            <p>CRM and ERP system software </p>
          </div>
          <div
            style={{
              padding: "1rem 2rem",
              borderRadius: "10px",
              boxShadow: " 0 4px 12px #080a0d0d, 0 8px 16px #080a0d0d",
              backgroundColor: "#f4f4f4",
              display: "flex",
              alignItems: "center",
              minWidth: "fit-content",
              gap: ".3rem",
            }}
          >
            <FaArrowRight className="moduleItemBullet" />
            <p>Property management app</p>
          </div>
          <div
            style={{
              padding: "1rem 2rem",
              borderRadius: "10px",
              boxShadow: " 0 4px 12px #080a0d0d, 0 8px 16px #080a0d0d",
              backgroundColor: "#f4f4f4",
              display: "flex",
              alignItems: "center",
              minWidth: "fit-content",
              gap: ".3rem",
            }}
          >
            <FaArrowRight className="moduleItemBullet" />
            <p>B2B and B2C real estate app</p>
          </div>
          <div
            style={{
              padding: "1rem 2rem",
              borderRadius: "10px",
              boxShadow: " 0 4px 12px #080a0d0d, 0 8px 16px #080a0d0d",
              backgroundColor: "#f4f4f4",
              display: "flex",
              alignItems: "center",
              minWidth: "fit-content",
              gap: ".3rem",
            }}
          >
            <FaArrowRight className="moduleItemBullet" />
            <p>Property rental app</p>
          </div>
          <div
            style={{
              padding: "1rem 2rem",
              borderRadius: "10px",
              boxShadow: " 0 4px 12px #080a0d0d, 0 8px 16px #080a0d0d",
              backgroundColor: "#f4f4f4",
              display: "flex",
              alignItems: "center",
              minWidth: "fit-content",
              gap: ".3rem",
            }}
          >
            <FaArrowRight className="moduleItemBullet" />
            <p>Inventory management software</p>
          </div>
          <div
            style={{
              padding: "1rem 2rem",
              borderRadius: "10px",
              boxShadow: " 0 4px 12px #080a0d0d, 0 8px 16px #080a0d0d",
              backgroundColor: "#f4f4f4",
              display: "flex",
              alignItems: "center",
              minWidth: "fit-content",
              gap: ".3rem",
            }}
          >
            <FaArrowRight className="moduleItemBullet" />
            <p>Website for property dealers</p>
          </div>
          <div
            style={{
              padding: "1rem 2rem",
              borderRadius: "10px",
              boxShadow: " 0 4px 12px #080a0d0d, 0 8px 16px #080a0d0d",
              backgroundColor: "#f4f4f4",
              display: "flex",
              alignItems: "center",
              minWidth: "fit-content",
              gap: ".3rem",
            }}
          >
            <FaArrowRight className="moduleItemBullet" />
            <p>Real estate marketplace app</p>
          </div>
        </div>
      </div>

      <div
        className="technologiesSectionIndustries section"
        style={{ paddingInline: isMd ? " 2rem" : " 14%" }}
      >
        <h1
          className="sectionHeading"
          style={{ fontSize: isMd ? " 30px" : "48px" }}
        >
          Technologies and Tools We Use for Real Esate App Development Services
        </h1>
        <Box sx={{ width: "100%", marginTop: "2rem" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleTabChange}
              aria-label="basic tabs example"
            >
              <Tab label="Frontend" {...a11yProps(0)} />
              <Tab label="Backend" {...a11yProps(1)} />
              <Tab label="Database" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0} style={{ marginTop: "2rem" }}>
            <div className="technlogiesContainer-technology">
              {frontendTab.map((eachItem) => (
                <div className="technologyCard">
                  <div className="technologyIconContainer stretch">
                    <img
                      className="technologyIcon"
                      src={eachItem.imageUrl}
                      alt="technology icon"
                    />
                  </div>
                  <p className="iconName-service">{eachItem.name}</p>
                </div>
              ))}
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <div className="technlogiesContainer-technology">
              {backendTab.map((eachItem) => (
                <div className="technologyCard">
                  <div className="technologyIconContainer stretch">
                    <img
                      className="technologyIcon"
                      src={eachItem.imageUrl}
                      alt="technology icon"
                    />
                  </div>
                  <p className="iconName-service">{eachItem.name}</p>
                </div>
              ))}
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <div className="technlogiesContainer-technology">
              {databasetab.map((eachItem) => (
                <div className="technologyCard">
                  <div className="technologyIconContainer stretch">
                    <img
                      className="technologyIcon"
                      src={eachItem.imageUrl}
                      alt="technology icon"
                    />
                  </div>
                  <p className="iconName-service">{eachItem.name}</p>
                </div>
              ))}
            </div>
          </CustomTabPanel>
        </Box>
      </div>
      <div
        // className="technologiesSectionIndustries section"
        className="closingSection"
        style={{ paddingInline: isMd ? " 2rem" : " 14%" }}
      >
        <h1
          className="sectionHeading"
          style={{ fontSize: isMd ? " 30px" : "48px" }}
        >
          Our Step-by-Step Process to Build the Outstanding Real Esate App
        </h1>
        <Chrono
          disableToolbar="true"
          theme={{
            primary: "black",
            titleColor: "black",
          }}
          mode="VERTICAL"
          items={educationProcessTimelineItems}
        >
          <p> Research the market and learn about the competitors</p>
          <p>List out the app features </p>
          <p> Choose the right technology</p>
          <p> Define project timeline and costing</p>
          <p> Approval from healthcare and legal documentation </p>
          <p> Design the architecture</p>
          <p> Scrum calls and sprint planning </p>
          <p> UI/UX designs and approval</p>
          <p>Development phase </p>
          <p> Internal testing and UAT</p>
          <p>Deployment </p>
          <p> Training, support and maintenance</p>
        </Chrono>
      </div>
      {/* Accordion */}
      <div
        className="technologiesSectionIndustries section"
        style={{ paddingInline: isMd ? " 2rem" : " 14%" }}
      >
        <h1
          className="sectionHeading"
          style={{ fontSize: isMd ? " 30px" : "48px" }}
        >
          FAQs
        </h1>
        <p className="sectionSubHeading" style={{ fontSize: "22px" }}>
          Find the answers to the most commonly asked questions about our
          services below
        </p>
        <div style={{ marginTop: "3.2rem" }}>
          <Accordion sx={{ borderRadius: "14px", marginBlock: ".8rem" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ fontSize: "24px" }}
            >
              What are some of the features of your real estate software
              solutions and services?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              Our software solutions either through mobile app or web app for
              the real estate industry include the following features:
              <ul>
                <li style={{ paddingBlock: ".2rem", fontSize: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "12px" }} /> Mobile
                  Listing management
                </li>
                <li style={{ paddingBlock: ".2rem", fontSize: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "12px" }} /> Order CRM
                  integration
                </li>
                <li style={{ paddingBlock: ".2rem", fontSize: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "12px" }} /> Payment
                  Lead capture
                </li>

                <li style={{ paddingBlock: ".2rem", fontSize: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "12px" }} /> Mobile
                  Mortgage calculator
                </li>

                <li style={{ paddingBlock: ".2rem", fontSize: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "12px" }} /> Lending
                  Home search
                </li>

                <li style={{ paddingBlock: ".2rem", fontSize: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "12px" }} /> The cost
                  Virtual tours
                </li>
                <li style={{ paddingBlock: ".2rem", fontSize: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "12px" }} /> The cost
                  Agent profiles and more
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ borderRadius: "14px", marginBlock: ".8rem" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ fontSize: "24px" }}
            >
              How long does it take to develop a real estate app? How much would
              a real estate app cost?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              The development time for any app including real estate depends on
              the features and functionality required. We suggest you to contact
              us with your requirements so that we can help you with estimated
              time of completion of the app and approximate cost of developing
              the app.
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ borderRadius: "14px", marginBlock: ".8rem" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ fontSize: "24px" }}
            >
              Which technologies and programming languages your developers
              employ to create real estate applications?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              Our developers are well experienced in programming languages like
              Kotlin, Swift, Java, and CSS. As for mobile frameworks, we use
              React Native, Android Studio, Flutter, iOS SDK, Xcode, Xamarin,
              Cordova, and Iconic. Using Metaverse, we can develop 3D and
              multi-dimensional walk-throughs of your property to give a
              realistic experience to the customers.
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ borderRadius: "14px", marginBlock: ".8rem" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ fontSize: "24px" }}
            >
              How having a real estate app is profitable?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              Along with increasing the mobility and customer reach, you can
              also use real estate apps to create other sources of income such
              as, selling ad slots to property management companies, mortgage
              lenders, and other similar businesses and providing premium
              services to real estate agents.
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <div
        className="closingSection"
        style={{ paddingInline: isMd ? " 2rem" : " 14%" }}
      >
        <h1
          className="sectionHeading"
          style={{ fontSize: isMd ? " 30px" : "48px" }}
        >
          Connect us now to avail our RealEsate app development services
        </h1>
        <button
          className="letsTalkButton slideRight"
          type="button"
          style={{
            display: "flex",
            position: "relative",
            alignItems: "center",
            textAlign: "center",
            paddingLeft: "1.2rem",
            textWrap: "nowrap",
            minWidth: "fit-content",
          }}
        >
          GET QUOTE
          <FaArrowRight
            className="rightArrow"
            style={{ position: "absolute", right: ".6rem" }}
          />
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default RealEstateIndustries;
