/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
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
import oliveGardenImage from "../../assets/oliveGarden.svg";
import khatabookImage from "../../assets/khatabook.svg";
import icicImage from "../../assets/icici-bank-logo.webp";
import amanaImage from "../../assets/amana.webp";
import pepperfryImage from "../../assets/pepperfry.webp";
import atsignImage from "../../assets/atsign.webp";
import hundredmsImage from "../../assets/100ms.svg";
import dardenImage from "../../assets/darden.svg";
import mplImage from "../../assets/mpl.webp";
import payPoint from "../../assets/paypoint.webp";
import scrollNewsImage from "../../assets/scroll-news.webp";
import ibsImage from "../../assets/ips-verlang.webp";
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

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Footer from "../footer";

import { Link } from "react-router-dom";

import "./index.css";

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
    imageUrl: oliveGardenImage,
    cardTitle: "Olive Garden",
    cardDescription:
      "Olive Garden is an American casual dining restaurant chain. It is a subsidiary of Darden Restaurants, Inc., which is headquartered in Orange County, Florida. We have been a part of Olive Garden’s success journey by building their web and mobile applications",
  },
  {
    id: 2,
    imageUrl: khatabookImage,
    cardTitle: "Khatabook",
    cardDescription:
      "Khatabook is an Indian initiative to make wealth management simpler for people of all walksof life.They collaborated with us to build a mobile app for their service which was built in ReactNative, a web app built in React and employed MolecularJS and MongoDB + MySQLDB in the backend.The app is live and has already helped 10M+ people manage and save money.",
  },
  {
    id: 3,
    imageUrl: icicImage,
    cardTitle: "ICICI Bank",
    cardDescription:
      "ICICI Securities is a subsidiary of ICICI Bank. They meet three critical needs of their vast customer base — investments, protection, and borrowing. The virtual financial supermarket www.icicidirect.com is part of their operation. We collaborated with them to create the frontend of their mobile app.",
  },
  {
    id: 4,
    imageUrl: amanaImage,
    cardTitle: "Amana",
    cardDescription:
      "UK based Amana skincare is one of the fastest growing product based companies that delivers beauty products based on skin types of consumers. We built a typical e-commerce mobile app as well as a web app in React + React Native with Styled components and Firebase.",
  },
  {
    id: 5,
    imageUrl: pepperfryImage,
    cardTitle: "Pepperfry",
    cardDescription:
      "Pepperfry is an online marketplace specializing in home décor and furniture. Our collaboration was related to design systems. We Integrated a new design system on existing app screens and made them more responsive.",
  },
  {
    id: 6,
    imageUrl: atsignImage,
    cardTitle: "AtSign",
    cardDescription:
      "AtSign is the creator of the atPlatform, which revolutionized how data is exchanged over the internet with its end-to-end encrypted communication protocol, called the atProtocol. We worked on two projects for the @company — a location-sharing app, and a UI/UX based project.",
  },
  {
    id: 7,
    imageUrl: dardenImage,
    cardTitle: "Darden",
    cardDescription:
      "Darden is the world's largest full-service restaurant company, with 175,000+ employees and 1,800 restaurant locations. A member of the Fortune 500 for the last 21 years, the Darden team deals with multiple operational requirements. We’ve been working with them to build their web and mobile applications.",
  },
  {
    id: 8,
    imageUrl: mplImage,
    cardTitle: "MPL",
    cardDescription:
      "A long term client with over 2 years of engagement, Mobile Premier League (MPL) is India's biggest online gaming platform that offers the ultimate gaming experience to users, who can play 40+ games including fantasy sports, that we helped redesign using React, React Native with Redux, Sentry, Babel and Objective C.",
  },
  {
    id: 9,
    imageUrl: payPoint,
    cardTitle: "PayPoint",
    cardDescription:
      "Taking logistics to the next level with an all-encompassing web app, PayPoint is dominating as UK's largest logistics service provider, backed by React Native, Firebase, a brand new UI &amp; UX design and our guarantee.",
  },
  {
    id: 10,
    imageUrl: scrollNewsImage,
    cardTitle: "Scroll News",
    cardDescription:
      "Scroll News is an independent source for news that covers news, politics, sports, culture and everything in between. We helped build an ideal mobile and web platform for it using Flutter, GCP, Firebase, NodeJS and Postgres.",
  },
  {
    id: 11,
    cardTitle: "100ms",
    imageUrl: hundredmsImage,
    cardDescription:
      "Founded in 2020, 100ms is revolutionizing the live-video industry. Their products and APIs simplify real-time video conferring and allow interactive live streaming. We worked on developing video conferencing SDKs to enhance the 100ms application.",
  },
  {
    id: 12,
    imageUrl: ibsImage,
    cardTitle: "IPS Verlang",
    cardDescription:
      "IPS Verlag is part of the IPS Group — Germany's largest independent national distributor of press products. They provide a wide range of services and deal with a large network of news organizations. From digital printing and press software to publishing of books, the organization is constantly growing. We’re designing and developing a mobile application for IPS.",
  },
];

