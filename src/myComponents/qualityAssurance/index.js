/* eslint-disable jsx-a11y/img-redundant-alt */
import { Component } from "react";
import { FaArrowRight } from "react-icons/fa6";
import mobileDevelopmentImage from "../../assets/mobileApp.webp";
import qualitAssuranceImage from "../../assets/Picture3.png";

import testRail from "../../assets/testrail.webp";
import kobiton from "../../assets/kobiton.webp";
import lambdatest from "../../assets/lambdatest.webp";
import sauceLabs from "../../assets/saucelabs.webp";
import webload from "../../assets/webload.webp";
import loadRunner from "../../assets/loadrunner.webp";
import jira from "../../assets/jira.webp";
import jenkins from "../../assets/jenkins.webp";
import tektonPipelines from "../../assets/tektonpipelines.webp";
import gitlab from "../../assets/gitlab.webp";
import bamboo from "../../assets/bamboo.webp";
import spinnaker from "../../assets/spinnaker.webp";
import gocd from "../../assets/gocd.webp";
import concourse from "../../assets/concourse.webp";
import screwdriver from "../../assets/screwdriver.webp";

import testingImage from "../../assets/testing-qa.svg";
import functionalTests from "../../assets/functionaltest-qa.svg";
import businesstesting from "../../assets/businessTesting-qa.svg";
import designChecks from "../../assets/design-check-qa.svg";
import compatability from "../../assets/compatabilty-testing-qa.svg";
import appStoreOptimization from "../../assets/apps-store-optimization-qa.svg";
import installationOptimization from "../../assets/installation-optimization-qa.svg";
import userInteraction from "../../assets/user-interaction-qa.svg";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Footer from "../footer/index.js";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./index.css";
import Navigationbar from "../navigationBar";

const deploymentToolsList = [
  {
    imageUrl: jenkins,
    name: "Jenkins",
  },
  {
    imageUrl: gitlab,
    name: "GitLab",
  },
  {
    imageUrl: screwdriver,
    name: "Screwdriver",
  },
  {
    imageUrl: bamboo,
    name: "Bamboo",
  },
  {
    imageUrl: concourse,
    name: "Concourse",
  },
  {
    imageUrl: gocd,
    name: "GoCD",
  },
];

const toolsList = [
  {
    imageUrl: jira,
    name: "Jira",
  },
  {
    imageUrl: loadRunner,
    name: "Load Runner",
  },
  {
    imageUrl: lambdatest,
    name: "Lambda Test",
  },
  {
    imageUrl: kobiton,
    name: "Kobiton",
  },
  {
    imageUrl: webload,
    name: "WebLOAD",
  },
  {
    imageUrl: testRail,
    name: "TestRail",
  },
];

