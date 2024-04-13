/* eslint-disable jsx-a11y/img-redundant-alt */
import { Component } from "react";
import { FaArrowRight } from "react-icons/fa6";
import mobileDevelopmentImage from "../../assets/mobileApp.webp";
import whyChoose1 from "../../assets/wellversedImage.svg"
import whyChoose3 from "../../assets/openSourceProducrs-in-mobile.svg";
import whyChoose2 from "../../assets/strong-mobile-portfolio.svg";
import whyChoose4 from "../../assets/end-to-end-support-mobile.svg";

import cirlceci from '../../assets/cricleci.webp'
import bitrise from '../../assets/bitrise.webp'
import githubActions from '../../assets/githubActions.webp'
import expo from '../../assets/expo.webp'
import react from '../../assets/react.png'
import Redux from "../../assets/redux.webp";
import mobx from "../../assets/mobx.webp";
import vscode from '../../assets/vscode.webp'
import typeScript from "../../assets/typescript.webp";
import blocIconImage from '../../assets/bloc.webp'
import dartDevTools from '../../assets/dart-dev-tools.webp'
import riverpod from '../../assets/riverpod.webp'
import jest from "../../assets/jest.webp";
import sonarcube from "../../assets/sonarcube.webp";
import giftBox from "../../assets/collect-graphic.svg";

import crossImage from '../../assets/cross.svg'
import mobileServices from '../../assets/mobile-icon-services.svg'
import appMaintenanceImage from '../../assets/appMaintenance.svg'
import appOptimizationImage from '../../assets/appOptimization.svg'
import thridPartyImage from '../../assets/thirdPartyIntegration.svg'
import qualityAssuranceImage from '../../assets/quality-assurance.svg'


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
    imageUrl: Redux,
    name: "Redux",
  },
  {
    imageUrl: mobx,
    name: "Mobx/MST",
  },
  {
    imageUrl: typeScript,
    name: "TypeScript",
  },
  {
    imageUrl: cirlceci,
    name: "Circle CI",
  },
  {
    imageUrl: bitrise,
    name: "Bitrise",
  },
  {
    imageUrl: githubActions,
    name: "Github Actions",
  },
  {
    imageUrl: vscode,
    name: "VS Code",
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
    imageUrl: expo,
    name: "Expo",
  },
  {
    imageUrl: react,
    name: "React native CLI",
  },
];

