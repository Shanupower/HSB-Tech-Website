/* eslint-disable jsx-a11y/img-redundant-alt */
import { Component, useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Typography from "@mui/material/Typography";

import manufacturingImage from "../../assets/img/teleco/2.jpg";
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
    Telecom App Development Services
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

const TelecomIndustry = () => {
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
            Telecom App Development Services
          </h1>
          <p
            className="sectionDescription"
            style={{ fontSize: "20px", marginTop: "2rem" }}
          >
            The one and only industry that has undergone rapid change and has
            witnessed an upserge in its demand is, the telecom. This tidal shift
            in the telecom software development industry is forcing major and
            ongoing upgrades to network and data storage infrastructures, as
            exemplified by the 5G rollout, and continuing new trends. Therefore,
            a corresponding digital transformation in operations is required in
            areas such as customer care, sales, and billing.
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
              right: "17%",
              bottom: "28%",
              width: "325px",
              height: "200px",
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
          Connect your telecommunication business to the world of advanced
          software solutions and accelerate your digital services
          transformation, add competitive value to your offerings, and generate
          new revenue streams. Start your digitalization journey and keep up
          with the latest technologies to enhance your business revenue streams.
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
              Telecom Software Development
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              We can deliver software development solutions connected to
              self-care portals, CRM, payment systems, provisioning, inventory,
              monitoring, IN and IMS, IoT, VoIP and roaming to optimize your
              network performance, improve customer experience and streamline
              operations.
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
              Cloud Native Development
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              Utilize Cloud Native architectures to migrate from legacy
              SS7-based TDM and IN systems to software-based SIP, IMS and 5G
              network applications. We design, develop, and deploy tailored
              telecom enterprise software solutions specific to network
              applications. 
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
              Generative AI Solutions
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              Generative AI solutions can assist you with predictive
              decision-making based on data breakdowns that will elevate your
              company’s competitiveness. AI support automation of sales services
              and customer support with ChatGPT or Auto-GPT.
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
              Machine Learning for Telecom
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              Optimize workflows through online and offline machine learning
              models. Analyse photographic documentation of FTTH networks or
              examine a set of existing cases to design an internal AI system to
              boost your organization's effectiveness.
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
              DevOps and CI/CD Methodologies
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              DevOps enables automated and iterative software development,
              faster release of new features, as well as the ability to detect
              and fix errors at the initial stages. By implementing continuous
              integration (CI) and continuous deployment (CD), you can increase
              your operational agility and reduce maintenance costs.
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
              Operations Support Systems (OSS) Development n
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              Customized solutions to replace excel in telecommunications OSS.
              Boost the day-to-day operations of a telecom network, monitor
              network performance, diagnose issues and instantly troubleshoot
              problems to reduce downtime and improve results.
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
              Customer-oriented Solutions
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              Accelerate the business side of telecom operations with
              customer-facing solutions. Enable your company to efficiently
              manage its customer base, create and manage pricing plans,
              generate bills and invoices, process payments and resolve customer
              queries or complaints with the BSS.
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
          Why Hire HSB As Your Telecom App Development Company?
        </h1>
        <p className="sectionSubHeading" style={{ fontSize: "22px" }}>
          Accelerate your telecom business operations with customer-oriented
          solutions. Enable your staff to efficiently manage customer responses,
          create and manage pricing plans, generate bills and invoices, process
          payments and resolve customer queries or complaints with smart telecom
          solutions.
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
              Enhance Customer Relationships
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              Experience a surge in requests by implementing cloud
              infrastructure and optimizing networks, leading to improving the
              delivery of telecom services to end consumers. We provide robust
              support and self-service applications that foster greater customer
              loyalty.
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
              Boost Management Efficiency
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              We provide efficient network management tools to streamline
              service delivery and reduce operating costs. Our advanced data
              analytics helps in prioritizing automation across various network
              components and operational processes.
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
              Competitive Advantage
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              We understand that the telecom industry boasts an abundance of big
              data sources for both internal use and monetization through
              data-driven product offerings. By teaming up with our custom
              telecom solutions you can unlock new revenue streams and business
              insights from your big data.
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
              Reduced Operational Costs in the Long Run
            </p>
            <p className="cardDescription-service" style={{ fontSize: "22px" }}>
              By optimizing infrastructure and automating operations the
              organization will witness reduced expenses across various levels
              and departments. We extend support through our business
              intelligence tools, that maximizes the financial benefits of
              digital transformation.
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
          Few Modules for Your Custom Telecom App
        </h1>
        <p className="sectionSubHeading" style={{ fontSize: "22px" }}>
          We deliver turnkey solutions that remove the major roadblocks in the
          telecom business and help firms grow faster. We ensure quality results
          that meet the expectations and emerging demands of the customers in
          this industry. Following are the various modules that can be
          customized for your telecom business requirement –
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
            <p>Online property booking app</p>
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
            <p>CRM and ERP system software </p>
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
            <p>Property management app</p>
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
            <p>B2B and B2C real estate app</p>
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
            <p>Property rental app</p>
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
            <p>Inventory management software</p>
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
            <p>Website for property dealers</p>
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
            <p>Real estate marketplace app</p>
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
          Technologies and Tools We Use for Telecom App Development Services
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
          Our Step-by-Step Process to Build the Outstanding Telecom App
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
              How can telecom software development services enhance the customer
              experience?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              A telecom company that strives to enhance the customer experience
              embraces a cloud-native architecture for agile, scalable, and
              easily configurable omnichannel experiences. By focusing on
              improving the customer service through AI and automation, telecom
              companies can bring a major difference in their services.
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ borderRadius: "14px", marginBlock: ".8rem" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ fontSize: "24px" }}
            >
              What is the role of network as a service (NaaS) for future
              connectivity?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              Network as a service (NaaS) simplifies network management through
              offering networking services as a subscription. A recent trend in
              telecommunication software development, NaaS enables businesses to
              focus on core objectives and conserve capital. Furthermore, NaaS
              enhances scalability, agility, and the user experience while
              providing advanced security features.
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ borderRadius: "14px", marginBlock: ".8rem" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ fontSize: "24px" }}
            >
              Does HSB provide software development for various levels of
              Telecom companies?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px" }}>
              Yes, HSB can develop the software as per your requirement, size of
              the company, features, business scale, and various other factors.
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
          Connect us now to avail our Telecom app development services
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

export default TelecomIndustry;
