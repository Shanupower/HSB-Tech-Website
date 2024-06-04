/* eslint-disable jsx-a11y/img-redundant-alt */
import { Component } from "react";
import { FaArrowRight } from "react-icons/fa6";

import uiuxDevelopmentImage from "../../assets/Picture4.jpg";
import whyChoose1 from "../../assets/user-centric-uiux.svg";
import whyChoose3 from "../../assets/specialized-design-uiuix.svg";
import whyChoose2 from "../../assets/industry-agnostic.svg";
import whyChoose4 from "../../assets/expeirenced-uiux.svg";

import figmaImage from "../../assets/figma.webp";
import illustrator from "../../assets/illustrator.webp";
import adobexd from "../../assets/adobexd.webp";
import photoshop from "../../assets/photoshop.webp";
import giftBox from "../../assets/collect-graphic.svg";

import servicesImage1 from "../../assets/user-research-uiux.svg";
import servicesImage2 from "../../assets/creating-information.svg";
import servicesImage3 from "../../assets/uiux-for-web.svg";
import servicesImage4 from "../../assets/uiux-consultancy.svg";
import servicesImage5 from "../../assets/wireframing-uiuz.svg";
import servicesImage6 from "../../assets/accessibility-uiux.svg";
import servicesImage7 from "../../assets/maintenance-support-uiux.svg";
import servicesImage8 from "../../assets/uiux-audit.svg";

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
import Navigationbar from "../navigationBar";

