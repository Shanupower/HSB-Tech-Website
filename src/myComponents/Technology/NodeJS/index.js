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
import angular from "../../../assets/angular.webp"
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
import MongoDB from "../../../assets/icons/mongo.jfif";
import Postgres from "../../../assets/icons/Postgres.png";
import Mysql from "../../../assets/icons/Mysql.png";
import Prisma from "../../../assets/icons/Prisma.png";
import Mongoose from "../../../assets/icons/Mongoose.png";
import Github_Actions from "../../../assets/icons/Github_Actions.png";
import Jenkins from "../../../assets/icons/Jenkins.jfif";
import Gitlab from "../../../assets/icons/Gitlab.png";
import AWS_Pipeline from "../../../assets/icons/AWS_Pipeline.png";
import Bullrun from "../../../assets/icons/Bullrun.png";
import Jest from "../../../assets/icons/Jest.png";
import Mocha from "../../../assets/icons/Mocha.png";
import Cypress from "../../../assets/icons/Cypress.jfif";
import Forever from "../../../assets/icons/Forever.png";
import PM2 from "../../../assets/icons/PM2.png";
import Dockers from "../../../assets/icons/Dockers.png";
import Kubernets from "../../../assets/icons/Kubernets.png";

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
    Node.js Development Services
  </Typography>,
];

const FrontendStore = [
  {
    imageUrl: reactImage,
    name: "React",
  },
  {
    imageUrl: reactImage,
    name: "angular",
  },
  {
    imageUrl: flutterImage,
    name: " Vue.js",
  },
  {
    imageUrl: HtmlImage,
    name: "HTML",
  },
  {
    imageUrl: cssImage,
    name: "CSS",
  },
];

const Language = [
  {
    imageUrl: nodeJs,
    name: " TypeScript",
  },
  {
    imageUrl: javaScript,
    name: "Javascript",
  },
];
const Database = [
  {
    imageUrl: MongoDB,
    name: "MongoDB",
  },
  {
    imageUrl: Postgres,
    name: "Postgres",
  },
  {
    imageUrl: Mysql,
    name: " Mysql",
  },
];

const OMR = [
  {
    imageUrl: Prisma,
    name: "Prisma",
  },
  {
    imageUrl: Mongoose,
    name: " Mongoose",
  },
];
const CDPipelines = [
  {
    imageUrl: Github_Actions,
    name: "Github Actions",
  },
  {
    imageUrl: Jenkins,
    name: " Jenkins",
  },
  {
    imageUrl: Gitlab,
    name: "Gitlab",
  },
  {
    imageUrl: AWS_Pipeline,
    name: "AWS Pipeline",
  },
];

