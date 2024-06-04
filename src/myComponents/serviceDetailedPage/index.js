/* eslint-disable jsx-a11y/img-redundant-alt */
import { Component, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import webDevelopmentImage from "../../assets/webapp-sevice.webp";
import NavigationBar from "../navigationBar";
import whyChoose1 from "../../assets/whychoose-webapp-1.svg";
import whyChoose2 from "../../assets/whychoose-webapp-2.svg";
import whyChoose3 from "../../assets/whychoose-webapp-3.svg";
import whyChoose4 from "../../assets/whychoose-webapp-4.svg";
import crossImage from "../../assets/cross.svg";
import webDesignImage from "../../assets/websiteDesign.svg";
import appMaintenanceImage from "../../assets/appMaintenance.svg";
import appOptimizationImage from "../../assets/appOptimization.svg";
import thridPartyImage from "../../assets/thirdPartyIntegration.svg";
import qualityAssuranceImage from "../../assets/quality-assurance.svg";
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
import { useMediaQuery } from "@mui/material";

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

const WebDevelopment = () => {
  const [expanded, setExpanded] = useState(false);
  const [isTechTabActive, setIsTechTabActive] = useState(true);
  const isMd = useMediaQuery("(max-width:1068px)");
  const isSm = useMediaQuery("(max-width:768px)");

  const toggleToolsAndTechTab = () => {
    setIsTechTabActive((prevIsTechTabActive) => !prevIsTechTabActive);
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const tabItemsList = isTechTabActive ? technologiesList : toolsList;
  return (
    <div className="servicesDetailsSection">
      {!isMd && <NavigationBar />}
      <div
        className="landingSection-services section"
        style={{
          paddingInline: isMd ? " 2rem" : " 14%",
          display: "flex",
          gap: "5%",
          position: "relative",
        }}
      >
        <div style={{ width: isMd ? " 100%" : "60%" }}>
          <Breadcrumbs
            className="breadcrumb"
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>

          <h1
            className="sectionHeading"
            style={{ marginTop: "3.2rem", fontSize: isMd ? " 30px" : "48px" }}
          >
            Web App Development Services
          </h1>
          <p
            className="sectionDescription"
            style={{ fontSize: "20px", marginTop: "2rem" }}
          >
            Transforming your custom ideas into future-rich and fast-performing
            web application is our forte. Starting from basic website designs,
            including CMS and online store building to highly complex business
            website apps and design solutions, we will customize the best of web
            development solutions for you. <br />
          </p>
          {/* <p className="tagLine">
              Looking to build a powerful web application in the UK?
            </p> */}
          <button
            className="getQuoteButton"
            type="button"
            style={{ padding: ".8rem 0", fontSize: "20px", color: "#fff" }}
          >
            Get Quote
          </button>
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
            <img src={webDevelopmentImage} alt="web development image" />
          </div>
        )}
      </div>

      <div
        className="whyBuildSection section"
        style={{
          paddingInline: isMd ? " 2rem" : " 14%",
        }}
      >
        <h1
          className="sectionHeading"
          style={{ fontSize: isMd ? " 30px" : "48px" }}
        >
          Why Web App Is Significant For Your Business?
        </h1>
        <p className="sectionDescription">
          A well-designed web application is essential for
          enterprises/businesses seeking to improve their operational processes
          and stay ahead in the fast-paced digital world. It provides a scalable
          and secure platform for delivering business solutions to intended
          users.{" "}
        </p>
      </div>

      <div
        className="whyChooseSection section"
        style={{
          paddingInline: isMd ? " 2rem" : " 14%",
        }}
      >
        <h1
          className="sectionHeading"
          style={{ fontSize: isMd ? " 30px" : "48px" }}
        >
          Why You Should Hire HSB For Web App Development?
        </h1>
        <p className="sectionDescription">
          HSB offers the development of high-quality customized websites, web
          portals, and web apps. Our team of qualified web app developers
          promises qualitative deliverables with a secure web experience. Our
          domain expertise combined with innovative technology enables the
          building of disruptive user-friendly web applications that assure
          superior customer satisfaction and higher business agility.
        </p>
        <div className="cardsContainer-services">
          <div className="card-service">
            <img src={whyChoose1} alt="why choose us card image" />
            <p className="cardTitle-service">Customised Web Development</p>
            <p className="cardDescription-service">
              We offer tailor-made web solutions uniquely built for your
              business objectives. We ensure scalable, reliable, secure, and
              flexible web application solutions that meet changing business
              demands. Our team delivers a perfect blend of design thinking and
              innovation to craft value-driven user experiences.
            </p>
          </div>
          <div className="card-service">
            <img src={whyChoose2} alt="why choose us card image" />
            <p className="cardTitle-service">Full Stack Web Development</p>
            <p className="cardDescription-service">
              Through our full-stack web development services, bring your ideas
              to life. WE are proficient in both – frontend and backend tools
              and technology along with knowledge about databases, servers, and
              hosting environments. Our team has the proficiency to build modern
              web applications from the scratch.
            </p>
          </div>
          <div className="card-service">
            <img src={whyChoose3} alt="why choose us card image" />
            <p className="cardTitle-service">We Provide SaaS Development</p>
            <p className="cardDescription-service">
              Our SaaS development includes the design, implementation,
              deployment, and maintenance of SaaS-based applications. The entire
              process is flexible, scalable, and cost-effective. Our experienced
              developers are proficient in cloud technologies and tools to
              develop applications that are secure, flexible, scalable, and
              efficient.
            </p>
          </div>
          <div className="card-service">
            <img src={whyChoose4} alt="why choose us card image" />
            <p className="cardTitle-service">Modernizing Legacy Application</p>
            <p className="cardDescription-service">
              We, at HSB, understand your requirements closely and modernize
              your digital platform by determining what approach works best –
              rebuilding, rehosting, rearchitecting, or replacing. Leverage
              modern technologies and next-gen tools to overcome business
              challenges, drive business value, and achieve agility.
            </p>
          </div>
        </div>
      </div>

      <div
        className="section serciesProvidedSection"
        style={{
          paddingInline: isMd ? " 2rem" : " 14%",
        }}
      >
        <h1
          className="sectionHeading"
          style={{ fontSize: isMd ? " 30px" : "48px" }}
        >
          Our Web App Development Services
        </h1>
        <p className="sectionDescription">
          Accelerate your web application development to gain competitive edge.
        </p>
        <div className="cardsContainer-services">
          <div className="cardItem-service">
            <img src={crossImage} alt="why choose us card image" />
            <p className="cardTitle-service">Progressive Web Apps</p>
            <p className="cardDescription-service">
              We create eminent web apps with enhanced technical features,
              interactive visual content, easy navigation, and faster
              application loading, and offer distinct user experiences.
            </p>
          </div>
          <div className="cardItem-service">
            <img src={webDesignImage} alt="why choose us card image" />
            <p className="cardTitle-service">Front-end Web Development</p>
            <p className="cardDescription-service">
              Using advanced Frontend technologies, we deliver component-driven
              architecture. Our web development services combine amazing UI
              designs with seamless functionalities.
            </p>
          </div>
          <div className="cardItem-service">
            <img src={appMaintenanceImage} alt="why choose us card image" />
            <p className="cardTitle-service">Back-end Development </p>
            <p className="cardDescription-service">
              We make backend web development effortless. We offer AWS and Azure
              services to host the backend services over the cloud and SQL and
              other databases to fetch data reliably
            </p>
          </div>
          <div className="cardItem-service">
            <img src={appOptimizationImage} alt="why choose us card image" />
            <p className="cardTitle-service">E-Commerce Web App Development </p>
            <p className="cardDescription-service">
              Developing secure and efficient eCommerce websites to boost your
              online presence and sales. Our adept web developers ensure user
              engagement platforms by developing secure, user-friendly, and
              agile eCommerce websites.
            </p>
          </div>
          <div className="cardItem-service">
            <img src={thridPartyImage} alt="why choose us card image" />
            <p className="cardTitle-service">
              Custom Web Application Development
            </p>
            <p className="cardDescription-service">
              We bring experience of developing compatible and scalable websites
              that provides intuitive user experiences. We deliver superior
              website development services with our technical prowess for utmost
              customer satisfaction.
            </p>
          </div>
          <div className="cardItem-service">
            <img src={qualityAssuranceImage} alt="why choose us card image" />
            <p className="cardTitle-service">Quality Assurance</p>
            <p className="cardDescription-service">
              We ensure the applications deployed are of the highest quality and
              engineered according to the best industry standards.
            </p>
          </div>
        </div>
      </div>

      <div
        className="techAndToolsSection section"
        style={{
          paddingInline: isMd ? " 2rem" : " 14%",
        }}
      >
        <h1 className="sectionHeading">Tech Stacks and Tools We Use</h1>
        <div className="tabContainer">
          <button
            onClick={toggleToolsAndTechTab}
            type="button"
            className={`tabItem ${isTechTabActive && "active"}`}
          >
            Web App Frameworks
          </button>
          <button
            onClick={toggleToolsAndTechTab}
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

      <div
        className="startBuildingSection section"
        style={{
          paddingInline: isMd ? " 2rem" : " 14%",
        }}
      >
        <div className="startBuildingSectionItem">
          <h1 className="sectionHeading">Start Building Your Web App Today</h1>
          <p className="sectionSubheading-service">
            Book a free discovery session.
          </p>
          <button type="button" className="getQuoteButton-startBuildingSection">
            GET QUOTE
          </button>
        </div>
        <img className="giftBoxImage" src={giftBox} alt="giftImages" />
      </div>

      <div
        className="faqsSection section"
        style={{
          paddingInline: isMd ? " 2rem" : " 14%",
        }}
      >
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

      <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        textAlign: 'left',
        padding: '2rem',
        paddingInline: isMd ? '2rem' : '14%',
      }}
    >
      <h1
        style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '1.5rem',
          lineHeight: '1.2',
          textAlign: 'left',
        }}
      >
        Let’s Connect to Discuss How We Can Make An Awesome Product For You.
      </h1>
      <button className="letsTalkButton slideRight" type="button">
          Contact Now
        <FaArrowRight className="rightArrow" />
      </button>
    </div>

      <Footer />
    </div>
  );
};

export default WebDevelopment;