const tabItemsList = [
  {
    imageUrl: figmaImage,
    name: "Figma",
  },
  {
    imageUrl: illustrator,
    name: "Illustrator",
  },
  {
    imageUrl: adobexd,
    name: "Adobe XD",
  },
  {
    imageUrl: photoshop,
    name: "Photoshop",
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
    UI/UX Design And Development Services
  </Typography>,
];

class UIUXDevelopment extends Component {
  state = {
    expanded: false,
  };

  handleChange = (panel) => (event, isExpanded) => {
    this.setState((prevState) => ({
      expanded: isExpanded ? panel : false,
    }));
  };

  render() {
    const { expanded } = this.state;

    return (
      <div className="servicesDetailsSection">
        <div className="navigationBar"><Navigationbar /></div>

        <div className="landingSection-services uiuxLandingSection section">
          <div>
            <Breadcrumbs
              className="breadcrumb"
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              {breadcrumbs}
            </Breadcrumbs>
            <h1 className="sectionHeading">
              UI/UX Design And Development Services
            </h1>
            <p className="sectionDescription">
              Creative, attractive, engaging and usable interfaces are the soul
              of any designs. We will help design custom user interfaces based
              on your business requirements for any of your device platforms,
              including mobile apps, tablets, desktops, etc.
            </p>
            <p className="tagLine">
              UX drives UI. Our experienced team of UX designers collaborate the
              finer modules of usability and functionality in-line with business
              goals and end-user needs
            </p>
            <button
              className="getQuoteButton uiux-getQuoteButton"
              type="button"
            >
              Get Quote
            </button>
          </div>
          <img
            className="landingSectionImage-sericesPage"
            src={uiuxDevelopmentImage}
            alt="web development image"
          />
        </div>

        <div className="whyBuildSection section">
          <h1 className="sectionHeading">
            How UI/UX is Prominent for Your Business?
          </h1>
          <p className="sectionDescription">
            We all know that the user satisfaction is essential for any app to
            succeed, and that is achievable only through an awesome UI/UX. An
            outstanding UI/UX helps to leave a lasting impression in your user’s
            mind, elevates your digital product, and makes your brand stand out
            among competitors.
          </p>
        </div>

        <div className="whyChooseSection section">
          <h1 className="sectionHeading">
            Why You Should Hire HSB For UI/UX Services?
          </h1>
          <p className="sectionDescription">
            We take into accountability the smallest aspect of the design
            variant to provide compelling and intuitive user experience. We
            offer mobile UX design, web UI design, UX design for SAAS, Product
            UX design for startups and more, while ensuring that the end user
            enjoys a great value-added experience.{" "}
          </p>
          <div className="cardsContainer-services">
            <div className="card-service">
              <img src={whyChoose1} alt="why choose us card image" />
              <p className="cardTitle-service">User Centric Designs</p>
              <p className="cardDescription-service">
                We always create designs that are user-friendly and eye-catching
                to the audience. We assure to give an amazing experience to your
                customers so that they can revisit often..
              </p>
            </div>
            <div className="card-service">
              <img src={whyChoose2} alt="why choose us card image" />
              <p className="cardTitle-service">Highly Functional Designs</p>
              <p className="cardDescription-service">
                We create UI/UX designs that are highly functional, optimized
                and scalable to the enterprise. The designs are authentic to
                create repeated impression on the user.
              </p>
            </div>
            <div className="card-service">
              <img src={whyChoose3} alt="why choose us card image" />
              <p className="cardTitle-service">
                Experienced and Seasoned Designers
              </p>
              <p className="cardDescription-service">
                Our team of designers is experienced and updated with the latest
                designing technologies to create UI/UX platform leveraged with
                required technologies..
              </p>
            </div>
            <div className="card-service">
              <img src={whyChoose4} alt="why choose us card image" />
              <p className="cardTitle-service">Scalable Across Industries</p>
              <p className="cardDescription-service">
                We are proficient in creating industry-specific UI/UX designs so
                that the customers can feel the connectivity with the product.
              </p>
            </div>
          </div>
        </div>

        <div className="section serciesProvidedSection">
          <h1 className="sectionHeading">Our UI/UX Design Services</h1>
          <p className="sectionDescription">
            We curate UI/UX design and development services in accordance to
            your unique business requirements. As our comprehensive UI/UX
            service we assist, design, and develop applications without
            compromising quality.
          </p>
          <div className="cardsContainer-services">
            <div className="cardItem-service">
              <img src={servicesImage1} alt="why choose us card image" />
              <p className="cardTitle-service">UI/UX for Web and Mobile</p>
              <p className="cardDescription-service">
                Through our stunning designs, we aim to provide visual treat to
                your users. We create an everlasting experience of your brand
                using the latest tech stack and trending designs.
              </p>
            </div>
            <div className="cardItem-service">
              <img src={servicesImage2} alt="why choose us card image" />
              <p className="cardTitle-service">Accessibility Testing</p>
              <p className="cardDescription-service">
                We repeatedly test your digital products to ensure that they are
                functional, dynamic, and accessible to everyone including those
                with disabilities.
              </p>
            </div>
            <div className="cardItem-service">
              <img src={servicesImage3} alt="why choose us card image" />
              <p className="cardTitle-service">UI/UX Consulting</p>
              <p className="cardDescription-service">
                Consult our team of professional UI/UX designers for expert
                suggestions. We provide hassle-free guidance from ideation to
                the finalized product.
              </p>
            </div>
            <div className="cardItem-service">
              <img src={servicesImage4} alt="why choose us card image" />
              <p className="cardTitle-service">Creating Architecture</p>
              <p className="cardDescription-service">
                Before we execute any design, we create clear, intuitive
                information architecture so that you can access and navigate
                effortlessly from user’s perspective.
              </p>
            </div>
            <div className="cardItem-service">
              <img src={servicesImage5} alt="why choose us card image" />
              <p className="cardTitle-service">Maintenance and Support</p>
              <p className="cardDescription-service">
                We extend UI/UX maintenance and support for your digital
                products. We ensure to keep your digital products updated and
                optimized.
              </p>
            </div>
            <div className="cardItem-service">
              <img src={servicesImage6} alt="why choose us card image" />
              <p className="cardTitle-service">Accessibility Testing</p>
              <p className="cardDescription-service">
                We ensure that your digital products are dynamic, functional,
                and accessible even to users with disabilities through repeated
                testing and checks.
              </p>
            </div>
            <div className="cardItem-service">
              <img src={servicesImage7} alt="why choose us card image" />
              <p className="cardTitle-service">Maintenance and Support</p>
              <p className="cardDescription-service">
                We help you get the most out of your digital products and keep
                them updated and optimized through our ongoing UI/UX maintenance
                and support.
              </p>
            </div>
            <div className="cardItem-service">
              <img src={servicesImage8} alt="why choose us card image" />
              <p className="cardTitle-service">UI/UX Audit</p>
              <p className="cardDescription-service">
                We assist you in discovering what users think about your website
                or app with our high-quality UI/UX audits conducted by
                experienced professionals.
              </p>
            </div>
          </div>
        </div>

        <div className="techAndToolsSection section">
          <h1 className="sectionHeading">UI/UX Tools We Use</h1>
          <div className="tabContainer">
            <button type="button" className="tabItem active">
              React Native
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

        <div className="closingSection section">
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

export default UIUXDevelopment;