const breadcrumbs = [
  <Link underline="hover" key="1" color="inherit" href="/">
    Home
  </Link>,
  <Link underline="hover" key="2" color="inherit" href="/services">
    Services
  </Link>,
  <Typography key="3" color="text.primary">
    Quality Assurance and Software Testing Services
  </Typography>,
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

class QualityAssurance extends Component {
  state = {
    expanded: false,
    value: 0,
  };

  handleTabChange = (event, newValue) => {
    this.setState({
      value: newValue,
    });
  };

  handleChange = (panel) => (event, isExpanded) => {
    this.setState((prevState) => ({
      expanded: isExpanded ? panel : false,
    }));
  };

  render() {
    const { expanded, value } = this.state;

    return (
      <div className="servicesDetailsSection">
        <div className="navigationBar">
          <Navigationbar />
        </div>

        <div className="landingSection-services qualityAssurance section">
          <div>
            <Breadcrumbs
              className="breadcrumb"
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              {breadcrumbs}
            </Breadcrumbs>

            <h1 className="sectionHeading">
              Quality Assurance and Software Testing Services
            </h1>
            <p className="sectionDescription">
              We are committed to delivering exceptional software and digital
              products by ensuring top-notch quality and reliability. Our team
              of certified experts follows a meticulous QA testing life cycle to
              guarantee that your applications meet the highest standards,
              leaving a lasting impact on your users and stakeholders.
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
          <img
            className="landingSectionImage-sericesPage"
            src={qualitAssuranceImage}
            alt="web development image"
          />
        </div>

        <div className="whyBuildSection section">
          <h1 className="sectionHeading">
            Why is Quality Assurance and Software Testing are Important for Your
            Product?
          </h1>
          <p className="sectionDescription">
            Through quality testing you can ensure the performance of
            application in all expected scenarios and quality assurance
            reassures the performance of application in terms of security and
            scalability. A well tested application for quality displays better
            optimization, greater platform compatibility, and platform
            compliance.
          </p>

          <h1 className="sectionHeading">
            Why You Should Hire HSB For Business Analysis & Consulting?
          </h1>
          <p className="sectionDescription">
            We offer bug-free software products with our top-notch quality
            assurance services. Our QA and software testing solutions ensure
            maximum ROI from any software created.
          </p>

          <div className="subSections">
            <div className="sections">
              <h1 className="sectionSubHeading">Reduced QA Costs</h1>
              <p className="sectionDescription">
                We employ an appropriate automated and manual QA testing method
                to retain the quality of software products and services and
                making QA process more affordable.
              </p>
            </div>
            <div className="sections">
              <h1 className="sectionSubHeading">Experienced Team</h1>
              <p className="sectionDescription">
                Our team members bring over a decade of expertise in quality
                assurance testing, They are capable of executing projects
                manually as well as using automated tools.
              </p>
            </div>
            <div className="sections">
              <h1 className="sectionSubHeading">Global Delivery Model</h1>
              <p className="sectionDescription">
                We employ a global delivery model where we can arrange for
                onshore testing staff across different geographies.
              </p>
            </div>
            <div className="sections">
              <h1 className="sectionSubHeading">Quality Engineering</h1>
              <p className="sectionDescription">
                Our quality engineering services ensure a shift-left approach
                for optimal test coverage and software quality.
              </p>
            </div>
          </div>
        </div>

        <div className="section">
          <h1 className="sectionHeading">
            Let’s understand how we can Quality Assurance and Software Testing
            services add value to your product.
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
            Contect US
            <FaArrowRight
              className="rightArrow"
              style={{ position: "absolute", right: ".6rem" }}
            />
          </button>
        </div>

        <div className="techAndToolsSection section">
          <h1 className="sectionHeading">
            What Technologies Does Our Business Analysis & Consulting Include?
          </h1>

          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={this.handleTabChange}
                aria-label="basic tabs example"
              >
                <Tab label="Tools" {...a11yProps(0)} />
                <Tab label="CI/CD Deployment Tools" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <div className="technlogiesContainer-technology">
                {toolsList.map((eachItem) => (
                  <div className="technologyCard">
                    <div className="technologyIconContainer">
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
                {deploymentToolsList.map((eachItem) => (
                  <div className="technologyCard">
                    <div className="technologyIconContainer">
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

        <div className="section serciesProvidedSection">
          <h1 className="sectionHeading">
            What Type of Quality Assurance & Software Testing Services We Offer?
          </h1>
          <p className="sectionSubHeading">
            As a renowned quality assurance firm, who provides a comprehensive
            range of quality assurance and testing services tailored to meet the
            specific needs of our clients.
          </p>
          <div className="cardsContainer-services">
            <div className="cardItem-service">
              <img src={testingImage} alt="why choose us card image" />
              <p className="cardTitle-service">Functional Testing</p>
              <p className="cardDescription-service">
                We conduct functional testing rigorously to ensure that the
                functionalities of your software works as intended, meeting all
                specified requirements and providing a seamless user experience.
              </p>
            </div>
            <div className="cardItem-service">
              <img src={functionalTests} alt="why choose us card image" />
              <p className="cardTitle-service">Test Automation</p>
              <p className="cardDescription-service">
                We are expert in conducting test automation to accelerate
                testing cycles. It also helps in faster delivery, error-free
                releases, and optimized development process.
              </p>
            </div>
            <div className="cardItem-service">
              <img src={businesstesting} alt="why choose us card image" />
              <p className="cardTitle-service">Performance Testing</p>
              <p className="cardDescription-service">
                We perform performance testing to evaluate the speed, stability,
                and responsiveness of your application under various conditions.
              </p>
            </div>
            <div className="cardItem-service">
              <img src={designChecks} alt="why choose us card image" />
              <p className="cardTitle-service">Security Testing</p>
              <p className="cardDescription-service">
                Our security testing helps you in building a secure and
                resilient software product. We perform thorough security testing
                to identify vulnerabilities, potential threats, and risks.
              </p>
            </div>
            <div className="cardItem-service">
              <img src={compatability} alt="why choose us card image" />
              <p className="cardTitle-service">Cloud Testing</p>
              <p className="cardDescription-service">
                Through our cloud testing services, we ensure optimal
                performance of your software in cloud environments, thereby,
                assessing scalability, and other critical aspects for
                cloud-based applications.
              </p>
            </div>
            <div className="cardItem-service">
              <img src={appStoreOptimization} alt="why choose us card image" />
              <p className="cardTitle-service">IoT Testing</p>
              <p className="cardDescription-service">
                To provide you with seamless IoT ecosystem, our specialized IoT
                testing service validate the functionality, reliability, and
                security of your Internet of Things (IoT) applications and
                devices.
              </p>
            </div>
            <div className="cardItem-service">
              <img
                src={installationOptimization}
                alt="why choose us card image"
              />
              <p className="cardTitle-service">API Testing</p>
              <p className="cardDescription-service">
                We perform robust API testing to validate the functionality,
                performance, security, and reliability of your application
                programming interfaces.
              </p>
            </div>
            <div className="cardItem-service">
              <img src={userInteraction} alt="why choose us card image" />
              <p className="cardTitle-service">Accessibility Testing</p>
              <p className="cardDescription-service">
                Through comprehensive accessibility testing we assure that your
                software is accessible to all individuals, and adheres to
                applicable accessibility standards.
              </p>
            </div>
          </div>
        </div>

        <div className="faqsSection section">
          <h1 className="sectionHeading">FAQs</h1>
          <p className="sectionSubHeading">
            Find the answers to the most commonly asked questions about our
            services below
          </p>

          <div>
            <Accordion
              style={{
                marginBottom: "15px",
                boxShadow: "1px 2px 5px lightgray",
                width: "100%",
              }}
              expanded={expanded === "panel1"}
              onChange={this.handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                  What types of web apps can you develop?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  At GeekyAnts, we take pride in having the ability to deliver a
                  wide range of web applications. Our team is industry agnostic
                  and has the ability to design apps for various industries,
                  budgets, and timelines.
                </Typography>{" "}
                <br />
                <Typography>
                  To learn more about how we can help, fill out the "hire us"
                  form on our website.{" "}
                </Typography>
                <Typography>
                  {" "}
                  <br />
                  We look forward to speaking with you.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              style={{
                marginBottom: "15px",
                boxShadow: "1px 2px 5px lightgray",
              }}
              expanded={expanded === "panel2"}
              onChange={this.handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                  How much does it cost to develop a web app?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  The cost of creating a web application depends on a number of
                  variables. A few of them are complexity, functionality,
                  platform, and the experience of the development team.
                </Typography>{" "}
                <br />
                <Typography>
                  However, we do have pricing models that are in-tune with
                  various business expectations and goals. To know more, we
                  encourage you to get in touch with us to discuss the full
                  extent of your services.{" "}
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              style={{
                marginBottom: "15px",
                boxShadow: "1px 2px 5px lightgray",
              }}
              expanded={expanded === "panel3"}
              onChange={this.handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                  How long will it take to build my web application?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Understanding the project's scope, complexity, features, and
                  functionality is necessary when building a web application. A
                  web application's development timetable can vary greatly; some
                  web apps can be created in a matter of weeks, while others may
                  take months or even years.
                </Typography>{" "}
                <br />
                <Typography>
                  A straightforward web application with basic functionality
                  could take 1-3 months to construct, whereas more sophisticated
                  projects might take 6–12 months or even more.
                </Typography>{" "}
                <br />
                <Typography>
                  The number of people on the development team, the available
                  resources, the technological stack that is being used, and the
                  amount of testing and quality assurance that is needed are
                  some of the variables that might impact the development
                  schedule.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              style={{
                marginBottom: "15px",
                boxShadow: "1px 2px 5px lightgray",
              }}
              expanded={expanded === "panel4"}
              onChange={this.handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                  Do you provide maintenance and support after developing a web
                  app?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  GeekyAnts is a web app development firm that prioritizes the
                  calibre of its work and seeks to establish enduring
                  connections with its customers. We collaborate closely with
                  clients to fully grasp their particular requirements and offer
                  continuing assistance to ensure their web app succeeds.
                </Typography>{" "}
                <br />
                <Typography>
                  According to each customer's individual requirements,
                  GeekyAnts provides a range of maintenance and support
                  services, such as routine updates, bug fixes, security
                  upgrades, and performance improvements.
                </Typography>{" "}
                <br />
                <Typography>
                  We have more than 17 years of expertise in the business and
                  are aware of how crucial continual maintenance is for online
                  applications. The knowledgeable staff at GeekyAnts is
                  committed to ensuring clients' web apps are safe, current, and
                  completely functional. To provide timely service when
                  required, we provide a variety of support solutions{" "}
                </Typography>{" "}
                <br />
                <Typography>
                  In general, we offer various maintenance and support services,
                  including regular updates, bug fixes, security updates, and
                  performance enhancements tailored to each client's specific
                  needs.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              style={{
                marginBottom: "15px",
                boxShadow: "1px 2px 5px lightgray",
              }}
              expanded={expanded === "panel5"}
              onChange={this.handleChange("panel5")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                  Which platform is best for web app development
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  GeekyAnts is a web app development business with in-depth
                  expertise in a variety of web app development platforms. We
                  acknowledge that it might be difficult for businesses to
                  select the best platform, and we provide our assistance.
                </Typography>{" "}
                <br />
                <Typography>
                  React, Angular, Vue, and Next.js are popular web app
                  development frameworks; GeekyAnts recommends Next.js as the
                  top platform for companies looking to build scalable,
                  effective, and SEO-friendly web applications.
                </Typography>{" "}
                <br />
                <Typography>
                  A React-based web app development framework called Next.js
                  makes it easier to create React apps that are rendered on the
                  server. It offers simplicity, effectiveness, SEO friendliness,
                  adaptability, and a sizable community.
                </Typography>
                <Typography>
                  We at GeekyAnts have found Next.js dependable and effective
                  for our web app development projects. Using Next.js, our team
                  of skilled developers can produce high-quality online
                  applications that satisfy the needs of their clients'
                  businesses. We've teamed up with Vercel, the Next.js
                  developer, to provide our clients with global web development
                  options.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              style={{
                marginBottom: "15px",
                boxShadow: "1px 2px 5px lightgray",
              }}
              expanded={expanded === "panel6"}
              onChange={this.handleChange("panel6")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                  What are the benefits of outsourcing web app development
                  Services?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  The advantages of outsourcing web app development include cost
                  savings, quicker response times, access to a broader range of
                  expertise, the flexibility to concentrate on core skills and
                  risk reduction.
                </Typography>{" "}
                <br />
                <Typography>
                  Companies can benefit from cheaper labour expenses,
                  particularly in nations like India, by outsourcing.
                  High-quality web apps may be produced as a result of
                  outsourcing, which also gives access to qualified people that
                  offer fresh ideas and knowledge to projects. Outsourcing also
                  enables businesses to focus on their core operations while
                  boosting efficiency. Access to the most recent tools and
                  technologies may also be had by working with a web app
                  development business without having to make an investment in
                  them.
                </Typography>{" "}
                <br />
                <Typography>
                  Finally, since businesses share these risks with their
                  partner, outsourcing can help reduce the risks related to
                  developing web apps. To sum up, businesses can fully profit
                  from these advantages by outsourcing web app development to a
                  reputable company like GeekyAnts.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              style={{
                marginBottom: "15px",
                boxShadow: "1px 2px 5px lightgray",
              }}
              expanded={expanded === "panel7"}
              onChange={this.handleChange("panel7")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                  Can my existing app be enhanced using your web app development
                  services?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  The effectiveness and user-friendliness of your current app
                  can be enhanced and improved with the help of GeekyAnts' web
                  app development services. We offer a customized approach to
                  each project and have expertise working with a variety of
                  clients, from startups to Fortune 500 corporations. Our team
                  of project managers, designers, and developers is dedicated to
                  meeting and exceeding your expectations with our work.
                </Typography>
                <br />
                <Typography>
                  GeekyAnts also provides specialized solutions that are catered
                  to your particular needs because we recognize that every
                  business is different. Our team will collaborate with you to
                  comprehend your business requirements and provide a solution
                  that meets those requirements, whether you need to redesign
                  your existing app, add new features, or increase its
                  performance.
                </Typography>
                <br />
                <Typography>
                  We also offer various engagement models that may be tailored
                  to your company's needs, and our pricing is competitive. We
                  encourage you to work with us for cutting-edge web app
                  solutions to improve your current app or create a new one.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>

        <div className="closingSection section">
          <h1 className="sectionHeading">
            Leverage the technical expertise of our Quality Assurance and
            Testing Experts.
          </h1>
          <p className="sectionSubHeading">
            Let’s talk more about the requirement.
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
            Here You Go!
            <FaArrowRight
              className="rightArrow"
              style={{ position: "absolute", right: ".6rem" }}
            />
          </button>
        </div>

        <Footer />
      </div>
    );
  }
}

export default QualityAssurance;
