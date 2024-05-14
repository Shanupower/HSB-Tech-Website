/* eslint-disable jsx-a11y/img-redundant-alt */
import { Component } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Typography from "@mui/material/Typography";

import fintechLandingSectionImage from "../../assets/fintechIndustires-landingSection.webp";
import { FaArrowRight } from "react-icons/fa";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

import reactImage from "../../assets/react.png";
import flutterImage from "../../assets/flutter.png";
import javaScript from "../../assets/javascript-logo.png";
import HtmlImage from "../../assets/html.webp";
import angular from "../../assets/angular.webp";
import cssImage from "../../assets/css.png";
import nodeJs from "../../assets/nodejs.png";
import goLang from "../../assets/goLanguage.png";

import "./index.css";

const breadcrumbs = [
  <Link underline="hover" key="1" color="inherit" href="/">
    Home
  </Link>,
  <Link underline="hover" key="2" color="inherit" href="/services">
    Industries
  </Link>,
  <Typography key="3" color="text.primary">
    Fintech App Development Services
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

class FintechIndustry extends Component {
  state = {
    value: 0,
  };

  handleTabChange = (event, newValue) => {
    this.setState({
      value: newValue,
    });
  };

  render() {
    const { value } = this.state;

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
            <h1 className="sectionHeading">Fintech App Development Services</h1>
            <p className="sectionDescription">
              Fintech is a rapidly growing industry that is constantly evolving
              with innovations. In recent years, the area has been segmented for
              various purposes. We have developed our services in tune with the
              advancements of fintech and have helped companies develop new
              ideas and bring them to mainstream business.
            </p>
          </div>
          <img
            className="landingSectionImage-sericesPage"
            src={fintechLandingSectionImage}
            alt="web development image"
          />
        </div>

        <div className="solutions section">
          <h1 className="sectionHeading">Our Fintech Solutions</h1>
          <p className="sectionSubHeading">
            We are pioneer in innovation and delivering tailored solutions that
            empower the fintech sector. Our commitment to excellence shines
            through our unique offerings.
          </p>
          <div className="cardsContainer-services">
            <div className="card-service">
              <p className="cardTitle-service">
                Fintech Software Development Services
              </p>
              <p className="cardDescription-service">
                We excel in developing custom software solutions for the fintech
                domain, incorporating cutting-edge technologies to streamline
                operations, enhance security, and optimize customer engagement.
              </p>
            </div>
            <div className="card-service">
              <p className="cardTitle-service">Fintech Software Development</p>
              <p className="cardDescription-service">
                We provide comprehensive solutions from conceptualization to
                deployment, ensuring operational efficacy and regulatory
                compliance.
              </p>
            </div>
            <div className="card-service">
              <p className="cardTitle-service">
                Web Development Services for Finech{" "}
              </p>
              <p className="cardDescription-service">
                Our tailored web development services for the fintech sector are
                responsive and intuitive offering a consistent experience across
                devices.
              </p>
            </div>
            <div className="card-service">
              <p className="cardTitle-service">
                Mobile App Development for Fintech
              </p>
              <p className="cardDescription-service">
                Our expertise in mobile app development ensures that your
                fintech applications are cutting-edge, secure, and offer
                superior user experience.
              </p>
            </div>
            <div className="card-service">
              <p className="cardTitle-service">
                Online Fintech Software Development
              </p>
              <p className="cardDescription-service">
                We specialize in creating online fintech software that offers a
                secure, efficient, and user-friendly platform for customers to
                manage their finances seamlessly.
              </p>
            </div>
          </div>
        </div>

        <div className="section whyChooseHSB">
          <h1 className="sectionHeading">
            Our Experience In Fintech App Development
          </h1>
          <p className="sectionSubHeading">
            For over half a decade, the leadership team of HSB has been involved
            in developing innovative solutions for fintech products. We have
            successfully developed, launched, and executed high-end fintech
            mobile apps that offer seamless customer experiences.
          </p>
          <div className="cardsContainer-services">
            <h1 className="section sectionSubHeading">
              Why Hire HSB As Your Fintech App Development Company?
            </h1>
            <div className="card-service">
              <p className="cardTitle-service">Comprehensive Solutions</p>
              <p className="cardDescription-service">
                We offer end-to-end FINTECH software development services, from
                custom application development to integration.
              </p>
            </div>
            <div className="card-service">
              <p className="cardTitle-service">Expert Guidance</p>
              <p className="cardDescription-service">
                HSB brings the expertise of building finance and fintech web and
                mobile app solutions. Leverage our experience, in streamlining
                the complex processes, and building a 100% compliant app that
                ensures data security.
              </p>
            </div>
            <div className="card-service">
              <p className="cardTitle-service">User-centric Approach</p>
              <p className="cardDescription-service">
                We build applications considering a balance between user’s
                experience and product vision. Through OCR and other tools we
                make it easier for the user to share the required details.
              </p>
            </div>
            <div className="card-service">
              <p className="cardTitle-service">Prioritizing Security</p>
              <p className="cardDescription-service">
                We understand the significance of customers’ data privacy and
                therefore, our custom fintech solutions are developed with
                high-security standards.
              </p>
            </div>
            <div className="card-service">
              <p className="cardTitle-service">Payment Integrations</p>
              <p className="cardDescription-service">
                We provide wide variety of payment integrations, such as, QR
                code, net banking, debit or credit cards, UPI, and payment
                wallets.
              </p>
            </div>
            <div className="card-service">
              <p className="cardTitle-service">Highly Compliance Standards</p>
              <p className="cardDescription-service">
                We align software development process with fintech regulatory
                compliances to protect customer data and ensuring that the
                process should comply with the standards.
              </p>
            </div>
          </div>
        </div>

        <div className="section">
          <h1 className="sectionHeading">
            Few Modules for Your Custom FINTECH App
          </h1>
          <p className="sectionSubHeading">
            Through our fintech app development, we aim to create integrated
            solutions and enhance business processes. Following are our
            comprehensive manufacturing modules specific to the industry
            requirement.
          </p>

          <div className="moduleItems-industries-fintech">
            <div className="moduleItem fintechModuleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>Mobile accessibility </p>
            </div>
            <div className="moduleItem fintechModuleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>Real-time alerts and notifications</p>
            </div>
            <div className="moduleItem fintechModuleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>KYC process automation</p>
            </div>
            <div className="moduleItem fintechModuleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>Integrating UPI and other digital payments</p>
            </div>
            <div className="moduleItem fintechModuleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>OCR tools</p>
            </div>
            <div className="moduleItem fintechModuleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>GPS Tracking</p>
            </div>
            <div className="moduleItem fintechModuleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>Send & request money</p>
            </div>
            <div className="moduleItem fintechModuleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>QR code for scanning</p>
            </div>
            <div className="moduleItem fintechModuleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>Bulk upload of documents</p>
            </div>
            <div className="moduleItem fintechModuleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>Real-time selfie or video update</p>
            </div>
            <div className="moduleItem fintechModuleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>Transactional SMS tracking</p>
            </div>
            <div className="moduleItem fintechModuleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>Digital wallet for online payments</p>
            </div>
            <div className="moduleItem fintechModuleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>Utility bills payment</p>
            </div>
            <div className="moduleItem fintechModuleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>Analysing financial risk to create risk score</p>
            </div>
            <div className="moduleItem fintechModuleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>Bank statement analyser</p>
            </div>
            <div className="moduleItem fintechModuleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>Credit score analyser</p>
            </div>
            <div className="moduleItem fintechModuleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>Automated invoicing</p>
            </div>
            <div className="moduleItem fintechModuleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>Subscription flow</p>
            </div>
            <div className="moduleItem fintechModuleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>Automated EMI debits</p>
            </div>
            <div className="moduleItem fintechModuleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>Data-driven reports</p>
            </div>
            <div className="moduleItem fintechModuleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>Role based access control</p>
            </div>
            <div className="moduleItem fintechModuleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>Compliance monitoring</p>
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
            Connect us now to avail our fintech app development services
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

export default FintechIndustry;
