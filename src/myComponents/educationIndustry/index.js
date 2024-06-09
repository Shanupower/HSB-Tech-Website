/* eslint-disable jsx-a11y/img-redundant-alt */
import { Component, useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Typography from "@mui/material/Typography";

import manufacturingImage from "../../assets/Picture16.png";
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
    Educational App Development Services
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

const EducationIndustry = () => {
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
            style={{ marginTop: "3.2rem", fontSize: isMd ? " 30px" : "48px" }}
          >
            Educational App Development Services
          </h1>
          <p
            className="sectionDescription"
            style={{ fontSize: "20px", marginTop: "2rem" }}
          >
            Give an immersive learning experience with our dynamic and intuitive
            educational development services. By blending education with
            innovative technology, we promote limitless learning that opens new
            horizons for students and trainees. Leverage our cost-effective
            solutions to make the learning process enjoyable.
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
              bottom: "25%",
              width: "360px",
              height: "230px",
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
          In this fast moving digital world, it is imperative for everyone to
          keep themselves updated in their profession, learning, skills, and
          job. The global workforce seeks skilled and updated professionals to
          fulfill the demands of technically advanced social movement. Our
          technical-enabled educational IT solutions are preferred by recognized
          technology-driven universities.
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
              University & School Management
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              IT solutions for universities and schools enable them with
              day-to-day management, track student performances, perform
              continuous analysis and appraisals, etc, so that it shall benefit
              overall progress of the student.
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
              Interactive eLearning Solutions
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              Interactive eLearning Apps for students of all classes takes them
              a step ahead from the typical traditional classroom methodology to
              inclusive learning.
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
              Education Website
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              We build the best responsive educational websites. Our education
              developers are well versed with complex CMS and help your business
              survive in the competitive world.
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
              Live Digital Classroom
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              Educational live stream sessions for your students in the form of
              digital classroom or create recorded sessions to host them on a
              sharing platform with students so that they can view at their
              convenience.
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
              Exams and Assessment
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              A comprehensive solution with support for creating, conducting,
              and evaluating the tests, it also provides insights to ensure
              continuous test processes by incorporating modern-day techniques
              like Cloud and Mobility.
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
              BI & Analytics
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              Business intelligence analytical solution for better informed
              decisions. Developing and enabling the Business Intelligence layer
              on top of transactional data generated, with integrated web and
              mobility support powered by BI & Analytics.
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
          Why Hire HSB As Your Educational App Development Company?
        </h1>
        <p className="sectionSubHeading" style={{ fontSize: "22px" }}>
          HSB as an eLearning software development company offer comprehensive
          solutions to enhance and maintain the support systems of educational
          institutions and universities.
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
              Blended Learning
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              Due to the influence of internet in education sector, blended
              learning can be achieved easily. Students through online
              classrooms and accessible virtual environments can share ideas and
              collaborate with like-minded students comfortably.
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
              Easy Progress Tracking
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              Through eLearning it is possible to organize tests after every
              course and track grading and participant performance easily. Using
              trend analysis, the examination and grading systems are evaluated
              and displays results instantly. Trainer feedback incorporated
              online allows personalized, introspective assessments.
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
              Comprehensive Learning
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              The classroom learning is getting restricted to limited resources
              and knowledge. A digital learning platform allows students to
              explore and learn exponentially. The millennial student powered by
              technology becomes an active participant in the education cycle.
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
              Genres of Education
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              The education industry is rising to the various genres where it is
              easy to plugin with the technology, combined with the willingness
              of educational institutions to adapt to innovative learning
              mechanisms.
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
              Affordable with High Returns
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              ELearning system is cost-effective when you consider bringing more
              number of the number of learners that could participate
              simultaneously. The platform require routine maintenance and
              upgrades to the system, however, it is still less costly as
              compared to daily human involvement in the training landscape.
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
          Few Modules for Your Custom Educational App
        </h1>
        <p className="sectionSubHeading" style={{ fontSize: "22px" }}>
          We can build a wide range of educational modules specific to the
          requirements of an educational organization. Our educational experts
          and developers also make sure that all the modules and corresponding
          tech stacks work together perfectly.
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
            <p>Learning management system</p>
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
            <p>School management system</p>
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
            <p>Course selling app</p>
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
            <p>Educational portal development</p>
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
            <p>Self-learning app</p>
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
            <p>Student information system</p>
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
            <p>Corporate training app</p>
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
            <p>Mobile eLearning solutions</p>
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
            <p>eBooks library app</p>
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
            <p>Student progress tracking</p>
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
          Technologies and Tools We Use for Educational App Development Services
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
          Our Step-by-Step Process to Build the Outstanding Educational App
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
              Does HSB build ELearning apps for startups?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              Yes, we do. We collaborate with businesses of all sizes, including
              start-ups and large-scale organizations.
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ borderRadius: "14px", marginBlock: ".8rem" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ fontSize: "24px" }}
            >
              How much do eLearning app and software development cost?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              Determining the exact cost of eLearning app development can be
              assessed based on various factors such as size and features of the
              app. We suggest you to get in touch with us to get an approximate
              estimate of the development cost.
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ borderRadius: "14px", marginBlock: ".8rem" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ fontSize: "24px" }}
            >
              How custom eLearning solutions work?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              Here are a few ways in which custom eLearning solutions can work:
              <ul>
                <li style={{ paddingBlock: ".2rem", fontSize: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "12px" }} /> Ensuring
                  Provides personalized and tailored learning experience to each
                  individual learner.
                </li>
                <li style={{ paddingBlock: ".2rem", fontSize: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "12px" }} /> Ensuring
                  Offering content that is specifically targeted to the needs of
                  the organization.
                </li>
                <li style={{ paddingBlock: ".2rem", fontSize: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "12px" }} />{" "}
                  Incorporating institutional values, culture, and brand into
                  the learning experience.
                </li>
                <li style={{ paddingBlock: ".2rem", fontSize: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "12px" }} /> Offering
                  flexibility along with customization for more personalized
                  learning experience.
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
              I need a website for an educational institute that should also
              support online training. Can HSB help us in building one such
              eLearning website?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              Definitely. We can create a well-equipped eLearning website that
              can be used for training as well as for your overall operations of
              the educational institution.
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
          Connect us now to avail our Educational App Development Services
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

export default EducationIndustry;
