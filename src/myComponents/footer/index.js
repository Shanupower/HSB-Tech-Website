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
import geekyAntLogoLight from "../../assets/hsb-logo.png";
import Flag from "../../assets/icons/aa.png";
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
            <p style={{ marginTop: "1rem" }}>
              We are creative Geeks, passionate for designing well crafted,
              simple and functional web and mobile apps.
            </p>

            <p style={{ marginTop: "1rem" }}>CONNECT</p>
            <div className="socialmedia-accounts">
              <a className="socialMediaLink" href="#">
                <SlSocialFacebook className="socialmedia-icon" />
              </a>

              <a className="socialMediaLink" href="#">
                <SlSocialTwitter className="socialmedia-icon" />
              </a>
              <a className="socialMediaLink" href="#">
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
          </div>

          <div className="footerSectionItem">
            <p className="footerItemTitle">ENGAGEMENT MODEL</p>
            <a className="footerLinkItem" href="#">
              Fixed Scope
            </a>
            <a className="footerLinkItem" href="#">
              Dedicated Team
            </a>
            <a className="footerLinkItem" href="#">
              Agile Product
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
              GeekyAnts India Pvt Ltd
            </p>
            <p className="countrItemAddress-mobile">
              No. 18, 2nd Cross Road, N S Palya, 2nd StageBTM Layout, Bangalore
              - 560076, Karnataka, India
            </p>

            <div className="phoneContainer">
              <FaPhoneAlt className="phoneIcon" />
              <p>+91 9595884422</p>
            </div>
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
                src={Flag}
                style={{ width: "46px", height: "28px", borderRadius: "4px" }}
                alt="flag"
              />{" "}
              GeekyAnts Inc
            </p>
            <p className="countrItemAddress-mobile">
              315 Montgomery Street, 9th & 10th floors,San Francisco, CA, 94104,
              USA
            </p>

            <div className="phoneContainer">
              <FaPhoneAlt className="phoneIcon" />
              <p>+1 (415)2759099</p>
            </div>
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
        <p>2024 © All rights reserved. </p>
        <p>HSB India Pvt Ltd</p>
        <p>Privacy Policy </p>
        <p>Terms and Conditons</p>
      </div>
    </>
  );
};

export default Footer;
