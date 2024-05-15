/* eslint-disable jsx-a11y/img-redundant-alt */
import { Component } from "react";
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
    BFSI App Development Services
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

class BFSIIndustry extends Component {
  state = {
    value: 0,
  };

  handleTabChange = (event, newValue) => {
    this.setState({
      value: newValue,
    });
  };

  render() {
    const { value } = this.state;

    return (
      <div className="industriesPageContainer">
        <div
          className="landingSection-services manufacturing section"
          style={{
            paddingInline: " 14%",
            display: "flex",
            gap: "5%",
            position: "relative",
          }}
        >
          <div style={{ width: "60%" }}>
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
              BFSI App Development Services
            </h1>
            <p
              className="sectionDescription"
              style={{ fontSize: "20px", marginTop: "2rem" }}
            >
              We are a forward-thinking software development company focusing on
              serving the Banking, Financial Services, and Insurance (BFSI)
              sector. We understand the intricacies and challenges of this
              industry, and our team is equipped with the expertise to address
              them effectively. Our BFSI app development solutions are tailored
              to assist banks, financial institutions, insurance companies, and
              other stakeholders in achieving their strategic goals and
              enhancing customer experiences.
            </p>
            <button
              className="getQuoteButton industries-getQuoteButton"
              type="button"
              style={{ padding: ".8rem 0", fontSize: "20px" }}
            >
              GET QUOTE
            </button>
          </div>
          <div
            style={{
              position: "absolute",
              right: "22rem",
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
        </div>

        <div className="solutions section" style={{ paddingInline: " 14%" }}>
          <h1 className="sectionHeading" style={{ fontSize: "48px" }}>
            Our BFSI Solutions
          </h1>
          <p className="sectionSubHeading" style={{ fontSize: "22px" }}>
            We are pioneer in innovation and delivering tailored solutions that
            empower the BFSI sector. Our commitment to excellence shines through
            our unique offerings.
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
                BFSI Software Development Services
              </p>
              <p
                className="cardDescription-service"
                style={{ fontSize: "22px" }}
              >
                We excel in developing custom software solutions for the BFSI
                domain, incorporating cutting-edge technologies to streamline
                operations, enhance security, and optimize customer engagement.
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
                Banking Software Development
              </p>
              <p
                className="cardDescription-service"
                style={{ fontSize: "22px" }}
              >
                We provide comprehensive solutions from conceptualization to
                deployment, ensuring operational efficacy and regulatory
                compliance.
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
                Web Development Services for BFSI
              </p>
              <p
                className="cardDescription-service"
                style={{ fontSize: "22px" }}
              >
                Our tailored web development services for the BFSI sector are
                responsive and intuitive offering a consistent experience across
                devices.
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
                Mobile App Development for Banking
              </p>
              <p
                className="cardDescription-service"
                style={{ fontSize: "22px" }}
              >
                Our expertise in mobile app development ensures that your
                banking applications are cutting-edge, secure, and offer
                superior user experience.
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
                Online Banking Software Development
              </p>
              <p
                className="cardDescription-service"
                style={{ fontSize: "22px" }}
              >
                We specialize in creating online banking software that offers a
                secure, efficient, and user-friendly platform for customers to
                manage their finances seamlessly.
              </p>
            </div>
          </div>
        </div>

        <div className="section whyChooseHSB" style={{ paddingInline: " 14%" }}>
          <h1 className="sectionHeading" style={{ fontSize: "48px" }}>
            Why Hire HSB As Your BFSI App Development Company?
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
              <p className="cardTitle-service" style={{ fontSize: "28px" }}>
                Comprehensive Solutions
              </p>
              <p
                className="cardDescription-service"
                style={{ fontSize: "22px" }}
              >
                We offer end-to-end BFSI software development services, from
                custom application development to integration. to enhance
                realtime experience of possessing the property.
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
                Comprehensive Solutions
              </p>
              <p
                className="cardDescription-service"
                style={{ fontSize: "22px" }}
              >
                We offer end-to-end BFSI software development services, from
                custom application development to integration.
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
                Expert Guidance
              </p>
              <p
                className="cardDescription-service"
                style={{ fontSize: "22px" }}
              >
                HSB brings the expertise of building finance and fintech web and
                mobile app solutions. Leverage our experience, in streamlining
                the complex processes, and building a 100% compliant app that
                ensures data security.
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
                User-centric Approach
              </p>
              <p
                className="cardDescription-service"
                style={{ fontSize: "22px" }}
              >
                We build applications considering a balance between user’s
                experience and product vision. Through OCR and other tools we
                make it easier for the user to share the required details.
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
                Prioritizing Security
              </p>
              <p
                className="cardDescription-service"
                style={{ fontSize: "22px" }}
              >
                We understand the significance of customers’ data privacy and
                therefore, our custom BFSI solutions are developed with
                high-security standards.
              </p>
            </div>{" "}
            <div
              className="card-service"
              style={{
                padding: "1rem 2rem",
                borderRadius: "10px",
                boxShadow: " 0 4px 12px #080a0d0d, 0 8px 16px #080a0d0d",
              }}
            >
              <p className="cardTitle-service" style={{ fontSize: "28px" }}>
                Payment Integrations
              </p>
              <p
                className="cardDescription-service"
                style={{ fontSize: "22px" }}
              >
                We provide wide variety of payment integrations, such as, QR
                code, net banking, debit or credit cards, UPI, and payment
                wallets.
              </p>
            </div>{" "}
            <div
              className="card-service"
              style={{
                padding: "1rem 2rem",
                borderRadius: "10px",
                boxShadow: " 0 4px 12px #080a0d0d, 0 8px 16px #080a0d0d",
              }}
            >
              <p className="cardTitle-service" style={{ fontSize: "28px" }}>
                Highly Compliance Standards
              </p>
              <p
                className="cardDescription-service"
                style={{ fontSize: "22px" }}
              >
                We align software development process with BFSI regulatory
                compliances to protect customer data and ensuring that the
                process should comply with the standards.
              </p>
            </div>
          </div>
        </div>

        <div className="section" style={{ paddingInline: " 14%" }}>
          <h1 className="sectionHeading" style={{ fontSize: "48px" }}>
            Few Modules for Your Custom BFSI App
          </h1>
          <p className="sectionSubHeading" style={{ fontSize: "22px" }}>
            Through our BFSI app development, we aim to create integrated
            solutions and enhance business processes. Following are our
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
              <p>Real-time alerts and notifications </p>
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
              <p>KYC process automatio</p>
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
              <p>Integrating UPI and other digital payments</p>
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
              <p>OCR tools</p>
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
              <p>GPS Tracking</p>
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
              <p>Send & request money</p>
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
              <p>QR code for scanning</p>
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
              <p>Bulk upload of documents</p>
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
              <p>Real-time selfie or video update</p>
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
              <p>Transactional SMS tracking</p>
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
              <p>Digital wallet for online payments</p>
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
              <p>Utility bills payment</p>
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
              <p>Analysing financial risk to create risk score</p>
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
              <p>Bank statement analyser</p>
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
              <p>Credit score analyser</p>
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
              <p>Automated invoicing</p>
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
              <p>Subscription flow</p>
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
              <p>Automated EMI debits</p>
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
          </div>
        </div>

        <div
          className="technologiesSectionIndustries section"
          style={{ paddingInline: " 14%" }}
        >
          <h1 className="sectionHeading" style={{ fontSize: "48px" }}>
            Technologies and Tools We Use for Healthcare App Development
            Services
          </h1>
          <Box sx={{ width: "100%", marginTop: "2rem" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={this.handleTabChange}
                aria-label="basic tabs example"
              >
                <Tab label="Frontend" {...a11yProps(0)} />
                <Tab label="Backend" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <CustomTabPanel
              value={value}
              index={0}
              style={{ marginTop: "2rem" }}
            >
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
        {/* <div
          // className="technologiesSectionIndustries section"
          className="closingSection"
          style={{ paddingInline: " 14%" }}
        >
          <h1 className="sectionHeading" style={{ fontSize: "48px" }}>
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
            <p> Internal testing and UAT</p>
            <p>Deployment </p>
            <p> Training, support and maintenance</p>
          </Chrono>
        </div> */}
        {/* Accordion */}
        {/* <div
          className="technologiesSectionIndustries section"
          style={{ paddingInline: " 14%" }}
        >
          <h1 className="sectionHeading" style={{ fontSize: "48px" }}>
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
                What are some of the features of your real estate software
                solutions and services?
              </AccordionSummary>
              <AccordionDetails sx={{ fontSize: "20px" }}>
                Our software solutions either through mobile app or web app for
                the real estate industry include the following features:
                <ul>
                  <li style={{ paddingBlock: ".2rem", fontSize: "20px" }}>
                    <FiberManualRecordIcon sx={{ fontSize: "12px" }} /> Mobile
                    Listing management
                  </li>
                  <li style={{ paddingBlock: ".2rem", fontSize: "20px" }}>
                    <FiberManualRecordIcon sx={{ fontSize: "12px" }} /> Order
                    CRM integration
                  </li>
                  <li style={{ paddingBlock: ".2rem", fontSize: "20px" }}>
                    <FiberManualRecordIcon sx={{ fontSize: "12px" }} /> Payment
                    Lead capture
                  </li>

                  <li style={{ paddingBlock: ".2rem", fontSize: "20px" }}>
                    <FiberManualRecordIcon sx={{ fontSize: "12px" }} /> Mobile
                    Mortgage calculator
                  </li>

                  <li style={{ paddingBlock: ".2rem", fontSize: "20px" }}>
                    <FiberManualRecordIcon sx={{ fontSize: "12px" }} /> Lending
                    Home search
                  </li>

                  <li style={{ paddingBlock: ".2rem", fontSize: "20px" }}>
                    <FiberManualRecordIcon sx={{ fontSize: "12px" }} /> The cost
                    Virtual tours
                  </li>
                  <li style={{ paddingBlock: ".2rem", fontSize: "20px" }}>
                    <FiberManualRecordIcon sx={{ fontSize: "12px" }} /> The cost
                    Agent profiles and more
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
                How long does it take to develop a real estate app? How much
                would a real estate app cost?
              </AccordionSummary>
              <AccordionDetails sx={{ fontSize: "20px" }}>
                The development time for any app including real estate depends
                on the features and functionality required. We suggest you to
                contact us with your requirements so that we can help you with
                estimated time of completion of the app and approximate cost of
                developing the app.
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ borderRadius: "14px", marginBlock: ".8rem" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                sx={{ fontSize: "24px" }}
              >
                Which technologies and programming languages your developers
                employ to create real estate applications?
              </AccordionSummary>
              <AccordionDetails sx={{ fontSize: "20px" }}>
                Our developers are well experienced in programming languages
                like Kotlin, Swift, Java, and CSS. As for mobile frameworks, we
                use React Native, Android Studio, Flutter, iOS SDK, Xcode,
                Xamarin, Cordova, and Iconic. Using Metaverse, we can develop 3D
                and multi-dimensional walk-throughs of your property to give a
                realistic experience to the customers.
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ borderRadius: "14px", marginBlock: ".8rem" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                sx={{ fontSize: "24px" }}
              >
                How having a real estate app is profitable?
              </AccordionSummary>
              <AccordionDetails sx={{ fontSize: "20px" }}>
                Along with increasing the mobility and customer reach, you can
                also use real estate apps to create other sources of income such
                as, selling ad slots to property management companies, mortgage
                lenders, and other similar businesses and providing premium
                services to real estate agents.
              </AccordionDetails>
            </Accordion>
          </div>
        </div> */}

        <div className="closingSection" style={{ paddingInline: " 14%" }}>
          <h1 className="sectionHeading" style={{ fontSize: "48px" }}>
            Connect us now to avail our BFSI app development services
          </h1>
          <button className="letsTalkButton slideRight" type="button">
            GET QUOTE
            <FaArrowRight className="rightArrow" />
          </button>
        </div>

        <Footer />
      </div>
    );
  }
}

export default BFSIIndustry;
