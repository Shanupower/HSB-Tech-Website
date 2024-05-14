/* eslint-disable jsx-a11y/img-redundant-alt */
import { Component } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Typography from "@mui/material/Typography";

import healthCareLandingImage from "../../assets/healthcare-landingImage.webp";
import { FaArrowRight } from "react-icons/fa";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

import reactImage from "../../assets/react.png";
import nextJsImage from "../../assets/nextjs.png";
import tailwindCss from "../../assets/taliwind.webp";
import awsImage from "../../assets/awsImage.webp";
import azureImage from "../../assets/azureImage.webp";
import angular from "../../assets/angular.webp";

import "./index.css";

const breadcrumbs = [
  <Link underline="hover" key="1" color="inherit" href="/">
    Home
  </Link>,
  <Link underline="hover" key="2" color="inherit" href="/services">
    Industries
  </Link>,
  <Typography key="3" color="text.primary">
    Healthcare App Development Services
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
    imageUrl: nextJsImage,
    name: "Next JS",
  },
  {
    imageUrl: tailwindCss,
    name: "Tailwind CSS",
  },
  {
    imageUrl: angular,
    name: "Angular",
  },
];

const backendTab = [
  {
    imageUrl: awsImage,
    name: "AWS",
  },
  {
    imageUrl: azureImage,
    name: "Azure",
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

class HealthcareIndustry extends Component {
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
            <h1 className="sectionHeading">
              Healthcare App Development Services
            </h1>
            <p className="sectionDescription">
              As an expert software development company, we offer best-in-class
              custom Healthcare IT services and Healthcare software services.
              Our customized software solution integrates a wide range of
              health-related activities that are easy to operate, swift in
              performance, and efficient in deliverance. Our niche healthcare
              solutions aim towards providing near real-time information,
              operative and clear prominence across stakeholders.
            </p>
          </div>
          <img
            className="landingSectionImage-sericesPage"
            src={healthCareLandingImage}
            alt="web development image"
          />
        </div>

        <div className="solutions section">
          <h1 className="sectionHeading">Solutions We Deliver</h1>
          <p className="sectionSubHeading">
            We have the potential to build high-quality mobile apps offering
            outstanding experience to the patients, doctors, employees, and all
            concerned. Through our healthcare IT solutions we aim to help
            hospitals, pharmacies, laboratories, and clinics overcome the
            challenges that come their way, enhancing their business
            profitability and productivity.
          </p>
          <div className="cardsContainer-services">
            <div className="card-service">
              <p className="cardTitle-service">Hospital Management Systems</p>
              <p className="cardDescription-service">
                A web app to automate all operations of hospital/clinic,
                beginning from registering a patient to report generation and
                collection and more. It facilitates smooth operations on daily
                basis and provides the best insight.
              </p>
            </div>
            <div className="card-service">
              <p className="cardTitle-service">Automation</p>
              <p className="cardDescription-service">
                Improve operational efficiency and reduce cost by implementing
                robotic process automation and chatbots for member enrollments,
                prior authorizations and customer service activities.
              </p>
            </div>
            <div className="card-service">
              <p className="cardTitle-service">Enterprise Mobility</p>
              <p className="cardDescription-service">
                Healthcare enterprise mobile apps are highly effective to
                increase performance. The mobility apps delivers efficacy in
                checking medical history, symptoms, and references.
              </p>
            </div>
            <div className="card-service">
              <p className="cardTitle-service">Wellness App</p>
              <p className="cardDescription-service">
                A wellness app based on healthcare and wellness that includes a
                weight management program for your users to stay fit and
                healthy. An application for home care and aged care agencies to
                plan and manage care plans for patients and track and manage
                caretakers.
              </p>
            </div>
            <div className="card-service">
              <p className="cardTitle-service">EHR and EMR Solutions</p>
              <p className="cardDescription-service">
                Our EHR (Electronic Health Record) and EMR (Electronic Medical
                Record) are advance solutions to improve patients’ care and
                track patient data management workflows.
              </p>
            </div>
            <div className="card-service">
              <p className="cardTitle-service">Pharma Application </p>
              <p className="cardDescription-service">
                We build IT solutions specific to Pharma with the latest
                features such as medication management, ordering, tracking of
                orders, and payment to merchants. We also build apps for admins
                of pharma businesses.
              </p>
            </div>
          </div>
        </div>

        <div className="section whyChooseHSB">
          <h1 className="sectionHeading">
            Why Hire HSB As Your Healthcare App Development Company?
          </h1>
          <p className="sectionSubHeading">
            As an advanced healthcare app development company, we help the
            healthcare sector evolve and perform better. Our ample experience in
            custom solutions has enabled us to develop smart, agile, and
            functional solutions for our clients.
          </p>
          <div className="cardsContainer-services">
            <div className="card-service">
              <p className="cardTitle-service">Improved Treatments</p>
              <p className="cardDescription-service">
                Healthcare solutions provide access to all the real-time
                information which assists to make well-informed decisions. It
                helps in understanding the effectiveness of a specific care
                therapy and its review so that a better treatment can be offered
                in the stipulated time.
              </p>
            </div>
            <div className="card-service">
              <p className="cardTitle-service">Drug Management</p>
              <p className="cardDescription-service">
                By leveraging the real-time data, healthcare can predict the
                consumption based on the existing trend, analyse the medical
                requirements of regular patients, and maintaining their
                inventory accordingly.
              </p>
            </div>
            <div className="card-service">
              <p className="cardTitle-service">Reduced Cost</p>
              <p className="cardDescription-service">
                Using online healthcare IT systems, patients can save on
                hospital visits which will also benefit hospital management in
                maintain the facilities at the hospital. The patients can be
                monitored virtually, thereby, reducing the operational cost of
                the hospital.
              </p>
            </div>
            <div className="card-service">
              <p className="cardTitle-service">Enhanced Patient Experience</p>
              <p className="cardDescription-service">
                The healthcare system creates an environment that caters to the
                patient’s requirements. Through the digital history records the
                treatment options, procedures and current medical condition help
                provide a better patient experience.
              </p>
            </div>
            <div className="card-service">
              <p className="cardTitle-service">HIPAA Compliant </p>
              <p className="cardDescription-service">
                Our team consists of experts in the healthcare space that
                understand the HIPAA norms and related legalities. Hence, we
                create apps that adhere to these regulations to the maximum
                accuracy.
              </p>
            </div>
          </div>
        </div>

        <div className="section">
          <h1 className="sectionHeading">
            Few Modules for Your Custom Healthcare App
          </h1>
          <p className="sectionSubHeading">
            We can build a wide range of healthcare modules specific to the
            requirements of a healthcare organization. Our certified healthcare
            experts and developers also make sure that all the modules and
            corresponding tech stacks work together perfectly.
          </p>

          <div className="moduleItems-industries-fintech">
            <div className="moduleItem fintechModuleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>EHR/EMR</p>
            </div>
            <div className="moduleItem fintechModuleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>Pharmacy app</p>
            </div>
            <div className="moduleItem fintechModuleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>Health and wellness app</p>
            </div>
            <div className="moduleItem fintechModuleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>Healthcare updates and mental wellness practices</p>
            </div>
            <div className="moduleItem fintechModuleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>Telemedicine</p>
            </div>
            <div className="moduleItem fintechModuleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>Doctor dashboards</p>
            </div>
            <div className="moduleItem fintechModuleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>Billing and payments</p>
            </div>
            <div className="moduleItem fintechModuleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>Learning management</p>
            </div>
            <div className="moduleItem fintechModuleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>Clinic assistance app</p>
            </div>
            <div className="moduleItem fintechModuleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>Analytics and reports</p>
            </div>
            <div className="moduleItem fintechModuleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>Workflow management</p>
            </div>
            <div className="moduleItem fintechModuleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>Documentation and integration</p>
            </div>
            <div className="moduleItem fintechModuleItem">
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
            Connect us now to build best-in-class healthcare app.
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

export default HealthcareIndustry;
