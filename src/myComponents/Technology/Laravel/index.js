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
import MongoDB from "../../../assets/icons/mongo.jfif";
import Postgres from "../../../assets/icons/Postgres.png";
import Mysql from "../../../assets/icons/Mysql.png";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import "./index.css";
import { useMediaQuery } from "@mui/material";
import Footer from "../../footer";
import Navigationbar from "../../navigationBar";
import Github_Actions from "../../../assets/icons/Github_Actions.png";
import Jenkins from "../../../assets/icons/Jenkins.jfif";
import Gitlab from "../../../assets/icons/Gitlab.png";
import Bullrun from "../../../assets/icons/Bullrun.png";
import Jest from "../../../assets/icons/Jest.png";
import Mocha from "../../../assets/icons/Mocha.png";
import Cypress from "../../../assets/icons/Cypress.jfif";
import AWS_Pipeline from "../../../assets/icons/AWS_Pipeline.png";
import Dockers from "../../../assets/icons/Dockers.png";
import Kubernets from "../../../assets/icons/Kubernets.png";
import Forever from "../../../assets/icons/Forever.png";
import PM2 from "../../../assets/icons/PM2.png";

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
    Laravel Development Services
  </Typography>,
];

const Pipelines = [
  {
    imageUrl: Github_Actions,
    name: "Github Actions",
  },
  {
    imageUrl: Jenkins,
    name: "Jenkins",
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

const OMR = [];
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
    name: "Mysql",
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
    name: "Cypress",
  },
];

