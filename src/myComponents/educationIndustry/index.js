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
import flutterImage from "../../assets/flutter.png";
import kotlinImage from "../../assets/kotlin.svg";
import powerBiImage from "../../assets/powerBI.webp";
import javaImage from "../../assets/java-logo.png";
import nextJsImage from "../../assets/nextjs.png";
import tailwindCss from "../../assets/taliwind.webp";

import nodeJsImage from "../../assets/nodejs.png";
import mySqlImage from "../../assets/mysql.svg";
import dotNetImage from "../../assets/dotnet.png";

import awsImage from "../../assets/awsImage.webp";
import azureImage from "../../assets/azureImage.webp";
import angular from "../../assets/angular.webp";

import { Chrono } from "react-chrono";

const breadcrumbs = [
  <Link underline="hover" key="1" color="inherit" href="/">
    Home
  </Link>,
  <Link underline="hover" key="2" color="inherit" href="/services">
    Industries
  </Link>,
  <Typography key="3" color="text.primary">
    Education App Development Services
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
    imageUrl: kotlinImage,
    name: "kotlin",
  },
  {
    imageUrl: powerBiImage,
    name: "PowerBI",
  },
  {
    imageUrl: javaImage,
    name: "Java",
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
    imageUrl: nodeJsImage,
    name: "Node.js",
  },
  {
    imageUrl: mySqlImage,
    name: "MySQL",
  },
  {
    imageUrl: dotNetImage,
    name: ".Net",
  },
];

