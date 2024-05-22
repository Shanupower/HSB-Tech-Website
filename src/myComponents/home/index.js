import hsbLogo from "../../assets/hsb-logo.png";
import sparkleImage from "../../assets/sparkle.svg";
import impactImage from "../../assets/impact.svg";
import qualityImage from "../../assets/quality.svg";
import scaleImage from "../../assets/scale.svg";
import webappImage from "../../assets/webapp.svg";
import mobileAppImage from "../../assets/mobile-app.svg";
import uiDesignImage from "../../assets/design.svg";
import fullstackImage from "../../assets/full-stack.svg";
import qualityAssuranceImage from "../../assets/quality-assurance.svg";
import businessAnalysisImage from "../../assets/business.svg";
import ReactImage from "../../assets/react.png";
import nextjsImage from "../../assets/nextjs.png";
import flutterImage from "../../assets/flutter.png";
import grpahqlImage from "../../assets/graphql.png";
import nodejsImage from "../../assets/nodejs.png";
import postgresqlImage from "../../assets/postgresql.png";
import devopsImage from "../../assets/devops.png";
import laravelImage from "../../assets/laravel.svg";
import supplyChain from "../../assets/supply-chain.png";
import telemedicineImage from "../../assets/telemedicine.png";

import awsImage from "../../assets/aws-partner.webp";
import githubImage from "../../assets/github.webp";

import salaryDayImage from "../../assets/salaryday-logo.png";
import ecofinImage from "../../assets/ecofin-logo.png";

import * as HoverCard from "@radix-ui/react-hover-card";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa6";
import { Carousel } from "antd";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, useMediaQuery } from "@mui/material";
import Footer from "../footer";
import Navigationbar from "../navigationBar";
import { Link } from "react-router-dom";

// Home Trasted Image
import Interexsemi from "../../assets/icons/Interex.svg";
import Glance from "../../assets/icons/Glance Logo V1.jpg";
import Aries from "../../assets/icons/Aries.png";
import Pangu from "../../assets/icons/PGM_logo_big.png";
import Serole from "../../assets/icons/serole-new-logo1.png";
import Cosmosksa from "../../assets/icons/comos.png";
import Arce from "../../assets/icons/arcImgae.png";
import WSC from "../../assets/icons/WSC.webp";

import "./index.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  accessibility: false,
  arrows: false,
};

