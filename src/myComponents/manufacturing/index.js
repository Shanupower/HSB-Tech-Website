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

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import "./index.css";
import { useMediaQuery } from "@mui/material";
import Footer from "../footer";

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
    Manufacturing App Development Services
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

const Manufacturing = () => {
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
          paddingInline: isMd ? "2rem" : " 14%",
          display: "flex",
          gap: "5%",
          position: "relative",
          flexDirection: isMd && "column",
        }}
      >
        {/* left side */}
        <div style={{ width: isMd ? "100%" : "60%" }}>
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
            style={{ marginTop: "3.2rem", fontSize: isMd ? "30px" : "48px" }}
          >
            Manufacturing & Retail App Development Services
          </h1>
          <p
            className="sectionDescription"
            style={{ fontSize: "20px", marginTop: "2rem" }}
          >
            Through our manufacturing and retail application development, we
            catalyse transformation in the industry. We have unwavering
            dedication to innovation, and precision-driven manufacturing app
            development services will give your business a competitive
            advantage. Our skilled technical experts bring perfect combination
            of expertise and experience to boost your ROI.
          </p>
          <button
            className="getQuoteButton industries-getQuoteButton"
            type="button"
            style={{ padding: ".8rem 0", fontSize: "20px" }}
          >
            GET QUOTE
          </button>
        </div>

        {/* right side */}
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
        style={{ paddingInline: isMd ? "2rem" : " 14%" }}
      >
        <h1
          className="sectionHeading"
          style={{ fontSize: isMd ? "30px" : "48px" }}
        >
          Solutions we deliver
        </h1>
        <p
          className="sectionSubHeading"
          style={{ fontSize: isMd ? "18px" : "22px" }}
        >
          Manufacturers today face increasing demands for efficiency, agility,
          and innovation. Our solutions are designed to empower manufacturing
          excellence through cutting-edge technology and expert insights.
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

            <p
              className="cardTitle-service"
              style={{ fontSize: isMd ? "24px" : "28px" }}
            >
              Quality Control
            </p>
            <p
              className="cardDescription-service"
              style={{ fontSize: isMd ? "18px" : "22px" }}
            >
              Implementing higher quality standards to meet industry standards.
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
            <p
              className="cardTitle-service"
              style={{ fontSize: isMd ? "24px" : "28px" }}
            >
              Supply Chain Optimization
            </p>
            <p
              className="cardDescription-service"
              style={{ fontSize: isMd ? "18px" : "22px" }}
            >
              Optimize and control your supply chain ensuring on-time deliveries
              and cost savings.
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

            <p
              className="cardTitle-service"
              style={{ fontSize: isMd ? "24px" : "28px" }}
            >
              Production Efficiency
            </p>
            <p
              className="cardDescription-service"
              style={{ fontSize: isMd ? "18px" : "22px" }}
            >
              Improve production processes, reduce downtime, and improve overall
              efficiency.
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

            <p
              className="cardTitle-service"
              style={{ fontSize: isMd ? "24px" : "28px" }}
            >
              Insightful Data
            </p>
            <p
              className="cardDescription-service"
              style={{ fontSize: isMd ? "18px" : "22px" }}
            >
              Leverage our data analytics to make informed decisions stay ahead
              of the curve.
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

            <p
              className="cardTitle-service"
              style={{ fontSize: isMd ? "24px" : "28px" }}
            >
              Innovate with IoT
            </p>
            <p
              className="cardDescription-service"
              style={{ fontSize: isMd ? "18px" : "22px" }}
            >
              Through IoT, create smart, connected manufacturing environment.
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

            <p
              className="cardTitle-service"
              style={{ fontSize: isMd ? "24px" : "28px" }}
            >
              Streamlined Operations
            </p>
            <p
              className="cardDescription-service"
              style={{ fontSize: isMd ? "18px" : "22px" }}
            >
              Improve collaborations among different teams by simplifying
              complex workflows.
            </p>
          </div>
        </div>
      </div>

      <div
        className="section whyChooseHSB"
        style={{ paddingInline: isMd ? "2rem" : " 14%" }}
      >
        <h1
          className="sectionHeading"
          style={{ fontSize: isMd ? "30px" : "48px" }}
        >
          Why Hire HSB As Your Manufacturing & Retail App Development Company?
        </h1>
        <p
          className="sectionSubHeading"
          style={{ fontSize: isMd ? "18px" : "22px" }}
        >
          We adopt a consultative and collaborative approach, partnering closely
          with manufacturers and retailers to deeply understand their unique
          challenges and business goals. Leveraging our technical expertise, we
          design and develop tailored solutions that drive tangible business
          outcomes.
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
            <p
              className="cardTitle-service"
              style={{ fontSize: isMd ? "22px" : "28px" }}
            >
              All Digital Transformation Needs On A Single Click
            </p>
            <p
              className="cardDescription-service"
              style={{ fontSize: isMd ? "18px" : "22px" }}
            >
              Inspired with our engineering-first approach, UX-driven products
              and great UI that displays our robust design systems.
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
            <p
              className="cardTitle-service"
              style={{ fontSize: isMd ? "24px" : "28px" }}
            >
              Customized Enterprise Dashboards
            </p>
            <p
              className="cardDescription-service"
              style={{ fontSize: isMd ? "18px" : "22px" }}
            >
              We are experts in building enterprise dashboards for manufacturing
              and retain companies. Through our customized and data-driven
              dashboards, you can avail real-time insights about the overall
              performance.
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
            <p
              className="cardTitle-service"
              style={{ fontSize: isMd ? "24px" : "28px" }}
            >
              AI-powered Digital Solutions
            </p>
            <p
              className="cardDescription-service"
              style={{ fontSize: isMd ? "18px" : "22px" }}
            >
              Through AI, we provide solutions like predictive maintenance and
              anomaly detection. Leverage our AI based solutions to transform
              your existing business operations.
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
            <p
              className="cardTitle-service"
              style={{ fontSize: isMd ? "22px" : "28px" }}
            >
              Automate processes and workflows
            </p>
            <p
              className="cardDescription-service"
              style={{ fontSize: isMd ? "18px" : "22px" }}
            >
              We analyse your current processes and identify the scope of
              digitization and automation to deliver customized solutions that
              automates workflows.
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
            <p
              className="cardTitle-service"
              style={{ fontSize: isMd ? "24px" : "28px" }}
            >
              Industry-specific solutions
            </p>
            <p
              className="cardDescription-service"
              style={{ fontSize: isMd ? "18px" : "22px" }}
            >
              Our team has the ability to cater the complexities and demands of
              the manufacturing and retail industries. We are updated with
              compliance standards to serve your unique business requirements.
            </p>
          </div>
        </div>
      </div>

      <div
        className="section"
        style={{ paddingInline: isMd ? "2rem" : " 14%" }}
      >
        <h1
          className="sectionHeading"
          style={{ fontSize: isMd ? "30px" : "48px" }}
        >
          Few Modules for Your Custom Manufacturing App
        </h1>
        <p
          className="sectionSubHeading"
          style={{ fontSize: isMd ? "18px" : "22px" }}
        >
          Through our manufacturing and retain app development, we aim to create
          integrated solutions and enhance business processes. Following are our
          comprehensive manufacturing modules specific to the industry
          requirement.
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
            <p>Mobile accessibility </p>
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
            <p>Real-time alerts and notifications</p>
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
            <p>Predictive analytics and forecasting</p>
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
            <p>Task assignment and management</p>
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
            <p>Data-driven reports</p>
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
            <p>Monitoring KPIs and assessment</p>
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
            <p>Role based access control</p>
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
            <p>Compliance monitoring</p>
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
        style={{ paddingInline: isMd ? "2rem" : " 14%" }}
      >
        <h1
          className="sectionHeading"
          style={{ fontSize: isMd ? "30px" : "48px" }}
        >
          Technologies and Tools We Use for Manufacturing & Retail App
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
        </Box>
      </div>

      {/* Accordion */}
      <div
        // className="technologiesSectionIndustries section"
        className="closingSection"
        style={{ paddingInline: isMd ? "2rem" : " 14%" }}
      >
        <h1
          className="sectionHeading"
          style={{ fontSize: isMd ? "30px" : "48px" }}
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
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ fontSize: "24px" }}
            >
              How retail management software helps retail businesses?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              Retail Management System assists retailers in managing end-to-end
              retail operations from procurement to sales and from order
              management to accounting, and so on. It helps retailers gain
              real-time visibility into retail activities and streamline
              processes across multiple channels and stores.
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ borderRadius: "14px", marginBlock: ".8rem" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ fontSize: "24px" }}
            >
              Do you create custom retail software?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              Yes, we offer custom retail software development that aims at
              addressing all the requirements of your retail business. We can
              develop a tailored application for your retail operations that
              meet all your expectations and allow you to focus on business
              development tasks.
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ borderRadius: "14px", marginBlock: ".8rem" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ fontSize: "24px" }}
            >
              What features can be included in a manufacturing app?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              A manufacturing app can have a plethora of features depending on
              the requirements of businesses. A few of the important features
              that could be found in a manufacturing app are:
              <ul>
                <li style={{ paddingBlock: ".2rem", fontSize: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "12px" }} /> Inventory
                  management: To track inventory levels, automate stock
                  replenishment, and avoid stockouts.
                </li>
                <li style={{ paddingBlock: ".2rem", fontSize: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "12px" }} /> Order
                  management: Efficiently manage orders, track progress, and
                  ensure timely delivery.
                </li>
                <li style={{ paddingBlock: ".2rem", fontSize: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "12px" }} /> Reporting
                  and Analytics: Generate comprehensive reports and gain
                  insights into key performance indicators (KPIs)
                </li>

                <li style={{ paddingBlock: ".2rem", fontSize: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "12px" }} /> Quality
                  Control: Implement quality control measures, and track defect
                  rates.
                </li>

                <li style={{ paddingBlock: ".2rem", fontSize: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "12px" }} /> Real-time
                  Alerts: Get alerts and updates on the status of your order,
                  production, and transactions.
                </li>

                <li style={{ paddingBlock: ".2rem", fontSize: "20px" }}>
                  <FiberManualRecordIcon sx={{ fontSize: "12px" }} />{" "}
                  Integration Capabilities: Seamlessly integrate with existing
                  systems such as ERPs or CRMs for data synchronization.
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
              How long does it take to develop a manufacturing app?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              The time required to develop a manufacturing app depends on
              several factors, such as size and complexity, features and
              functionalities, development approach, and size and expertise of
              your development team. To get a more accurate estimate of the time
              it may take to build your specific app, consult us today.
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ borderRadius: "14px", marginBlock: ".8rem" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ fontSize: "24px" }}
            >
              How much does it cost to build a manufacturing app?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              The cost of building a manufacturing app can vary significantly
              based on several factors such as, complexity, functionality, and
              the mode of development used.
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <div
        className="technologiesSectionIndustries section"
        style={{ paddingInline: " 14%" }}
      >
        <h1
          className="sectionHeading"
          style={{ fontSize: isMd ? "30px" : "48px" }}
        >
          Connect us now to avail our manufacturing app development services
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

export default Manufacturing;
