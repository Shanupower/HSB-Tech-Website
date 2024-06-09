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
    GraphQL Development Services
  </Typography>,
];

const GraphQLCodeGenerator = [
  {
    imageUrl: reactImage,
    name: "GraphQL Code Generator",
  },
];

const GraphQL_Playground = [
  {
    imageUrl: nodeJs,
    name: "GraphQL",
  },
];
const Hasura = [
  {
    imageUrl: AWS,
    name: "Hasura ",
  },
];

const ApolloServer = [
  {
    imageUrl: AWS,
    name: "Apollo Server ",
  },
];
const Prisma = [
  {
    imageUrl: AWS,
    name: "Prisma ",
  },
];
const CrashReporting = [
  {
    imageUrl: AWS,
    name: "Prisma ",
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

const GraphSQlTechnoligy = () => {
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
            style={{ marginTop: "3.2rem", fontSize: "48px" }}
          >
            GraphQL Development Services
          </h1>
          <p
            className="sectionDescription"
            style={{ fontSize: "20px", marginTop: "2rem" }}
          >
            To explore different technologies for the convenience of our
            customers, we have been a part of the GraphQL tech community and
            have been utilizing it to deliver complex, flexible, and scalable
            apps.
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
            Build Your GraphQL Team Today
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
        style={{ paddingInline: isMd ? " 2rem" : " 18%" }}
      >
        <h1
          className="sectionHeading"
          style={{ fontSize: isMd ? " 30px" : "48px" }}
        >
          About GraphQl
        </h1>
        <p className="sectionSubHeading" style={{ fontSize: "22px" }}>
          GraphQL is a query language developed by Facebook. It facilitates fast
          and specific communication with APIs by calling data from various
          sources and helps in building at cost-effective web and mobile apps.
        </p>
        <h2>Benefits of GraphQL</h2>
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
            alignItems: "flex-start"
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
            <CheckCircleOutlineIcon style={{ color: "#1bd9c9", marginRight: "0.5rem" }} />
            Efficient communication transactions
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
            <CheckCircleOutlineIcon style={{ color: "#1bd9c9", marginRight: "0.5rem" }} />
            Fast and robust framework
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
            <CheckCircleOutlineIcon style={{ color: "#1bd9c9", marginRight: "0.5rem" }} />
            Unified APIs
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
            <CheckCircleOutlineIcon style={{ color: "#1bd9c9", marginRight: "0.5rem" }} />
            Autogeneration of API documentation
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
            <CheckCircleOutlineIcon style={{ color: "#1bd9c9", marginRight: "0.5rem" }} />
            Excels over REST
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
            <CheckCircleOutlineIcon style={{ color: "#1bd9c9", marginRight: "0.5rem" }} />
            Specific data retrieval
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
            <CheckCircleOutlineIcon style={{ color: "#1bd9c9", marginRight: "0.5rem" }} />
            API callouts are secure and easy to use
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
            <CheckCircleOutlineIcon style={{ color: "#1bd9c9", marginRight: "0.5rem" }} />
            Highly tailored queries
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
            <CheckCircleOutlineIcon style={{ color: "#1bd9c9", marginRight: "0.5rem" }} />
            Stable and lightweight
          </p>
        </div>
        <h2 style={{ marginTop: "2rem", fontSize: "24px" }}>
          Engage our skilled GraphQL development team. Leverage GraphQL fo Your
          Application
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
          Build Your GraphQL Team Today
        </button>
      </div>
      <div
        className="section whyChooseHSB"
        style={{
          paddingInline: isMd ? " 2rem" : " 18%",
          backgroundColor: "#fff",
        }}
      >
        <h1
          className="sectionHeading"
          style={{ fontSize: isMd ? " 30px" : "48px" }}
        >
          Our GraphQL Development Services
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
              GraphQL APIs for UI/UX Design
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              We can create UI/UX interfaces using GraphQL in innovative
              formats. Our experienced developers can handle all project
              requirements with ease.
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
              API Architecture
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              Our GraphQL team is proficient in designing custom APIs based on
              business requirements. Our developers ensure that each API design
              does the job flawlessly.
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
              GraphQL Migration
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              We help you migrate the existing backend to GraphQL. We also
              assure the transition to be simple and easy to implement.
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
              Integrating GraphQL
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              We assist in integrating GraphQL to existing backends. Our
              development team handles the process end-to-end.
            </p>
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
          Tools We Use to Build GraphQL Apps
        </h1>
        <Box sx={{ width: "100%", marginTop: "2rem" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleTabChange}
              aria-label="basic tabs example"
            >
              <Tab label="Hasura " {...a11yProps(0)} />

              <Tab label="GraphQL Playground " {...a11yProps(1)} />
              <Tab label="Prisma " {...a11yProps(2)} />
              <Tab label="GraphQL Code Generator " {...a11yProps(3)} />
              <Tab label="Apollo Server  " {...a11yProps(4)} />
              <Tab label="Crash Reporting   " {...a11yProps(5)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <div className="technlogiesContainer-technology">
              {Hasura.map((eachItem) => (
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
              {GraphQL_Playground.map((eachItem) => (
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
              {Prisma.map((eachItem) => (
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
              {GraphQLCodeGenerator.map((eachItem) => (
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
              {ApolloServer.map((eachItem) => (
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
              {CrashReporting.map((eachItem) => (
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
              How long will it take to deliver a GraphQL project?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              The duration to complete a GraphQL project differs with the
              complexity, size and various other features. We maintain high
              standards using the agile development process and ensure that not
              to run over time. Talk to our experts immediately to receive a
              quote and a time and effort estimate for finishing your GraphQL
              project.
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ borderRadius: "14px", marginBlock: ".8rem" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ fontSize: "24px" }}
            >
              Is GraphQL front-end or back-end?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              It is a query language that can be implemented on both the client
              and server sides. GraphQL can improve the performance and
              functionality of both front-end and back-end applications.
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ borderRadius: "14px", marginBlock: ".8rem" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ fontSize: "24px" }}
            >
              What are the popular companies that use GraphQL?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              Many companies use GraphQL for its efficient development features.
              Few of the leading companies that have used GraphQL in their tech
              stack are as follows:
              <ul>
                <li style={{ paddingBlock: ".2rem", fontSize: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "12px" }} /> Facebook
                </li>
                <li style={{ paddingBlock: ".2rem", fontSize: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "12px" }} /> Shopify
                </li>
                <li style={{ paddingBlock: ".2rem", fontSize: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "12px" }} /> Instagram
                </li>

                <li style={{ paddingBlock: ".2rem", fontSize: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "12px" }} /> Twitter
                </li>

                <li style={{ paddingBlock: ".2rem", fontSize: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "12px" }} />
                  GitHub
                </li>

                <li style={{ paddingBlock: ".2rem", fontSize: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "12px" }} /> The New
                  York Times
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
              Will GraphQL help create an omnichannel experience?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              Yes! Frontend apps can be integrated with back-end services with
              APIs created using GraphQL. These APIs will help developers expose
              data conveniently. GraphQL will fetch the data from various
              sources through a query, thus promoting seamless device
              collaboration to create an omnichannel experience.
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ borderRadius: "14px", marginBlock: ".8rem" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ fontSize: "24px" }}
            >
              What is the estimated cost of developing a GraphQL Application?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              There are multiple factors that influence the cost of GraphQL
              development. To obtain an estimated development cost, contact us
              with your project requirements, and we will provide you with a
              quote.
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
          Hire a top GraphQL Development Team
        </h1>
        <p style={{ fontSize: "22px" }}>
          Gain the Advantage with the GraphQL Development
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

export default GraphSQlTechnoligy;
