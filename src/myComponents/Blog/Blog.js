import React from "react";
import Navigationbar from "../navigationBar";
import { useMediaQuery } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Footer from "../footer";
import "./index.css";
import { FaArrowRight } from "react-icons/fa";

const breadcrumbs = [
  <Link
    underline="hover"
    key="1"
    href="/"
    style={{ color: "#2a2a2a", fontSize: "18px" }}
  >
    Home
  </Link>,
  <Link
    underline="hover"
    key="2"
    color="inherit"
    style={{ color: "#000", fontSize: "22px" }}
  >
    Blog
  </Link>,
];

const Blog = () => {
  const isMd = useMediaQuery("(max-width:1068px)");

  return (
    <>
      <div className="industriesPageContainer">
        <div className="navigationBar">
          <Navigationbar />
        </div>
        <div style={{ padding: isMd ? "3.2rem 2rem" : "2rem 18%" }}>
          <Breadcrumbs
            style={{ color: "#fff" }}
            className="breadcrumb-industries"
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
          <div className="iframe-container">
            <iframe
              src="https://geekyants.com/blog"
              width="100%"
              height="800"
              style={{ border: "none" }}
              title="HSB blog"
            ></iframe>
          </div>

          <div className="closingSections" style={{ marginTop: "4rem" }}>
            <h1
              className="sectionHeading"
              style={{ fontSize: isMd ? " 30px" : "48px" }}
            >
              Let's Build Your Product Together!
            </h1>
            <p style={{ fontSize: "20px" }}>
              Get a free discovery session and consulting to start your project
              today.
            </p>
            <Link
              href="/lets_talk"
              className="letsTalkButton slideRight"
              type="button"
              style={{
                display: "flex",
                position: "relative",
                alignItems: "center",
                textAlign: "center",
                paddingLeft: "1.2rem",
                textWrap: "nowrap",
                minWidth: "fit-content",
                textDecoration: "none",
                color: "#ffffff",
              }}
            >
              LET'S TALK
              <FaArrowRight
                className="rightArrow"
                style={{ position: "absolute", right: ".6rem" }}
              />
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Blog;
