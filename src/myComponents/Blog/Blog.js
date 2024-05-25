import React from "react";
import Navigationbar from "../navigationBar";
import { useMediaQuery } from "@mui/material";
import Footer from "../footer";
import "./index.css";
const Blog = () => {
  const isMd = useMediaQuery("(max-width:1068px)");

  return (
    <>
      <div className="industriesPageContainer">
        <div className="navigationBar">
          <Navigationbar />
        </div>
        <h1>blog</h1>
        {/* <div className="iframe-container">
          <iframe
            src="https://geekyants.com/blog"
            width="100%"
            height="800"
            style={{ border: "none" }}
            title="HSB blog"
          ></iframe>
        </div> */}
        <Footer />
      </div>
    </>
  );
};

export default Blog;
