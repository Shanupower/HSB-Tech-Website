import { useMediaQuery } from "@mui/material";
import React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Navigationbar from "../navigationBar";
import Footer from "../footer";
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
    Fixed Scope Engagement Model
  </Link>,
];

const Fixed = () => {
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
              Fixed Scope Engagement Model
            </h1>
            <p
              className="sectionDescription"
              style={{ fontSize: "20px", marginTop: "2rem", color: "#fff" }}
            >
              Leverage our Fixed Scope engagement model for quick and prompt
              results with higher visibility and less management. The predefined
              project scope enables you to be precise with the requirement and
              attain the results accordingly.
            </p>
          </div>
        </div>

        <div
          className="  section"
          style={{
            paddingInline: isMd ? " 2rem" : " 14%",
          }}
        >
          <h1>What is the Fixed Scope Development Model?</h1>
          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.5",
              marginTop: "1rem",
            }}
          >
            For requirements that are fixed before the process begins, the fixed
            scope model offers the best value. Everything in the scope of the
            project is decided before the project begins, with full
            transparency.
          </p>
        </div>
        <div
          style={{
            paddingInline: isMd ? " 2rem" : " 14%",
          }}
        >
          <h1>In What Conditions Fixed Scope Development Model Is Suitable?</h1>
          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.5",
              marginTop: "1rem",
            }}
          >
            When your development strategy is well-defined, i.e., when the
            development plan has a fixed timeline, and budget, as well as the
            features of the app are pre-decided. When everything is precisely
            clear, it becomes easy draft an estimate followed by time-bound
            execution.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBlock: "2rem",
              flexDirection: isMd && "column",
              gap: "1rem",
            }}
          >
            <div
              style={{
                border: "1px solid lightgray",
                padding: "1rem ",
                borderRadius: "8px",
                width: isMd ? "100%" : "calc(100%/3 - 1rem )",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px",
              }}
            >
              <h3>Fixed Timeline</h3>
              <p style={{ fontSize: "18px" }}>
                Suitable for projects which have defined timeframe and is bound
                to be completed accordingly.{" "}
              </p>
            </div>
            <div
              style={{
                border: "1px solid lightgray",
                padding: "1rem ",
                borderRadius: "8px",
                width: isMd ? "100%" : "calc(100%/3 - 1rem )",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px",
              }}
            >
              <h3>Fixed Budget</h3>
              <p style={{ fontSize: "18px" }}>
                Suitable for projects which are budget-constrained and allow
                effective use of resources.
              </p>
            </div>
            <div
              style={{
                border: "1px solid lightgray",
                padding: "1rem ",
                borderRadius: "8px",
                width: isMd ? "100%" : "calc(100%/3 - 1rem )",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px",
              }}
            >
              <h3>Pre-defined Features of the App</h3>
              <p style={{ fontSize: "18px" }}>
                Based on the given details, an estimate on time, budget, and
                resources can be prepared anc achieved accordingly.
              </p>
            </div>
          </div>
          <div style={{ marginBlock: "4rem" }}>
            <h1>How Effectively We Execute Fixed Scope Engagement Model</h1>
            <ul
              style={{
                listStyleType: "circle",
                listStylePosition: "outside",
              }}
            >
              <li
                style={{
                  fontSize: "18px",
                }}
              >
                Brainstorm your requirement and list out the features of the
                app.
              </li>
              <li
                style={{
                  fontSize: "18px",
                }}
              >
                We fix the budget, time, and resources and share the same with
                you.
              </li>
              <li
                style={{
                  fontSize: "18px",
                }}
              >
                We bring best team for you to work according to the pre-defined
                strategy.
              </li>{" "}
              <li
                style={{
                  fontSize: "18px",
                }}
              >
                Executing project with full transparency and consent planned
                deliverables.
              </li>{" "}
              <li
                style={{
                  fontSize: "18px",
                }}
              >
                Daily stand-up calls for continuous update on the progress.
              </li>{" "}
              <li
                style={{
                  fontSize: "18px",
                }}
              >
                Dedicated account manager who will be PoC throughout the project
                duration.
              </li>
            </ul>
          </div>
          <div>
            <h1>Tools We Use</h1>
            <h3 style={{ fontSize: "22px", marginTop: "2rem" }}>
              For effective communication between teams{" "}
            </h3>
            <p style={{ fontSize: "18px" }}>Slack</p>

            <h3 style={{ fontSize: "22px", marginTop: "2rem" }}>
              For daily standup calls, weekly demos and other meetings
            </h3>
            <p style={{ fontSize: "18px" }}>Google meet / Zoom</p>
            <h3 style={{ fontSize: "22px", marginTop: "2rem" }}>
              To assign task and share project updates
            </h3>
            <p style={{ fontSize: "18px" }}>JIRA / Trello / AirTable</p>
            <h3 style={{ fontSize: "22px", marginTop: "2rem" }}>
              To control version
            </h3>
            <p style={{ fontSize: "18px" }}>GitHub / GitLab</p>
          </div>
        </div>
        <div
          className="closingSection"
          style={{ paddingInline: isMd ? " 2rem" : " 14%" }}
        >
          <h1
            className="sectionHeading"
            style={{ fontSize: isMd ? " 30px" : "48px" }}
          >
            Connect us now to avail our RealEsate app development services
          </h1>
          <button className="letsTalkButton slideRight" type="button">
            Contact Now
            <FaArrowRight className="rightArrow" />
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Fixed;
