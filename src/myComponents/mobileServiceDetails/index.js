/* eslint-disable jsx-a11y/img-redundant-alt */
import { Component } from "react";
import { FaArrowRight } from "react-icons/fa6";
import Footer from "../footer/index.js";

import mobileDevelopmentImage from "../../assets/mobileApp.webp";
import whyChoose1 from "../../assets/wellversedImage.svg";
import whyChoose3 from "../../assets/openSourceProducrs-in-mobile.svg";
import whyChoose2 from "../../assets/strong-mobile-portfolio.svg";
import whyChoose4 from "../../assets/end-to-end-support-mobile.svg";

import crossImage from "../../assets/cross.svg";
import mobileServices from "../../assets/mobile-icon-services.svg";
import appMaintenanceImage from "../../assets/appMaintenance.svg";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import reactImage from "../../assets/react.png";
import flutter from "../../assets/flutter.png";
import kotlin from "../../assets/kotlin.svg";
import nativeScript from "../../assets/nativescript.svg";
import objectiveC from "../../assets/objective-c.png";
import angularImage from "../../assets/angular.webp";
import javaImage from "../../assets/java-logo.png";
import javascriptImage from "../../assets/javascript-logo.png";
import dotNet from "../../assets/dotnet.png";
import cssImage from "../../assets/css.png";
import sqlServer from "../../assets/sql-server.svg";
import mySql from "../../assets/mysql.svg";
import oracle from "../../assets/oracle-logo.png";
import postgreSql from "../../assets/postgresql.png";
import graphQl from "../../assets/graphql.png";
import selenium from "../../assets/selenium.png";
import cypress from "../../assets/cypress.png";
import jest from "../../assets/jest.webp";
import "./index.css";
import Navigationbar from "../navigationBar/index.js";

const frontendTab = [
  {
    imageUrl: reactImage,
    name: "React",
  },
  {
    imageUrl: flutter,
    name: "Flutter",
  },
  {
    imageUrl: kotlin,
    name: "Kotlin",
  },
  {
    imageUrl: nativeScript,
    name: "Native Script",
  },
  {
    imageUrl: objectiveC,
    name: "Objective C",
  },
  {
    imageUrl: cssImage,
    name: "CSS",
  },
];

const backendTab = [
  {
    imageUrl: angularImage,
    name: "Angular",
  },
  {
    imageUrl: javaImage,
    name: "Java",
  },
  {
    imageUrl: javascriptImage,
    name: "JavaScript",
  },
  {
    imageUrl: dotNet,
    name: ".Net",
  },
];

const databasesTab = [
  {
    imageUrl: sqlServer,
    name: "SQL Server",
  },
  {
    imageUrl: mySql,
    name: "MySQL",
  },
  {
    imageUrl: oracle,
    name: "Oracle",
  },
  {
    imageUrl: postgreSql,
    name: "PostgreSQL",
  },
  {
    imageUrl: graphQl,
    name: "GraphQL",
  },
];