const Cron = [
  {
    imageUrl: Bullrun,
    name: "Bullrun",
  },
];
const Testing = [
  {
    imageUrl: Jest,
    name: "Jest",
  },
  {
    imageUrl: Mocha,
    name: "Mocha",
  },
  {
    imageUrl: Cypress,
    name: " Cypress",
  },
];
const Pub = [
  {
    imageUrl: Azure,
    name: "Azure",
  },
  {
    imageUrl: Azure,
    name: "Azure Pub-Sub",
  },
];
const ProcessManager = [
  {
    imageUrl: Forever,
    name: "Forever",
  },
  {
    imageUrl: PM2,
    name: "PM2",
  },
];
const Containers = [
  {
    imageUrl: Dockers,
    name: "Dockers",
  },
  {
    imageUrl: Kubernets,
    name: "  Kubernets",
  },
];
const CloudPlatform = [
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

const NodeJsTechnoligy = () => {
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
            Node.js Development Services
          </h1>
          <p
            className="sectionDescription"
            style={{ fontSize: "20px", marginTop: "2rem" }}
          >
            HSB takes pride in being the go-to choice for clients seeking
            top-notch Node.js development services on delivering the best
            possible outcomes. Partner with us to experience a seamless blend of
            innovation, performance, and user-centricity which we achieve by
            pushing the boundaries of innovation and excellence in the digital
            realm.
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
            Build Your Node.js Team Today
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
        )}{" "}
      </div>

      <div
        className="solutions section"
        style={{ paddingInline: isMd ? " 2rem" : " 18%" }}
      >
        <h1
          className="sectionHeading"
          style={{ fontSize: isMd ? " 30px" : "48px" }}
        >
          About Node.js
        </h1>
        <p className="sectionSubHeading" style={{ fontSize: "22px" }}>
          Node.js is a revolutionary platform that empowers developers to build
          unparalleled scalability and performance applications. The interface
          is designed create seamless app integrations, and has evolved into one
          of the most extensive multipurpose tools worldwide, boasting over 4
          million plus active users. When combined with ReactJS and Angular,
          Node.js offers comprehensive enterprise solutions that elevate
          end-user experiences and drive exceptional business growth.
        </p>
        <div>
            <h2>Benefits of Node.js</h2>
            <div style={{
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
            }}>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    width: "calc(100%/3 - 1rem)",
                    minWidth: "fit-content",
                    marginBottom: "2.4rem",
                }}>
                    <CheckCircleOutlineIcon style={{ color: "#1bd9c9", marginRight: "0.5rem" }} /> 
                    <p style={{ margin: 0 }}>Exceptional user experience</p>
                </div>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    width: "calc(100%/3 - 1rem)",
                    minWidth: "fit-content",
                    marginBottom: "2.4rem",
                }}>
                    <CheckCircleOutlineIcon style={{ color: "#1bd9c9", marginRight: "0.5rem" }} /> 
                    <p style={{ margin: 0 }}>Hassle-free server-side development</p>
                </div>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    width: "calc(100%/3 - 1rem)",
                    minWidth: "fit-content",
                    marginBottom: "2.4rem",
                }}>
                    <CheckCircleOutlineIcon style={{ color: "#1bd9c9", marginRight: "0.5rem" }} /> 
                    <p style={{ margin: 0 }}>Easy scalable for microservices</p>
                </div>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    width: "calc(100%/3 - 1rem)",
                    minWidth: "fit-content",
                }}>
                    <CheckCircleOutlineIcon style={{ color: "#1bd9c9", marginRight: "0.5rem" }} /> 
                    <p style={{ margin: 0 }}>Rich ecosystem of tools</p>
                </div>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    width: "calc(100%/3 - 1rem)",
                    minWidth: "fit-content",
                }}>
                    <CheckCircleOutlineIcon style={{ color: "#1bd9c9", marginRight: "0.5rem" }} /> 
                    <p style={{ margin: 0 }}>Highly customizable</p>
                </div>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    width: "calc(100%/3 - 1rem)",
                    minWidth: "fit-content",
                }}>
                    <CheckCircleOutlineIcon style={{ color: "#1bd9c9", marginRight: "0.5rem" }} /> 
                    <p style={{ margin: 0 }}>Support building cross</p>
                </div>
            </div>
        </div>
        <h2 style={{ marginTop: "2rem", fontSize: "24px" }}>
          Engage our skilled Node.js development team to construct powerful
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
          Build Your Node.js Application Today
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
          Our Node.js Development Services
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
              Custom Node.js Development
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              Our Node.js developers understand the discrete requirement of your
              business and therefore, develop tailored solutions which are
              scalable, secure, and high-performing. We build Node.js apps in
              accordance to your custom requirements, sizes, and complexity.
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
              Node.js API Integration and Development
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              Our Node.js developer develops robust, secure, scalable REST and
              JSON API as per your requirements. We also integrate your existing
              API with the existing technologies to enhance your application's
              performance technically.
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
              Node.js Plugin Development
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              We build and customize plugins and write the backend of your
              application in JavaScript. These customized plugins enables
              expansion and enhances performance regardless of the business
              size. Through tailored plugins new features and functionalities
              can be added to the application.
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
              Node.js Upgrade and Migration Services
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              Irrespective of the platforms being .Net, PHP, or JAVA, our
              Node.js developers have successfully migrated many applications to
              Node.js. The migration would be to eliminate specific issues of
              the existing platform or to increase the performance, scalability,
              and user experience.
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
              Node.js Maintenance and Support
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              HSB got you covered for every requirement related to Node.js. We
              undertake scaling, bug detection, code review, and performance
              issues to implementing web development best practices based on
              your project specifications and business vertical. We also provide
              both front-end and back-end maintenance and support services to
              regularly update, scale, and enhance the performance of your
              application.
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
          Tools We Use to Build Beautiful Node.js Apps
        </h1>
        <Box sx={{ width: "100%", marginTop: "2rem" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleTabChange}
              aria-label="basic tabs example"
            >
              <Tab
                label="Frontend Store / State Management"
                {...a11yProps(0)}
              />

              <Tab label="Language" {...a11yProps(1)} />
              <Tab label="Database" {...a11yProps(2)} />
              <Tab label="OMR" {...a11yProps(3)} />
              <Tab label="CI / CD Pipelines " {...a11yProps(4)} />
              <Tab label="Cron  " {...a11yProps(5)} />
              <Tab label="Testing " {...a11yProps(6)} />
              <Tab label="Pub/Sub " {...a11yProps(7)} />
              <Tab label="Process Manager" {...a11yProps(8)} />
              <Tab label="Containers " {...a11yProps(9)} />
              <Tab label="Cloud Platform " {...a11yProps(10)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <div className="technlogiesContainer-technology">
              {FrontendStore.map((eachItem) => (
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
              {Language.map((eachItem) => (
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
              {Database.map((eachItem) => (
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
              {OMR.map((eachItem) => (
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
              {CDPipelines.map((eachItem) => (
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
              {Cron.map((eachItem) => (
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
          <CustomTabPanel value={value} index={7}>
            <div className="technlogiesContainer-technology">
              {Pub.map((eachItem) => (
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
          <CustomTabPanel value={value} index={8}>
            <div className="technlogiesContainer-technology">
              {ProcessManager.map((eachItem) => (
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
          <CustomTabPanel value={value} index={9}>
            <div className="technlogiesContainer-technology">
              {Containers.map((eachItem) => (
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
          <CustomTabPanel value={value} index={10}>
            <div className="technlogiesContainer-technology">
              {CloudPlatform.map((eachItem) => (
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
              How long does it take to develop a DevOps project?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              The duration required to develop a DevOps project usually depends
              on the complexity and size of the project. Traditionally, it could
              take several months or even a year or more.
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ borderRadius: "14px", marginBlock: ".8rem" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ fontSize: "24px" }}
            >
              How much does it cost to hire DevOps engineers?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              Getting the expertise of DevOps developers might rest upon the
              factors like location, experience, and the requisites posed by the
              client. Hence, a systematic review of project needs and choices is
              paramount to make a decision to induct the DevOps team.
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ borderRadius: "14px", marginBlock: ".8rem" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ fontSize: "24px" }}
            >
              What are the benefits of DevOps consulting services?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              DevOps consulting services presents amplified collaboration among
              the organization's diverse teams, an augmented capacity for
              scalability and adaptability, and enhanced safeguarding of
              security, stability, and dependability, coupled with an
              accelerated journey to market manifestation.
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
          Hire a top Node.js Development Team
        </h1>
        <p style={{ fontSize: "22px" }}>
          Gain the Advantage with the Node.js Development
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

export default NodeJsTechnoligy;
