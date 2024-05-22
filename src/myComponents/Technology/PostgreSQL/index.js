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
    PostgreSQL Development Services
  </Typography>,
];

const Monitoring = [
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

const Pipelines = [
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
const Deployment_Infra = [
  {
    imageUrl: AWS,
    name: "AWS",
  },
  {
    imageUrl: Azure,
    name: "Azure",
  },
];

const Containers = [
  {
    imageUrl: AWS,
    name: "AWS",
  },
  {
    imageUrl: Azure,
    name: "Azure",
  },
];
const Os = [
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

const PostgreSQLTechnoligy = () => {
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
            PostgreSQL Development Services
          </h1>
          <p
            className="sectionDescription"
            style={{ fontSize: "20px", marginTop: "2rem" }}
          >
            HSB has the skilled PostgreSQL team who are determined to provide
            versatility of relational database management system. We have been
            part of PostgreSQL open-source community, allowing us to build
            mobile and web applications that scale from idea to enterprise fast.
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
            Build Your Laravel Development Team Today
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
          About PostgreSQL
        </h1>
        <p className="sectionSubHeading" style={{ fontSize: "22px" }}>
          PostgreSQL is an advanced, enterprise-class open-source relational
          database that supports both SQL (relational) and JSON (non-relational)
          querying. It is a highly stable database management system and is used
          as the primary data store or data warehouse for many web, mobile,
          geospatial, and analytics applications.
        </p>
        <h2>Benefits of PostgreSQL</h2>
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
            <CheckCircleOutlineIcon style={{ color: "#1bd9c9" }} /> Enriched
            with features and extensions
          </p>
          <p
            style={{
              fontSize: "20px",
              width: "calc(100%/3 - 1rem)",
              marginBottom: "2.4rem",
              minWidth: "fit-content",
            }}
          >
            <CheckCircleOutlineIcon style={{ color: "#1bd9c9" }} /> Highly fault
            tolerant database
          </p>
          <p
            style={{
              fontSize: "20px",
              width: "calc(100%/3 - 1rem)",
              marginBottom: "2.4rem",
              minWidth: "fit-content",
            }}
          >
            <CheckCircleOutlineIcon style={{ color: "#1bd9c9" }} /> Support of
            open source license and community
          </p>
          <p
            style={{
              fontSize: "20px",
              width: "calc(100%/3 - 1rem)",
              minWidth: "fit-content",
            }}
          >
            <CheckCircleOutlineIcon style={{ color: "#1bd9c9" }} />
            Multi-version concurrency control (MVCC)
          </p>
          <p
            style={{
              fontSize: "20px",
              width: "calc(100%/3 - 1rem)",
              minWidth: "fit-content",
            }}
          >
            <CheckCircleOutlineIcon style={{ color: "#1bd9c9" }} /> Support for
            full-text search and geospatial data
          </p>
          <p
            style={{
              fontSize: "20px",
              width: "calc(100%/3 - 1rem)",
              minWidth: "fit-content",
            }}
          >
            <CheckCircleOutlineIcon style={{ color: "#1bd9c9" }} /> Advanced
            data types — hstore, json, and jsonb
          </p>
        </div>
        <h2 style={{ marginTop: "2rem", fontSize: "24px" }}>
          Engage our skilled PostgreSQL development team.
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
          Build Your PostgreSQL Application Today
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
          Our PostgreSQL Development Services
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
              Creating Custom Event Triggers
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              Identify the events you want to trigger actions on, such as new
              user sign-ups, data updates, or changes to specific fields in a
              database. After identifying these events, we can help you in
              creating custom event triggers as a response to them.
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
              PostgreSQL to Automate Tasks
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              Our team helps in improving efficiency of your application by
              automating the tasks through function development, monitoring,
              integration, and optimization for any business application
              requirement.
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
              Database Control Access Through an RBAC System
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              Our team is skilled in leveraging the technology to design robust
              database control workflows for your application and feature
              targets. We can help you with RBAC design, maintenance,
              implementation, and training.
            </p>
          </div>
        </div>
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
              What is the efficacy of PostgreSQL compare to other open-source
              databases such as MySQL and MongoDB?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              PostgreSQL is often considered to be more powerful and
              feature-rich than MySQL. Being a relational database, PostgreSQL
              is less less performant than MongoDB as it is a document-oriented
              database. As both of them are suited for different use cases and
              workloads, the selection depends on the specific requirements of
              the application.
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ borderRadius: "14px", marginBlock: ".8rem" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ fontSize: "24px" }}
            >
              When should I use the PostgreSQL database?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              You should use PostgreSQL when you require a high level of
              reliability, flexibility, and performance for your application's
              data storage and retrieval needs.
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ borderRadius: "14px", marginBlock: ".8rem" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ fontSize: "24px" }}
            >
              What is PostgreSQL used for?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              PostgreSQL is a popular and powerful database management system
              having advanced features, such as concurrency control, ACID
              compliance, and extensibility. Its robust and scalable nature
              makes it ideal for handling large volumes of data in industries
              such as finance, healthcare, and government applications.
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ borderRadius: "14px", marginBlock: ".8rem" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ fontSize: "24px" }}
            >
              How much would it cost to develop an application using PostgreSQL?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              There are numerous factors that contribute the cost of developing
              an application with PostgreSQL. These factors are the size of the
              website, type of website, the platform used, development time
              duration, developer’s experience, number of resources, engagement
              model of hiring the resource, complexity/number of
              functionalities/features, custom development requirements, and
              even the country/region of the resource your hire.
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
          Hire an Efficient PostgreSQL Development Team
        </h1>
        <p style={{ fontSize: "22px" }}>
          Gain the Advantage with the PostgreSQL Development
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

export default PostgreSQLTechnoligy;
