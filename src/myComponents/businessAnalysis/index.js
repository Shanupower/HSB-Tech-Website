/* eslint-disable jsx-a11y/img-redundant-alt */
import { Component } from "react";
import { FaArrowRight } from "react-icons/fa6";

import BusinessAnalysisServicesImage from "../../assets/business-analysis.webp";
import whyChoose1 from "../../assets/domainKnowledge-ba.svg";
import whyChoose3 from "../../assets/collaborativePhilosophy-ba.svg";
import whyChoose2 from "../../assets/experRequirement-ba.svg";
import whyChoose4 from "../../assets/dependableBusiness-ba.svg";
import whyChoose5 from "../../assets/clearCommunication-ba.svg";
import whyChoose6 from "../../assets/streamlinedChange-ba.svg";

import figmaImage from "../../assets/figma.webp";
import adobexd from "../../assets/adobexd.webp";
import giftBox from "../../assets/collect-graphic.svg";
import jira from "../../assets/jira.webp";
import trello from "../../assets/trello.webp";
import msAzure from "../../assets/msAzure.webp";
import msExcel from "../../assets/msExcel.webp";
import tableau from "../../assets/tableau.webp";
import visio from "../../assets/visio.webp";
import powerBI from "../../assets/powerBI.webp";
import miro from "../../assets/miro.webp";
import mermaid from "../../assets/mermaid.webp";
import lucidChart from "../../assets/lucidChart.webp";
import msTeams from "../../assets/msTeams.webp";
import slack from "../../assets/slack.webp";
import skype from "../../assets/skype.webp";
import zoom from "../../assets/zoom.webp";
import sharePoint from "../../assets/sharePoint.webp";

import servicesImage1 from "../../assets/requirementGathering-ba.svg";
import servicesImage2 from "../../assets/stakeholder-ba.svg";
import servicesImage3 from "../../assets/brd-ba.svg";
import servicesImage4 from "../../assets/process-management-ba.svg";
import servicesImage5 from "../../assets/product-management-ba.svg";
import servicesImage6 from "../../assets/project-management-ba.svg";
import servicesImage7 from "../../assets/release-management-ba.svg";
import servicesImage8 from "../../assets/pre-sales-management-ba.svg";
import servicesImage9 from "../../assets/root-cause-ba.svg";
import servicesImage10 from "../../assets/agile-ba.svg";

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

const tab1ItemsList = [
  {
    imageUrl: jira,
    name: "JIRA",
  },
  {
    imageUrl: trello,
    name: "Trello",
  },
  {
    imageUrl: msAzure,
    name: "MS Azure DevOps",
  },
];

const tab2ItemsList = [
  {
    imageUrl: msExcel,
    name: "MS Excel",
  },
  {
    imageUrl: tableau,
    name: "Tableau",
  },
  {
    imageUrl: visio,
    name: "Visio",
  },
  {
    imageUrl: powerBI,
    name: "Power BI",
  },
];

const tab3ItemsList = [
  {
    imageUrl: miro,
    name: "Miro",
  },
  {
    imageUrl: mermaid,
    name: "Mermaid.js",
  },
  {
    imageUrl: lucidChart,
    name: "Lucidchart",
  },
];

const tab4ItemsList = [
  {
    imageUrl: msTeams,
    name: "MS Teams",
  },
  {
    imageUrl: slack,
    name: "Slack",
  },
  {
    imageUrl: skype,
    name: "Skype",
  },
  {
    imageUrl: zoom,
    name: "Zoom",
  },
  {
    imageUrl: sharePoint,
    name: "SharePoint",
  },
];

