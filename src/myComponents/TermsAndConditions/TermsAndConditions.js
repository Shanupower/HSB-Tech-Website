import { useMediaQuery } from "@mui/material";
import React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Navigationbar from "../navigationBar";
import "./index.css";
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
    Terms and Conditions
  </Link>,
];
const TermsAndConditions = () => {
  const isMd = useMediaQuery("(max-width:1068px)");

  return (
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
            Terms and Conditions
          </h1>
        </div>
      </div>
      <div
        style={{
          paddingInline: isMd ? " 2rem" : " 14%",
          display: "flex",
          gap: "5%",
          flexDirection: "column",   
          marginBlock: "2rem",
        }}
      >
        <div>
          <h2>Terms</h2>
          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.5",
              marginTop: "1rem",
            }}
          >
            These Terms and Conditions (hereinafter also referred to as “T&C”)
            constitute a legally binding agreement made between you, whether
            personally or on behalf of an entity (hereinafter also referred to
            as “you”), and HSB Information Technologies Pvt Ltd, registered at
            Plot 47, HACP Colony, Karkhana, Hyderabad – 500015, Telangana,
            India. (we, us), concerning your access to and use of the HSB
            (https://HSBInfotech.com/) website as well as any related
            applications ((hereinafter also referred to as 'the Site').
          </p>
          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.5",
              marginTop: "1rem",
            }}
          >
            The Site provides a host of facilities to you. You can hire us for
            building any mobile, web and computer App.(Services). You agree that
            by accessing the Site and/or Services, you have read, understood,
            and agree to be bound by all of these Terms and Conditions.
          </p>
          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.5",
              marginTop: "1rem",
            }}
          >
            If you do not agree with any of these Terms and Conditions, then you
            are prohibited from using the Site and Services and you must
            discontinue use immediately. We recommend that you print a copy of
            these Terms and Conditions for future reference.
          </p>
          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.5",
              marginTop: "1rem",
            }}
          >
            The additional policies set out in Section 1.7 below, as well as any
            supplemental terms and conditions or documents that may be posted on
            the Site from time to time, are expressly incorporated by reference.
          </p>
          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.5",
              marginTop: "1rem",
            }}
          >
            We may make changes to these Terms and Conditions as and when
            required. The updated version will be published on the website and
            can be identified by the last Update Date. You are responsible for
            reviewing these Terms and Conditions from time to time to stay
            informed of updates. Your use of the Site represents that you have
            accepted such changes.
          </p>
          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.5",
              marginTop: "1rem",
            }}
          >
            We may update or change the Site from time to time to reflect
            changes based on the business and legal requirements. There may be
            information on the Site that contains errors, inaccuracies, or
            omissions that may relate to the Services, including descriptions,
            and other information. We reserve the right to correct them and to
            change or update the information at any time, without prior notice.
          </p>
          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.5",
              marginTop: "1rem",
            }}
          >
            The Site is intended for users who are at least 18 years old. If you
            are under the age of 18, you are not permitted to use the Services
            without parental permission.
          </p>
       
        </div>

        <div
          style={{
            marginTop: "2rem",
          }}
        >
          <h2>ACCEPTABLE USE</h2>
          <ul
            style={{
              listStylePosition: "outside",
              listStyleType: "circle",
            }}
          >
            <li
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                marginTop: "1rem",
              }}
            >
              You may not access or use the Site for any purpose other than that
              for which we make the site and our services available. The Site
              may not be used in connection with any commercial endeavors except
              those that are specifically endorsed or approved by us.
            </li>
            <li
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                marginTop: "1rem",
              }}
            >
              As a user of this Site, you agree not to:
            </li>
            <li
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                marginTop: "1rem",
              }}
            >
              Systematically retrieve data or other content from the Site to a
              compiled database or directory without written permission from us
            </li>
            <li
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                marginTop: "1rem",
              }}
            >
              Make any unauthorized use of the Site, including creating user
              accounts under false pretensions
            </li>
            <li
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                marginTop: "1rem",
              }}
            >
              Circumvent, disable, or otherwise interfere with security-related
              features of the Site, including features that prevent or restrict
              the use or copying of any content or enforce limitations on the
              use
            </li>
            <li
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                marginTop: "1rem",
              }}
            >
              Engage in unauthorized framing of or linking to the Site
            </li>
            <li
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                marginTop: "1rem",
              }}
            >
              Trick, defraud, or mislead us and other users of our site or
              service
            </li>
            <li
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                marginTop: "1rem",
              }}
            >
              Make improper use of our support services, or submit false reports
              of abuse or misconduct.
            </li>
            <li
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                marginTop: "1rem",
              }}
            >
              Engage in any automated use of the system, such as using scripts
              to send comments or messages, or using any data mining, robots, or
              similar data gathering and extraction tools
            </li>
            <li
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                marginTop: "1rem",
              }}
            >
              Interfere with, disrupt, or create an undue burden on the Site or
              the networks and services connected to the Site
            </li>
            <li
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                marginTop: "1rem",
              }}
            >
              Attempt to impersonate another user or person, or use the username
              of another user
            </li>
            <li
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                marginTop: "1rem",
              }}
            >
              Use any information obtained from the Site in order to harass,
              abuse, or harm another person
            </li>
            <li
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                marginTop: "1rem",
              }}
            >
              Use the Site or our content as part of any effort to compete with
              us or to create a revenue- generating endeavor or commercial
              enterprise
            </li>
            <li
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                marginTop: "1rem",
              }}
            >
              Decipher, decompile, disassemble, or reverse engineer any of the
              software comprising or in any way making up a part of the Site
            </li>
            <li
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                marginTop: "1rem",
              }}
            >
              Attempt to access any portion of the Site that you are restricted
              from accessing
            </li>
            <li
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                marginTop: "1rem",
              }}
            >
              Harass, annoy, intimidate, or threaten any of our employees,
              agents, or other users
            </li>
            <li
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                marginTop: "1rem",
              }}
            >
              Delete the copyright or other proprietary rights notice from any
              of the content
            </li>
            <li
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                marginTop: "1rem",
              }}
            >
              Copy or adapt the Site’s software
            </li>
            <li
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                marginTop: "1rem",
              }}
            >
              Upload or transmit (or attempt to upload or to transmit) viruses,
              Trojan horses, or other material that interferes with any party’s
              uninterrupted use and enjoyment of the Site, or any material that
              acts as a passive or active information collection or transmission
              mechanism
            </li>
            <li
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                marginTop: "1rem",
              }}
            >
              Use, launch, or engage in any automated use of the system, such as
              using scripts to send comments or messages, robots, scrapers,
              offline readers, or similar data gathering and extraction tools
            </li>{" "}
            <li
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                marginTop: "1rem",
              }}
            >
              Disparage, tarnish, or otherwise harm, in our opinion, us and/or
              the Site
            </li>
            <li
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                marginTop: "1rem",
              }}
            >
              Use the Site in a manner inconsistent with any applicable laws or
              regulations
            </li>{" "}
            <li
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                marginTop: "1rem",
              }}
            >
              Misrepresent experience, skills, or information about you or other
              User
            </li>
            <li
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                marginTop: "1rem",
              }}
            >
              Falsely imply a relationship with us or another company with whom
              you do not have a relationship
            </li>
          </ul>
        </div>
        <div style={{ marginBlock: "4rem" }}>
          <h2>DISCLAIMER/LIMITATION OF LIABILITY</h2>
          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.5",
              marginTop: "1rem",
            }}
          >
            We do not own the software / codes being shared on the website
            unless specifically mentioned in the description of the software /
            codes. These software / codes available on the website is being
            provided on as-is and as-available basis without any
            modification/review by us.
          </p>
          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.5",
              marginTop: "1rem",
            }}
          >
            You agree that your use of the Site and/or Services will be at your
            sole risk except as expressly set out in these Terms and Conditions.
            All warranties, terms, conditions and undertakings, express or
            implied (including by statute, custom or usage, a course of dealing,
            or common law) in connection with the Site and Services and your use
            thereof including, without limitation, the implied warranties of
            satisfactory quality, fitness for a particular purpose and
            non-infringement are excluded to the fullest extent permitted by
            applicable law.
          </p>
          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.5",
              marginTop: "1rem",
            }}
          >
            We make no warranties or representations about the accuracy or
            completeness of the Site’s content and are not liable for any (1)
            errors or omissions in content: (2) any unauthorized access to or
            use of our servers and/or any and all personal information and/or
            financial information stored on our server; (3) any interruption or
            cessation of transmission to or from the site or services; and/or
            (4) any bugs, viruses, trojan horses, or the like which may be
            transmitted to or through the site by any third party. We will not
            be responsible for any delay or failure to comply with our
            obligations under these Terms and Conditions if such delay or
            failure is caused by an event beyond our reasonable control.
          </p>
        </div>

        <div style={{}}>
          <h2>Our responsibility for loss or damage suffered by you:</h2>
          <ul
            style={{
              listStylePosition: "outside",
              listStyleType: "circle",
            }}
          >
            <li
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                marginTop: "1rem",
              }}
            >
              We do not exclude or limit in any way our liability to you where
              it would be unlawful to do so. This includes liability for death
              or personal injury caused by our negligence or the negligence of
              our employees, agents or subcontractors and for fraud or
              fraudulent misrepresentation.
            </li>
            <li
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                marginTop: "1rem",
              }}
            >
              If we fail to comply with these Terms and Conditions, we will be
              responsible for loss or damage you suffer that is a foreseeable
              result of our breach of these Terms and Conditions, but we would
              not be responsible for any loss or damage that were not
              foreseeable at the time you started using the Site/Services.
            </li>
            <li
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                marginTop: "1rem",
              }}
            >
              Please note that we only provide our Site knowledge sharing,
              domestic and private use. You agree not to use our Site for any
              commercial or business purposes, and we have no liability to you
              for any loss of profit, loss of business, business interruption,
              or loss of business opportunity.
            </li>
            <li
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                marginTop: "1rem",
              }}
            >
              If any software / code that is shared via our website and is owned
              by us then you have legal rights in relation to software / code
              that are faulty or not as described. Nothing in these Terms and
              Conditions will affect these legal rights.
            </li>
            <li
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                marginTop: "1rem",
              }}
            >
              Notwithstanding anything to the contrary contained in the
              Disclaimer/Limitation of Liability section, our liability to you
              for any cause whatsoever and regardless of the form of the action,
              will at all times be limited to a total aggregate amount equal to
              the greater of (a) the sum of INR 10,000/- or (b) the amount paid,
              if any, by you to us for the Services/Site during the six (6)
              month period prior to any cause of action arising.
            </li>
          </ul>
        </div>
        <div style={{ marginBlock: "4rem" }}>
          <h2>GENERAL</h2>
          <ul style={{ listStylePosition: "outside", listStyleType: "circle" }}>
            <li
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                marginTop: "1rem",
              }}
            >
              Visiting the Site, sending us emails, and completing online forms
              constitute electronic communications. You consent to receive
              electronic communications and you agree that all agreements,
              notices, disclosures, and other communications we provide to you
              electronically, via email and on the Site, satisfy any legal
              requirement that such communications be in writing.
            </li>
            <li
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                marginTop: "1rem",
              }}
            >
              You hereby agree to the use of electronic signatures, documents
              and delivery method. You hereby waive any rights or requirements
              under any statutes, regulations, rules, ordinances or other laws
              in any jurisdiction which require an original signature or
              delivery or retention of non-electronic records.
            </li>
            <li
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                marginTop: "1rem",
              }}
            >
              These Terms and Conditions and any policies or operating rules
              posted by us on the Site or in respect to the Services constitute
              the entire agreement and understanding between you and us.
            </li>
            <li
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                marginTop: "1rem",
              }}
            >
              Our failure to exercise or enforce any right or provision of these
              Terms and Conditions shall not operate as a waiver of such right
              or provision.
            </li>{" "}
            <li
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                marginTop: "1rem",
              }}
            >
              We may assign any or all of our rights and obligations to others
              at any time.
            </li>
            <li
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                marginTop: "1rem",
              }}
            >
              We shall not be responsible or liable for any loss, damage, delay
              or failure to act caused by any cause beyond our reasonable
              control.
            </li>
            <li
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                marginTop: "1rem",
              }}
            >
              If any provision or part of a provision of these Terms and
              Conditions is unlawful, void or unenforceable, that provision or
              part of the provision is deemed severable from these Terms and
              Conditions and does not affect the validity and enforceability of
              any remaining provisions.
            </li>
            <li
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                marginTop: "1rem",
              }}
            >
              There is no joint venture, partnership, employment or agency
              relationship created between you and us as a result of these Terms
              and Conditions or use of the Site or Services.
            </li>
            <li
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                marginTop: "1rem",
              }}
            >
              Terms and Conditions, other policies and declaration of the
              site/service their subject matter and their formation (and any
              non-contractual disputes or claims) are governed by the laws of
              India and subject to the exclusive jurisdiction of the courts of
              Bangalore, India.
            </li>{" "}
            <li
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                marginTop: "1rem",
              }}
            >
              A person who is not a party to these Terms and Conditions cannot
              enforce any term of these Terms and Conditions.
            </li>
          </ul>
        </div>
        <div style={{}}>
          <h2>CONTACT US</h2>
          <p
            style={{
              fontSize: "18px",
            }}
          >
            For any questions or comments or clarification about this policy,
            email us at info@hsbinfotech.com or by post to:
          </p>
          <h3
            style={{
              marginBlock: "1rem",
            }}
          >
            HSB Information Technologies Pvt Ltd,
          </h3>
          <p
            style={{
              fontSize: "18px",
            }}
          >
            Plot 47, HACP Colony, Karkhana,{" "}
          </p>
          <p
            style={{
              fontSize: "18px",
            }}
          >
            Hyderabad – 500015, Telangana, India.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
