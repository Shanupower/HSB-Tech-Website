/* eslint-disable jsx-a11y/img-redundant-alt */
import { Component } from "react";
import { FaArrowRight } from "react-icons/fa6";
import webDevelopmentImage from "../../assets/webapp-sevice.webp";
import Navbar from "../navbar";
import whyChoose1 from "../../assets/whychoose-webapp-1.svg";
import whyChoose2 from "../../assets/whychoose-webapp-2.svg";
import whyChoose3 from "../../assets/whychoose-webapp-3.svg";
import whyChoose4 from "../../assets/whychoose-webapp-4.svg";
import crossImage from '../../assets/cross.svg'
import webDesignImage from '../../assets/websiteDesign.svg'
import appMaintenanceImage from '../../assets/appMaintenance.svg'
import appOptimizationImage from '../../assets/appOptimization.svg'
import thridPartyImage from '../../assets/thirdPartyIntegration.svg'
import qualityAssuranceImage from '../../assets/quality-assurance.svg'
import ReactIcon from "../../assets/react.png";
import NextJsIcon from "../../assets/nextjs.png";
import Angular from "../../assets/angular.webp";
import Vue from "../../assets/vue.webp";
import Svelte from "../../assets/svelte.webp";
import Solid from "../../assets/solid.webp";
import Redux from "../../assets/redux.webp";
import mobx from "../../assets/mobx.webp";
import materialUi from "../../assets/materialUI.webp";
import typeScript from "../../assets/typescript.webp";
import eslint from "../../assets/eslint.webp";
import webpack from "../../assets/webpack.webp";
import babel from "../../assets/babel.webp";
import storyBook from "../../assets/storybook.webp";
import vscode from "../../assets/vscode.webp";
import graphql from "../../assets/graphql.png";
import jest from "../../assets/jest.webp";
import sonarcube from "../../assets/sonarcube.webp";
import axios from "../../assets/axios.webp";
import d3 from "../../assets/d3.webp";
import apoloclient from "../../assets/apoloclient.webp";
import tailwind from "../../assets/taliwind.webp";
import firebase from "../../assets/firebase.webp";
import giftBox from "../../assets/collect-graphic.svg";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Footer from "../footer/index.js";
import { MdOutlineDone } from "react-icons/md";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import "./index.css";

import { Chrono } from "react-chrono";

const technologiesList = [
  {
    imageUrl: ReactIcon,
    name: "ReactJS",
  },
  {
    imageUrl: NextJsIcon,
    name: "NextJS",
  },
  {
    imageUrl: Angular,
    name: "AngularJS",
  },
  {
    imageUrl: Vue,
    name: "VueJS",
  },
  {
    imageUrl: Svelte,
    name: "SvelteJS",
  },
  {
    imageUrl: Solid,
    name: "SolidJS",
  },
];

const toolsList = [
  {
    imageUrl: Redux,
    name: "Redux",
  },
  {
    imageUrl: mobx,
    name: "Mobx/MST",
  },
  {
    imageUrl: materialUi,
    name: "Material UI",
  },
  {
    imageUrl: typeScript,
    name: "TypeScript",
  },
  {
    imageUrl: eslint,
    name: "ESLint",
  },
  {
    imageUrl: webpack,
    name: "Webpack",
  },
  {
    imageUrl: babel,
    name: "Babel",
  },
  {
    imageUrl: storyBook,
    name: "Storybook",
  },
  {
    imageUrl: vscode,
    name: "VS Code",
  },
  {
    imageUrl: graphql,
    name: "GraphQL",
  },
  {
    imageUrl: jest,
    name: "Jest",
  },
  {
    imageUrl: sonarcube,
    name: "SonarCube",
  },
  {
    imageUrl: axios,
    name: "Axios",
  },
  {
    imageUrl: d3,
    name: "D3.js",
  },
  {
    imageUrl: apoloclient,
    name: "ApoloClient",
  },
  {
    imageUrl: tailwind,
    name: "TailwindCSS",
  },
  {
    imageUrl: firebase,
    name: "Firebase",
  },
];

