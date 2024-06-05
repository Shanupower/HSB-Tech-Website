import { useMediaQuery } from "@mui/material";
import React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Navigationbar from "../navigationBar";
import Footer from "../footer";
import { FaArrowRight } from "react-icons/fa";
import Mehtod from "../../assets/icons/method.png";
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
    Agile Product Development Model
  </Link>,
];

const Agile = () => {
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
              Agile Product Development Model
            </h1>
            <p
              className="sectionDescription"
              style={{ fontSize: "20px", marginTop: "2rem", color: "#fff" }}
            >
              Embrace our agile product management model to pace up your
              development process, expand collaboration, and foster the ability
              to better respond to market trends.
            </p>
          </div>
        </div>

        <div
          className="  section"
          style={{
            paddingInline: isMd ? " 2rem" : " 14%",
          }}
        >
          <h1>What is the Agile Product Development Model?</h1>
          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.5",
              marginTop: "1rem",
            }}
          >
            Agile project management is an iterative approach to managing
            software development projects that focuses on continuous releases
            and incorporating customer feedback with every iteration.
          </p>
        </div>
        <div
          style={{
            paddingInline: isMd ? " 2rem" : " 14%",
          }}
        >
          <div style={{ marginBlock: "0rem 2rem" }}>
            <h1>How Effectively We Execute Agile Product Engagement Model</h1>
            <p
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                marginTop: "1rem",
              }}
            >
              Agile product development model can be preferred for projects that
              are not fully defined and are open to changes. Clients who have a
              limited understanding of the ultimate product that need to be
              developed can opt for agile product development.
            </p>
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
                When you want to get started with limited planning.
              </li>
              <li
                style={{
                  fontSize: "18px",
                }}
              >
                When product quality matters the most and user experience
                through continuous learning.
              </li>
              <li
                style={{
                  fontSize: "18px",
                }}
              >
                When time constraints are negligible and key stakeholders are
                open for options.
              </li>{" "}
            </ul>
          </div>
          <div
            style={{
              marginBlock: "4rem",
            }}
          >
            <h1>Our Agile Methodology</h1>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.5",
              }}
            >
              Our Agile methodology is a project management framework that
              breaks projects down into several dynamic phases, commonly known
              as sprints. After every sprint, teams reflect and look back to see
              if there was anything that could be improved so they can adjust
              their strategy for the next sprint.
            </p>

            <img
              src={Mehtod}
              alt=""
              style={{
                width: isMd ? "90%" : "50%",
                height: isMd ? "260px" : "460px",
                margin: "0 auto",
                marginTop: "3.2rem",
              }}
            />
          </div>
          <div className="" style={{ margin: "4rem 0" }}>
            <h1>How HSB Can Help You with Agile Product Development Model?</h1>
            <p
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                marginTop: "1rem",
              }}
            >
              For requirements that are fixed before the process begins, the
              fixed scope model offers the best value. Everything in the scope
              of the project is decided before the project begins, with full
              transparency.
            </p>
          </div>

          <h1>In What Conditions Fixed Scope Development Model Is Suitable?</h1>

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
                backgroundColor: "rgb(43, 69, 107)",
                color: "#fff",
              }}
            >
              <img
                src="https://geekyants.com/images/engagement-model/project-management.svg"
                alt=""
                style={{
                  width: "80px",
                  height: "80px",
                  padding: "1rem",
                  marginBottom: "1rem",
                }}
              />
              <h3>Our agile methods are adaptable</h3>
              <p style={{ fontSize: "18px" }}>
                We allow you to shift strategies quickly, without disturbing the
                flow of a project.
              </p>
            </div>
            <div
              style={{
                border: "1px solid lightgray",
                padding: "1rem ",
                borderRadius: "8px",
                width: isMd ? "100%" : "calc(100%/3 - 1rem )",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px",
                backgroundColor: "rgb(43, 69, 107)",
                color: "#fff",
              }}
            >
              <img
                src="https://geekyants.com/images/engagement-model/seo.svg"
                alt=""
                style={{
                  width: "80px",
                  height: "80px",
                  padding: "1rem",
                  marginBottom: "1rem",
                }}
              />
              <h3>We foster collaborative teamwork</h3>
              <p style={{ fontSize: "18px" }}>
                We encourage team to communicate effectively for better
                collaborative work.
              </p>
            </div>
            <div
              style={{
                border: "1px solid lightgray",
                padding: "1rem ",
                borderRadius: "8px",
                width: isMd ? "100%" : "calc(100%/3 - 1rem )",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px",
                backgroundColor: "rgb(43, 69, 107)",
                color: "#fff",
              }}
            >
              <img
                src="https://geekyants.com/images/engagement-model/security.svg"
                alt=""
                style={{
                  width: "80px",
                  height: "80px",
                  padding: "1rem",
                  marginBottom: "1rem",
                }}
              />
              <h3>Our methods are customer-centric</h3>
              <p style={{ fontSize: "18px" }}>
                We prioritize features that focus on customer needs. When these
                needs change, we take an Agile approach and shift the
                perspective.
              </p>
            </div>
          </div>

          <div>
            <h1>Tools We Use</h1>
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: "6px",
                padding: "3rem 2rem",
                boxShadow: "0 2px 3px gray",
                marginTop: "2rem",
              }}
            >
              <h1 style={{ fontSize: "28px" }}>All Tools</h1>

              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  marginTop: "2rem",
                  // flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    width: "50%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <img
                    src="https://geekyants.com/images/fixed-scope/tools/slack.svg"
                    alt=""
                    style={{
                      boxShadow: "0 2px 3px rgba(0,0,0,.1)",
                      width: "80px",
                      height: "80px",
                      padding: "1rem",
                    }}
                  />
                  <h1 style={{ color: "#080808c4", fontSize: "22px" }}>
                    Slack
                  </h1>
                  <p style={{ color: "#080808c4", fontSize: "18px" }}>
                    For effective communication between teams that may be in
                    different time zones
                  </p>
                </div>
                <div
                  style={{
                    width: "50%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "1.6rem",
                    }}
                  >
                    <img
                      src="https://geekyants.com/images/engagement-model/tools/meet.svg"
                      alt=""
                      style={{
                        boxShadow: "0 2px 3px rgba(0,0,0,.1)",
                        width: "80px",
                        height: "80px",
                        padding: "1rem",
                      }}
                    />
                    <img
                      src="https://geekyants.com/images/engagement-model/tools/zoom.svg"
                      alt=""
                      style={{
                        boxShadow: "0 2px 3px rgba(0,0,0,.1)",
                        width: "80px",
                        height: "80px",
                        padding: "1rem",
                      }}
                    />
                  </div>

                  <h1 style={{ color: "#080808c4", fontSize: "22px" }}>
                    Google meet / Zoom
                  </h1>
                  <p style={{ color: "#080808c4", fontSize: "18px" }}>
                    For daily standup calls, weekly demos and other meetings
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  marginTop: "2rem",
                  // flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    width: "50%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "1.6rem",
                    }}
                  >
                    <img
                      src="https://geekyants.com/images/engagement-model/tools/jira.svg"
                      alt=""
                      style={{
                        boxShadow: "0 2px 3px rgba(0,0,0,.1)",
                        width: "80px",
                        height: "80px",
                        padding: "1rem",
                      }}
                    />
                    <img
                      src="https://geekyants.com/images/engagement-model/tools/trello.svg"
                      alt=""
                      style={{
                        boxShadow: "0 2px 3px rgba(0,0,0,.1)",
                        width: "80px",
                        height: "80px",
                        padding: "1rem",
                      }}
                    />
                  </div>
                  <h1 style={{ color: "#080808c4", fontSize: "22px" }}>
                    JIRA / Trello / AirTable
                  </h1>
                  <p style={{ color: "#080808c4", fontSize: "18px" }}>
                    For task assignment and project management
                  </p>
                </div>
                <div
                  style={{
                    width: "50%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "1.6rem",
                    }}
                  >
                    <img
                      src="https://geekyants.com/images/engagement-model/tools/git.svg"
                      alt=""
                      style={{
                        boxShadow: "0 2px 3px rgba(0,0,0,.1)",
                        width: "80px",
                        height: "80px",
                        padding: "1rem",
                      }}
                    />
                    <img
                      src="https://geekyants.com/images/engagement-model/tools/gitlab.svg"
                      alt=""
                      style={{
                        boxShadow: "0 2px 3px rgba(0,0,0,.1)",
                        width: "80px",
                        height: "80px",
                        padding: "1rem",
                      }}
                    />
                  </div>

                  <h1 style={{ color: "#080808c4", fontSize: "22px" }}>
                    GitHub / GitLab
                  </h1>
                  <p style={{ color: "#080808c4", fontSize: "18px" }}>
                    For version control
                  </p>
                </div>
              </div>
            </div>
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
            Let’s Configure Your Agile Product Development Model
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

export default Agile;
