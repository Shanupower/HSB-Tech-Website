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
    Technology
  </Link>,
  <Typography
    key="3"
    color="text.primary"
    sx={{ color: "#fff", fontSize: "16px" }}
  >
    Next.js Development Services
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

const NextTechnoligy = () => {
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
            Next.js Development Services
          </h1>
          <p
            className="sectionDescription"
            style={{ fontSize: "20px", marginTop: "2rem" }}
          >
            Next.js professionals accelerate your web application development
            with custom, swift-responsive, and server-side rendered solutions
            using cutting-edge Next.js technology.
          </p>
          <Link
            href="/lets_talk"
            style={{
              padding: ".8rem 1rem",
              fontSize: "20px",
              width: "fit-content",
              backgroundColor: "#fff",
              color: "black",
              textDecoration: "none",
            }}
          >
            Build Your Next.js Team Today
          </Link>
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
          About Next.js
        </h1>
        <p className="sectionSubHeading" style={{ fontSize: "22px" }}>
          Next.js is a React framework for building full-stack web applications.
          The developers use React Components to build user interfaces, and
          Next.js for additional features and optimizations. Next.js also
          abstracts and automatically configures tooling needed for React, like
          bundling, compiling, and more. This allows you to focus on building
          your application instead of spending time with configuration.
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
            alignItems: "flex-start",
          }}
        >
          <p
            style={{
              display: "flex",
              alignItems: "center",
              width: "calc(100%/3 - 1rem)",
              marginBottom: "2.4rem",
              minWidth: "fit-content",
            }}
          >
            <CheckCircleOutlineIcon style={{ color: "#1bd9c9", marginRight: "0.5rem" }} /> Server-side and client-side routing
          </p>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              width: "calc(100%/3 - 1rem)",
              marginBottom: "2.4rem",
              minWidth: "fit-content",
            }}
          >
            <CheckCircleOutlineIcon style={{ color: "#1bd9c9", marginRight: "0.5rem" }} /> Code splitting
            
          </p>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              width: "calc(100%/3 - 1rem)",
              marginBottom: "2.4rem",
              minWidth: "fit-content",
            }}
          >
            <CheckCircleOutlineIcon style={{ color: "#1bd9c9", marginRight: "0.5rem" }} /> Efficient component reuse
            
          </p>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              width: "calc(100%/3 - 1rem)",
              marginBottom: "2.4rem",
              minWidth: "fit-content",
            }}
          >
            <CheckCircleOutlineIcon style={{ color: "#1bd9c9", marginRight: "0.5rem" }} /> Optimized code to enhance loading experience
            
          </p>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              width: "calc(100%/3 - 1rem)",
              marginBottom: "2.4rem",
              minWidth: "fit-content",
            }}
          >
            <CheckCircleOutlineIcon style={{ color: "#1bd9c9", marginRight: "0.5rem" }} /> TypeScript support
            
          </p>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              width: "calc(100%/3 - 1rem)",
              marginBottom: "2.4rem",
              minWidth: "fit-content",
            }}
          >
            <CheckCircleOutlineIcon style={{ color: "#1bd9c9", marginRight: "0.5rem" }} /> Built-in CSS support
            
          </p>
        </div>
        <h2 style={{ marginTop: "2rem", fontSize: "24px" }}>
          Engage our skilled Next.js development team to construct powerful
          server-side applications, unified with your preferred front-end
          framework.
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
          Build Your Next.js Application Today
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
          Our Next.js Development Services
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
              Next.js Web Application Development
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              Web application development with Next.js ensures rapid page
              loading, enhanced SEO, and an adaptable user interface across
              various devices. It integrates the robustness of React with
              server-side rendering, providing a smooth user experience. Through
              dynamic data fetching of Next.js we can construct dynamic,
              high-performing web applications tailored to meet your business
              needs.
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
              Next.js Server-Side Rendering (SSR)
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              By using Next.js inbuilt SSR capabilities, we enhance website
              functionality and SEO performance. While we pre-render web pages
              on the server, the loading time reduces and search engine result
              pages gets optimized.
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
              Custom Web Components
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              Through Next.js we build custom web components which integrates
              seamlessly into your existing applications, enhancing their
              functionality and providing users with a more engaging and diverse
              browsing experience.
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
              Custom Application Development with Next.js
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              We utilize the capacities of Next.js to create personalized app
              solutions that integrate perfectly with your business goals. We
              design unique applications to redefine user interactions.
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
              Next.js Consulting Services
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              Leverage our Next.js consulting services to obtain custom tech
              solutions tailored to your business needs. Our business analysts
              provide strategic insights, bolstering the value of your
              investment in Next.js.
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
              Next.js Upgrade and Migration Services
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              Our Next.js developers can help you in updating app to the newest
              version of Next.js. We also extend required support for migrating
              your app to Next.js.
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
              Next.js Plugin Development
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              To support your product's expansion, our Next.js specialists can
              aid you in creating custom plugins, taking into account your
              end-users' requirements.
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
              Integration with Next.js Third-Party
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              We provide an API-first method to build integration with the
              corresponding platform, essential to successfully manage an
              eCommerce site. Platforms including ERP, CRM, and PIM can be
              brought together under headless commerce.
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
              Next.js Maintenance and Support
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              HSB offers comprehensive Next.js maintenance and support services
              that includes, regular updates, bug fixes, and around-the-clock
              support to ensure uninterrupted system functionality.
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
              Can Next.js be added to an existing project?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              Yes, it can. Our team has the efficiency to add Next.js to an
              existing project based on the nature of the contract agreed upon.
              To know more about this, contact our Next.js development experts,
              who will guide you through the process.
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ borderRadius: "14px", marginBlock: ".8rem" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ fontSize: "24px" }}
            >
              What are the benefits of using Next.js?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              Few of the main benefits of using Next.js are as follows –
              {/* ul */}
              <ul>
                <li style={{ paddingBlock: ".2rem", fontSize: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "12px" }} />
                  It is fast and provides an easy environment to set up and use.
                </li>
                <li style={{ paddingBlock: ".2rem", fontSize: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "12px" }} />
                  It is easy to use for web development services as the
                  developers need not have to worry about the rendering
                  workflow.
                </li>
                <li style={{ paddingBlock: ".2rem", fontSize: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "12px" }} />{" "}
                  Server-side rendering improves the app performance.
                </li>
                <li style={{ paddingBlock: ".2rem", fontSize: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "12px" }} /> Automatic
                  code splitting improves the load time of your app.
                </li>
                From a business perspective, Next.js for web development
                services is great for getting your MVP to market faster while
                providing a stellar user experience that ensures higher ROI.
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
              What are the benefits of outsourcing Next.js development?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              There are plenty of benefits to outsourcing your Next.js app
              development service. Outsourcing reduces overhead costs and
              ensures experts handle the project at every touchpoint. This also
              frees you up to objectively look at the app’s features from a user
              perspective and leads to a better user experience.
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
          Hire a top Next.js Development Team
        </h1>
        <p style={{ fontSize: "22px" }}>
          Gain the Advantage with the Next.js Development
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
          Connect With Us now
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

export default NextTechnoligy;
