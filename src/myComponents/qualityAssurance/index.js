/* eslint-disable jsx-a11y/img-redundant-alt */
import { Component } from "react";
import { FaArrowRight } from "react-icons/fa6";
import mobileDevelopmentImage from "../../assets/mobileApp.webp";

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
import performanceEvaluation from "../../assets/performance-evaluation-qa.svg";
import securityTesting from "../../assets/security-testing-qa.svg";

import giftBox from "../../assets/collect-graphic.svg";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Footer from "../footer/index.js";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import "./index.css";

const technologiesList = [
  {
    imageUrl: testRail,
    name: "TestRail",
  },
  {
    imageUrl: kobiton,
    name: "Kobiton",
  },
  {
    imageUrl: lambdatest,
    name: "LambdaTest",
  },
  {
    imageUrl: sauceLabs,
    name: "SauceLabs",
  },
  {
    imageUrl: webload,
    name: "WebLOAD",
  },
  {
    imageUrl: loadRunner,
    name: "LoadRunner",
  },
  {
    imageUrl: jira,
    name: "JIRA",
  },
];

const toolsList = [
  {
    imageUrl: jenkins,
    name: "Jenkins",
  },
  {
    imageUrl: tektonPipelines,
    name: "Tekton Pipelines",
  },
  {
    imageUrl: gitlab,
    name: "Gitlab",
  },
  {
    imageUrl: bamboo,
    name: "Bamboo",
  },
  {
    imageUrl: spinnaker,
    name: "Spinnaker",
  },
  {
    imageUrl: gocd,
    name: "GoCD",
  },
  {
    imageUrl: concourse,
    name: "Concourse",
  },
  {
    imageUrl: screwdriver,
    name: "Screwdriver",
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

class QualityAssurance extends Component {
  state = {
    expanded: false,
    isTechTabActive: true,
  };

  toggleToolsAndTechTab = () => {
    this.setState((prevState) => ({
      isTechTabActive: !prevState.isTechTabActive,
    }));
  };

  handleChange = (panel) => (event, isExpanded) => {
    this.setState((prevState) => ({
      expanded: isExpanded ? panel : false,
    }));
  };

  render() {
    const { expanded, isTechTabActive } = this.state;

    let tabItemsList = isTechTabActive ? technologiesList : toolsList;

    return (
      <div className="servicesDetailsSection">
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
              Ensure that your product meets the highest standards of quality,
              performance, and reliability.
            </p>
            <p className="tagLine">
              We provide the best-in-class quality assurance and software
              testing services in the UK that give your application the edge.
            </p>
            <button
              className="getQuoteButton qualityAssurance-getQuoteButton"
              type="button"
            >
              Get Quote
            </button>
          </div>
          <img
            className="landingSectionImage-sericesPage"
            src={mobileDevelopmentImage}
            alt="web development image"
          />
        </div>

        <div className="whyBuildSection section">
          <h1 className="sectionHeading">
            Why is Quality Assurance for Your Product Important?
          </h1>
          <p className="sectionDescription">
            Quality testing in apps is a crucial step. It determines various
            performance and business KPIs. Good quality tests ensure high
            engagement, reduced bugs, and lower development costs for web apps.
            In the case of mobile apps, it means better optimization, greater
            platform compatibility, and app store compliance.
          </p>
        </div>

        <div className="whyChooseSection section">
          <h1 className="sectionHeading">
            Why Choose GeekyAnts as Your Quality Assurance & Software Testing
            Company?
          </h1>
          <p className="cardTitle-service">
            Well-versed with Modern Mobile Tech Stacks
          </p>
          <p className="qaNumber">1000+</p>
          <p className="cardDescription-service">
            We have tested over 1000+ mobile apps and web apps, giving us a
            great understanding of the field. Our QA and software testing
            solutions ensure you get the maximum ROI from any software created.
          </p>
        </div>

        <div className="section serciesProvidedSection">
          <h1 className="sectionHeading">
            Quality Assurance and Software Testing Services By GeekyAnts
          </h1>
          <p className="sectionDescription">
            Creating bug-free software is an essential part of our DNA. All
            services follow a strict protocol to ensure the application is free
            from bugs and errors during deployment.
          </p>
          <div className="cardsContainer-services">
            <div className="cardItem-service">
              <img src={testingImage} alt="why choose us card image" />
              <p className="cardTitle-service">Testing on Real Devices</p>
              <p className="cardDescription-service">
                Get your app tested on real devices with our repository of over
                100+ real devices to cover all form factors and manufacturers.
              </p>
            </div>
            <div className="cardItem-service">
              <img src={functionalTests} alt="why choose us card image" />
              <p className="cardTitle-service">Functional Tests</p>
              <p className="cardDescription-service">
                We test end-to-end interactions and flows, user touchpoints
                (email, SMS, alerts, notification), and integration with 3rd
                party systems/interfaces/APIs.
              </p>
            </div>
            <div className="cardItem-service">
              <img src={businesstesting} alt="why choose us card image" />
              <p className="cardTitle-service">Business Testing</p>
              <p className="cardDescription-service">
                We perform competitor app analysis, review analysis
                post-Go-Live, production issues, and provide debugging support.
              </p>
            </div>
            <div className="cardItem-service">
              <img src={designChecks} alt="why choose us card image" />
              <p className="cardTitle-service">Design Checks</p>
              <p className="cardDescription-service">
                We check if the app is optimized for delivering a consistent
                user experience through tests centered around A/B tests,
                accessibility, and other key areas.
              </p>
            </div>
            <div className="cardItem-service">
              <img src={compatability} alt="why choose us card image" />
              <p className="cardTitle-service">Compatibility Testing</p>
              <p className="cardDescription-service">
                We check compatibility on different screen sizes, RAM,
                processors, OS versions, and makes of the hardware where the app
                will run.
              </p>
            </div>
            <div className="cardItem-service">
              <img src={appStoreOptimization} alt="why choose us card image" />
              <p className="cardTitle-service">App Store Optimization</p>
              <p className="cardDescription-service">
                We optimize the app to ensure there is better installation
                volume through optimization of the description and standards
                followed.
              </p>
            </div>
            <div className="cardItem-service">
              <img
                src={installationOptimization}
                alt="why choose us card image"
              />
              <p className="cardTitle-service">Installation Optimization</p>
              <p className="cardDescription-service">
                We check the uninstall and reinstall flow, synchronize between
                updated and non-updated apps, and provide functional validation
                after updates.
              </p>
            </div>
            <div className="cardItem-service">
              <img src={userInteraction} alt="why choose us card image" />
              <p className="cardTitle-service">User Interaction Checks</p>
              <p className="cardDescription-service">
                We evaluate the app’s content interactions to check for UI/UX
                standards like ergonomics, gestures, transitions, etc.
              </p>
            </div>
            <div className="cardItem-service">
              <img src={performanceEvaluation} alt="why choose us card image" />
              <p className="cardTitle-service">Performance Evaluation</p>
              <p className="cardDescription-service">
                We check the app’s performance through APIs tests for functional
                stability, APIs automation for regression suite, and API
                Performance.
              </p>
            </div>
            <div className="cardItem-service">
              <img src={securityTesting} alt="why choose us card image" />
              <p className="cardTitle-service">Security Testing</p>
              <p className="cardDescription-service">
                We test to ensure no unintended data leaks or insufficient
                Transport layer protection. We also perform log analysis.
              </p>
            </div>
          </div>
        </div>

        <div className="techAndToolsSection section">
          <h1 className="sectionHeading">Tech Stacks and Tools We Use</h1>
          <div className="tabContainer">
            <button
              onClick={this.toggleToolsAndTechTab}
              type="button"
              className={`tabItem ${isTechTabActive && "active"}`}
            >
              Tools Used
            </button>
            <button
              onClick={this.toggleToolsAndTechTab}
              type="button"
              className={`tabItem ${!isTechTabActive && "active"}`}
            >
              CI/CD Deployment Tools
            </button>
          </div>

          <div className="technlogiesContainer-technology">
            {tabItemsList.map((eachItem) => (
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
        </div>

        <div className="startBuildingSection section">
          <div className="startBuildingSectionItem">
            <h1 className="sectionHeading">
              Start Building Your Web App Today
            </h1>
            <p className="sectionSubheading-service">
              Book a free discovery session.
            </p>
            <button
              type="button"
              className="getQuoteButton-startBuildingSection"
            >
              GET QUOTE
            </button>
          </div>
          <img src={giftBox} alt="giftImages" />
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

        <div className="closingSection">
          <h1 className="sectionHeading">
            Let’s Connect to Discuss How We Can Make An Awesome Product For You.
          </h1>
          <button className="letsTalkButton slideRight" type="button">
            CONTACT NOW
            <FaArrowRight className="rightArrow" />
          </button>
        </div>

        <Footer />
      </div>
    );
  }
}

export default QualityAssurance;