const QaTab = [
  {
    imageUrl: selenium,
    name: "Selenium",
  },
  {
    imageUrl: cypress,
    name: "Cypress",
  },
  {
    imageUrl: jest,
    name: "Jest",
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

class MobileDevelopment extends Component {
  state = {
    expanded: false,
    value: 0,
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

  handleTabChange = (event, newValue) => {
    this.setState({
      value: newValue,
    });
  };

  render() {
    const { expanded, value } = this.state;

    return (
      <div className="servicesDetailsSection">
        <div className="navigationBar"><Navigationbar /></div>

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
              Kick off your business with our time-tested custom mobile app
              development services. We cover an entire mobile app development
              lifecycle beginning from deciding on the flow, UI & UX
              development, approvals, and testing, to launching of mobile app on
              Android and iStore. Our team is proficient with developing mobile
              apps on preferred technologies, such as Flutter, and React Native,
              and exhibits top-notch technologies with proven approaches.
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
            Why Mobile App Is Important For Your Business?
          </h1>
          <p className="sectionDescription">
            A mobile application for your business allows you to be in constant
            touch with your target segment of customers. Through a robust mobile
            application, you can deliver a personalized and convenient user
            experience.
          </p>
        </div>

        <div className="whyChooseSection section">
          <h1 className="sectionHeading">
            Why You Should Hire HSB For Mobile App Development?
          </h1>
          <p className="sectionDescription">
            If you're seeking mobile app development services, go no further
            than HSB. With our professional and one-of-a-kind solutions, you can
            expect excellent accessibility with next-generation technology and
            design. Furthermore, our team of skilled developers creates apps
            that are agile, resilient, and scalable.
          </p>
          <div className="cardsContainer-services">
            <div className="card-service">
              <img src={whyChoose1} alt="why choose us card image" />
              <p className="cardTitle-service">Futuristic Approach</p>
              <p className="cardDescription-service">
                We suggest future applications based on the upcoming
                technologies so that your business will stay of updates and
                security features. We provide modern and easy software solutions
                with the greatest potential for future business growth.
              </p>
            </div>
            <div className="card-service">
              <img src={whyChoose2} alt="why choose us card image" />
              <p className="cardTitle-service">
                Skilled Mobile App Development Teams
              </p>
              <p className="cardDescription-service">
                The team members have diverse backgrounds in many elements of
                rapid and effective Android, iOS, and Native mobile app
                development services. Furthermore, they thoroughly evaluate the
                nature of business in order to deliver the finest AI automation
                for it.
              </p>
            </div>
            <div className="card-service">
              <img src={whyChoose3} alt="why choose us card image" />
              <p className="cardTitle-service">
                Accelerated Application Development
              </p>
              <p className="cardDescription-service">
                Through our expertise, you can expect an enormous flexibility
                for various combinations of databases, web platforms, and
                applications. Our team provides fast and robust app development
                services and support.
              </p>
            </div>
            <div className="card-service">
              <img src={whyChoose4} alt="why choose us card image" />
              <p className="cardTitle-service">
                Comprehensive Product Development
              </p>
              <p className="cardDescription-service">
                From planning to product delivery and post-sale support, our
                experts offer end-to-end product development services to
                businesses. It not only boosts your company's value but works to
                improve results.
              </p>
            </div>
            <div className="card-service">
              <img src={whyChoose4} alt="why choose us card image" />
              <p className="cardTitle-service">Agile Development Methodology</p>
              <p className="cardDescription-service">
                Our development approach is agile and flexible. Our specialists
                collaborate on many parts of the assignments and continue to
                learn and adapt as they increase while enhancing the solution
                quality.
              </p>
            </div>
            <div className="card-service">
              <img src={whyChoose4} alt="why choose us card image" />
              <p className="cardTitle-service">Domain Expertise</p>
              <p className="cardDescription-service">
                Our team of expertise provides accurate and appropriate help
                with respect to domain management. The products are developed by
                specific subject experts with efficient encoding with an
                objective analytical approach.
              </p>
            </div>
          </div>
        </div>

        <div className="techAndToolsSection section">
          <h1 className="sectionHeading">Tech Stacks and Tools We Use</h1>

          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={this.handleTabChange}
                aria-label="basic tabs example"
              >
                <Tab label="Frontend" {...a11yProps(0)} />
                <Tab label="Backend" {...a11yProps(1)} />
                <Tab label="Databases" {...a11yProps(2)} />
                <Tab label="Mobile" {...a11yProps(3)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <div className="technlogiesContainer-technology">
                {frontendTab.map((eachItem) => (
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
                {backendTab.map((eachItem) => (
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
            <CustomTabPanel value={value} index={2}>
              <div className="technlogiesContainer-technology">
                {databasesTab.map((eachItem) => (
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
            <CustomTabPanel value={value} index={3}>
              <div className="technlogiesContainer-technology">
                {QaTab.map((eachItem) => (
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
            Our Mobile App Development Services
          </h1>
          <p className="sectionDescription">
            We provide the best assistance with overall mobile application
            development for various container-based applications and server-less
            architectures.
          </p>
          <div className="cardsContainer-services">
            <div className="cardItem-service">
              <img src={crossImage} alt="why choose us card image" />
              <p className="cardTitle-service">
                Android mobile app development
              </p>
              <p className="cardDescription-service">
                We help you in hosting a highly customizable app offering a
                unified experience across all screens. With our eminent team, we
                deliver highly immersive VR experiences assuring
                enterprise-grade mobile security.
              </p>
            </div>
            <div className="cardItem-service">
              <img src={mobileServices} alt="why choose us card image" />
              <p className="cardTitle-service">iOS mobile app development</p>
              <p className="cardDescription-service">
                We design and deliver enterprise and consumer apps for the
                entire Apple product range, such as watches, smartphones, smart
                TVs, cars, etc. Our team is proficient with Apple’s Human
                Interface Guidelines which enables easy compliance as well as
                ensuring user satisfaction with outstanding mobile apps.
              </p>
            </div>
            <div className="cardItem-service">
              <img src={appMaintenanceImage} alt="why choose us card image" />
              <p className="cardTitle-service">
                Cross-platform mobile app development
              </p>
              <p className="cardDescription-service">
                To make your presence on diverse platforms, it is significant to
                develop a versatile mobile app. Reduce your development and
                maintenance costs by going cross-platform. Our shared iOS and
                Android code base allows the fragmentation of Oss and devices to
                accelerate the market approach without compromising user appeal.
              </p>
            </div>
          </div>
        </div>

        <div className="section">
          <h1 className="sectionHeading">
            We Know What It Takes To Build An Ideal Mobile App
          </h1>
          <div
            className="subSections"
            style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}
          >
            <div className="sections">
              <h1 className="sectionSubHeading">Consulting & Strategy</h1>
              <p className="sectionDescription">
                We brainstorm your requirements to align mobile app development
                with your chosen business strategy.
              </p>
            </div>
            <div className="sections">
              <h1 className="sectionSubHeading">UI/UX Design</h1>
              <p className="sectionDescription">
                Mobile apps that give omnichannel user experiences, meeting
                customers’ needs and your business goals.
              </p>
            </div>
            <div className="sections">
              <h1 className="sectionSubHeading">Engineering & Delivery</h1>
              <p className="sectionDescription">
                Applies a defined iterative approach that is scalable to
                changing requirements considering timely delivery and
                budget-restricted.
              </p>
            </div>
            <div className="sections">
              <h1 className="sectionSubHeading">QA & Optimization</h1>
              <p className="sectionDescription">
                We integrate products into digital space, assuring quality
                deliverance with insightful performance for future optimization.
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
            For impeccable mobile app experience to your users
          </h1>
          <button className="letsTalkButton slideRight" type="button">
            Contact Us
            <FaArrowRight className="rightArrow" />
          </button>
        </div>

        <Footer />
      </div>
    );
  }
}

export default MobileDevelopment;