const toolsList = [
  {
    imageUrl: blocIconImage,
    name: "BLoC (Business Logic Component)",
  },
  {
    imageUrl: dartDevTools,
    name: "Dart dev tools",
  },
  {
    imageUrl: riverpod,
    name: "RiverPod",
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
    Mobile App Development Services
  </Typography>,
];

class MobileDevelopment extends Component {
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
        <div className="landingSection-services mobileService section">
          <div>
            <Breadcrumbs
              className="breadcrumb"
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              {breadcrumbs}
            </Breadcrumbs>
            <h1 className="sectionHeading">Mobile App Development Services</h1>
            <p className="sectionDescription">
              The GeekyAnts mobile app development team are core contributors to
              popular frameworks like React Native and Flutter. We understand
              the nuances of building a mobile app better than most.Collaborate
              with us today to develop a mobile app in the UK that is engaging
              and impactful.
            </p>
            <p className="tagLine">
              Looking to build a powerful web application in the UK?
            </p>
            <button
              className="getQuoteButton mobile-getQuoteButton"
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
            Why Build a Mobile App for Your Business?
          </h1>
          <p className="sectionDescription">
            Having a mobile application is like being in constant touch with
            your target segment. It allows your business to create a priceless
            connection with the user. A robust application empowers you to
            deliver a personalized and convenient user experience.
          </p>
        </div>

        <div className="whyChooseSection section">
          <h1 className="sectionHeading">
            Why Choose GeekyAnts as Your Mobile Development Company in the UK?
          </h1>
          <div className="cardsContainer-services">
            <div className="card-service">
              <img src={whyChoose1} alt="why choose us card image" />
              <p className="cardTitle-service">
                Well-versed with Modern Mobile Tech Stacks
              </p>
              <p className="cardDescription-service">
                The team comprises senior mobile app developers and core
                contributors to popular mobile app development frameworks like
                React Native and Flutter. This gives a big advantage of being
                able to suggest the best tech journey for you.
              </p>
            </div>
            <div className="card-service">
              <img src={whyChoose2} alt="why choose us card image" />
              <p className="cardTitle-service">Strong Mobile Portfolio</p>
              <p className="cardDescription-service">
                Our portfolio includes high-performing apps of industry leaders.
                Some of them are a multifunctional app for Darden, a video
                conferencing app for 100ms, a gaming app for Mobile Premier
                League, mobile banking app for ICICI Bank, and a news app for
                Scroll News
              </p>
            </div>
            <div className="card-service">
              <img src={whyChoose3} alt="why choose us card image" />
              <p className="cardTitle-service">
                15+ Open-Source Products in the Mobile Space
              </p>
              <p className="cardDescription-service">
                We are big on open-source projects. NativeBase is an open-source
                UI library that we created that currently has 18k+ stars on
                GitHub. Apart from this, we are creators of Flutter Market,
                NativeBase Startup+, and more.
              </p>
            </div>
            <div className="card-service">
              <img src={whyChoose4} alt="why choose us card image" />
              <p className="cardTitle-service">
                End-to-end Support from Ideation to Post-launch
              </p>
              <p className="cardDescription-service">
                We take the onus of ensuring your business benefits from the
                mobile app. From ideation and development to post-deployment
                support, our team will guide you in the complete journey of the
                application creation process.
              </p>
            </div>
          </div>
        </div>

        <div className="section serciesProvidedSection">
          <h1 className="sectionHeading">
            Mobile App Development Services Provided By GeekyAnts
          </h1>
          <p className="sectionDescription">
            We provide mobile app development services centered around your
            requirement, augmented by our expertise. Our development team is
            skilled in incorporating new updates in popular frameworks to create
            a fresh and modern app. Our project timelines are optimized and
            ensure cost savings.
          </p>
          <div className="cardsContainer-services">
            <div className="cardItem-service">
              <img src={crossImage} alt="why choose us card image" />
              <p className="cardTitle-service">Cross-platform Development</p>
              <p className="cardDescription-service">
                We leverage the power of popular frameworks like React Native
                and Flutter to create apps that run seamlessly on multiple
                platforms, including iOS and Android.
              </p>
            </div>
            <div className="cardItem-service">
              <img src={mobileServices} alt="why choose us card image" />
              <p className="cardTitle-service">Mobile App Design</p>
              <p className="cardDescription-service">
                We develop visually appealing, user-friendly interfaces for
                mobile apps for both iOS and Android.
              </p>
            </div>
            <div className="cardItem-service">
              <img src={appMaintenanceImage} alt="why choose us card image" />
              <p className="cardTitle-service">App Maintenance and Support</p>
              <p className="cardDescription-service">
                We provide maintenance and support services, including upgrades
                of app versions and dependencies.
              </p>
            </div>
            <div className="cardItem-service">
              <img src={appOptimizationImage} alt="why choose us card image" />
              <p className="cardTitle-service">App Optimization</p>
              <p className="cardDescription-service">
                We help optimize the performance and user experience of the
                application to boost engagement.
              </p>
            </div>
            <div className="cardItem-service">
              <img src={thridPartyImage} alt="why choose us card image" />
              <p className="cardTitle-service">Third-party Integration</p>
              <p className="cardDescription-service">
                We integrate the apps with various third-party services, such as
                social media, payment gateways, analytics, and more.
              </p>
            </div>
            <div className="cardItem-service">
              <img src={qualityAssuranceImage} alt="why choose us card image" />
              <p className="cardTitle-service">Quality Assurance</p>
              <p className="cardDescription-service">
                We ensure that the delivered application is of exceptional
                quality through strict quality testing rounds.
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
              React Native
            </button>
            <button
              onClick={this.toggleToolsAndTechTab}
              type="button"
              className={`tabItem ${!isTechTabActive && "active"}`}
            >
              Flutter
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

export default MobileDevelopment;
