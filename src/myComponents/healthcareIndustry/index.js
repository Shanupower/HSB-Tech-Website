/* eslint-disable jsx-a11y/img-redundant-alt */
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
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AWS from "../../assets/icons/images.png";
import Azure from "../../assets/icons/download.png";

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import "./index.css";
import { useMediaQuery } from "@mui/material";
import Footer from "../footer";
import { useState } from "react";

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
    Healthcare App Development Services
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

const HealthcareIndustry = () => {
  const isMd = useMediaQuery("(max-width:1068px)");
  const [value, setValue] = useState(0);
  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="industriesPageContainer">
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
            Healthcare App Development Services
          </h1>
          <p
            className="sectionDescription"
            style={{ fontSize: "20px", marginTop: "2rem" }}
          >
            As an expert software development company, we offer best-in-class
            custom Healthcare IT services and Healthcare software services. Our
            customized software solution integrates a wide range of
            health-related activities that are easy to operate, swift in
            performance, and efficient in deliverance. Our niche healthcare
            solutions aim towards providing near real-time information,
            operative and clear prominence across stakeholders.
          </p>
          <button
            className="getQuoteButton industries-getQuoteButton"
            type="button"
            style={{ padding: ".8rem 0", fontSize: "20px" }}
          >
            GET QUOTE
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
          We have the potential to build high-quality mobile apps offering
          outstanding experience to the patients, doctors, employees, and all
          concerned. Through our healthcare IT solutions we aim to help
          hospitals, pharmacies, laboratories, and clinics overcome the
          challenges that come their way, enhancing their business profitability
          and productivity.
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
              Hospital Management Systems
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              A web app to automate all operations of hospital/clinic, beginning
              from registering a patient to report generation and collection and
              more. It facilitates smooth operations on daily basis and provides
              the best insight.
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
              Automation
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              Improve operational efficiency and reduce cost by implementing
              robotic process automation and chatbots for member enrollments,
              prior authorizations and customer service activities.
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
              Enterprise Mobility
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              Healthcare enterprise mobile apps are highly effective to increase
              performance. The mobility apps delivers efficacy in checking
              medical history, symptoms, and references.
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
              Wellness App
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              A wellness app based on healthcare and wellness that includes a
              weight management program for your users to stay fit and healthy.
              An application for home care and aged care agencies to plan and
              manage care plans for patients and track and manage caretakers.
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
              EHR and EMR Solutions
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              Our EHR (Electronic Health Record) and EMR (Electronic Medical
              Record) are advance solutions to improve patients’ care and track
              patient data management workflows.
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
              Pharma Application
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              We build IT solutions specific to Pharma with the latest features
              such as medication management, ordering, tracking of orders, and
              payment to merchants. We also build apps for admins of pharma
              businesses.
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
          Why Hire HSB As Your Healthcare App Development Company?
        </h1>
        <p className="sectionSubHeading" style={{ fontSize: "22px" }}>
          As an advanced healthcare app development company, we help the
          healthcare sector evolve and perform better. Our ample experience in
          custom solutions has enabled us to develop smart, agile, and
          functional solutions for our clients.
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
              Improved Treatments
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              Healthcare solutions provide access to all the real-time
              information which assists to make well-informed decisions. It
              helps in understanding the effectiveness of a specific care
              therapy and its review so that a better treatment can be offered
              in the stipulated time.
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
              Drug Management
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              By leveraging the real-time data, healthcare can predict the
              consumption based on the existing trend, analyse the medical
              requirements of regular patients, and maintaining their inventory
              accordingly.
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
              Reduced Cost
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              Using online healthcare IT systems, patients can save on hospital
              visits which will also benefit hospital management in maintain the
              facilities at the hospital. The patients can be monitored
              virtually, thereby, reducing the operational cost of the hospital.
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
              Enhanced Patient Experience
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              The healthcare system creates an environment that caters to the
              patient’s requirements. Through the digital history records the
              treatment options, procedures and current medical condition help
              provide a better patient experience.
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
              HIPAA Compliant
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              Our team consists of experts in the healthcare space that
              understand the HIPAA norms and related legalities. Hence, we
              create apps that adhere to these regulations to the maximum
              accuracy.
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
          Few Modules for Your Custom Healthcare App
        </h1>
        <p className="sectionSubHeading" style={{ fontSize: "22px" }}>
          We can build a wide range of healthcare modules specific to the
          requirements of a healthcare organization. Our certified healthcare
          experts and developers also make sure that all the modules and
          corresponding tech stacks work together perfectly.
        </p>

        <div
          className="moduleItems-industries"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.4rem",
          }}
        >
          <div
            className="moduleItem"
            style={{
              padding: "1rem 2rem",
              borderRadius: "10px",
              boxShadow: " 0 4px 12px #080a0d0d, 0 8px 16px #080a0d0d",
              backgroundColor: "#f4f4f4",
              display: "flex",
              alignItems: "center",
              minWidth: "fit-content",
              width: "30%",
            }}
          >
            <FaArrowRight className="moduleItemBullet" />
            <p>EHR/EMR </p>
          </div>
          <div
            className="moduleItem"
            style={{
              padding: "1rem 2rem",
              borderRadius: "10px",
              boxShadow: " 0 4px 12px #080a0d0d, 0 8px 16px #080a0d0d",
              backgroundColor: "#f4f4f4",
              display: "flex",
              alignItems: "center",
              minWidth: "fit-content",
              width: "30%",
            }}
          >
            <FaArrowRight className="moduleItemBullet" />
            <p>Pharmacy app</p>
          </div>
          <div
            className="moduleItem"
            style={{
              padding: "1rem 2rem",
              borderRadius: "10px",
              boxShadow: " 0 4px 12px #080a0d0d, 0 8px 16px #080a0d0d",
              backgroundColor: "#f4f4f4",
              display: "flex",
              alignItems: "center",
              minWidth: "fit-content",
              width: "30%",
            }}
          >
            <FaArrowRight className="moduleItemBullet" />
            <p>Health and wellness app</p>
          </div>
          <div
            className="moduleItem"
            style={{
              padding: "1rem 2rem",
              borderRadius: "10px",
              boxShadow: " 0 4px 12px #080a0d0d, 0 8px 16px #080a0d0d",
              backgroundColor: "#f4f4f4",
              display: "flex",
              alignItems: "center",
              minWidth: "fit-content",
              width: "30%",
            }}
          >
            <FaArrowRight className="moduleItemBullet" />
            <p>Healthcare updates and mental wellness practices</p>
          </div>
          <div
            className="moduleItem"
            style={{
              padding: "1rem 2rem",
              borderRadius: "10px",
              boxShadow: " 0 4px 12px #080a0d0d, 0 8px 16px #080a0d0d",
              backgroundColor: "#f4f4f4",
              display: "flex",
              alignItems: "center",
              minWidth: "fit-content",
              width: "30%",
            }}
          >
            <FaArrowRight className="moduleItemBullet" />
            <p>Telemedicine</p>
          </div>
          <div
            className="moduleItem"
            style={{
              padding: "1rem 2rem",
              borderRadius: "10px",
              boxShadow: " 0 4px 12px #080a0d0d, 0 8px 16px #080a0d0d",
              backgroundColor: "#f4f4f4",
              display: "flex",
              alignItems: "center",
              minWidth: "fit-content",
              width: "30%",
            }}
          >
            <FaArrowRight className="moduleItemBullet" />
            <p>Doctor dashboards</p>
          </div>
          <div
            className="moduleItem"
            style={{
              padding: "1rem 2rem",
              borderRadius: "10px",
              boxShadow: " 0 4px 12px #080a0d0d, 0 8px 16px #080a0d0d",
              backgroundColor: "#f4f4f4",
              display: "flex",
              alignItems: "center",
              minWidth: "fit-content",
              width: "30%",
            }}
          >
            <FaArrowRight className="moduleItemBullet" />
            <p>Billing and payments</p>
          </div>
          <div
            className="moduleItem"
            style={{
              padding: "1rem 2rem",
              borderRadius: "10px",
              boxShadow: " 0 4px 12px #080a0d0d, 0 8px 16px #080a0d0d",
              backgroundColor: "#f4f4f4",
              display: "flex",
              alignItems: "center",
              minWidth: "fit-content",
              width: "30%",
            }}
          >
            <FaArrowRight className="moduleItemBullet" />
            <p>Learning management</p>
          </div>
          <div
            className="moduleItem"
            style={{
              padding: "1rem 2rem",
              borderRadius: "10px",
              boxShadow: " 0 4px 12px #080a0d0d, 0 8px 16px #080a0d0d",
              backgroundColor: "#f4f4f4",
              display: "flex",
              alignItems: "center",
              minWidth: "fit-content",
              width: "30%",
            }}
          >
            <FaArrowRight className="moduleItemBullet" />
            <p>Clinic assistance app</p>
          </div>
          <div
            className="moduleItem"
            style={{
              padding: "1rem 2rem",
              borderRadius: "10px",
              boxShadow: " 0 4px 12px #080a0d0d, 0 8px 16px #080a0d0d",
              backgroundColor: "#f4f4f4",
              display: "flex",
              alignItems: "center",
              minWidth: "fit-content",
              width: "30%",
            }}
          >
            <FaArrowRight className="moduleItemBullet" />
            <p>Analytics and reports</p>
          </div>

          <div
            className="moduleItem"
            style={{
              padding: "1rem 2rem",
              borderRadius: "10px",
              boxShadow: " 0 4px 12px #080a0d0d, 0 8px 16px #080a0d0d",
              backgroundColor: "#f4f4f4",
              display: "flex",
              alignItems: "center",
              minWidth: "fit-content",
              width: "30%",
            }}
          >
            <FaArrowRight className="moduleItemBullet" />
            <p>Workflow management</p>
          </div>
          <div
            className="moduleItem"
            style={{
              padding: "1rem 2rem",
              borderRadius: "10px",
              boxShadow: " 0 4px 12px #080a0d0d, 0 8px 16px #080a0d0d",
              backgroundColor: "#f4f4f4",
              display: "flex",
              alignItems: "center",
              minWidth: "fit-content",
              width: "30%",
            }}
          >
            <FaArrowRight className="moduleItemBullet" />
            <p>Documentation and integration</p>
          </div>
          <div
            className="moduleItem"
            style={{
              padding: "1rem 2rem",
              borderRadius: "10px",
              boxShadow: " 0 4px 12px #080a0d0d, 0 8px 16px #080a0d0d",
              backgroundColor: "#f4f4f4",
              display: "flex",
              alignItems: "center",
              minWidth: "fit-content",
              width: "30%",
            }}
          >
            <FaArrowRight className="moduleItemBullet" />
            <p>Equipment and asset tracking</p>
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
          Technologies and Tools We Use for Healthcare App Development Services
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
          Our Step-by-Step Process to Build the Outstanding Healthcare App
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
          <p>Ensuring compliance with healthcare regulations </p>
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
              What are the benefits of having a healthcare app?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              The benefits of healthcare app development include:
              <ul>
                <li style={{ paddingBlock: ".2rem", fontSize: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "12px" }} /> Mobile
                  Improved patient outcomes
                </li>
                <li style={{ paddingBlock: ".2rem", fontSize: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "12px" }} /> Order
                  Enhanced patient experience
                </li>
                <li style={{ paddingBlock: ".2rem", fontSize: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "12px" }} /> Payment
                  Reduced healthcare costs
                </li>

                <li style={{ paddingBlock: ".2rem", fontSize: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "12px" }} /> Mobile
                  Increased access to healthcare services
                </li>

                <li style={{ paddingBlock: ".2rem", fontSize: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "12px" }} /> Lending
                  Better medication management
                </li>

                <li style={{ paddingBlock: ".2rem", fontSize: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "12px" }} /> The cost
                  Increased patient engagement
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
              What are some important considerations when developing a
              healthcare app?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              Few of the important considerations to build a healthcare app
              include –
              <ul>
                <li style={{ paddingBlock: ".2rem", fontSize: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "12px" }} /> Ensuring
                  compliance with regulations such as HIPAA
                </li>
                <li style={{ paddingBlock: ".2rem", fontSize: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "12px" }} /> Ensuring
                  the app is secure and protects user data
                </li>
                <li style={{ paddingBlock: ".2rem", fontSize: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "12px" }} /> Designing
                  a user-friendly interface
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
              How can I ensure that my healthcare app is HIPAA compliant?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              To ensure that your healthcare app is HIPAA compliant, you should
              conduct a thorough risk assessment, implement appropriate
              administrative, physical, and technical safeguards, and ensure
              that any third-party vendors you work with are also HIPAA
              compliant. You should also have a signed Business Associate
              Agreement (BAA) with any vendors who have access to protected
              health information.
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ borderRadius: "14px", marginBlock: ".8rem" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ fontSize: "24px" }}
            >
              How long does it take to develop a healthcare app?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              The time it takes to develop a healthcare app depends on several
              factors, such as complexity of the app, features required,
              platform on which app should be developed, and the development
              team's experience. For appropriate duration and cost of developing
              a healthcare app, please contact us.
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
          Connect us now to avail our Healthcare app development services
        </h1>
        <button className="letsTalkButton slideRight" type="button">
          GET QUOTE
          <FaArrowRight className="rightArrow" />
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default HealthcareIndustry;
