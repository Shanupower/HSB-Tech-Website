/* eslint-disable jsx-a11y/img-redundant-alt */
import { Component, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

import fullStackImage from "../../assets/fullstack.webp";
import whyChoose1 from "../../assets/user-centric-uiux.svg";
import whyChoose3 from "../../assets/specialized-design-uiuix.svg";
import whyChoose2 from "../../assets/industry-agnostic.svg";
import whyChoose4 from "../../assets/expeirenced-uiux.svg";
import giftBox from "../../assets/collect-graphic.svg";
import reactImage from "../../assets/react.png";
import nextJs from "../../assets/nextjs.png";
import nodeJs from "../../assets/nodejs.png";
import postgreSQL from "../../assets/postgresql.png";
import graphQL from "../../assets/graphql.png";
import flutter from "../../assets/flutter.png";
import vueJS from "../../assets/vue.webp";
import angular from "../../assets/angular.webp";
import HtmlImage from "../../assets/html.webp";
import cssImage from "../../assets/css.png";
import dotNet from "../../assets/dotnet.png";
import javaImage from "../../assets/java-logo.png";
import phpImage from "../../assets/php.png";
import pythonImage from "../../assets/python.png";
import mongoDb from "../../assets/mongoDB.webp";
import sqlServer from "../../assets/sql-server.svg";
import mySql from "../../assets/mysql.svg";
import oracle from "../../assets/oracle-logo.png";

import kotlin from "../../assets/kotlin.svg";
import objectiveC from "../../assets/objective-c.png";
import nativeScript from "../../assets/nativescript.svg";
import selenium from "../../assets/selenium.png";
import cypress from "../../assets/cypress.png";
import jest from "../../assets/jest.webp";

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
import { Chrono } from "react-chrono";

import "./index.css";
import { useMediaQuery } from "@mui/material";

const fsdProcessTimeline = [
  {
    title: "step-1",
    cardTitle: "Collecting and Analysing",
    cardDetailedText:
      "Initially, we collect all the required information and analyze your business requirements. In the first phase, we validate your idea and find optimal solutions to your requirement by conducting thorough research, risk analysis, estimation, and requirement elicitations.",
  },
  {
    title: "step-2",
    cardTitle: "Design",
    cardDetailedText:
      "Once you agree with our analysis, we strategize a perfect UI/UX strategy, prepare software requirement specifications, create wireframes, and build software architecture, and user interface design. We create prototypes after being validated to create an intuitive, flawless, and great user experience.",
  },
  {
    title: "step-3",
    cardTitle: "Development",
    cardDetailedText:
      "In the development phase, our experienced software developers transform your ideas into digital reality with the chosen languages, frameworks, technologies, and platforms. Through best coding practices and standards, we build customized solutions and perform continuous integration and delivery pipeline.",
  },
  {
    title: "step-4",
    cardTitle: "Testing",
    cardDetailedText:
      "Our testing process is robust, where we rigorously test the developed system for inconsistencies, bugs, security, quality, performance, and errors. We perform automated and manual testing to ensure that your software matches up to all your requirements and showcases the best performance on different devices and platforms.",
  },
  {
    title: "step-5",
    cardTitle: "Deployment",
    cardDetailedText:
      "Once we finish with the testing, we deploy the product either on preferred platforms or the cloud and integrate it with required configurations. We make sure that your product will have less downtime in a production environment and can be managed easily. We also monitor performance of the product in live environment and fix issues with comprehensive and continuous technical support.",
  },
  {
    title: "step-6",
    cardTitle: "Maintenance And Support",
    cardDetailedText:
      "We extend post-sale service in the form of maintenance and support, where we cover fixing issues, performance consistency, and changing user requirements. Our agile approach and continuous improvement cycle help organizations add new features seamlessly to stay relevant and competitive.",
  },
];

const frontendTab = [
  {
    imageUrl: reactImage,
    name: "React",
  },
  {
    imageUrl: HtmlImage,
    name: "HTML",
  },
  {
    imageUrl: angular,
    name: "Angular",
  },
  {
    imageUrl: cssImage,
    name: "CSS",
  },
  {
    imageUrl: vueJS,
    name: "Vue.JS",
  },
  {
    imageUrl: nextJs,
    name: "Next.JS",
  },
];

const backendTab = [
  {
    imageUrl: dotNet,
    name: ".Net",
  },
  {
    imageUrl: javaImage,
    name: "Java",
  },
  {
    imageUrl: phpImage,
    name: "PHP",
  },
  {
    imageUrl: nodeJs,
    name: "Node.JS",
  },
  {
    imageUrl: pythonImage,
    name: "Vue.JS",
  },
];

const databasesTab = [
  {
    imageUrl: mongoDb,
    name: "Mongo DB",
  },
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
    imageUrl: postgreSQL,
    name: "PostgreSQL",
  },
  {
    imageUrl: graphQL,
    name: "GraphQL",
  },
];