const Containers = [
  {
    imageUrl: Dockers,
    name: "Dockers",
  },
  {
    imageUrl: Kubernets,
    name: " Kubernets",
  },
];
const Process = [
  {
    imageUrl: Forever,
    name: "Forever",
  },
  {
    imageUrl: PM2,
    name: "PM2",
  },
];
const Platform = [
  {
    imageUrl: AWS,
    name: "AWS",
  },
  {
    imageUrl: Azure,
    name: "Azure",
  },
];
const Pub = [
  {
    imageUrl: Azure,
    name: "Azure",
  },
  {
    imageUrl: Azure,
    name: "Azure Pub-Sub ",
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

const LaravelTechnoligy = () => {
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
            Laravel Development Services
          </h1>
          <p
            className="sectionDescription"
            style={{ fontSize: "20px", marginTop: "2rem" }}
          >
            Laravel is a powerful PHP framework based on MVC
            (Model-View-Controller) architecture which is used to develop
            complex Web Applications. Laravel helps a developer in developing a
            secure web application with scalable framework that provides
            structure and starting point for creating your application. It helps
            to provide an amazing developer experience while providing powerful
            features through dependency. Laravel is a Full Stack Framework,
            Which helps a developer create Full Stack Applications.
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
          About Laravel
        </h1>
        <p className="sectionSubHeading" style={{ fontSize: "22px" }}>
          Channel the power of the Laravel framework with the help of the
          best-in-class Laravel development company – SPEC India. Partner with
          us to leverage our dedicated team of motivated, highly skilled, and
          extensively experienced Laravel developers to develop complex,
          scalable, enterprise-grade, web, and app solutions.
        </p>
        <h2>Benefits of Laravel</h2>
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
              minWidth: "fit-content",
              marginBottom: "2.4rem",
            }}
          >
            <CheckCircleOutlineIcon style={{ color: "#1bd9c9", marginRight: "0.5rem" }} /> Highly
            secure PHP framework
          </p>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              width: "calc(100%/3 - 1rem)",
              minWidth: "fit-content",
              marginBottom: "2.4rem",
            }}
          >
            <CheckCircleOutlineIcon style={{ color: "#1bd9c9", marginRight: "0.5rem" }} />
            MVC based PHP framework
          </p>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              width: "calc(100%/3 - 1rem)",
              minWidth: "fit-content",
              marginBottom: "2.4rem",
            }}
          >
            <CheckCircleOutlineIcon style={{ color: "#1bd9c9", marginRight: "0.5rem" }} /> Efficient
            queuing system for excellent traffic management
          </p>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              width: "calc(100%/3 - 1rem)",
              minWidth: "fit-content",
              marginBottom: "2.4rem",
            }}
          >
            <CheckCircleOutlineIcon style={{ color: "#1bd9c9", marginRight: "0.5rem" }} /> Flexibility
            to build advanced features
          </p>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              width: "calc(100%/3 - 1rem)",
              minWidth: "fit-content",
              marginBottom: "2.4rem",
            }}
          >
            <CheckCircleOutlineIcon style={{ color: "#1bd9c9", marginRight: "0.5rem" }} /> Easy third
            party integrations
          </p>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              width: "calc(100%/3 - 1rem)",
              minWidth: "fit-content",
              marginBottom: "2.4rem",
            }}
          >
            <CheckCircleOutlineIcon style={{ color: "#1bd9c9", marginRight: "0.5rem" }} /> Easy unit
            testing
          </p>
        </div>
        <h2 style={{ marginTop: "2rem", fontSize: "24px" }}>
          Engage our skilled Laravel development team to unleash the potential
          of well developed website or web app.
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
          Build Your Laravel Application Today
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
          Our Laravel Development Services
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
              Custom Laravel Development
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              Hire our Laravel development services for personalized themes and
              customized solutions for brand-conscious businesses. We ensure to
              incorporate customized design, functionalities, RESTful APIs,
              dashboards, and more in your Laravel app and website. We help you
              in multiplying your ROI without compromising the top-notch
              personalized user experience.
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
              Laravel Enterprise Development
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              We employ state-of-the-art technology with our Laravel skilled
              developers’ to assure best-in-class real-time enterprise-grade
              apps and web development. Laravel also empowers developers to
              assure the security of large and complex apps and websites.
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
              Laravel Web Development
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              Our Laravel developers build scalable, feature-enrich, secure, and
              high-performance websites and web apps with a speedy development
              process assuring on-time delivery of the project. The MVC
              architecture allows developers to save time, effort, and money
              without compromising the quality or performance of your custom
              website or web application.
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
              Laravel E-Commerce App Development
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              Thinking of e-commerce solutions with Laravel? We ensure to
              provide you with flexible solutions which offer higher user
              engagement, high-quality UI design, fast loading, ease of
              navigation, security, and performance while optimizing your
              eCommerce for mobile devices to provide your users with extended
              access.
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
              Laravel Migration and Upgradation
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              Leverage Laravel’s built-in database migration system to migrate
              your data of existing database from current technology to Laravel
              framework or to upgrade to the latest version of Laravel
              framework. Migrating to Laravel would accelerate database
              synchronization along with increased developer performance.
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
          Tools We Use to Build Laravel Apps
        </h1>
        <h5>Frontend Store / State Management –</h5>

        <Box sx={{ width: "100%", marginTop: "2rem" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleTabChange}
              aria-label="basic tabs example"
            >
              <Tab label="Database " {...a11yProps(0)} />
              <Tab label="OMR " {...a11yProps(2)} />

              <Tab label="CI / CD Pipelines" {...a11yProps(1)} />
              <Tab label="Testing   " {...a11yProps(3)} />

              <Tab label="Cron  " {...a11yProps(4)} />
              <Tab label="Pub/Sub   " {...a11yProps(5)} />
              <Tab label="Process Manager   " {...a11yProps(6)} />
              <Tab label="Containers    " {...a11yProps(7)} />
              <Tab label="Cloud Platform   " {...a11yProps(8)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
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

          <CustomTabPanel value={value} index={1} style={{ marginTop: "2rem" }}>
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
          <CustomTabPanel value={value} index={2}>
            <div className="technlogiesContainer-technology">
              {Pipelines.map((eachItem) => (
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
          <CustomTabPanel value={value} index={4}>
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
          <CustomTabPanel value={value} index={5}>
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
          <CustomTabPanel value={value} index={6}>
            <div className="technlogiesContainer-technology">
              {Process.map((eachItem) => (
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
          <CustomTabPanel value={value} index={8}>
            <div className="technlogiesContainer-technology">
              {Platform.map((eachItem) => (
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
              Can Laravel be used for scalable application development?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              Yes, a developer can use Laravel for scalable application
              development.
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ borderRadius: "14px", marginBlock: ".8rem" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ fontSize: "24px" }}
            >
              Is Laravel considered for back-end or front-end development?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              Laravel is a back-end framework, hence is used for back-end
              development. For front-end development, you can leverage PHP, Vue,
              or even React.
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ borderRadius: "14px", marginBlock: ".8rem" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ fontSize: "24px" }}
            >
              Do you offer custom Laravel development services?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              Yes, we offer custom Laravel development services. With a team of
              dedicated Laravel developers having years of experience, we offer
              custom Laravel development solutions according to your business
              requirements.
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ borderRadius: "14px", marginBlock: ".8rem" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ fontSize: "24px" }}
            >
              How long does it take to build a Laravel website?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              We cannot assess accurate time duration to build a Laravel
              website. However, an approximate timeline can be estimated
              depending on numerous factors affecting the time developer takes
              to develop a Laravel application or website like design
              complexity, features, functionalities, testing, and more.
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ borderRadius: "14px", marginBlock: ".8rem" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ fontSize: "24px" }}
            >
              How much would it cost to develop a Laravel website?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              There are numerous factors that contribute to the cost of
              development of Laravel website. These factors can be considered as
              size of the website, type of website, the platform used,
              development time duration, developer’s experience, number of
              resources, engagement model of hiring the resource,
              complexity/number of functionalities/features, custom development
              requirements, and even the country/region of the resource your
              hire.
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
          Hire an Efficient Laravel Development Team
        </h1>
        <p style={{ fontSize: "22px" }}>
          Gain the Advantage with the Laravel Development
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

export default LaravelTechnoligy;
