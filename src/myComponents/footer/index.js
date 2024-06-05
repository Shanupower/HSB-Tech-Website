/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaPhoneAlt } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { BsInstagram } from "react-icons/bs";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { PiYoutubeLogoLight } from "react-icons/pi";
import { LiaDiscord } from "react-icons/lia";
import isoImage from "../../assets/iso.svg";
import gmsImage from "../../assets/gms.svg";
import aiaoImage from "../../assets/aiao.svg";
import { useMediaQuery } from "@mui/material";
import geekyAntLogoLight from "../../assets/hsb.png";
import Flag from "../../assets/icons/aa.png";
import { Link } from "react-router-dom";
const Footer = () => {
  const isMd = useMediaQuery("(max-width:1068px)");
  const isSm = useMediaQuery("(max-width:668px)");

  return (
    <>
      <div
        className="footerSection"
        style={{
          padding: isMd ? "4rem 2rem " : "6rem 12%",
        }}
      >
        <div
          className="footerSectionLinks"
          style={{
            flexDirection: isSm && "column",
            flexWrap: "wrap",
            gap: "2rem",
          }}
        >
          <div className="footerCompanySection">
            <img
              className="footerCompanyLogo"
              src={geekyAntLogoLight}
              alt="logo"
            />
            <h2 style={{ fontSize: "22px", marginTop: "1rem" }}>
              {" "}
              HSB Information Technologies Pvt Ltd
            </h2>
            <p style={{ marginTop: "1rem" }}>
              We are an emerging services and product development company aimed
              to provide highly scalable technological solutions and
              unparalleled support.
            </p>

            <p style={{ marginTop: "1rem" }}>CONNECT</p>
            <div className="socialmedia-accounts">
              <a
                className="socialMediaLink"
                href="https://www.facebook.com/hsbinformationtechnologies/"
              >
                <SlSocialFacebook className="socialmedia-icon" />
              </a>

              <a className="socialMediaLink" href="#">
                <SlSocialTwitter className="socialmedia-icon" />
              </a>
              <a
                className="socialMediaLink"
                href="https://www.linkedin.com/company/hsb-infotech-solutions/?viewAsMember=true"
              >
                <SlSocialLinkedin className="socialmedia-icon" />
              </a>
            </div>
          </div>

          <div className="footerSectionItem">
            <p className="footerItemTitle">Industries</p>
            <a className="footerLinkItem" href="/industries/manufacturing">
              Manufacturing
            </a>
            <a className="footerLinkItem" href="/industries/healthcare">
              Healthcare
            </a>
            <a className="footerLinkItem" href="/industries/education">
              Education
            </a>
            <a className="footerLinkItem" href="/industries/telecom">
              Telecom
            </a>
            <a className="footerLinkItem" href="/industries/realEstate">
              Real Estate
            </a>
            <a className="footerLinkItem" href="/industries/ecommerce">
              Ccommerce
            </a>
            <a className="footerLinkItem" href="/industries/travel-hospitality">
              Travel-Hospitality
            </a>
            <a className="footerLinkItem" href="/industries/bsfi">
              BSFI
            </a>
            <a className="footerLinkItem" href="/industries/fintech">
              Fintech
            </a>
          </div>

          <div className="footerSectionItem">
            <p className="footerItemTitle">Technologies</p>
            <a className="footerLinkItem" href="/technology/react-native">
              React Native
            </a>
            <a className="footerLinkItem" href="/technology/nextJs">
              Next.js
            </a>
            <a className="footerLinkItem" href="/technology/flutter">
              Flutter
            </a>
            <a className="footerLinkItem" href="/technology/graphSQl">
              GraphQL
            </a>
            <a className="footerLinkItem" href="/technology/nodsJs">
              Node.JS
            </a>
            <a className="footerLinkItem" href="/technology/postgreSql">
              PostgreSQL
            </a>
            <a className="footerLinkItem" href="/technology/devOps">
              DevOps
            </a>
            <a className="footerLinkItem" href="/technology/laravel">
              Laravel
            </a>
          </div>

          <div className="footerSectionItem">
            <p className="footerItemTitle">ENGAGEMENT MODEL</p>
            <a className="footerLinkItem" href="/fixed">
              Fixed Scope
            </a>

            <a className="footerLinkItem" href="/agile">
              Agile Product
            </a>

            <a className="footerLinkItem" href="/managed_service">
              Managed Services
            </a>
          </div>
        </div>

        <hr className="line-mobile" />

        <div
          className="footer-countriesContainer"
          style={{
            flexWrap: "wrap",
          }}
        >
          <div className="countryItem">
            <p
              style={{
                display: "flex",
                alignItems: "center",
                gap: ".5rem",
              }}
            >
              <img
                src={Flag}
                style={{ width: "46px", height: "28px", borderRadius: "4px" }}
                alt="flag"
              />{" "}
              INDIA: Plot 47, HACP Colony, Karkhana, Hyderabad – 500015,
              Telangana, India.
            </p>
          </div>

          <div className="countryItem">
            <p
              style={{
                display: "flex",
                alignItems: "center",
                gap: ".5rem",
              }}
            >
              <img
                src="data:image/png;base64,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"
                style={{ width: "46px", height: "28px", borderRadius: "4px" }}
                alt="flag"
              />{" "}
              SAUDI ARABIA: Raqtan Building, 5th floor, Dabab Street, P.O.Box
              12612, Riyadh – KSA.
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          padding: isMd ? ".4rem 2rem" : ".4rem 14%",
          flexDirection: isMd && "column",
          flexWrap: "wrap",
          width: "100%",
          backgroundColor: "lightgray",
          textAlign: "center",
          justifyContent: !isMd ? "space-between" : "center",
        }}
      >
        <p>2024 ©All rights reserved.</p>
        <p> HSB Information Technologies Pvt Ltd</p>
        <Link
          to="/terms_and_conditions"
          style={{ textDecoration: "none", color: "black" }}
        >
          Terms and Conditons
        </Link>
      </div>
    </>
  );
};

export default Footer;