const databasesTab = [
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

const educationProcessTimelineItems = [
  {
    title: "Step 1",
  },
  {
    title: "Step 2",
  },
  {
    title: "Step 3",
  },
  {
    title: "Step 4",
  },
  {
    title: "Step 5",
  },
  {
    title: "Step 6",
  },
  {
    title: "Step 7",
  },
  {
    title: "Step 8",
  },
  {
    title: "Step 9",
  },
  {
    title: "Step 10",
  },
  {
    title: "Step 11",
  },
  {
    title: "Step 12",
  },
  {
    title: "Step 13",
  },
];

class EducationIndustry extends Component {
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
              Educational App Development Services
            </h1>
            <p className="sectionDescription">
              Give an immersive learning experience with our dynamic and
              intuitive educational development services. By blending education
              with innovative technology, we promote limitless learning that
              opens new horizons for students and trainees. Leverage our
              cost-effective solutions to make the learning process enjoyable.
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
            In this fast moving digital world, it is imperative for everyone to
            keep themselves updated in their profession, learning, skills, and
            job. The global workforce seeks skilled and updated professionals to
            fulfill the demands of technically advanced social movement. Our
            technical-enabled educational IT solutions are preferred by
            recognized technology-driven universities.
          </p>
          <div className="cardsContainer-services">
            <div className="card-service">
              <p className="cardTitle-service">
                University & School Management
              </p>
              <p className="cardDescription-service">
                IT solutions for universities and schools enable them with
                day-to-day management, track student performances, perform
                continuous analysis and appraisals, etc, so that it shall
                benefit overall progress of the student.
              </p>
            </div>
            <div className="card-service">
              <p className="cardTitle-service">
                Interactive eLearning Solutions
              </p>
              <p className="cardDescription-service">
                Interactive eLearning Apps for students of all classes takes
                them a step ahead from the typical traditional classroom
                methodology to inclusive learning.
              </p>
            </div>
            <div className="card-service">
              <p className="cardTitle-service">Education Website</p>
              <p className="cardDescription-service">
                We build the best responsive educational websites. Our education
                developers are well versed with complex CMS and help your
                business survive in the competitive world.
              </p>
            </div>
            <div className="card-service">
              <p className="cardTitle-service">Live Digital Classroom</p>
              <p className="cardDescription-service">
                Educational live stream sessions for your students in the form
                of digital classroom or create recorded sessions to host them on
                a sharing platform with students so that they can view at their
                convenience.
              </p>
            </div>
            <div className="card-service">
              <p className="cardTitle-service">Exams and Assessment</p>
              <p className="cardDescription-service">
                A comprehensive solution with support for creating, conducting,
                and evaluating the tests, it also provides insights to ensure
                continuous test processes by incorporating modern-day techniques
                like Cloud and Mobility.
              </p>
            </div>
            <div className="card-service">
              <p className="cardTitle-service">BI & Analytics</p>
              <p className="cardDescription-service">
                Business intelligence analytical solution for better informed
                decisions. Developing and enabling the Business Intelligence
                layer on top of transactional data generated, with integrated
                web and mobility support powered by BI & Analytics.
              </p>
            </div>
          </div>
        </div>

        <div className="section whyChooseHSB">
          <h1 className="sectionHeading">
            Why Hire HSB As Your Educational App Development Company?
          </h1>
          <p className="sectionSubHeading">
            HSB as an eLearning software development company offer comprehensive
            solutions to enhance and maintain the support systems of educational
            institutions and universities.
          </p>
          <div className="cardsContainer-services">
            <div className="card-service">
              <p className="cardTitle-service">Blended Learning</p>
              <p className="cardDescription-service">
                Due to the influence of internet in education sector, blended
                learning can be achieved easily. Students through online
                classrooms and accessible virtual environments can share ideas
                and collaborate with like-minded students comfortably.
              </p>
            </div>
            <div className="card-service">
              <p className="cardTitle-service">Easy Progress Tracking</p>
              <p className="cardDescription-service">
                Through eLearning it is possible to organize tests after every
                course and track grading and participant performance easily.
                Using trend analysis, the examination and grading systems are
                evaluated and displays results instantly. Trainer feedback
                incorporated online allows personalized, introspective
                assessments.
              </p>
            </div>
            <div className="card-service">
              <p className="cardTitle-service">Comprehensive Learning</p>
              <p className="cardDescription-service">
                The classroom learning is getting restricted to limited
                resources and knowledge. A digital learning platform allows
                students to explore and learn exponentially. The millennial
                student powered by technology becomes an active participant in
                the education cycle.
              </p>
            </div>
            <div className="card-service">
              <p className="cardTitle-service">Genres of Education</p>
              <p className="cardDescription-service">
                The education industry is rising to the various genres where it
                is easy to plugin with the technology, combined with the
                willingness of educational institutions to adapt to innovative
                learning mechanisms.
              </p>
            </div>
            <div className="card-service">
              <p className="cardTitle-service">Affordable with High Returns</p>
              <p className="cardDescription-service">
                ELearning system is cost-effective when you consider bringing
                more number of the number of learners that could participate
                simultaneously. The platform require routine maintenance and
                upgrades to the system, however, it is still less costly as
                compared to daily human involvement in the training landscape.
              </p>
            </div>
          </div>
        </div>

        <div className="section">
          <h1 className="sectionHeading">
            Few Modules for Your Custom Educational App
          </h1>
          <p className="sectionSubHeading">
            We can build a wide range of educational modules specific to the
            requirements of an educational organization. Our educational experts
            and developers also make sure that all the modules and corresponding
            tech stacks work together perfectly.
          </p>

          <div className="moduleItems-industries-fintech">
            <div className="moduleItem fintechModuleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>Learning management system</p>
            </div>
            <div className="moduleItem fintechModuleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>School management system</p>
            </div>
            <div className="moduleItem fintechModuleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>Course selling app</p>
            </div>
            <div className="moduleItem fintechModuleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>Educational portal development</p>
            </div>
            <div className="moduleItem fintechModuleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>Self-learning app</p>
            </div>
            <div className="moduleItem fintechModuleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>Student information system</p>
            </div>
            <div className="moduleItem fintechModuleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>Corporate training app</p>
            </div>
            <div className="moduleItem fintechModuleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>Mobile eLearning solutions</p>
            </div>
            <div className="moduleItem fintechModuleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>eBooks library app</p>
            </div>
            <div className="moduleItem fintechModuleItem">
              <FaArrowRight className="moduleItemBullet" />
              <p>Student progress tracking</p>
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
                <Tab label="Databases" {...a11yProps(2)} />
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
            <CustomTabPanel value={value} index={2}>
              <div className="technlogiesContainer-technology">
                {databasesTab.map((eachItem) => (
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

        <div className="processSection section">
          <h1 className="sectionHeading">Our Web App Development Process</h1>

          <Chrono
            disableToolbar="true"
            theme={{
              primary: "black",
              titleColor: "black",
            }}
            mode="VERTICAL"
            items={educationProcessTimelineItems}
          >
            <p>Research the market and learn about the competitors</p>
            <p>List out the app features</p>
            <p>Choose the right technology</p>
            <p>Define project timeline and costing</p>
            <p>Approval from healthcare and legal documentation</p>
            <p>Design the architecture</p>
            <p>Scrum calls and sprint planning</p>
            <p>UI/UX designs and approval</p>
            <p>Development phase</p>
            <p>Ensuring compliance with healthcare egulations</p>
            <p>Internal testing and UAT</p>
            <p>Deployment</p>
            <p>Training, support and maintenance</p>
          </Chrono>
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

export default EducationIndustry;
