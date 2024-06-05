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
    Managed Services
  </Link>,
];

const ManagedService = () => {
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
              Managed Services
            </h1>
            <p
              className="sectionDescription"
              style={{ fontSize: "20px", marginTop: "2rem", color: "#fff" }}
            >
              Building high-performance digital workspaces for businesses across
              the globe.
            </p>
          </div>
        </div>

        <div
          className="  section"
          style={{
            paddingInline: isMd ? " 2rem" : " 14%",
          }}
        >
          <h1>What is Managed Service?</h1>
          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.5",
              marginTop: "1rem",
            }}
          >
            With the changing digital scenarios, the IT infrastructure of your
            business needs to be upgraded often. The scope of Managed Service
            provider has evolved from a mere transactional execution to becoming
            a value-driven strategic partner.
          </p>
        </div>
        <div
          style={{
            paddingInline: isMd ? " 2rem" : " 14%",
          }}
        >
          <div style={{ marginBlock: "0rem 2rem" }}>
            <h1>Why Do You Need Managed Services for Your Business?</h1>
            <p
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                marginTop: "1rem",
              }}
            >
              Managed services allow you to hire a dedicated team of experts to
              your existing platform or build an innovative software solution
              from scratch to turn your ideas into reality in an easy and
              manageable way.
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
                It is the most effective delivery model to avail the best of
                services.
              </li>
              <li
                style={{
                  fontSize: "18px",
                }}
              >
                By using managed services, a business experiences substantial
                operational and financial rewards.
              </li>
              <li
                style={{
                  fontSize: "18px",
                }}
              >
                The foremost benefits of using managed services are cost
                savings, innovation and speed.
              </li>{" "}
              <li
                style={{
                  fontSize: "18px",
                }}
              >
                The foremost benefits of using managed services are cost
                savings, innovation and speed.
              </li>{" "}
              <li
                style={{
                  fontSize: "18px",
                }}
              >
                When considered for a minimum of two years, managed services
                proved highly beneficial.
              </li>{" "}
              <li
                style={{
                  fontSize: "18px",
                }}
              >
                Managed services already have traction in knowledge-intensive
                activities.
              </li>{" "}
              <li
                style={{
                  fontSize: "18px",
                }}
              >
                It will be easier to implement innovative techniques by
                leveraging the experience of managed service provider.
              </li>{" "}
              <li
                style={{
                  fontSize: "18px",
                }}
              >
                The overall improvement in the efficiency of the company,
                improves stakeholder experience too.
              </li>{" "}
              <li
                style={{
                  fontSize: "18px",
                }}
              >
                Business or process transformation can be easily handled with
                managed service providers.
              </li>{" "}
            </ul>
          </div>

          <div style={{ marginBlock: "0rem 2rem" }}>
            <h1>HSB Managed Services</h1>
            <p
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                marginTop: "1rem",
              }}
            >
              Our Managed Services brings the right blend of human resources and
              infrastructure with expertise to the core of your business
              operations.
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
                Providing a progressive user experience through our
                transformational delivery.
              </li>
              <li
                style={{
                  fontSize: "18px",
                }}
              >
                Providing value-centred business solutions.
              </li>
              <li
                style={{
                  fontSize: "18px",
                }}
              >
                Co-create and co-innovate to drive transformation.
              </li>{" "}
              <li
                style={{
                  fontSize: "18px",
                }}
              >
                Delivering impactful results that keeps you ahead of the curve.
              </li>{" "}
              <li
                style={{
                  fontSize: "18px",
                }}
              >
                Adherence to applicable compliance and regulatory matters.
              </li>{" "}
              <li
                style={{
                  fontSize: "18px",
                }}
              >
                Implying transparency and heightened accountability.
              </li>{" "}
              <li
                style={{
                  fontSize: "18px",
                }}
              >
                Enhanced team communication throughout the association..
              </li>{" "}
              <li
                style={{
                  fontSize: "18px",
                }}
              >
                Higher ROI with high quality digital products.
              </li>{" "}
            </ul>
          </div>
          <div>
            <h1
              className="sectionHeading"
              style={{ fontSize: isMd ? " 30px" : "48px" }}
            >
              Why HSB Is The Right Partner For Managed Services For Your
              Business?
            </h1>

            <h3 style={{ marginTop: "2rem" }}>Bridging the skill gap</h3>
            <div
              className="moduleItems-industries"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1.4rem",
              }}
            >
              <div
                className="moduleItem"
                style={{
                  padding: "1rem 2rem",
                  borderRadius: "10px",
                  boxShadow: " 0 4px 12px #080a0d0d, 0 8px 16px #080a0d0d",
                  backgroundColor: "#f4f4f4",
                  display: "flex",
                  alignItems: "center",
                  width: "30%",
                }}
              >
                <FaArrowRight className="moduleItemBullet" />
                <p>Subject matter experts for any domain </p>
              </div>
              <div
                className="moduleItem"
                style={{
                  padding: "1rem 2rem",
                  borderRadius: "10px",
                  boxShadow: " 0 4px 12px #080a0d0d, 0 8px 16px #080a0d0d",
                  backgroundColor: "#f4f4f4",
                  display: "flex",
                  alignItems: "center",
                  width: "30%",
                }}
              >
                <FaArrowRight className="moduleItemBullet" />
                <p>Flexible and scalable hiring.</p>
              </div>
              <div
                className="moduleItem"
                style={{
                  padding: "1rem 2rem",
                  borderRadius: "10px",
                  boxShadow: " 0 4px 12px #080a0d0d, 0 8px 16px #080a0d0d",
                  backgroundColor: "#f4f4f4",
                  display: "flex",
                  alignItems: "center",
                  width: "30%",
                }}
              >
                <FaArrowRight className="moduleItemBullet" />
                <p>Leveraging global hiring. </p>
              </div>
            </div>

            <h3 style={{ marginTop: "2rem" }}>
              Smart tools and advanced technology
            </h3>
            <div
              className="moduleItems-industries"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1.4rem",
              }}
            >
              <div
                className="moduleItem"
                style={{
                  padding: "1rem 2rem",
                  borderRadius: "10px",
                  boxShadow: " 0 4px 12px #080a0d0d, 0 8px 16px #080a0d0d",
                  backgroundColor: "#f4f4f4",
                  display: "flex",
                  alignItems: "center",
                  width: "30%",
                }}
              >
                <FaArrowRight className="moduleItemBullet" />
                <p>Best of technology without upfront investment. </p>
              </div>
              <div
                className="moduleItem"
                style={{
                  padding: "1rem 2rem",
                  borderRadius: "10px",
                  boxShadow: " 0 4px 12px #080a0d0d, 0 8px 16px #080a0d0d",
                  backgroundColor: "#f4f4f4",
                  display: "flex",
                  alignItems: "center",
                  width: "30%",
                }}
              >
                <FaArrowRight className="moduleItemBullet" />
                <p>Ensuring value delivery throughout the project/duration</p>
              </div>
              <div
                className="moduleItem"
                style={{
                  padding: "1rem 2rem",
                  borderRadius: "10px",
                  boxShadow: " 0 4px 12px #080a0d0d, 0 8px 16px #080a0d0d",
                  backgroundColor: "#f4f4f4",
                  display: "flex",
                  alignItems: "center",
                  width: "30%",
                }}
              >
                <FaArrowRight className="moduleItemBullet" />
                <p>Experimenting innovative tools with reduced risk. </p>
              </div>
            </div>
            <h3 style={{ marginTop: "2rem" }}>
              Allow you to focus on your business
            </h3>
            <div
              className="moduleItems-industries"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1.4rem",
              }}
            >
              <div
                className="moduleItem"
                style={{
                  padding: "1rem 2rem",
                  borderRadius: "10px",
                  boxShadow: " 0 4px 12px #080a0d0d, 0 8px 16px #080a0d0d",
                  backgroundColor: "#f4f4f4",
                  display: "flex",
                  alignItems: "center",
                  width: "30%",
                }}
              >
                <FaArrowRight className="moduleItemBullet" />
                <p>
                  Release from time-consuming activities to focus on pivotal
                  areas.
                </p>
              </div>
              <div
                className="moduleItem"
                style={{
                  padding: "1rem 2rem",
                  borderRadius: "10px",
                  boxShadow: " 0 4px 12px #080a0d0d, 0 8px 16px #080a0d0d",
                  backgroundColor: "#f4f4f4",
                  display: "flex",
                  alignItems: "center",
                  width: "30%",
                }}
              >
                <FaArrowRight className="moduleItemBullet" />
                <p>Real-time visibility and control on your processes.</p>
              </div>
              <div
                className="moduleItem"
                style={{
                  padding: "1rem 2rem",
                  borderRadius: "10px",
                  boxShadow: " 0 4px 12px #080a0d0d, 0 8px 16px #080a0d0d",
                  backgroundColor: "#f4f4f4",
                  display: "flex",
                  alignItems: "center",
                  width: "30%",
                }}
              >
                <FaArrowRight className="moduleItemBullet" />
                <p>Easy to scale. </p>
              </div>
            </div>
            <h3 style={{ marginTop: "2rem" }}>
              Cost-effective and better cost control
            </h3>
            <div
              className="moduleItems-industries"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1.4rem",
              }}
            >
              <div
                className="moduleItem"
                style={{
                  padding: "1rem 2rem",
                  borderRadius: "10px",
                  boxShadow: " 0 4px 12px #080a0d0d, 0 8px 16px #080a0d0d",
                  backgroundColor: "#f4f4f4",
                  display: "flex",
                  alignItems: "center",
                  width: "30%",
                }}
              >
                <FaArrowRight className="moduleItemBullet" />
                <p>Flexibility in approach. </p>
              </div>
              <div
                className="moduleItem"
                style={{
                  padding: "1rem 2rem",
                  borderRadius: "10px",
                  boxShadow: " 0 4px 12px #080a0d0d, 0 8px 16px #080a0d0d",
                  backgroundColor: "#f4f4f4",
                  display: "flex",
                  alignItems: "center",
                  width: "30%",
                }}
              >
                <FaArrowRight className="moduleItemBullet" />
                <p>Identifying opportunities to save working capital.</p>
              </div>
              <div
                className="moduleItem"
                style={{
                  padding: "1rem 2rem",
                  borderRadius: "10px",
                  boxShadow: " 0 4px 12px #080a0d0d, 0 8px 16px #080a0d0d",
                  backgroundColor: "#f4f4f4",
                  display: "flex",
                  alignItems: "center",
                  width: "30%",
                }}
              >
                <FaArrowRight className="moduleItemBullet" />
                <p>Assessing and defining cost structure. </p>
              </div>
            </div>
          </div>

          <h1 style={{ marginTop: "3.2rem" }}>
            Our Offerings As Managed Services Provider
          </h1>

          <div
            style={{
              display: "flex",
              marginBlock: "2rem",
              flexDirection: isMd && "column",
              gap: "1rem",
              flexWrap: "wrap",
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
                src="https://geekyants.com/images/fixed-scope/dev/rearrange.svg"
                alt=""
                style={{
                  width: "80px",
                  height: "80px",
                  padding: "1rem",
                  marginBottom: "1rem",
                }}
              />
              <h3>Compute & Mobility</h3>
              <p style={{ fontSize: "18px" }}>
                We have a range of computing and mobility solutions from
                hardware support for the devices to easy financing solutions
                that help organizations reduce cost and complexity of
                large-scale mobility deployments. We help the organizations
                identify the right solution for their requirement and benefit
                with the right choice of devices and hardware support.
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
                src="https://geekyants.com/images/fixed-scope/dev/management.svg"
                alt=""
                style={{
                  width: "80px",
                  height: "80px",
                  padding: "1rem",
                  marginBottom: "1rem",
                }}
              />
              <h3>HR, Talent and Verification</h3>
              <p style={{ fontSize: "18px" }}>
                By leveraging our bespoke HR & Talent offering, we help
                companies hire their workforce in alignment to their business
                strategies, improve effectiveness of the HR function and contain
                costs. Our verification services offers deep third-party due
                diligence including that on vendors, suppliers, and other
                partners.
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
              <h3>Plug-n-play Infrastructure Space</h3>
              <p style={{ fontSize: "18px" }}>
                We provide best-in-class infrastructure at any given time.
                Spacious workstations, hygienic floor, decent cafeteria,
                un-high-speed internet connectivity, highly-secured servers,
                large conference rooms, ample parking space, central location,
                etc. are few of our specialities with scalable feature.
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
                src="https://geekyants.com/images/engagement-model/project-management.svg"
                alt=""
                style={{
                  width: "80px",
                  height: "80px",
                  padding: "1rem",
                  marginBottom: "1rem",
                }}
              />
              <h3>Customer Operations</h3>
              <p style={{ fontSize: "18px" }}>
                Leverage our experienced customer operations and consulting team
                for your operational efficiency. We enable productivity gains,
                offer multi-function and multi-region support, and combine AI
                automation and machine learning across the value chain.
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
                src="https://geekyants.com/images/engagement-model/manager.svg"
                alt=""
                style={{
                  width: "80px",
                  height: "80px",
                  padding: "1rem",
                  marginBottom: "1rem",
                }}
              />
              <h3>Finance and Managed Services</h3>
              <p style={{ fontSize: "18px" }}>
                Our finance managed services can bring efficiency, cost
                optimisation and productivity improvement in finance and
                accountancy, tax compliances, internal audit, preparing
                financial statements, budgeting, etc. and allowing the business
                to respond with greater agility and deliver enhanced business
                outcomes.
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
              <h3>Procurement and Supply Chain</h3>
              <p style={{ fontSize: "18px" }}>
                For businesses requiring improved procure-to-pay process
                category innovation, strategic sourcing and collaboration, and
                business process transformation, our procurement and supply
                chain managed services comes handy. We have a network of
                procurement advisors, offering customised services, sourcing
                savings and reducing operating costs/cost to serve.
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
                src="https://geekyants.com/images/engagement-model/laptop-user.svg"
                alt=""
                style={{
                  width: "80px",
                  height: "80px",
                  padding: "1rem",
                  marginBottom: "1rem",
                }}
              />
              <h3>Insight-led Sales</h3>
              <p style={{ fontSize: "18px" }}>
                Benefit from our insight-led sales managed services to enhance
                their revenue and avail support with account management and
                sales. Our integrated and data-driven approach helps businesses
                with predicting revenue, reaching out to customers across
                relevant sectors, and creating a smooth path to purchase.
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
                src="https://geekyants.com/images/engagement-model/structure.svg"
                alt=""
                style={{
                  width: "80px",
                  height: "80px",
                  padding: "1rem",
                  marginBottom: "1rem",
                }}
              />
              <h3>Learning Services</h3>
              <p style={{ fontSize: "18px" }}>
                We primarily focus on assisting companies in achieving corporate
                excellence by extending them required training in specific
                domain, creating learning and certification platform,
                formulating learning strategy and transformation processes, so
                that the business is adapting and improving at a faster pace.
              </p>
            </div>
          </div>
          <h1 style={{ marginTop: "3.2rem" }}>
            Our Offerings As Managed Services Provider
          </h1>

          <div
            style={{
              display: "flex",
              marginBlock: "2rem",
              flexDirection: isMd && "column",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                border: "1px solid lightgray",
                padding: "2rem ",
                borderRadius: "8px",
                width: isMd ? "100%" : "calc(100%/3 - 1rem )",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px",
              }}
            >
              <h3>Discover and Analyse –</h3>
              <p style={{ fontSize: "18px" }}>
                Identify areas of improvement and challenges to understand how
                we can help you.
              </p>
            </div>
            <div
              style={{
                border: "1px solid lightgray",
                padding: "2rem ",
                borderRadius: "8px",
                width: isMd ? "100%" : "calc(100%/3 - 1rem )",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px",
              }}
            >
              <h3>Strategizing Model –</h3>
              <p style={{ fontSize: "18px" }}>
                Strategize tools and resources from the right partners to give
                you a model that is cost-effective and effective.
              </p>
            </div>
            <div
              style={{
                border: "1px solid lightgray",
                padding: "2rem ",
                borderRadius: "8px",
                width: isMd ? "100%" : "calc(100%/3 - 1rem )",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px",
              }}
            >
              <h3>Execute and Deliver –</h3>
              <p style={{ fontSize: "18px" }}>
                Train your IT and support team to sustain. Adjust the processes
                to improve business objective.
              </p>
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
            Managed Services at Your Convenience
          </h1>
          <p style={{ fontSize: isMd ? " 18px" : "20px" }}>
            Fast-forward your IT and operations with simple, customizable
            packages that add value to your growth
          </p>
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

export default ManagedService;