const journeyTimelineItems = [
  {
    title: "2018",
  },
  {
    title: "2019",
  },
  {
    title: "2020",
  },
  {
    title: "2021",
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
    Web App Development Services
  </Typography>,
];

class WebDevelopment extends Component {
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
        <Navbar />
        <div className="landingSection-services section">
          <div>
          <Breadcrumbs
            className="breadcrumb"
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
            <h1 className="sectionHeading">Web App Development Services</h1>
            <p className="sectionDescription">
              Global leaders like Google, Darden, and PayPoint trust the
              GeekyAnts web app development team. Our experience and expertise
              allow us to deliver a solution that aligns with your business
              goals. <br />
              Partner with us today. Let us create something awesome.
            </p>
            <p className="tagLine">
              Looking to build a powerful web application in the UK?
            </p>
            <button className="getQuoteButton" type="button">
              Get Quote
            </button>
          </div>
          <img src={webDevelopmentImage} alt="web development image" />
        </div>

        <div className="whyBuildSection section">
          <h1 className="sectionHeading">
            Why Build a Web App for Your Business?
          </h1>
          <p className="sectionDescription">
            A well-designed web application is essential for
            enterprises/businesses seeking to improve their operational
            processes and stay ahead in the fast-paced digital world. It
            provides a scalable and secure platform for delivering business
            solutions to intended users.{" "}
          </p>
        </div>

        <div className="whyChooseSection section">
          <h1 className="sectionHeading">
            Why Choose GeekyAnts as Your Web App Development Company in the UK?
          </h1>
          <div className="cardsContainer-services">
            <div className="card-service">
              <img src={whyChoose1} alt="why choose us card image" />
              <p className="cardTitle-service">
                10+ Years of Experience in Web App Development Service
              </p>
              <p className="cardDescription-service">
                We have created (and are creating) web applications for industry
                leaders like Darden and PayPoint for over a decade. Leading
                enterprises highly regard our services for their innovative
                approach and ROI-focused strategies.
              </p>
            </div>
            <div className="card-service">
              <img src={whyChoose2} alt="why choose us card image" />
              <p className="cardTitle-service">
                10+ Years of Experience in Web App Development Service
              </p>
              <p className="cardDescription-service">
                We have created (and are creating) web applications for industry
                leaders like Darden and PayPoint for over a decade. Leading
                enterprises highly regard our services for their innovative
                approach and ROI-focused strategies.
              </p>
            </div>
            <div className="card-service">
              <img src={whyChoose3} alt="why choose us card image" />
              <p className="cardTitle-service">
                10+ Years of Experience in Web App Development Service
              </p>
              <p className="cardDescription-service">
                We have created (and are creating) web applications for industry
                leaders like Darden and PayPoint for over a decade. Leading
                enterprises highly regard our services for their innovative
                approach and ROI-focused strategies.
              </p>
            </div>
            <div className="card-service">
              <img src={whyChoose4} alt="why choose us card image" />
              <p className="cardTitle-service">
                10+ Years of Experience in Web App Development Service
              </p>
              <p className="cardDescription-service">
                We have created (and are creating) web applications for industry
                leaders like Darden and PayPoint for over a decade. Leading
                enterprises highly regard our services for their innovative
                approach and ROI-focused strategies.
              </p>
            </div>
          </div>
        </div>

        <div className="processSection section">
          <h1 className="sectionHeading">Our Web App Development Process</h1>

          <Chrono
            disableToolbar="true"
            theme={{
              primary: "black",
              titleColor: "black",
            }}
            mode="HORIZONTAL"
            items={journeyTimelineItems}
          >

          </Chrono>
        </div>

        <div className="section journeySection">
          <h1 className="sectionHeading">Our Web App Development Journey</h1>
          <Chrono
            disableToolbar="true"
            theme={{
              primary: "black",
              titleColor: "black",
            }}
            mode="VERTICAL"
            items={journeyTimelineItems}
          >
            <ul className="timelineContianer">
              <li className="timelineContianerItem">
                <MdOutlineDone className="tickIcon" />
                <p>
                  Recognized the advantages of Next.js in building SEO-friendly
                  web applications
                </p>
              </li>
              <li className="timelineContianerItem">
                <MdOutlineDone className="tickIcon" />
                <p>
                  Experiments with server-side rendering and static site
                  generation
                </p>
              </li>
              <li className="timelineContianerItem">
                <MdOutlineDone className="tickIcon" />
                <p>Used Next.js in our first project</p>
              </li>
            </ul>

            <ul className="timelineContianer">
              <li className="timelineContianerItem">
                <MdOutlineDone className="tickIcon" />
                <p>
                  Next.js 9 delivers improved performance and dynamic imports
                  for faster page rendering
                </p>
              </li>
              <li className="timelineContianerItem">
                <MdOutlineDone className="tickIcon" />
                <p>
                  Next.js becomes our top choice for building complex and
                  high-performance web apps
                </p>
              </li>
            </ul>

            <ul className="timelineContianer">
              <li>
                <div className="timelineContianerItem">
                  <MdOutlineDone className="tickIcon" />
                  <p>Transitioned our website www.geekyants.com to Next.js</p>
                </div>
              </li>
            </ul>

            <ul className="timelineContianer">
              <li className="timelineContianerItem">
                <MdOutlineDone className="tickIcon" />
                <p>Partnership with Vercel</p>
              </li>
            </ul>
          </Chrono>
        </div>

        <div className="section serciesProvidedSection">
          <h1 className="sectionHeading">
            Web App Development Services Provided By GeekyAnts
          </h1>
          <p className="sectionDescription">
            We provide web app development services augmented by our expertise
            centered around your requirement. Our development team is adept in
            using new updates in popular frameworks to create a fresh and modern
            web app. Our project timelines are also optimized to ensure cost
            savings.
          </p>
          <div className="cardsContainer-services">
            <div className="cardItem-service">
              <img src={crossImage} alt="why choose us card image" />
              <p className="cardTitle-service">Cross-platform Development</p>
              <p className="cardDescription-service">
                We create web applications that perform great on multiple
                platforms, including iOS and Android devices.
              </p>
            </div>
            <div className="cardItem-service">
              <img src={webDesignImage} alt="why choose us card image" />
              <p className="cardTitle-service">Website App Design</p>
              <p className="cardDescription-service">
                We develop visually appealing, user-friendly interfaces for
                website applications.
              </p>
            </div>
            <div className="cardItem-service">
              <img src={appMaintenanceImage} alt="why choose us card image" />
              <p className="cardTitle-service">App Maintenance and Support</p>
              <p className="cardDescription-service">
                We provide maintenance and support services, including upgrades
                of website versions and dependencies.
              </p>
            </div>
            <div className="cardItem-service">
              <img src={appOptimizationImage} alt="why choose us card image" />
              <p className="cardTitle-service">App Optimization</p>
              <p className="cardDescription-service">
                We optimize the performance and user experience of the website
                applications to improve the overall user experience and
                engagement.
              </p>
            </div>
            <div className="cardItem-service">
              <img src={thridPartyImage} alt="why choose us card image" />
              <p className="cardTitle-service">Third-party Integration</p>
              <p className="cardDescription-service">
                We integrate the applications with third-party services like
                social media, payment gateways, and analytics.
              </p>
            </div>
            <div className="cardItem-service">
              <img src={qualityAssuranceImage} alt="why choose us card image" />
              <p className="cardTitle-service">Quality Assurance</p>
              <p className="cardDescription-service">
                We ensure the applications deployed are of the highest quality
                and engineered according to the best industry standards.
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
              Web App Frameworks
            </button>
            <button
              onClick={this.toggleToolsAndTechTab}
              type="button"
              className={`tabItem ${!isTechTabActive && "active"}`}
            >
              Tools and libraries
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
                <p>{eachItem.name}</p>
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
          <img className="giftBoxImage" src={giftBox} alt="giftImages" />
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
                width: "100%"
              }}
              expanded={expanded === "panel1"}
              onChange={this.handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography
                  sx={{fontSize: "20px", fontWeight: "bold" }}
                >
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
                <Typography
                  sx={{fontSize: "20px", fontWeight: "bold" }}
                >
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
                <Typography
                  sx={{fontSize: "20px", fontWeight: "bold" }}
                >
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
                <Typography
                  sx={{ fontSize: "20px", fontWeight: "bold" }}
                >
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
                <Typography
                  sx={{ fontSize: "20px", fontWeight: "bold" }}
                >
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
                <Typography
                  sx={{fontSize: "20px", fontWeight: "bold" }}
                >
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
                <Typography
                  sx={{ fontSize: "20px", fontWeight: "bold" }}
                >
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

export default WebDevelopment;