const trustedbyCompaniesList = [
  {
    id: 1,
    imageUrl: Interexsemi,
    cardTitle: "Interes Semi",
    cardDescription:
      " We are on a mission to redefine what’s possible, and we’re looking for diverse, talented individuals to join us in this exciting journey",
  },
  {
    id: 2,
    imageUrl: Glance,
    cardTitle: "Glance",
    cardDescription:
      "We are a unique hub of expertise driven by the concept of excellence since more than 20 years in providing services across multidisciplinary functions of any Business / Projects. We utilize a Best Practice approach to work with the clients to determine the appropriate size and scope of the development.",
  },
  {
    id: 3,
    imageUrl: Aries,
    cardTitle: "Aries",
    cardDescription:
      " Aries is the largest Engineering, Inspection & Maintenance firm in the Middle East. Founded by Dr. Sohan Roy in 1998, Aries Marine is the flagship brand of Aries Group, a world-class consortium of diversified independent firms. Headquartered in Sharjah, UAE, this ISO 9001:2015, ISO 14001:2015, ISO 29001:2020 & ISO 45001:2018 certified company has business branches in Singapore, Malaysia, Indonesia, China, India, Qatar, Bahrain, Oman, Saudi Arabia, Kuwait, Azerbaijan, Germany, UK, Angola, Srilanka, Netherlands,Turkey and the USA. ",
  },
  {
    id: 4,
    imageUrl: Pangu,
    cardTitle: "PGM",
    cardDescription:
      "The honorable state, may God bless it, has harnessed its capabilities to serve its sons and daughters and support them materially and morally, and even provide them with scientific and practical qualifications so that they can become active and productive members of society. The state pays great attention to people with disabilities, and one of its concerns is employing them according to their abilities. Pan Gulf Marketing Company is keen to benefit from their abilities through providing them withappropriate training and work qualifications to be able to work and become productive.We believe that following this direction,blessing will come, God willing. ",
  },
  {
    id: 5,
    imageUrl: WSC,
    cardTitle: "WATANIYA SOLUTIONS COMPANY (WSC)",
    cardDescription:
      " Our Vision To let WATANIYA SOLUTIONS COMPANY (WSC) for Communications and Information Technology (IT) be the leading provider of electronic solutions in the region. WATANIYA SOLUTIONS COMPANY (WSC) for Communications and Information Technology (IT) is a leading and qualified company in the integration and service field of information and communication systems. WSC for Communications and Information Technology has achieved a 100 % completion rate for projects and for several diverse projects by building all its capacities to achieve the standards that were put forward in the framework of the Kingdom's Vision 2030. All of this will be achieved by simplifying e-governance procedures through digital transformation, digital solutions, and the establishment of confidence in the distinctive Saudi talent, where 70 % of the jobs have been localized.",
  },
  {
    id: 6,
    imageUrl: Serole,
    cardTitle: "AtSign",
    cardDescription:
      "Serole Technologies is a Global IT Solutions and Services provider bringing Innovative and Value-added Solutions to Enterprise Customers in the areas of Application Services, Integration Services, Smart Data Visualization & Analytics, and Digital Solutions to help its Customers businesses become High-Performance Enterprises. In every business engagement, Serole seek the opportunity to build long-lasting, strategic relationships.",
  },
  {
    id: 7,
    imageUrl: Cosmosksa,
    cardTitle: "Cosmos",
    cardDescription:
      "Cosmos was formed in 2019 and is based in the Kingdom’s capital, Riyadh - and is part of the successful family-owned Lemal Holding Group. Cosmos operates a diverse portfolio of Art, Entertainment and Sports related businesses.",
  },
  {
    id: 8,
    imageUrl: Arce,
    cardTitle: "American Research Center ",
    cardDescription:
      "The American Research Center in Egypt actively supports scholarship, training and conservation efforts in Egypt through grants, fieldwork and field schools",
  },
];

