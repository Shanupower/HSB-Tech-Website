import "./index.css";

import { useMediaQuery } from "@mui/material";
import React from "react";
import Link from "@mui/material/Link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Navigationbar from "../navigationBar";
import Footer from "../footer";
import Logo from "../../assets/hsb-logo.png";
import Part1 from "../../assets/icons/Screenshot 2024-06-09 134925.png";
import Par2 from "../../assets/icons/Screenshot 2024-06-09 135034.png";
import { FaArrowRight } from "react-icons/fa";

const breadcrumbs = [
  <Link underline="hover" key="1" href="/" style={{ color: "#e8e8e8" }}>
    Home
  </Link>,
  <Link
    underline="hover"
    key="2"
    color="inherit"
    href="/services"
    style={{ color: "#e8e8e8", fontSize: "20px" }}
  >
    About
  </Link>,
];

const About = () => {
  const isMd = useMediaQuery("(max-width:1068px)");

  return (
    <>
      <div className="industriesPageContainer">
        {!isMd && <Navigationbar />}

        <div
          className="  section"
          style={{
            paddingInline: isMd ? " 2rem" : " 14%",
            display: "flex",
            gap: "5%",
            position: "relative",
            backgroundColor: "#2b456b",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: isMd ? " 100%" : "60%" }}>
            <Breadcrumbs
              style={{ color: "#fff" }}
              className="breadcrumb-industries"
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              {breadcrumbs}
            </Breadcrumbs>
            <h1
              className="sectionHeading"
              style={{ marginTop: "3.2rem", fontSize: "48px", color: "#fff" }}
            >
              About Us
            </h1>
            <h3
              style={{
                marginTop: "2rem",
                fontSize: "28px",
                color: "rgb(202, 5, 21)",
              }}
            >
              Highly Scalable Bees
            </h3>
            <p
              className="sectionDescription"
              style={{ fontSize: "20px", marginTop: "2rem", color: "#fff" }}
            >
              We are an emerging services and product development company aimed
              to provide highly scalable technological solutions and
              unparalleled support. We leverage our extensive experience and
              skilled resources to deliver top-notch IT services for businesses
              willing to catapult many years into the future.
            </p>
            <p
              className="sectionDescription"
              style={{ fontSize: "20px", marginTop: "2rem", color: "#fff" }}
            >
              We envision to provide cutting-edge IT infrastructure and
              operational services tailored to meet the diverse needs of modern
              businesses. Accordingly, we keep our approach strategical,
              multi-directional, and differential. By standing out ourselves, we
              make our clients grow.
            </p>

            <button
              className="letsTalkButton slideRight"
              type="button"
              style={{
                display: "flex",
                position: "relative",
                alignItems: "center",
                textAlign: "center",
                paddingLeft: "1.8rem",
              }}
            >
              GET QUOTE
              <FaArrowRight
                className="rightArrow"
                style={{ position: "absolute", right: ".6rem" }}
              />
            </button>
          </div>
          <div style={{ width: "36%", display: isMd && "none" }}>
            <img src={Logo} alt="" />
          </div>
        </div>
        <div
          className="  section"
          style={{
            paddingInline: isMd ? " 2rem" : " 14%",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexDirection: isMd && "column",
            }}
          >
            <h2
              style={{
                minWidth: "fit-content",
                textWrap: "nowrap",
                fontSize: "22px",
              }}
            >
              OUR MISSION:
            </h2>
            <p>
              We aim to provide agile and enduring customer-centric solutions
              that are equally scalable and customizable to ensure the
              accomplishment of desired business goals.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexDirection: isMd && "column",
            }}
          >
            <h2
              style={{
                minWidth: "fit-content",
                textWrap: "nowrap",
                fontSize: "22px",
              }}
            >
              OUR VISION:
            </h2>
            <p>
              We envision excelling as a one-stop solution provider in IT &
              operations management, which is quality-driven to create
              benchmarks in excellence.
            </p>
          </div>

          <h1 style={{ marginTop: "4rem", fontSize: "30px" }}>
            Why Choose Us?
          </h1>
          <b style={{ color: "rgb(202, 5, 21)", fontSize: "20px" }}>
            Our Strengths
          </b>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMd ? "1fr" : "repeat(3, 1fr)",
              gap: "2rem",
              marginTop: "2rem",
            }}
          >
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: "0.25rem",
                padding: "1rem",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <img
                style={{
                  width: "60px",
                  height: "60px",
                  marginBottom: ".8rem",
                }}
                src="data:image/png;base64,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"
                alt=""
              />
              <h3>Customer Centric</h3>
              <p>
                At HSB, satisfaction is paramount. We listen to our clients,
                communicate transparently, and provide unwavering support
                throughout their journey with us.
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: "0.25rem",
                padding: "1rem",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src="data:image/png;base64,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"
                alt=""
                style={{
                  width: "60px",
                  height: "60px",
                  marginBottom: ".8rem",
                }}
              />
              <h3>Innovative Solutions</h3>
              <p>
                Innovation is part of our DNA. We constantly explore new
                technologies and stay updated with the latest trends to offer
                cutting-edge solutions to our clients.s.
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: "0.25rem",
                padding: "1rem",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <img
                style={{
                  width: "50px",
                  height: "50px",
                  marginBottom: ".8rem",
                }}
                src="data:image/png;base64,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"
                alt=""
              />
              <h3>Secure and Reliable</h3>
              <p>
                Considering the criticality of data security we strive to
                implement robust measures to safeguard your valuable information
                ensuring the highest level of reliability.
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: "0.25rem",
                padding: "1rem",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <img
                style={{
                  width: "60px",
                  height: "60px",
                  marginBottom: ".8rem",
                }}
                src="data:image/png;base64,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"
                alt=""
              />
              <h3>Tailored Solutions</h3>
              <p>
                We understand that business is unique, hence we take a
                personalized approach to understand your needs and craft
                tailor-made solutions that align perfectly with your goals.
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: "0.25rem",
                padding: "1rem",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <img
                style={{
                  width: "50px",
                  height: "50px",
                  marginBottom: ".8rem",
                }}
                src="data:image/png;base64,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"
                alt=""
              />
              <h3 style={{ fontSize: "24px" }}>End to End Solutions</h3>
              <p>
                From planning and implementation to ongoing support and
                maintenance, we offer comprehensive E2E IT infrastructure
                services, ensuring a seamless experience for our clients.
              </p>
            </div>
          </div>

          <div
            style={{
              marginTop: "6rem",
            }}
          >
            <h2>Your Trusted IT Infrastructure Services Provider!</h2>
            <p>
              With a deep understanding of modern technology and strong
              expertise in multiple business domains, we implement comprehensive
              projects and deliver high-end web, mobile, and IoT solutions. We
              develop custom software products tailored to the specific business
              needs of our clients and support them throughout the whole way:
              from an idea to its implementation. Our solid background,
              flexibility, and full transparency enabled us to become a trusted
              technological partner for our clients. We are synonymous with
              top-quality and high-end products & services.
            </p>
          </div>

          <div style={{ marginTop: "4rem" }}>
            <h1>Our Technical Partners</h1>
            <div
              style={{
                display: "flex",
                gap: "2rem",
                marginTop: "2rem",
                flexWrap: "wrap",
              }}
            >
              <img src={Part1} alt="" />
              <img src={Par2} alt="" />
            </div>
          </div>

          <div className="" style={{ marginTop: "3.2rem" }}>
            <h1
              className="sectionHeading"
              style={{ fontSize: isMd ? " 30px" : "48px" }}
            >
              Connect us now to avail our BFSI app development services
            </h1>
            <button
              className="letsTalkButton slideRight"
              type="button"
              style={{
                display: "flex",
                position: "relative",
                alignItems: "center",
                textAlign: "center",
                paddingLeft: "1.8rem",
              }}
            >
              GET QUOTE
              <FaArrowRight
                className="rightArrow"
                style={{ position: "absolute", right: "1rem" }}
              />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
