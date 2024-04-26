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


import reactImage from '../../assets/react.png'
import flutterImage from "../../assets/flutter.png"
import javaScript from "../../assets/javascript-logo.png"
import HtmlImage from '../../assets/html.webp'
import angular from '../../assets/angular.webp'
import cssImage from "../../assets/css.png"
import nodeJs from '../../assets/nodejs.png'
import goLang from "../../assets/goLanguage.png"

import "./index.css";

const breadcrumbs = [
  <Link underline="hover" key="1" color="inherit" href="/">
    Home
  </Link>,
  <Link underline="hover" key="2" color="inherit" href="/services">
    Industries
  </Link>,
  <Typography key="3" color="text.primary">
    Manufacturing App Development Services
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
  }
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

class Manufacturing extends Component {
  state = {
    value: 0
  }

  handleTabChange = (event, newValue) => {
    this.setState({
      value: newValue,
    });
  };

  render() {
    const { value } = this.state

    return (
      <div className="industriesPageContainer">
        <div className="landingSection-services manufacturing section">
          <div>
            <Breadcrumbs
              style={{ color: "#fff" }}
              className="breadcrumb-industries"
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              {breadcrumbs}
            </Breadcrumbs>
            <h1 className="sectionHeading">
              Manufacturing & Retail App Development Services
            </h1>
            <p className="sectionDescription">
              Through our manufacturing and retail application development, we
              catalyse transformation in the industry. We have unwavering
              dedication to innovation, and precision-driven manufacturing app
              development services will give your business a competitive
              advantage. Our skilled technical experts bring perfect combination
              of expertise and experience to boost your ROI.
            </p>
            <button
              className="getQuoteButton industries-getQuoteButton"
              type="button"
            >
              GET QUOTE
            </button>
          </div>
          <img
            className="landingSectionImage-sericesPage"
            src={manufacturingImage}
            alt="web development image"
          />
        </div>

        <div className="solutions section">
          <h1 className="sectionHeading">Solutions we deliver</h1>
          <p className="sectionSubHeading">
            Manufacturers today face increasing demands for efficiency, agility,
            and innovation. Our solutions are designed to empower manufacturing
            excellence through cutting-edge technology and expert insights.
          </p>
          <div className="cardsContainer-services">
            <div className="card-service">
              <p className="cardTitle-service">Quality Control</p>
              <p className="cardDescription-service">
                Implementing higher quality standards to meet industry
                standards.
              </p>
            </div>
            <div className="card-service">
              <p className="cardTitle-service">Supply Chain Optimization</p>
              <p className="cardDescription-service">
                Optimize and control your supply chain ensuring on-time
                deliveries and cost savings.
              </p>
            </div>
            <div className="card-service">
              <p className="cardTitle-service">Production Efficiency</p>
              <p className="cardDescription-service">
                Improve production processes, reduce downtime, and improve
                overall efficiency.
              </p>
            </div>
            <div className="card-service">
              <p className="cardTitle-service">Insightful Data</p>
              <p className="cardDescription-service">
                Leverage our data analytics to make informed decisions stay
                ahead of the curve.
              </p>
            </div>
            <div className="card-service">
              <p className="cardTitle-service">Innovate with IoT</p>
              <p className="cardDescription-service">
                Through IoT, create smart, connected manufacturing environment.
              </p>
            </div>
            <div className="card-service">
              <p className="cardTitle-service">Streamlined Operations</p>
              <p className="cardDescription-service">
                Improve collaborations among different teams by simplifying
                complex workflows.
              </p>
            </div>
          </div>
        </div>

        <div className="section whyChooseHSB">
          <h1 className="sectionHeading">
            Why Hire HSB As Your Manufacturing & Retail App Development Company?
          </h1>
          <p className="sectionSubHeading">
            We adopt a consultative and collaborative approach, partnering
            closely with manufacturers and retailers to deeply understand their
            unique challenges and business goals. Leveraging our technical
            expertise, we design and develop tailored solutions that drive
            tangible business outcomes.
          </p>
          <div className="cardsContainer-services">
            <div className="card-service">
              <p className="cardTitle-service">
                All Digital Transformation Needs On A Single Click
              </p>
              <p className="cardDescription-service">
                Inspired with our engineering-first approach, UX-driven products
                and great UI that displays our robust design systems.
              </p>
            </div>
            <div className="card-service">
              <p className="cardTitle-service">
                Customized Enterprise Dashboards
              </p>
              <p className="cardDescription-service">
                We are experts in building enterprise dashboards for
                manufacturing and retain companies. Through our customized and
                data-driven dashboards, you can avail real-time insights about
                the overall performance.
              </p>
            </div>
            <div className="card-service">
              <p className="cardTitle-service">AI-powered Digital Solutions</p>
              <p className="cardDescription-service">
                Through AI, we provide solutions like predictive maintenance and
                anomaly detection. Leverage our AI based solutions to transform
                your existing business operations.
              </p>
            </div>
            <div className="card-service">
              <p className="cardTitle-service">
                Automate processes and workflows
              </p>
              <p className="cardDescription-service">
                We analyse your current processes and identify the scope of
                digitization and automation to deliver customized solutions that
                automates workflows.
              </p>
            </div>
            <div className="card-service">
              <p className="cardTitle-service">Industry-specific solutions</p>
              <p className="cardDescription-service">
                Our team has the ability to cater the complexities and demands
                of the manufacturing and retail industries. We are updated with
                compliance standards to serve your unique business requirements.
              </p>
            </div>
          </div>
        </div>

        <div className="section">
          <h1 className="sectionHeading">
            Few Modules for Your Custom Manufacturing App
          </h1>
          <p className="sectionSubHeading">
            Through our manufacturing and retain app development, we aim to
            create integrated solutions and enhance business processes.
            Following are our comprehensive manufacturing modules specific to
            the industry requirement.
          </p>

          <div className="moduleItems-industries">
            <div className="moduleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>Mobile accessibility </p>
            </div>
            <div className="moduleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>Real-time alerts and notifications</p>
            </div>
            <div className="moduleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>Predictive analytics and forecasting</p>
            </div>
            <div className="moduleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>Task assignment and management</p>
            </div>
            <div className="moduleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>Data-driven reports</p>
            </div>
            <div className="moduleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>Monitoring KPIs and assessment</p>
            </div>
            <div className="moduleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>Role based access control</p>
            </div>
            <div className="moduleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>Compliance monitoring</p>
            </div>
            <div className="moduleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>Documentation and integration</p>
            </div>
            <div className="moduleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>Equipment and asset tracking</p>
            </div>
          </div>
        </div>

        <div className="technologiesSectionIndustries section">
          <h1 className="sectionHeading">
            Technologies and Tools We Use for Manufacturing & Retail App
            Development Services
          </h1>
          <Box sx={{ width: "100%" }}>
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
            <CustomTabPanel value={value} index={0}>
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
          </Box>
        </div>

        <div className="closingSection">
          <h1 className="sectionHeading">
            Connect us now to avail our manufacturing app development services
          </h1>
          <button className="letsTalkButton slideRight" type="button">
            GET QUOTE
            <FaArrowRight className="rightArrow" />
          </button>
        </div>
      </div>
    );
  }
}

export default Manufacturing;