const Home = () => {
  const isMd = useMediaQuery("(max-width:1068px)");
  const isSm = useMediaQuery("(max-width:468px)");

  return (
    <>
      {!isMd && <Navigationbar />}
      <div>
        <div
          className="appContainer"
          style={{
            paddingInline: isMd ? "2rem" : "12%",
          }}
        >
          <div className="landingSection">
            <div
              className="landing-left-section"
              style={{
                paddingBlock: isMd ? "2rem" : "2rem",
                width: isMd && "50%",
              }}
            >
              {isSm && (
                <div
                  style={{
                    width: isMd ? "7.5rem" : "8.6rem",
                    height: isMd ? "2rem" : "2.5rem",
                    objectFit: "cover",
                  }}
                >
                  <img
                    className="geekyantlogo"
                    src={hsbLogo}
                    alt="logo"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              )}
              <h1
                className="ladingPageHeading"
                style={{
                  fontSize: isMd ? "3rem" : "4rem",
                }}
              >
                Highly
                <br />
                Scalable <br />
                Bees
                <br />
              </h1>
              {!isMd && (
                <p className="landingSectionSubHeading">
                  Embrace our IT & Managed Services to accelerate your business
                  growth.
                </p>
              )}
            </div>
            {!isSm && (
              <div
                style={{
                  width: isMd ? "40%" : "40%",
                  height: isMd ? "160px" : "200px",
                }}
              >
                <img
                  className="landing-right-logo"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  src={hsbLogo}
                  alt="logo"
                />
              </div>
            )}
          </div>
          {isMd && (
            <p className="landingSectionSubHeading" style={{ marginTop: "0" }}>
              Embrace our IT & Managed Services to accelerate your business
              growth.
            </p>
          )}

          <div
            className="navbarSection"
            style={{
              marginTop: isMd && "4rem",
              padding: isMd && "0",
            }}
          >
            <Link
              to="lets_talk"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                position: "relative",
                backgroundColor: "#ca0515",
                color: "#fff",
                width: isMd ? "80%" : "20%",
                textAlign: "center",
                padding: ".8rem 1rem",
                fontSize: "20px",
                marginRight: "1rem",
                borderRadius: "8px",
              }}
            >
              LET'S TALK
              <FaArrowRight
                className="rightArrow"
                style={{
                  position: "absolute",
                  right: "1rem",
                }}
              />
            </Link>
            {!isMd && (
              <>
                <Navbar expand="lg">
                  <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="me-auto">
                        <NavDropdown title="What We Do" id="basic-nav-dropdown">
                          <NavDropdown.Item href="/services/web development">
                            Web Development
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="/services/mobile development">
                            Mobile Development
                          </NavDropdown.Item>
                          <NavDropdown.Divider />

                          <NavDropdown.Item href="/services/uiux development">
                            UI UX Design
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="/services/fullstack development">
                            Full Stack Development
                          </NavDropdown.Item>

                          <NavDropdown.Divider />
                          <NavDropdown.Item href="/services/quality assurance">
                            Quality Assurance & Software Testing
                          </NavDropdown.Item>

                          <NavDropdown.Divider />
                          <NavDropdown.Item href="/services/busines analysis services">
                            Business Analysis
                          </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Industries" id="basic-nav-dropdown">
                          <NavDropdown.Item href="/industries/fintech">
                            Fintech
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="/industries/bsfi">
                            BSFI
                          </NavDropdown.Item>{" "}
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="/industries/telecom">
                            Telecom
                          </NavDropdown.Item>{" "}
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="/industries/ecommerce">
                            Ecommerce
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="/industries/healthcare">
                            Healthcare
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="/industries/education">
                            Education
                          </NavDropdown.Item>{" "}
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="/industries/realEstate">
                            Real Estate
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="/industries/manufacturing">
                            Manufacturing
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="/industries/travel-hospitality">
                            Travel and Hospitality
                          </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                          title="Technologies"
                          id="basic-nav-dropdown"
                        >
                          <NavDropdown.Item href="/technology/nodsJs">
                            NodsJs
                          </NavDropdown.Item>{" "}
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="/technology/laravel">
                            Laravel
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="/technology/react-native">
                            React Native
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="/technology/flutter">
                            Flutter
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="/technology/nextJs">
                            NextJs
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="/technology/devOps">
                            DevOps
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="/technology/graphSQl">
                            GraphSQl
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="/technology/postgreSql">
                            PostgreSQL
                          </NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="/lets talk">Lets talk</Nav.Link>
                      </Nav>
                    </Navbar.Collapse>
                  </Container>
                </Navbar>
              </>
            )}
          </div>

          <div
            className="servicesSection"
            style={{
              padding: isMd && "0",
            }}
          >
            <h3
              className="serviesSectionHeading"
              style={{
                fontSize: isMd && "30px",
              }}
            >
              We Deliver Extraordinary Digital Experiences.
            </h3>
            <div
              className="serviesContainer"
              style={{
                marginTop: isMd ? "2rem" : "4rem",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <div
                className="serviceItem sparkle"
                style={{ width: isMd ? "100%" : "46%" }}
              >
                <p style={{ fontSize: isSm && "24px" }}>
                  Smart IT solutions for every need.
                </p>
                <img
                  className="serviceImage"
                  src={sparkleImage}
                  alt="sparkle"
                />
              </div>

              <div
                className="serviceItem impact"
                style={{ width: isMd ? "100%" : "46%" }}
              >
                <p style={{ fontSize: isSm && "24px" }}>
                  Seamless managed services with high-performance workspaces.
                </p>
                <img className="serviceImage" src={impactImage} alt="sparkle" />
              </div>

              <div
                className="serviceItem scale"
                style={{ width: isMd ? "100%" : "46%" }}
              >
                <p style={{ fontSize: isSm && "24px" }}>
                  Customized approach across industries.
                </p>
                <img className="serviceImage" src={scaleImage} alt="sparkle" />
              </div>

              <div
                className="serviceItem quality"
                style={{ width: isMd ? "100%" : "46%" }}
              >
                <p style={{ fontSize: isSm && "24px" }}>
                  Seasoned professionals who value business ethics.
                </p>
                <img
                  className="serviceImage"
                  src={qualityImage}
                  alt="sparkle"
                />
              </div>
            </div>
          </div>

          <div
            className="trustedBySection"
            style={{
              padding: isMd && "4rem 2rem",
            }}
          >
            <h1 className="trustedByheading">Trusted By</h1>
            {isMd ? (
              <Carousel
                arrows
                infinite={false}
                dots={false}
                className="custom-carousel"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                {trustedbyCompaniesList.map((item, id) => (
                  <div
                    key={id}
                    className="trustedbyImageContainer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto",
                      textAlign: "center",
                    }}
                  >
                    <img
                      style={{
                        margin: "0 auto",
                        widht: "80%",
                      }}
                      src={item.imageUrl}
                      alt=""
                    />
                  </div>
                ))}
              </Carousel>
            ) : (
              <Slider {...settings}>
                {trustedbyCompaniesList.map((eachCompany) => (
                  <HoverCard.Root>
                    <HoverCard.Trigger asChild>
                      <div
                        key={eachCompany.id}
                        // className="trustedbyImageContainer"
                        style={{
                          width: "90px",
                          height: "50px",
                        }}
                      >
                        <img
                          // className="trustedbyImage"
                          src={eachCompany.imageUrl}
                          alt="trusted by company image"
                          style={{
                            width: "100%",
                            height: "100%",
                            filter: "grayscale(100%)",
                            objectFit: "fill",
                          }}
                        />
                      </div>
                    </HoverCard.Trigger>
                    <HoverCard.Portal>
                      <HoverCard.Content
                        className="HoverCardContent"
                        sideOffset={5}
                      >
                        <div className="trustedcomapnies-hovercard">
                          <p>{eachCompany.cardTitle}</p>
                          <p>{eachCompany.cardDescription}</p>
                        </div>

                        <HoverCard.Arrow className="HoverCardArrow" />
                      </HoverCard.Content>
                    </HoverCard.Portal>
                  </HoverCard.Root>
                ))}
              </Slider>
            )}
          </div>

          <div className="appsWeDevelopedSecion section">
            <h1
              className="sectionHeading"
              style={{
                textAlign: "left",
              }}
            >
              Apps We Developed
            </h1>
            <div className="appsDeveloped-images-container">
              <div
                className="appDevelopedImage"
                style={{
                  width: "100%",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: isMd ? "center" : "left",
                }}
              >
                {" "}
                <img
                  style={{
                    objectFit: "contain",
                  }}
                  className="appDevelopedImage"
                  src={salaryDayImage}
                  alt="app developed image"
                />
                <img
                  className="appDevelopedImage ecofin"
                  src={ecofinImage}
                  alt="app developed image"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="developmentSection"
          style={{
            padding: isMd ? "2rem" : " 2rem 12%",
          }}
        >
          <h2 className="sectionHeading">What We Do Best</h2>
          <p className="sectionDescription">
            We are well equipped with an updated technical knowledge to serve
            our customers with advanced IT solutions that can add value to the
            business.
          </p>

          <div className="developmentCardsContainer">
            <Link
              to="/services/web development"
              className="deveopmentCard hoverUp cardLink"
              style={{ width: isMd ? "100%" : "46%" }}
            >
              <div className="cardTitle">
                <img
                  className="development-title-image"
                  src={webappImage}
                  alt="webapp"
                />
                <p className="developmentCardTitle">
                  Web Application Development
                </p>
              </div>
              <p className="developmentCardDescription">
                Impressive and fully responsive website development that drives
                higher leads to the business.
              </p>
            </Link>

            <Link
              to="/services/mobile development"
              className="deveopmentCard hoverUp cardLink"
              style={{ width: isMd ? "100%" : "46%" }}
            >
              <div className="cardTitle">
                <img
                  className="development-title-image"
                  src={mobileAppImage}
                  alt="webapp"
                />
                <p className="developmentCardTitle">
                  Mobile Application Development
                </p>
              </div>
              <p className="developmentCardDescription">
                Unleash the full potential of your business with our mobile
                applications that are developed for both, Android & iOS.
              </p>
            </Link>

            <Link
              to="/services/uiux development"
              className="deveopmentCard hoverUp cardLink"
              style={{ width: isMd ? "100%" : "46%" }}
            >
              <div className="cardTitle">
                <img
                  className="development-title-image"
                  src={uiDesignImage}
                  alt="webapp"
                />
                <p className="developmentCardTitle">UI/UX Design</p>
              </div>
              <p className="developmentCardDescription">
                Well-structured, responsive and user-friendly UI/UX designs for
                your products that are a visual treat to the users.
              </p>
            </Link>

            <Link
              to="/services/fullstack development"
              className="deveopmentCard hoverUp cardLink"
              style={{ width: isMd ? "100%" : "46%" }}
            >
              <div className="cardTitle">
                <img
                  className="development-title-image"
                  src={fullstackImage}
                  alt="webapp"
                />
                <p className="developmentCardTitle">Full-Stack Development</p>
              </div>
              <p className="developmentCardDescription">
                A 360degree full-stack solution for your product that comprises
                of both, front-end and back-end for your product.
              </p>
            </Link>

            <Link
              to="/services/quality assurance"
              className="deveopmentCard hoverUp cardLink"
              style={{ width: isMd ? "100%" : "46%" }}
            >
              <div className="cardTitle">
                <img
                  className="development-title-image"
                  src={qualityAssuranceImage}
                  alt="webapp"
                />
                <p className="developmentCardTitle">
                  Quality assurance and software testing
                </p>
              </div>
              <p className="developmentCardDescription">
                We always create a benchmark in delivering quality-oriented
                solutions. Our comprehensive testing ensures quality on-par with
                the requirement.
              </p>
            </Link>

            <Link
              to="/services/busines analysis services"
              className="deveopmentCard hoverUp cardLink"
              style={{ width: isMd ? "100%" : "46%" }}
            >
              <div className="cardTitle">
                <img
                  className="development-title-image"
                  src={businessAnalysisImage}
                  alt="webapp"
                />
                <p className="developmentCardTitle">
                  Business analysis & consulting
                </p>
              </div>
              <p className="developmentCardDescription">
                We analyse, study and document business needs in collaboration
                with stakeholders and propose fool-proof solutions suitable for
                your requirement.
              </p>
            </Link>
          </div>
        </div>

        <div
          className="certifiedPartnersSection"
          style={{
            padding: isMd ? " 2rem 2rem" : "2.6rem 12%",
          }}
        >
          <h1 className="certifiedPartnersHeading" style={{ fontSize: "38px" }}>
            We Work With
          </h1>
          <div className="comapinesContainer" style={{ display: "flex" }}>
            <div className="caertifiedCompany-card">
              <img
                className="githubImage partnerCompanyImage githubImage"
                src={githubImage}
              />
            </div>
            <div className="caertifiedCompany-card">
              <img
                className="awsImage partnerCompanyImage awsImage"
                src={awsImage}
              />
            </div>
          </div>
        </div>

        <div
          className="technologiesSection"
          style={{
            padding: isMd ? " 2rem 2rem" : "2.6rem 12%",
          }}
        >
          <h2 className="sectionHeading">Technologies</h2>
          <p className="sectionDescription">
            We work with prominent technologies that can solve your product
            requirements. While you concentrate on your business needs, we take
            care of your technical aspect.
          </p>

          <div
            className="technologiesContainer"
            style={{ justifyContent: isMd && "center" }}
          >
            <div className="tehcnologyItem">
              <div className="technologyImage react stretch">
                <img
                  className="technology-mobile-image"
                  src={ReactImage}
                  alt="react"
                />
              </div>
              <p className="technologyName">React Native</p>
            </div>

            <div className="tehcnologyItem">
              <div className="technologyImage nextjs stretch">
                <img
                  className="technology-mobile-image"
                  src={nextjsImage}
                  alt="react"
                />
              </div>
              <p className="technologyName">Nest.js</p>
            </div>

            <div className="tehcnologyItem">
              <div className="technologyImage flutter stretch">
                <img
                  className="technology-mobile-image"
                  src={flutterImage}
                  alt="react"
                />
              </div>
              <p className="technologyName">Flutter</p>
            </div>

            <div className="tehcnologyItem">
              <div className="technologyImage graphql stretch">
                <img
                  className="technology-mobile-image"
                  src={grpahqlImage}
                  alt="react"
                />
              </div>
              <p className="technologyName">GrpahQL</p>
            </div>

            <div className="tehcnologyItem">
              <div className="technologyImage nodejs stretch">
                <img
                  className="technology-mobile-image"
                  src={nodejsImage}
                  alt="react"
                />
              </div>
              <p className="technologyName">Node.js</p>
            </div>

            <div className="tehcnologyItem">
              <div className="technologyImage laravel stretch">
                <img
                  className="technology-mobile-image"
                  src={laravelImage}
                  alt="react"
                />
              </div>
              <p className="technologyName">Laravel</p>
            </div>

            <div className="tehcnologyItem">
              <div className="technologyImage postgresql stretch">
                <img
                  className="technology-mobile-image"
                  src={postgresqlImage}
                  alt="react"
                />
              </div>
              <p className="technologyName">PostgreSQL</p>
            </div>

            <div className="tehcnologyItem">
              <div className="technologyImage devops stretch">
                <img
                  className="technology-mobile-image"
                  src={devopsImage}
                  alt="react"
                />
              </div>
              <p className="technologyName">DevOps</p>
            </div>
          </div>
        </div>

        <div
          className="openSourceSection"
          style={{
            padding: isMd ? " 2rem 2rem" : "2.6rem 12%",
          }}
        >
          <h2 className="sectionHeading">Open Source</h2>
          <div
            className="customizableDescriptionContainer"
            style={{
              flexDirection: isMd && "column",
            }}
          >
            <p
              className="sectionDescription customisable-solutions-heading"
              style={{
                width: isMd && "100%",
              }}
            >
              Open-source ignites innovation, removes barriers, and fosters
              collaboration aggressively.
            </p>
          </div>

          <div className="twoCardsContainer">
            <Card
              className="hoverUp card"
              sx={{ maxWidth: isMd ? "100%" : "40%" }}
            >
              <Link to="/technology/flutter" style={{ textDecoration: "none" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    image={supplyChain}
                    alt="green iguana"
                  />
                  <CardContent sx={{ p: 5 }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      className="materialuiCardTitle"
                      style={{ color: "#000" }}
                    >
                      Start Flutter
                    </Typography>
                    <Typography
                      fontSize="18px"
                      variant="body2"
                      color="text.secondary"
                    >
                      Start Flutter is a library of free to download Flutter
                      templates. All themes are available in the form of open
                      source and can be used for any purpose, including
                      commercial. Download your choice of theme and get started!
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
            </Card>

            <Card
              className="hoverUp card"
              sx={{ maxWidth: isMd ? "100%" : "40%" }}
            >
              <Link
                to="/technology/react-native"
                style={{ textDecoration: "none" }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    image={telemedicineImage}
                    alt="green iguana"
                  />
                  <CardContent sx={{ p: 5 }}>
                    <Typography
                      fontSize="25px"
                      gutterBottom
                      variant="h5"
                      component="div"
                      style={{ color: "#000" }}
                    >
                      React Native Seed
                    </Typography>
                    <Typography
                      fontSize="18px"
                      variant="body2"
                      color="text.secondary"
                    >
                      React Native Seed is a starting point for your React
                      Native project as it serves as a starter kit for your base
                      app. It can be used with the technologies that you prefer.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
            </Card>
          </div>
        </div>

        <div
          className="customizableSolutionsSection"
          style={{
            padding: isMd ? " 2rem 2rem" : "2.6rem 12%",
          }}
        >
          <h2 className="sectionHeading">Customizable Solutions</h2>
          <div
            className="customizableDescriptionContainer"
            style={{
              flexDirection: isMd && "column",
            }}
          >
            <p className="sectionDescription customisable-solutions-heading">
              A library of various solutions and clones of popular apps built by
              us which can be easily customized to fit your needs.
            </p>
          </div>

          <div className="twoCardsContainer">
            <Card
              className="hoverUp card"
              sx={{ maxWidth: isMd ? "100%" : "40%" }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250"
                  image={supplyChain}
                  alt="green iguana"
                />
                <CardContent sx={{ p: 5 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="materialuiCardTitle"
                  >
                    Customer Relationship Management
                  </Typography>
                  <Typography
                    fontSize="18px"
                    variant="body2"
                    color="text.secondary"
                  >
                    Through this fully customizable app manage your customer
                    relationships, sales, marketing, and service with zero
                    hassles.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card
              className="hoverUp card"
              sx={{ maxWidth: isMd ? "100%" : "40%" }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250"
                  image={telemedicineImage}
                  alt="green iguana"
                />
                <CardContent sx={{ p: 5 }}>
                  <Typography
                    fontSize="25px"
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    Cybersecurity
                  </Typography>
                  <Typography
                    fontSize="18px"
                    variant="body2"
                    color="text.secondary"
                  >
                    We have ready-to-execute and customizable cybersecurity
                    solutions that can be used to ensure security of your data
                    and infrastructure.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>

        <div
          className="ourTeamSection"
          style={{
            padding: isMd ? " 2rem 2rem" : "2.6rem 12%",
          }}
        >
          <h3 className="sectionHeading">Our Team</h3>
          <p className="cardDescription">
            We bring core-specializations from different streams which makes us
            a best team from overall business perspective.
          </p>
        </div>

        <div
          className="insightsSection"
          style={{
            padding: isMd ? " 2rem 2rem" : "2.6rem 12%",
          }}
        >
          <h2 className="sectionHeading">Insights</h2>
          <div
            className="customizableDescriptionContainer"
            style={{
              flexDirection: isMd && "column",
            }}
          >
            <p className="sectionDescription">
              Discover the inner workings of our brilliant minds at <br />
              GeekyAnts through our blogs, gaining a deeper understanding of who
              we are.
            </p>

            <p
              className="viewApplicationsButton slideRight-blogs"
              type="button"
            >
              More Blogs
              <FaArrowRight className="rightArrowRed" />
            </p>
          </div>

          <div className="twoCardsContainer">
            <Card
              className="hoverUp card"
              sx={{ maxWidth: isMd ? "100%" : "30%" }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250"
                  image={supplyChain}
                  alt="green iguana"
                />
                <CardContent sx={{ p: 5 }}>
                  <Typography>Apr 1, 2024</Typography>
                  <Typography
                    fontSize="25px"
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    Navigating Savings: Grocery Application Revolutionizing
                    Price Comparison Across Stores
                  </Typography>
                  <Typography
                    fontSize="18px"
                    variant="body2"
                    color="text.secondary"
                  >
                    Learn how to revolutionize grocery shopping with an app that
                    can compare prices, maximize savings, and streamline user
                    experience in our latest blog.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card
              className="hoverUp card"
              sx={{ maxWidth: isMd ? "100%" : "30%" }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250"
                  image={supplyChain}
                  alt="green iguana"
                />
                <CardContent sx={{ p: 5 }}>
                  <Typography>Apr 1, 2024</Typography>
                  <Typography
                    fontSize="25px"
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    Navigating Savings: Grocery Application Revolutionizing
                    Price Comparison Across Stores
                  </Typography>
                  <Typography
                    fontSize="18px"
                    variant="body2"
                    color="text.secondary"
                  >
                    Learn how to revolutionize grocery shopping with an app that
                    can compare prices, maximize savings, and streamline user
                    experience in our latest blog.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card
              className="hoverUp card"
              sx={{ maxWidth: isMd ? "100%" : "30%" }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250"
                  image={telemedicineImage}
                  alt="green iguana"
                />
                <CardContent sx={{ p: 5 }}>
                  <Typography>Mar 26, 2024</Typography>
                  <Typography
                    fontSize="25px"
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    Subscriptions Using react-native-purchases by RevenueCat
                  </Typography>
                  <Typography
                    fontSize="18px"
                    variant="body2"
                    color="text.secondary"
                  >
                    In this article, learn how to implement and manage
                    subscriptions seamlessly in your mobile app for sustainable
                    revenue growth with react-native-purchases by RevenueCat.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>

        <div
          className="closingSection"
          style={{
            padding: isMd ? " 2rem 2rem" : "2.6rem 12%",
          }}
        >
          <h1 className="sectionHeading">
            Let’s Connect to Discuss How We Can Make An Awesome Product For You.
          </h1>

          <Link
            to="lets_talk"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              position: "relative",
              backgroundColor: "#ca0515",
              color: "#fff",
              width: isMd ? "80%" : "20%",
              textAlign: "center",
              padding: ".8rem 1rem",
              fontSize: "20px",
              marginRight: "1rem",
              borderRadius: "8px",
            }}
          >
            CONTACT NOW
            <FaArrowRight
              className="rightArrow"
              style={{
                position: "absolute",
                right: "1rem",
              }}
            />
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
