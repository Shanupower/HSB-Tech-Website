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
    Travel and Hospitality App Development Services
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
  {
    title: "Step 13",
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

const TravelAndHospitalityIndustry = () => {
  const isMd = useMediaQuery("(max-width:1068px)");
  const [value, setValue] = useState(0);
  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="industriesPageContainer">
      {!isMd && <Navigationbar />}

      <div
        className="landingSection-services manufacturing section"
        style={{
          paddingInline: isMd ? " 2rem" : " 18%",
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
            Travel and Hospitality App Development Services
          </h1>
          <p
            className="sectionDescription"
            style={{ fontSize: "20px", marginTop: "2rem" }}
          >
            Value-driven travel and hospitality app development solutions for
            travel businesses of all sizes! Get highly customized travel IT
            solutions developed by us and overcome the complexities in the
            tourism business. Team up with us to modernize and speed up
            tourism-related operations.
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
        style={{ paddingInline: isMd ? " 2rem" : " 18%" }}
      >
        <h1
          className="sectionHeading"
          style={{ fontSize: isMd ? " 30px" : "48px" }}
        >
          Solutions We Deliver
        </h1>
        <p className="sectionSubHeading" style={{ fontSize: "22px" }}>
          For this highly competitive industry to survive, it is essential for
          companies to implement customized travel portal development and
          hospitality IT consulting solutions that offer the best user
          experience, efficiency, and robustness. In the space of tourism and
          hospitality, we offer comprehensive IT solutions with the best of
          business results in terms of budget, effectiveness, productivity,
          customer satisfaction, sales, and further growth of the business.
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
              Enterprise Mobility Solutions
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              Mobility enabled travel and hospitality IT solutions for the
              enterprise to accurately monitor and reach out to a large segment
              of on-the-go clientele with ease, efficiency and productive
              output.
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
              Travel Management Software
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              It focuses on resource planning, management and operational
              control between different departments, based at different
              locations. Diverse software modules to focus on separate working
              areas and integrated with each other through intermediate modules.
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
              Travel & Hospitality Web and Mobile Applications
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              Customized web and mobile applications catering to exceptional
              guest service, hotel bookings, restaurant management, enhanced
              customer loyalty, and other tourism support integrated with
              payment gateway.
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
              Vehicle Tracking System
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              GPS based vehicle tracking system and monitoring of fleet owners
              with an objective to monitor, configure, and track vehicles,
              keeping a demanding eye on them. Through GPRS connectivity, mobile
              sends the vehicle information and GSM-based SIM signals to the
              backend server.
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
              Comprehensive Admin Dashboard
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              Mobility enabled travel & hospitality IT solutions where admins
              can check availability, track promotions, manage users, collect
              feedback, and other features that enables the enterprise to reach
              out to a large segment of on-the-go clientele with ease,
              efficiency and productive output.
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
              CRM and ERP Systems
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              Custom CRM development for travel and hospitality for each segment
              such as sales, service, marketing and satisfaction. ERP system
              helps in accumulation of business software solutions, meant for
              the industry, that emphasis on resource planning, management and
              operational control between various departments, and locations.
            </p>
          </div>
        </div>
      </div>

      <div
        className="section whyChooseHSB"
        style={{ paddingInline: isMd ? " 2rem" : " 18%" }}
      >
        <h1
          className="sectionHeading"
          style={{ fontSize: isMd ? " 30px" : "48px" }}
        >
          Why Hire HSB As Your Travel and Hospitality App Development Company?
        </h1>
        <p className="sectionSubHeading" style={{ fontSize: "22px" }}>
          The integration of cognitive technologies in travel apps can collect
          and process requests at a much faster pace. Through our smart
          solutions you can allocate your resources, handle feedback and prepare
          effective strategies.
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
              Enhance Customer Experience
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              The app helps in attending customer queries as and when they are
              raised which will benefit in building strong customer
              relationships. The app automates the queries and you can resolve
              them within no time.
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
              Cost-effective
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              Traditionally, hotels hire, train and pay remunerations to the
              employees who provide concierge services to the management. By
              making a one-time investment in mobile app solution, it will be
              economically worth against a traditional pattern.
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
              Multiple Revenue App
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              The same unmatched classic concierge app can be integrated with
              multiple services which will generate multiple revenues. Ancillary
              services such as cab booking service, food delivery, etc. can be
              offered under single paid subscription to generate regular income
              source.
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
              AI-Powered
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              Our concierge apps are a replaceable to humans employed at the
              hotel reception. As we understand that it will be difficult to
              hire someone for 24hrs at the reception desk, our AI concierge
              apps can be employed as an alternate.
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
              Chatbots to Hold Customers
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              With the help of Chatbots, smart and effective communication can
              be established which will positively impact the users.
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
              Branding and Customer Engagement
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              Our advance IT solutions specific to travel industry help in
              delivering effective on-time and hassle-free services to the
              customers. This will strengthen the brand and uplift the stake and
              help in better customer engagement.
            </p>
          </div>
        </div>
      </div>

      <div
        className="section"
        style={{ paddingInline: isMd ? " 2rem" : " 18%" }}
      >
        <h1
          className="sectionHeading"
          style={{ fontSize: isMd ? " 30px" : "48px" }}
        >
          Few Modules for Your Custom Travel and Hospitality App
        </h1>
        <p className="sectionSubHeading" style={{ fontSize: "22px" }}>
          We can build a wide range of travel and hospitality modules specific
          to the requirements of a hospitality company. Our developers also make
          sure that all the modules and corresponding tech stacks work together
          perfectly.
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
            <p>Travel and tourism guidance</p>
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
            <p>Hotel accommodation booking </p>
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
            <p>Travel booking</p>
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
            <p>Flight booking</p>
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
            <p>Car rental or fleet management </p>
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
            <p>Custom travel planning</p>
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
            <p>CRM for hotels </p>
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
            <p>Cab booking service</p>
          </div>
        </div>
      </div>

      <div
        className="technologiesSectionIndustries section"
        style={{ paddingInline: isMd ? " 2rem" : " 18%" }}
      >
        <h1
          className="sectionHeading"
          style={{ fontSize: isMd ? " 30px" : "48px" }}
        >
          Technologies and Tools We Use for Travel and Hospitality App
          Development Services
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
        style={{ paddingInline: isMd ? " 2rem" : " 18%" }}
      >
        <h1
          className="sectionHeading"
          style={{ fontSize: isMd ? " 30px" : "48px" }}
        >
          Our Step-by-Step Process to Build the Outstanding Travel and
          Hospitality App
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
          <p>Ensuring compliance with travel and tourism regulations </p>
          <p> Internal testing and UAT</p>
          <p>Deployment </p>
          <p> Training, support and maintenance</p>
        </Chrono>
      </div>
      {/* Accordion */}
      <div
        className="technologiesSectionIndustries section"
        style={{ paddingInline: isMd ? " 2rem" : " 18%" }}
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
              What features can be included in a mobile app of travel business?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              It includes features such as trip planning, route filtering,
              weather information, and currency conversion. It can also allow
              users to book hotels, flights, and other tourism-related services
              directly from the app.
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ borderRadius: "14px", marginBlock: ".8rem" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ fontSize: "24px" }}
            >
              What type of travel related operations does a travel mobile app
              help with?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              A mobile application can help with a variety of tourism-related
              operations, such as booking hotel rooms, managing itineraries,
              providing information about local attractions and activities,
              booking tickets, organizing tour packages, and more.
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ borderRadius: "14px", marginBlock: ".8rem" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ fontSize: "24px" }}
            >
              How does a travel industry benefits from having a mobile app?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              By having a travel mobile app, your business can provide handy
              tool to the customer to register tickets, packages, and
              accommodation. Reliable technology aids the travel industry to
              digitalize its services to increase customer reach and
              satisfaction.
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ borderRadius: "14px", marginBlock: ".8rem" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ fontSize: "24px" }}
            >
              Is your travel software service scalable?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              Yes, we create software and apps for the travel and hospitality
              industry that help you support as many customers as you require.
              The apps are scalable in accordance to your business expansion.
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <div
        className="closingSection"
        style={{ paddingInline: isMd ? " 2rem" : " 18%" }}
      >
        <h1
          className="sectionHeading"
          style={{ fontSize: isMd ? " 30px" : "48px" }}
        >
          Hire Us for Travel and Hospitality Software Development Requirements.
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

export default TravelAndHospitalityIndustry;