class Home extends Component {
  render() {
    return (
      <div className="appContainer">
        <div className="landingSection">
          <img className="geekyantlogo" src={hsbLogo} alt="logo" />
          <h1 className="ladingPageHeading">
            Highly
            <br />
            Scalable <br />
            Bees
            <br />
          </h1>
          <p className="landingSectionSubHeading">
            Embrace our IT & Managed Services to accelerate your business
            growth.
          </p>
        </div>

        <div className="navbarSection">
          <button className="letsTalkButton slideRight" type="button">
            LET'S TALK
            <FaArrowRight className="rightArrow" />
          </button>
          <button className="navItem" type="button">
            What we do
          </button>
          <button className="navItem" type="button">
            Case studies
          </button>
          <button className="navItem" type="button">
            Technologies
          </button>
          <button className="navItem" type="button">
            About us
          </button>
          <button className="navItem" type="button">
            Blogs
          </button>
        </div>

        <div className="servicesSection">
          <h3 className="serviesSectionHeading">
            We Deliver Extraordinary Digital Experiences.
          </h3>
          <div className="serviesContainer">
            <div className="serviceItem sparkle">
              <p>Smart IT solutions for every need.</p>
              <img className="serviceImage" src={sparkleImage} alt="sparkle" />
            </div>

            <div className="serviceItem impact">
              <p>Seamless managed services with high-performance workspaces.</p>
              <img className="serviceImage" src={impactImage} alt="sparkle" />
            </div>

            <div className="serviceItem scale">
              <p>Customized approach across industries.</p>
              <img className="serviceImage" src={scaleImage} alt="sparkle" />
            </div>

            <div className="serviceItem quality">
              <p>Seasoned professionals who value business ethics.</p>
              <img className="serviceImage" src={qualityImage} alt="sparkle" />
            </div>
          </div>
        </div>

        <div className="trustedBySection">
          <h1 className="trustedByheading">Trusted By</h1>
          <Slider {...settings}>
            {trustedbyCompaniesList.map((eachCompany) => (
              <HoverCard.Root>
                <HoverCard.Trigger asChild>
                  <div key={eachCompany.id} className="trustedbyImageContainer">
                    <img
                      className="trustedbyImage"
                      src={eachCompany.imageUrl}
                      alt="trusted by company image"
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
        </div>

        <div className="appsWeDevelopedSecion section">
          <h1 className="sectionHeading">Apps We Developed</h1>
          <div className="appsDeveloped-images-container">
            <div className="appDevelopedImage">
              <img
                className="appDevelopedImage"
                src={salaryDayImage}
                alt="app developed image"
              />
            </div>
            <img
              className="appDevelopedImage ecofin"
              src={ecofinImage}
              alt="app developed image"
            />
          </div>
        </div>

        <div className="developmentSection">
          <h2 className="sectionHeading">What We Do Best</h2>
          <p className="sectionDescription">
            We are well equipped with an updated technical knowledge to serve
            our customers with advanced IT solutions that can add value to the
            business.
          </p>

          <div className="developmentCardsContainer">
            <Link to="/services/1" className="deveopmentCard hoverUp">
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

            <div className="deveopmentCard hoverUp">
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
            </div>

            <div className="deveopmentCard hoverUp">
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
            </div>

            <div className="deveopmentCard hoverUp">
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
            </div>

            <div className="deveopmentCard hoverUp">
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
            </div>

            <div className="deveopmentCard hoverUp">
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
            </div>
          </div>
        </div>

        <div className="certifiedPartnersSection">
          <h1 className="certifiedPartnersHeading">We Work With</h1>
          <div className="comapinesContainer">
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

        <div className="technologiesSection">
          <h2 className="sectionHeading">Technologies</h2>
          <p className="sectionDescription">
            We work with prominent technologies that can solve your product
            requirements. While you concentrate on your business needs, we take
            care of your technical aspect.
          </p>

          <div className="technologiesContainer">
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

        <div className="openSourceSection">
          <h2 className="sectionHeading">Open Source</h2>
          <div className="customizableDescriptionContainer">
            <p className="sectionDescription customisable-solutions-heading">
              Open-source ignites innovation, removes barriers, and fosters
              collaboration aggressively.
            </p>

            <button
              className="viewApplicationsButton slideRight-view-applications"
              type="button"
            >
              View Showcase Applications
              <FaArrowRight className="rightArrowRed" />
            </button>

            <button className="viewApplicationsButton-mobile" type="button">
              View Showcase Applications
            </button>
          </div>

          <div className="twoCardsContainer">
            <Card className="hoverUp card" sx={{ maxWidth: 500 }}>
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
            </Card>

            <Card className="hoverUp card" sx={{ maxWidth: 500 }}>
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
                    React Native Seed
                  </Typography>
                  <Typography
                    fontSize="18px"
                    variant="body2"
                    color="text.secondary"
                  >
                    React Native Seed is a starting point for your React Native
                    project as it serves as a starter kit for your base app. It
                    can be used with the technologies that you prefer.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>

        <div className="customizableSolutionsSection">
          <h2 className="sectionHeading">Customizable Solutions</h2>
          <div className="customizableDescriptionContainer">
            <p className="sectionDescription customisable-solutions-heading">
              A library of various solutions and clones of popular apps built by
              us which can be easily customized to fit your needs.
            </p>

            <button
              className="viewApplicationsButton slideRight-view-applications"
              type="button"
            >
              View Showcase Applications
              <FaArrowRight className="rightArrowRed" />
            </button>

            <button className="viewApplicationsButton-mobile" type="button">
              View Showcase Applications
            </button>
          </div>

          <div className="twoCardsContainer">
            <Card className="hoverUp card" sx={{ maxWidth: 500 }}>
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

            <Card className="hoverUp card" sx={{ maxWidth: 500 }}>
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

        <div className="ourTeamSection">
          <h3 className="sectionHeading">Our Team</h3>
          <p className="cardDescription">
            We bring core-specializations from different streams which makes us
            a best team from overall business perspective.
          </p>
        </div>

        <div className="insightsSection">
          <h2 className="sectionHeading">Insights</h2>
          <div className="customizableDescriptionContainer">
            <p className="sectionDescription">
              Discover the inner workings of our brilliant minds at <br />
              GeekyAnts through our blogs, gaining a deeper understanding of who
              we are.
            </p>

            <button
              className="viewApplicationsButton slideRight-blogs"
              type="button"
            >
              More Blogs
              <FaArrowRight className="rightArrowRed" />
            </button>
          </div>

          <div className="twoCardsContainer">
            <Card className="hoverUp card" sx={{ maxWidth: 350 }}>
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

            <Card className="hoverUp card" sx={{ maxWidth: 350 }}>
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

            <Card className="hoverUp card" sx={{ maxWidth: 350 }}>
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

export default Home;