const tab5ItemsList = [
  {
    imageUrl: figmaImage,
    name: "Figma",
  },
  {
    imageUrl: adobexd,
    name: "Adobe XD",
  },
  {
    imageUrl: miro,
    name: "Miro",
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
    Business Analysis Services
  </Typography>,
];

class BusinessAnalysisServices extends Component {
  state = {
    expanded: false,
    tabItemsList: tab1ItemsList,
  };

  handleChange = (panel) => (event, isExpanded) => {
    this.setState((prevState) => ({
      expanded: isExpanded ? panel : false,
    }));
  };

  handleActiveTab = (tabName) => {
    switch (tabName) {
      case "REQUIREMENTS":
        this.setState({
          tabItemsList: tab1ItemsList,
        });
        break;
      case "DATA_ANALYSIS":
        this.setState({
          tabItemsList: tab2ItemsList,
        });
        break;
      case "PROCESS_MODELLING":
        this.setState({
          tabItemsList: tab3ItemsList,
        });
        break;
      case "COLLABORATION":
        this.setState({
          tabItemsList: tab4ItemsList,
        });
        break;
      case "PROTOTYPING":
        this.setState({
          tabItemsList: tab5ItemsList,
        });
        break;
      default:
        break;
    }
  };

  render() {
    const { expanded, tabItemsList } = this.state;

    return (
      <div className="servicesDetailsSection">
        <div className="landingSection-services businessAnalysisServices section">
          <div>
            <Breadcrumbs
              className="breadcrumb"
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              {breadcrumbs}
            </Breadcrumbs>
            <h1 className="sectionHeading">Business Analysis Services</h1>
            <p className="sectionDescription">
              Our business analysis services in the UK will help you unlock the
              true potential of our business. From identifying growth
              opportunities to optimizing processes, we've got you covered.
            </p>
            <p className="tagLine">
              Take your business to new heights with powerful data and
              analytics.
            </p>
            <button
              className="getQuoteButton businessAnalysisServices-getQuoteButton"
              type="button"
            >
              Get Quote
            </button>
          </div>
          <img
            className="landingSectionImage-sericesPage"
            src={BusinessAnalysisServicesImage}
            alt="web development image"
          />
        </div>

        <div className="whyBuildSection section">
          <h1 className="sectionHeading">
            Why Leverage Business Analysis Services?
          </h1>
          <p className="sectionDescription">
            Business analysis consulting drives success by aligning objectives,
            improving processes, gathering requirements, mitigating risks, and
            facilitating better decision-making. The right business analysis
            process also helps optimize resources and achieve sustainable
            growth.
          </p>
        </div>

        <div className="whyChooseSection section">
          <h1 className="sectionHeading">
            Why Choose GeekyAnts as Your Business Analysis Company in the UK?
          </h1>
          <div className="cardsContainer-services">
            <div className="card-service">
              <img src={whyChoose1} alt="why choose us card image" />
              <p className="cardTitle-service">Domain Knowledge</p>
              <p className="cardDescription-service">
                We have a proven track record of delivering high ROI across
                industries and domains. From finance to healthcare, information
                technology to manufacturing, we have deep insights into
                different sectors' specific requirements and intricacies.
              </p>
            </div>
            <div className="card-service">
              <img src={whyChoose2} alt="why choose us card image" />
              <p className="cardTitle-service">Collaborative Philosophy</p>
              <p className="cardDescription-service">
                Our business analysts excel in building strong relationships and
                working seamlessly with cross-functional teams. We understand
                the importance of aligning stakeholders. This makes us create a
                collaborative environment that drives the success of our
                projects.
              </p>
            </div>
            <div className="card-service">
              <img src={whyChoose3} alt="why choose us card image" />
              <p className="cardTitle-service">
                Expert Requirement Gathering and Analysis
              </p>
              <p className="cardDescription-service">
                Our business analysts excel in eliciting, analyzing, and
                documenting requirements from various stakeholders. They employ
                interviews, workshops, surveys, and observations to understand
                business needs comprehensively.
              </p>
            </div>
            <div className="card-service">
              <img src={whyChoose4} alt="why choose us card image" />
              <p className="cardTitle-service">
                Dependable Business Process Improvement
              </p>
              <p className="cardDescription-service">
                We drive efficiency gains through process modeling,
                reengineering techniques, and optimization strategies. Our
                business analysts are skilled at evaluating existing processes,
                identifying areas for improvement, and implementing
                transformative changes.
              </p>
            </div>
            <div className="card-service">
              <img src={whyChoose5} alt="why choose us card image" />
              <p className="cardTitle-service">
                Clear Communication and Facilitation
              </p>
              <p className="cardDescription-service">
                Our teams can bridge the gap between technical and non-technical
                stakeholders fostering collaboration, alignment, and successful
                project outcomes. They excel at facilitating meetings,
                workshops, and discussions, ensuring that all stakeholders are
                heard and understood.
              </p>
            </div>
            <div className="card-service">
              <img src={whyChoose6} alt="why choose us card image" />
              <p className="cardTitle-service">Streamlined Change Management</p>
              <p className="cardDescription-service">
                Our business analysts guide organizations through the entire
                change management process, helping them navigate challenges and
                embrace new ways of working. We ensure a smooth transition and
                sustainable adoption of the proposed changes.
              </p>
            </div>
          </div>
        </div>

        <div className="section serciesProvidedSection">
          <h1 className="sectionHeading">
            Business Analysis Services Provided by GeekyAnts
          </h1>
          <p className="sectionDescription">
            At GeekyAnts, we take pride in our tech-savvy and innovative
            culture, which shapes the way we approach various aspects of our
            work. Here's how we view and prioritize the different processes:
          </p>
          <div className="cardsContainer-services">
            <div className="cardItem-service">
              <img src={servicesImage1} alt="why choose us card image" />
              <p className="cardTitle-service">Requirement Gathering</p>
              <p className="cardDescription-service">
                In order to deliver outstanding results, we place a strong
                emphasis on thorough requirement gathering. Understanding our
                client's needs and project objectives is crucial to providing
                tailored solutions that meet and exceed expectations.
              </p>
            </div>
            <div className="cardItem-service">
              <img src={servicesImage2} alt="why choose us card image" />
              <p className="cardTitle-service">Stakeholder Interviews</p>
              <p className="cardDescription-service">
                Engaging directly with stakeholders is a vital part of our
                development process. We value their insights and feedback,
                enabling us to create products that truly resonate with our
                clients and their users.
              </p>
            </div>
            <div className="cardItem-service">
              <img src={servicesImage3} alt="why choose us card image" />
              <p className="cardTitle-service">BRD/PRD/SRS Documentation</p>
              <p className="cardDescription-service">
                Well-structured documentation is the foundation of successful
                projects. By meticulously documenting business, product, and
                software requirements, we ensure that everyone involved has a
                clear and unified vision.
              </p>
            </div>
            <div className="cardItem-service">
              <img src={servicesImage4} alt="why choose us card image" />
              <p className="cardTitle-service">Process Management</p>
              <p className="cardDescription-service">
                Efficiency is at the heart of how we work. Our process-oriented
                approach enables us to streamline workflows, boost productivity,
                and maintain the highest standards in everything we do.
              </p>
            </div>
            <div className="cardItem-service">
              <img src={servicesImage5} alt="why choose us card image" />
              <p className="cardTitle-service">Product Management</p>
              <p className="cardDescription-service">
                Our product management strategy involves market research,
                customer feedback analysis, and roadmap planning. We develop
                innovative and successful solutions by staying ahead of industry
                trends and user demands.
              </p>
            </div>
            <div className="cardItem-service">
              <img src={servicesImage6} alt="why choose us card image" />
              <p className="cardTitle-service">Project Management</p>
              <p className="cardDescription-service">
                Our projects are meticulously managed to ensure on-time and
                on-budget delivery. We maintain smooth operations and client
                satisfaction through effective planning, task allocation, and
                progress tracking.
              </p>
            </div>
            <div className="cardItem-service">
              <img src={servicesImage7} alt="why choose us card image" />
              <p className="cardTitle-service">Release Management</p>
              <p className="cardDescription-service">
                We take great care in our release management process to
                guarantee seamless product launches and updates. Rigorous
                testing and feedback collection allow us to deliver reliable and
                user-friendly software.
              </p>
            </div>
            <div className="cardItem-service">
              <img src={servicesImage8} alt="why choose us card image" />
              <p className="cardTitle-service">Pre-sales Estimation</p>
              <p className="cardDescription-service">
                Transparency and accuracy are the cornerstones of our pre-sales
                estimations. By carefully analyzing project requirements and our
                team's capabilities, we set realistic expectations for our
                clients.
              </p>
            </div>
            <div className="cardItem-service">
              <img src={servicesImage9} alt="why choose us card image" />
              <p className="cardTitle-service">Root Cause Analysis</p>
              <p className="cardDescription-service">
                Continuously improving our processes is essential to our growth.
                Through root cause analysis, we identify and address underlying
                issues, ensuring long-term success and efficiency.
              </p>
            </div>
            <div className="cardItem-service">
              <img src={servicesImage10} alt="why choose us card image" />
              <p className="cardTitle-service">Agile and Scrum Practices</p>
              <p className="cardDescription-service">
                Embracing Agile and Scrum methodologies empowers us to
                collaborate effectively, adapt quickly, and deliver incremental
                value. We thrive in dynamic environments and use these practices
                to respond to changing requirements with agility.
              </p>
            </div>
          </div>
        </div>

        <div className="techAndToolsSection section">
          <h1 className="sectionHeading">Tech Stacks and Tools We Use</h1>
          <div className="tabContainer">
            <button
              onClick={() => this.handleActiveTab("REQUIREMENTS")}
              type="button"
              className="tabItem active"
            >
              Requirements
            </button>
            <button
              onClick={() => this.handleActiveTab("DATA_ANALYSIS")}
              type="button"
              className="tabItem active"
            >
              Data Analysis
            </button>
            <button
              onClick={() => this.handleActiveTab("PROCESS_MODELLING")}
              type="button"
              className="tabItem active"
            >
              Process Modeling
            </button>
            <button
              onClick={() => this.handleActiveTab("COLLABORATION")}
              type="button"
              className="tabItem active"
            >
              Collaboration
            </button>
            <button
              onlick={() => this.handleActiveTab("PROTOTYPING")}
              type="button"
              className="tabItem active"
            >
              Prototyping
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

export default BusinessAnalysisServices;
