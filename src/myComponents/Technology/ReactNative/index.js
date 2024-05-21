/* eslint-disable jsx-a11y/img-redundant-alt */
import { Component, useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Typography from "@mui/material/Typography";

import manufacturingImage from "../../../assets/manufacturing-landingpage.webp";
import { FaArrowRight } from "react-icons/fa";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import { Chrono } from "react-chrono";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import reactImage from "../../../assets/react.png";
import flutterImage from "../../../assets/flutter.png";
import javaScript from "../../../assets/javascript-logo.png";
import HtmlImage from "../../../assets/html.webp";
import angular from "../../../assets/angular.webp";
import cssImage from "../../../assets/css.png";
import nodeJs from "../../../assets/nodejs.png";
import goLang from "../../../assets/goLanguage.png";
import SupplyChain from "../../../assets/icons/icons8-supply-chain-60.png";
import Data from "../../../assets/icons/icons8-data-migration-60.png";
import Production from "../../../assets/icons/icons8-production-machine-60.png";
import QualityChain from "../../../assets/icons/icons8-quality-control-60.png";
import Technoligy from "../../../assets/icons/icons8-technology-60.png";
import Opreation from "../../../assets/icons/icons8-operations-60.png";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AWS from "../../../assets/icons/images.png";
import Azure from "../../../assets/icons/download.png";

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import "./index.css";
import { useMediaQuery } from "@mui/material";
import Footer from "../../footer";
import Navigationbar from "../../navigationBar";

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
    Technoligy
  </Link>,
  <Typography
    key="3"
    color="text.primary"
    sx={{ color: "#fff", fontSize: "16px" }}
  >
    React Native App Development Services
  </Typography>,
];

const commonly = [
  {
    imageUrl: reactImage,
    name: " React Navigation",
  },
  {
    imageUrl: reactImage,
    name: " React Vector icons",
  },
  {
    imageUrl: flutterImage,
    name: "Lottie component for React Native",
  },
  {
    imageUrl: javaScript,
    name: " React Native Code Push",
  },
  {
    imageUrl: HtmlImage,
    name: "React Native Navigation  ",
  },
];

const Deployment = [
  {
    imageUrl: nodeJs,
    name: "Gihub Actions",
  },
  {
    imageUrl: javaScript,
    name: "Jenkins",
  },
  {
    imageUrl: goLang,
    name: "TravesCI",
  },
];

const Reporting = [
  {
    imageUrl: nodeJs,
    name: "BugSnag",
  },
  {
    imageUrl: javaScript,
    name: "Instabug",
  },
  {
    imageUrl: goLang,
    name: "Firebase Crashlytics",
  },
];

const Libraries = [
  {
    imageUrl: nodeJs,
    name: " Ant Design",
  },
  {
    imageUrl: javaScript,
    name: "ArtDesign",
  },
  {
    imageUrl: goLang,
    name: "Material UI",
  },
  {
    imageUrl: goLang,
    name: "NAtiveBs ",
  },
];
const Build = [
  {
    imageUrl: AWS,
    name: "Typescript",
  },
  {
    imageUrl: Azure,
    name: "Webpack",
  },
  {
    imageUrl: AWS,
    name: "Create React App",
  },
  {
    imageUrl: Azure,
    name: " React Extension Pack (for VS Studio)",
  },
];
const Frontend = [
  {
    imageUrl: AWS,
    name: "React Hooks",
  },
  {
    imageUrl: Azure,
    name: "Zustand",
  },
  {
    imageUrl: Azure,
    name: "Xstate",
  },
  {
    imageUrl: Azure,
    name: "Redux",
  },
];

