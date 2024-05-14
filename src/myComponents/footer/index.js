/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { BsInstagram } from "react-icons/bs";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { PiYoutubeLogoLight } from "react-icons/pi";
import { LiaDiscord } from "react-icons/lia";
import geekyAntLogoLight from "../../assets/logo-light.svg";
import isoImage from "../../assets/iso.svg";
import gmsImage from "../../assets/gms.svg";
import aiaoImage from "../../assets/aiao.svg";

class Footer extends Component {
  render() {
    return (
      <>
        <div className="footerSection" style={{ paddingInline: "12%" }}>
          <div className="footerSectionLinks">
            <div className="footerCompanySection">
              <img
                className="footerCompanyLogo"
                src={geekyAntLogoLight}
                alt="logo"
              />
              <p>
                We are creative Geeks, passionate for designing well crafted,
                simple and functional web and mobile apps.
              </p>
              <div className="certifiersContainer">
                <img
                  className="certifierImage"
                  src={isoImage}
                  alt="certifier"
                />
                <img
                  className="certifierImage"
                  src={gmsImage}
                  alt="certifier"
                />
                <img
                  className="certifierImage"
                  src={aiaoImage}
                  alt="certifier"
                />
              </div>
              <p>CONNECT</p>
              <div className="socialmedia-accounts">
                <a className="socialMediaLink" href="#">
                  <SlSocialFacebook className="socialmedia-icon" />
                </a>
                <a className="socialMediaLink" href="#">
                  <BsInstagram className="socialmedia-icon" />
                </a>
                <a className="socialMediaLink" href="#">
                  <SlSocialTwitter className="socialmedia-icon" />
                </a>
                <a className="socialMediaLink" href="#">
                  <SlSocialLinkedin className="socialmedia-icon" />
                </a>
                <a className="socialMediaLink" href="#">
                  <PiYoutubeLogoLight className="socialmedia-icon" />
                </a>
                <a className="socialMediaLink" href="#">
                  <LiaDiscord className="socialmedia-icon" />
                </a>
              </div>
            </div>

            <div className="footerSectionItem">
              <p className="footerItemTitle">QUICK LINKS</p>
              <a className="footerLinkItem" href="#">
                Hire Us
              </a>
              <a className="footerLinkItem" href="#">
                Join Us
              </a>
              <a className="footerLinkItem" href="#">
                Events & Conferences
              </a>
              <a className="footerLinkItem" href="#">
                Developer Environment
              </a>
              <a className="footerLinkItem" href="#">
                Security
              </a>
              <a className="footerLinkItem" href="#">
                Partner Program
              </a>
              <a className="footerLinkItem" href="#">
                Financial Reports
              </a>
            </div>

            <div className="footerSectionItem">
              <p className="footerItemTitle">HIRE DEVELOPER</p>
              <a className="footerLinkItem" href="#">
                React Native
              </a>
              <a className="footerLinkItem" href="#">
                Next.js
              </a>
              <a className="footerLinkItem" href="#">
                Flutter
              </a>
              <a className="footerLinkItem" href="#">
                GraphQL
              </a>
              <a className="footerLinkItem" href="#">
                Node.JS
              </a>
              <a className="footerLinkItem" href="#">
                PostgreSQL
              </a>
              <a className="footerLinkItem" href="#">
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

          <div className="footer-countriesContainer">
            <div className="countryItem">
              <p>GeekyAnts India Pvt Ltd</p>
              <p className="countrItemAddress-mobile">
                No. 18, 2nd Cross Road, N S Palya, 2nd StageBTM Layout,
                Bangalore - 560076, Karnataka, India
              </p>

              <div className="phoneContainer">
                <FaPhoneAlt className="phoneIcon" />
                <p>+91 9595884422</p>
              </div>
            </div>

            <div className="countryItem">
              <p>GeekyAnts UK Ltd</p>
              <p className="countrItemAddress-mobile">
                SPACES Finsbury Park, 17 City North Place, London N4 3FU,
                England, UK
              </p>

              <div className="phoneContainer">
                <FaPhoneAlt className="phoneIcon" />
                <p>+44 (0)2080146956</p>
              </div>
            </div>

            <div className="countryItem">
              <p>GeekyAnts Inc</p>
              <p className="countrItemAddress-mobile">
                315 Montgomery Street, 9th & 10th floors,San Francisco, CA,
                94104, USA
              </p>

              <div className="phoneContainer">
                <FaPhoneAlt className="phoneIcon" />
                <p>+1 (415)2759099</p>
              </div>
            </div>
          </div>
        </div>

        <div className="finalSection">
          <p className="rightsText">
            2024 © All rights reserved. GeekyAnts{" "}
            <br className="rigthsBreak-mobile" /> India Pvt Ltd
          </p>
          <div className="policy-TC-container">
            <a className="footerLinkItem" href="#">
              Privacy Policy
            </a>
            <span className="footerLinkItem-mobile"> | </span>
            <a className="footerLinkItem" href="#">
              Terms and Conditons
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