const mobileTab = [
  {
    imageUrl: flutter,
    name: "Flutter",
  },
  {
    imageUrl: reactImage,
    name: "React Native",
  },
  {
    imageUrl: kotlin,
    name: "Kotlin",
  },
  {
    imageUrl: objectiveC,
    name: "Objective C",
  },
  {
    imageUrl: nativeScript,
    name: "Native Script",
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
    Full Stack App Development Services
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

const FullStackDevelopment = () => {
  const [expanded, setExpanded] = useState(false);
  const [value, setValue] = useState(0);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const isMd = useMediaQuery("(max-width:768px)");
  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="servicesDetailsSection">
      <div className="landingSection-services fullstackLandingSection section">
        <div>
          <Breadcrumbs
            className="breadcrumb"
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
          <h1 className="sectionHeading">Full Stack Development</h1>
          <p className="sectionDescription">
            We offer Full Stack development services required for a complete
            development of a product, including frontend, backend, database
            management, etc. As a Full Stack development company, we ensure that
            our Full Stack developers are all set to assist you with needed
            expertise in all areas, identifying roles and responsibilities with
            corresponding challenges.
          </p>
          <button
            className="getQuoteButton fullstack-getQuoteButton"
            type="button"
          >
            Get Quote
          </button>
        </div>
        <img
          className="landingSectionImage-sericesPage"
          src={fullStackImage}
          alt="web development image"
        />
      </div>

      <div className="whyChooseSection section">
        <h1 className="sectionHeading">
          Why You Should Hire HSB For Full Stack Development?
        </h1>
        <p className="sectionDescription">
          Hiring HSB for your full-stack development has its own set of benefits
          as we guarantees a highly lucrative and effective productivity. Our
          full-stack developers are specialised in all areas, along with an
          equivalent emphasis on major project areas like quality, user
          experience, client satisfaction, and timeliness.
        </p>
        <div className="cardsContainer-services">
          <div className="card-service">
            <img src={whyChoose1} alt="why choose us card image" />
            <p className="cardTitle-service">We Are All-Rounder</p>
            <p className="cardDescription-service">
              By full-stack development, we work on different technologies,
              i.e., front-end technologies like JavaScript, HTML, CSS, and
              backend technologies like PHP, Node, Java, Python, and so on. Our
              team also brings the expertise of database and server management,
              making them all-rounders of web and mobile app development.
            </p>
          </div>
          <div className="card-service">
            <img src={whyChoose2} alt="why choose us card image" />
            <p className="cardTitle-service">We Help Saving on Time & Cost</p>
            <p className="cardDescription-service">
              Our full-stack developers help in solving any issue and greatly
              reduce infrastructure, personnel, and management cost. As our
              developers are multi-skilled with different technologies, you can
              reduce the number of persons required to develop an application.
              We ensure to keep every part of the web application running
              smoothly.
            </p>
          </div>
          <div className="card-service">
            <img src={whyChoose3} alt="why choose us card image" />
            <p className="cardTitle-service">We Deliver Faster</p>
            <p className="cardDescription-service">
              We employ numerous technologies or frameworks to fix issues
              quickly and deliver rapidly. Through our teamwork we know how to
              effectively communicate with frontend and backend developers, thus
              result in a faster time-to-market of an application.
            </p>
          </div>
          <div className="card-service">
            <img src={whyChoose4} alt="why choose us card image" />
            <p className="cardTitle-service">Our Services Are Scalable</p>
            <p className="cardDescription-service">
              We maintain a flexible approach of full-stack development to be
              adaptable for startups, small teams as well as big enterprises.
              Our full-stack services will be proven lucrative for startups as
              they require faster prototyping in less time and within a
              stipulated budget. Through our collaborative work, innovative
              thinking, and knowledge of various technologies and approaches we
              can strategize full-stack development for larger concerns too.
            </p>
          </div>
        </div>
      </div>

      <div className="startBuildingSection section">
        <div className="startBuildingSectionItem">
          <h1 className="sectionHeading">
            Let’s develop your Full Stack app today.
          </h1>
          <button type="button" className="getQuoteButton-startBuildingSection">
            Connect Now
          </button>
        </div>
        {!isMd && <img src={giftBox} alt="giftImages" />}
      </div>

      <div className="techAndToolsSection section">
        <h1 className="sectionHeading">UI/UX Tools We Use</h1>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleTabChange}
              aria-label="basic tabs example"
            >
              <Tab label="Frontend" {...a11yProps(0)} />
              <Tab label="Backend" {...a11yProps(1)} />
              <Tab label="Databases" {...a11yProps(2)} />
              <Tab label="Mobile" {...a11yProps(3)} />
              <Tab label="QA" {...a11yProps(4)} />
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
              {mobileTab.map((eachItem) => (
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
          <CustomTabPanel value={value} index={4}>
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

      <div className="fsd-process section">
        <h1 className="sectionHeading">Our Full Stack Development Process</h1>
        <p className="sectionDescription">
          We bring best of each stack through our well-defined strategies – be
          it frontend, backend, databases, framework, or infrastructure setup.
        </p>

        <Chrono
          items={fsdProcessTimeline}
          mode="VERTICAL"
          slideShow
          slideItemDuration={3000}
          cardHeight={250}
          cardWidth={600}
          fontSizes={{
            title: "1.1rem",
          }}
          contentDetailsHeight={150}
          disableToolbar="true"
        />
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
            onChange={handleChange("panel1")}
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
                To learn more about how we can help, fill out the "hire us" form
                on our website.{" "}
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
            onChange={handleChange("panel2")}
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
                However, we do have pricing models that are in-tune with various
                business expectations and goals. To know more, we encourage you
                to get in touch with us to discuss the full extent of your
                services.{" "}
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            style={{
              marginBottom: "15px",
              boxShadow: "1px 2px 5px lightgray",
            }}
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
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
                A straightforward web application with basic functionality could
                take 1-3 months to construct, whereas more sophisticated
                projects might take 6–12 months or even more.
              </Typography>{" "}
              <br />
              <Typography>
                The number of people on the development team, the available
                resources, the technological stack that is being used, and the
                amount of testing and quality assurance that is needed are some
                of the variables that might impact the development schedule.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            style={{
              marginBottom: "15px",
              boxShadow: "1px 2px 5px lightgray",
            }}
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
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
                calibre of its work and seeks to establish enduring connections
                with its customers. We collaborate closely with clients to fully
                grasp their particular requirements and offer continuing
                assistance to ensure their web app succeeds.
              </Typography>{" "}
              <br />
              <Typography>
                According to each customer's individual requirements, GeekyAnts
                provides a range of maintenance and support services, such as
                routine updates, bug fixes, security upgrades, and performance
                improvements.
              </Typography>{" "}
              <br />
              <Typography>
                We have more than 17 years of expertise in the business and are
                aware of how crucial continual maintenance is for online
                applications. The knowledgeable staff at GeekyAnts is committed
                to ensuring clients' web apps are safe, current, and completely
                functional. To provide timely service when required, we provide
                a variety of support solutions{" "}
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
            onChange={handleChange("panel5")}
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
                acknowledge that it might be difficult for businesses to select
                the best platform, and we provide our assistance.
              </Typography>{" "}
              <br />
              <Typography>
                React, Angular, Vue, and Next.js are popular web app development
                frameworks; GeekyAnts recommends Next.js as the top platform for
                companies looking to build scalable, effective, and SEO-friendly
                web applications.
              </Typography>{" "}
              <br />
              <Typography>
                A React-based web app development framework called Next.js makes
                it easier to create React apps that are rendered on the server.
                It offers simplicity, effectiveness, SEO friendliness,
                adaptability, and a sizable community.
              </Typography>
              <Typography>
                We at GeekyAnts have found Next.js dependable and effective for
                our web app development projects. Using Next.js, our team of
                skilled developers can produce high-quality online applications
                that satisfy the needs of their clients' businesses. We've
                teamed up with Vercel, the Next.js developer, to provide our
                clients with global web development options.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            style={{
              marginBottom: "15px",
              boxShadow: "1px 2px 5px lightgray",
            }}
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
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
                Companies can benefit from cheaper labour expenses, particularly
                in nations like India, by outsourcing. High-quality web apps may
                be produced as a result of outsourcing, which also gives access
                to qualified people that offer fresh ideas and knowledge to
                projects. Outsourcing also enables businesses to focus on their
                core operations while boosting efficiency. Access to the most
                recent tools and technologies may also be had by working with a
                web app development business without having to make an
                investment in them.
              </Typography>{" "}
              <br />
              <Typography>
                Finally, since businesses share these risks with their partner,
                outsourcing can help reduce the risks related to developing web
                apps. To sum up, businesses can fully profit from these
                advantages by outsourcing web app development to a reputable
                company like GeekyAnts.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            style={{
              marginBottom: "15px",
              boxShadow: "1px 2px 5px lightgray",
            }}
            expanded={expanded === "panel7"}
            onChange={handleChange("panel7")}
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
                The effectiveness and user-friendliness of your current app can
                be enhanced and improved with the help of GeekyAnts' web app
                development services. We offer a customized approach to each
                project and have expertise working with a variety of clients,
                from startups to Fortune 500 corporations. Our team of project
                managers, designers, and developers is dedicated to meeting and
                exceeding your expectations with our work.
              </Typography>
              <br />
              <Typography>
                GeekyAnts also provides specialized solutions that are catered
                to your particular needs because we recognize that every
                business is different. Our team will collaborate with you to
                comprehend your business requirements and provide a solution
                that meets those requirements, whether you need to redesign your
                existing app, add new features, or increase its performance.
              </Typography>
              <br />
              <Typography>
                We also offer various engagement models that may be tailored to
                your company's needs, and our pricing is competitive. We
                encourage you to work with us for cutting-edge web app solutions
                to improve your current app or create a new one.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <div className="closingSection section">
        <h1 className="sectionHeading">Want to hire a Full Stack Developer?</h1>
        <h1 className="sectionSubHeading">
          We deliver a full proof and robust application that maximises your
          ROI.
        </h1>
        <button className="letsTalkButton slideRight" type="button">
          CONTACT NOW
          <FaArrowRight className="rightArrow" />
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default FullStackDevelopment;
