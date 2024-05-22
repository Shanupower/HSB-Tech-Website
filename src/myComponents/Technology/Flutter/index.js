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
    Flutter Development Services
  </Typography>,
];

const DevelopmentTools = [
  {
    imageUrl: reactImage,
    name: "VS Code",
  },
  {
    imageUrl: reactImage,
    name: " Dart Dev Tools",
  },
];

const Analytics = [
  {
    imageUrl: nodeJs,
    name: "Google Analytics",
  },
  {
    imageUrl: javaScript,
    name: "Amplitude",
  },
  {
    imageUrl: goLang,
    name: "Adobe analytics",
  },
];
const FrontendStore = [
  {
    imageUrl: AWS,
    name: "Providers",
  },
  {
    imageUrl: Azure,
    name: " Business Logic Components (BLoC)",
  },
];

const NotificationService = [
  {
    imageUrl: AWS,
    name: " Cloud Messaging",
  },
  {
    imageUrl: Azure,
    name: "One Signal",
  },
];
const CDTools = [
  {
    imageUrl: AWS,
    name: "Bitrise",
  },
  {
    imageUrl: Azure,
    name: "Code Magic",
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
const CrashReporting = [
  {
    imageUrl: AWS,
    name: "Firebase Crashlytics",
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

const FlutterTechnoligy = () => {
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
            Flutter Development Services
          </h1>
          <p
            className="sectionDescription"
            style={{ fontSize: "20px", marginTop: "2rem" }}
          >
            We are a prominent software development company to provide Flutter
            app development services to create highly functional, advanced
            applications that aligns your business processes. Our skilled
            Flutter team is capable of creating business-ready applications with
            an attractive and high-quality user interface.
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
            Build Your Flutter Team Today
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
          About Flutter
        </h1>
        <p className="sectionSubHeading" style={{ fontSize: "22px" }}>
          Flutter is an open-source UI framework powered by Google. It is
          commonly considered in building native-like, flexible, and
          graphically-enhanced cross-platform apps for web, mobile, and desktop
          using a single codebase.
        </p>
        <h2>Benefits of Flutter</h2>
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
              minWidth: "fit-content",
              marginBottom: "2.4rem",
            }}
          >
            <CheckCircleOutlineIcon style={{ color: "#1bd9c9" }} />{" "}
            Cross-platform development framework
          </p>
          <p
            style={{
              fontSize: "20px",
              width: "calc(100%/3 - 1rem)",
              minWidth: "fit-content",
              marginBottom: "2.4rem",
            }}
          >
            <CheckCircleOutlineIcon style={{ color: "#1bd9c9" }} /> Same UI and
            business logic in all platforms
          </p>
          <p
            style={{
              fontSize: "20px",
              width: "calc(100%/3 - 1rem)",
              minWidth: "fit-content",
              marginBottom: "2.4rem",
            }}
          >
            <CheckCircleOutlineIcon style={{ color: "#1bd9c9" }} /> “Hot reload”
            feature for fast development
          </p>
          <p
            style={{
              fontSize: "20px",
              width: "calc(100%/3 - 1rem)",
              minWidth: "fit-content",
            }}
          >
            <CheckCircleOutlineIcon style={{ color: "#1bd9c9" }} /> Highly
            customizable UI design
          </p>
          <p
            style={{
              fontSize: "20px",
              width: "calc(100%/3 - 1rem)",
              minWidth: "fit-content",
            }}
          >
            <CheckCircleOutlineIcon style={{ color: "#1bd9c9" }} /> Access to
            native features
          </p>

          <p
            style={{
              fontSize: "20px",
              width: "calc(100%/3 - 1rem)",
              minWidth: "fit-content",
            }}
          >
            <CheckCircleOutlineIcon style={{ color: "#1bd9c9" }} />
            Accessible publicly
          </p>
        </div>
        <h2 style={{ marginTop: "2rem", fontSize: "24px" }}>
          Engage our skilled Flutter development team to construct powerful
          cross-platform development applications, unified with your preferred
          front-end framework.
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
          Build Your Flutter Application Today
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
          Our Flutter Development Services
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
              Flutter Consulting
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              Our Flutter development team helps you in drafting the best
              roadmap and methodology for your project. We evaluate existing
              setup in comparison to your requirement, and recommend a tailored
              Flutter application as a solution. Through our consulting
              services, you can leverage the benefits of Flutter, its
              architecture, and technical stack.
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
              Flutter App Design
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              Our UI/UX designers create visually appealing, easy-to-navigate,
              user-friendly interfaces that are robust, and faster in
              performance. By making the most of modern-day tools and
              techniques, our team delivers a flexible output.
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
              Flutter App Development
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              Using the Flutter technology stack, we develop cross-platform,
              advance and native apps, as well as enterprise apps. Our
              developers are skilled and experienced to develop secure,
              scalable, and multi-platform mobile and web applications for
              various industry segments.
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
              Flutter App Migration
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              Out dedicated Flutter skilled team can help you in migrating your
              current interface to Flutter. We can also upgrade your existing
              Flutter interface to the latest version of Flutter to experience
              better performance and security, with seamless experience.
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
              Flutter App Support Maintenance
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              Ensuring continuous support and maintenance for the smooth
              execution of your Flutter apps is our forte. Our specialized team
              of experts monitors your applications dedicatedly to assure timely
              technical aid and less breakdown of the app.
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
          Tools We Use to Build Flutter Apps
        </h1>
        <Box sx={{ width: "100%", marginTop: "2rem" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              <Tab
                label="Frontend Store / State Management"
                {...a11yProps(0)}
              />

              <Tab label="Build/Development tools" {...a11yProps(1)} />
              <Tab label="Analytics" {...a11yProps(2)} />
              <Tab label="Notification Services" {...a11yProps(3)} />
              <Tab label="CI / CD Deployment Tools " {...a11yProps(4)} />
              <Tab label="Testing " {...a11yProps(5)} />
              <Tab label="Crash Reporting " {...a11yProps(6)} />
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
              {DevelopmentTools.map((eachItem) => (
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
          <CustomTabPanel value={value} index={3}>
            <div className="technlogiesContainer-technology">
              {NotificationService.map((eachItem) => (
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
              {CDTools.map((eachItem) => (
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
          <CustomTabPanel value={value} index={6}>
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
              Is Flutter good for app development?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              Flutter is the Google’s fastest-growing framework from to create
              apps for almost any platform. It allows developers to create a
              beautiful, fast, and secure app for mobile, web, and desktop from
              a single codebase.
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ borderRadius: "14px", marginBlock: ".8rem" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ fontSize: "24px" }}
            >
              What Apps Are Made With Flutter?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              The popular apps built with Flutter are –
              <ul>
                <li style={{ paddingBlock: ".2rem", fontSize: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "12px" }} /> Reflectly
                </li>
                <li style={{ paddingBlock: ".2rem", fontSize: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "12px" }} /> Google Pay
                </li>
                <li style={{ paddingBlock: ".2rem", fontSize: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "12px" }} /> Google’s
                  Stadia app
                </li>
                <li style={{ paddingBlock: ".2rem", fontSize: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "12px" }} />{" "}
                  Realtor.com
                </li>
                <li style={{ paddingBlock: ".2rem", fontSize: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "12px" }} /> Google
                  Assistant
                </li>
                <li style={{ paddingBlock: ".2rem", fontSize: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "12px" }} /> Square
                </li>
                <li style={{ paddingBlock: ".2rem", fontSize: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "12px" }} /> Sonos and
                  many more.
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
              Can I migrate my existing app into Flutter?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              Yes, you can migrate your existing app into Flutter. To know more
              about migrating your existing app into Flutter, talk to our
              Flutter expert now!
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ borderRadius: "14px", marginBlock: ".8rem" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ fontSize: "24px" }}
            >
              How long will it take to develop an app using Flutter?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              The duration of developing a Flutter app depends on various
              scenarios such as, the complexity of the app, the features
              included, and other app specifications.
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ borderRadius: "14px", marginBlock: ".8rem" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ fontSize: "24px" }}
            >
              What is the average cost of a Flutter app development project?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              The average cost of a Flutter app development service project
              depends on factors such as, the tech stacks used, the back-end
              technology, extensiveness of the app, and native interaction is
              required to be considered. You can reach out to our expert Flutter
              app developers for further information.
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ borderRadius: "14px", marginBlock: ".8rem" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ fontSize: "24px" }}
            >
              What are the benefits of outsourcing Flutter app development?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              Maintaining an in-house team of Flutter developers and designers
              could be time consuming and expensive. Instead, when you outsource
              the requirement, you can reduce the burden on your development
              team, as it frees stakeholders from routine tasks.
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
          Hire a top Flutter Development Team
        </h1>
        <p style={{ fontSize: "22px" }}>
          Gain the Advantage with the Flutter Development
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

export default FlutterTechnoligy;