const Testing = [
  {
    imageUrl: AWS,
    name: "Manual",
  },
  {
    imageUrl: Azure,
    name: "Automation",
  },
];
const Analytics = [
  {
    imageUrl: AWS,
    name: "Google Analytics",
  },
  {
    imageUrl: Azure,
    name: "Amplitude",
  },
  {
    imageUrl: Azure,
    name: " Adobe analytics ",
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

const ReactNativeTechnoligy = () => {
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
            style={{ marginTop: "3.2rem", fontSize: "48px" }}
          >
            React Native App Development Services
          </h1>
          <p
            className="sectionDescription"
            style={{ fontSize: "20px", marginTop: "2rem" }}
          >
            Looking for the best cross-platform app development experience? We
            are here to help.
          </p>
          <button
            className="getQuoteButton industries-getQuoteButton"
            type="button"
            style={{
              padding: ".8rem 1rem",
              fontSize: "20px",
              width: "fit-content",
              backgroundColor: "#fff",
            }}
          >
            Hire React Native Developers
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
          About React Native
        </h1>
        <p className="sectionSubHeading" style={{ fontSize: "22px" }}>
          React Native combines the best parts of native development with React,
          a best-in-class JavaScript library for building user interfaces. It
          allows you to create efficient mobile apps for iOS and Android with
          one single codebase.
        </p>
        <h2>Benefits of React Native</h2>
        <div
          style={{
            backgroundColor: "#fff",
            minHeight: "20vh",
            width: "100%",
            marginTop: "1rem",
            display: "flex",
            flexWrap: "wrap",
            borderRadius: "8px",
            padding: "2rem 1.4rem",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <p
            style={{
              fontSize: "20px",
              width: "calc(100%/3 - 1rem)",
              marginBottom: "2.4rem",
              minWidth: "fit-content",
            }}
          >
            <CheckCircleOutlineIcon style={{ color: "#1bd9c9" }} />
            Support cross-platform
          </p>
          <p
            style={{
              fontSize: "20px",
              width: "calc(100%/3 - 1rem)",
              minWidth: "fit-content",
              marginBottom: "2.4rem",
            }}
          >
            <CheckCircleOutlineIcon style={{ color: "#1bd9c9" }} /> Native
            components for everyone
          </p>
          <p
            style={{
              fontSize: "20px",
              width: "calc(100%/3 - 1rem)",
              minWidth: "fit-content",
              marginBottom: "2.4rem",
            }}
          >
            <CheckCircleOutlineIcon style={{ color: "#1bd9c9" }} /> Reusable
            codebase
          </p>
          <p
            style={{
              fontSize: "20px",
              minWidth: "fit-content",
              width: "calc(100%/3 - 1rem)",
            }}
          >
            <CheckCircleOutlineIcon style={{ color: "#1bd9c9" }} /> Widely
            accepted
          </p>
          <p
            style={{
              fontSize: "20px",
              minWidth: "fit-content",
              width: "calc(100%/3 - 1rem)",
            }}
          >
            <CheckCircleOutlineIcon style={{ color: "#1bd9c9" }} /> Easy and
            affordable maintenance
          </p>
          <p
            style={{
              fontSize: "20px",
              minWidth: "fit-content",
              width: "calc(100%/3 - 1rem)",
            }}
          >
            <CheckCircleOutlineIcon style={{ color: "#1bd9c9" }} />
            Community driven
          </p>
        </div>
        <h2 style={{ marginTop: "2rem", fontSize: "24px" }}>
          We develop and actively support our own open-source solutions. With
          the undisputed quality of these products, we successfully use them in
          our projects.
        </h2>
        <button
          className="getQuoteButton industries-getQuoteButton bluidtechnoligy"
          type="button"
          style={{
            padding: ".8rem 1rem",
            fontSize: "20px",
            width: "fit-content",
          }}
        >
          Get Your React Native App Today
        </button>
      </div>
      <div
        className="section whyChooseHSB"
        style={{
          paddingInline: isMd ? " 2rem" : " 14%",
          backgroundColor: "#fff",
        }}
      >
        <h1
          className="sectionHeading"
          style={{ fontSize: isMd ? " 30px" : "48px" }}
        >
          Our React Native App Development Services
        </h1>

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
              Cross-Platform App Development
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              We create React Native apps that run seamlessly on multiple
              platforms, including iOS and Android.
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
              UI/UX Design
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              We design/redesign visually appealing and customer-friendly UI/UX
              of your React Native application.
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
              App Optimization
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              We optimize the performance and user experience of your React
              Native apps to enhance the overall customer engagement.
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
              Quality Assurance
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              We build high-quality React Native apps that are engineered
              according to industry standards.
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
              Third-Party Integration
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              We integrate React Native apps with various third-party services,
              such as social media, payment gateways, and analytics.
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
              App Maintenance and Support
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              Leverage our maintenance and support for React Native app
              development services to upgrade versions and dependencies,
              allowing you to keep up with the evolving needs of your business.
            </p>
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
          Tools We Use to Build Beautiful React Native Apps
        </h1>
        <Box sx={{ width: "100%", marginTop: "2rem" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleTabChange}
              aria-label="basic tabs example"
            >
              <Tab
                label="Frontend Store / State Management "
                {...a11yProps(0)}
              />

              <Tab label="Build/Development tools" {...a11yProps(1)} />
              <Tab label="CI / CD Deployment Tools " {...a11yProps(2)} />
              <Tab label="Testing  " {...a11yProps(3)} />
              <Tab label="Analytics   " {...a11yProps(4)} />
              <Tab label="Crash Reporting    " {...a11yProps(5)} />
              <Tab label="UI Libraries   " {...a11yProps(6)} />
              <Tab
                label="Other commonly used libraries    "
                {...a11yProps(4)}
              />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <div className="technlogiesContainer-technology">
              {Frontend.map((eachItem) => (
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

          <CustomTabPanel value={value} index={1} style={{ marginTop: "2rem" }}>
            <div className="technlogiesContainer-technology">
              {Build.map((eachItem) => (
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
              {Deployment.map((eachItem) => (
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
          <CustomTabPanel value={value} index={3}>
            <div className="technlogiesContainer-technology">
              {Testing.map((eachItem) => (
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
          <CustomTabPanel value={value} index={4}>
            <div className="technlogiesContainer-technology">
              {Analytics.map((eachItem) => (
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
          <CustomTabPanel value={value} index={5}>
            <div className="technlogiesContainer-technology">
              {Reporting.map((eachItem) => (
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
          <CustomTabPanel value={value} index={6}>
            <div className="technlogiesContainer-technology">
              {Libraries.map((eachItem) => (
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
          <CustomTabPanel value={value} index={7}>
            <div className="technlogiesContainer-technology">
              {commonly.map((eachItem) => (
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
              What applications can you develop using React Native?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              The range of applications that can be build using React Native
              includes enterprise apps, finance apps, streaming apps, real-time
              apps, social networking apps, and eCommerce apps.
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ borderRadius: "14px", marginBlock: ".8rem" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ fontSize: "24px" }}
            >
              How is React Native better for App development?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              React Native is relatively easy to monitor and test. It has singe
              data binding built to manage modifications. Additionally, it uses
              the DOM model for utmost flexibility and scalability. Its code can
              be reused to create apps more quickly and affordably.
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ borderRadius: "14px", marginBlock: ".8rem" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ fontSize: "24px" }}
            >
              Can we migrate to React from other libraries/frameworks?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              Yes. Migrating to React from the existing platform is much easier
              as it doesn’t necessitate recreating the entire code or using
              tools when you wish to make a change. Our skilled React Native App
              development team guarantees a simple migration from any platform
              to React. We help in end-to-end migration without impacting the
              app's performance.
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ borderRadius: "14px", marginBlock: ".8rem" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ fontSize: "24px" }}
            >
              What is the estimated cost of developing a React App?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              The cost of developing a React Native can be estimated only after
              assessing other factors such as, development platform, app
              categories, app complexity, features and functionalities, and the
              number of developers. Contact us today with your requirement, and
              we will provide you with a quote.
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
          Hire a top React Native Development Team
        </h1>
        <p style={{ fontSize: "22px" }}>
          We’re available as a dedicated team: we can build a white-label React
          Native app from scratch.
        </p>
        <button
          className="letsTalkButton slideRight"
          type="button"
          style={{
            width: "fit-content",
            display: "flex",
            alignItems: "center",
            position: "relative",
          }}
        >
          Contact Us
          <FaArrowRight
            className="rightArrow"
            style={{
              position: "absolute",
              right: "1rem",
            }}
          />
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default ReactNativeTechnoligy;
