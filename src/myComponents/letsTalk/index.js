/* eslint-disable jsx-a11y/img-redundant-alt */
import { Component } from "react";
import Navbar from "../navbar";
import { MdOutlineDone } from "react-icons/md";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Slider from "react-slick";
import Rating from "@mui/material/Rating";
import { MdVerified } from "react-icons/md";
import Footer from "../footer";
import Navigationbar from "../navigationBar";
import "./index.css";
import { useMediaQuery } from "@mui/material";
import { Carousel } from "antd";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  accessibility: false,
};

const reviewsList = [
  {
    rating: 5.0,
    review:
      "GeekyAnts shines because their human relationships meet their offering of top talent.",
    reviewPersonName: "Executive, Lumica",
  },
  {
    rating: 5.0,
    review:
      "GeekyAnts shines because their human relationships meet their offering of top talent.",
    reviewPersonName: "Executive, Lumica",
  },
  {
    rating: 5.0,
    review:
      "GeekyAnts shines because their human relationships meet their offering of top talent.",
    reviewPersonName: "Executive, Lumica",
  },
  {
    rating: 5.0,
    review:
      "GeekyAnts shines because their human relationships meet their offering of top talent.",
    reviewPersonName: "Executive, Lumica",
  },
  {
    rating: 5.0,
    review:
      "GeekyAnts shines because their human relationships meet their offering of top talent.",
    reviewPersonName: "Executive, Lumica",
  },
  {
    rating: 5.0,
    review:
      "GeekyAnts shines because their human relationships meet their offering of top talent.",
    reviewPersonName: "Executive, Lumica",
  },
];

const LetsTalk = () => {
  const isMd = useMediaQuery("(max-width:1068px)");

  return (
    <div className="letstalkContainer">
      {!isMd && <Navigationbar />}

      <div
        className="landingSection-letsTalk-Container"
        style={{
          display: "flex",
          alignItems: "center",
          padding: isMd ? "2rem " : "6rem 14%",
          gap: "2rem",
          justifyContent: "space-between",
          flexDirection: isMd && "column",
        }}
      >
        <div
          className="landingSection-letsTalk"
          style={{
            width: isMd ? "100%" : "60%",
          }}
        >
          <h1
            className="sectionHeading-letsTalk"
            style={{
              fontSize: isMd ? "40px" : "80px",
            }}
          >
            Build with Us. Accelerate your Growth.
          </h1>
          <div className="highlights-letsTalk">
            <div
              className="hightlightItem"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <MdOutlineDone className="rightBullet" />
              <p
                style={{ fontSize: "22px", marginTop: ".8rem" }}
                className="higlight"
              >
                Customized solutions and strategies
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
              className="hightlightItem"
            >
              <MdOutlineDone className="rightBullet" />

              <p
                style={{ fontSize: "22px", marginTop: ".8rem" }}
                className="higlight"
              >
                Faster-than-market project delivery
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
              className="hightlightItem"
            >
              <MdOutlineDone className="rightBullet" />
              <p
                style={{ fontSize: "22px", marginTop: ".8rem" }}
                className="higlight"
              >
                End-to-end digital transformation services
              </p>
            </div>
          </div>
        </div>

        <div
          className="requestCallbackForm-container"
          style={{ width: isMd && "100%" }}
        >
          <p
            className="formTitle"
            style={{
              fontSize: "26px",
            }}
          >
            Schedule a Call
          </p>
          <form className="requestCallbackForm" style={{}}>
            <div
              className="inputFileds"
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "1rem",
                alignItems: "center",
                flexDirection: isMd && " column",
              }}
            >
              <TextField
                style={{ width: isMd ? "100%" : "50%" }}
                className="textInput"
                id="outlined-basic"
                label="Full Name*"
                variant="outlined"
              />
              <TextField
                style={{ width: isMd ? "100%" : "50%" }}
                id="outlined-basic"
                label="Email ID*"
                variant="outlined"
              />
            </div>
            <TextField
              style={{
                width: "100%",
                marginTop: "15px",
                marginBottom: "15px",
              }}
              id="outlined-basic"
              label="Company Name*"
              variant="outlined"
            />
            <FormControl style={{ marginBottom: "15px" }} fullWidth>
              <InputLabel id="demo-simple-select-label">Requirement</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
              >
                <MenuItem>UX/UI Design</MenuItem>
                <MenuItem>Development</MenuItem>
                <MenuItem>End to end solution</MenuItem>
                <MenuItem>
                  Staff Augmentation (Designers, Developers, QA, BA, and more)
                </MenuItem>
              </Select>
            </FormControl>
            <textarea
              placeholder="Write your expectations"
              rows={5}
              style={{
                width: "100%",
                border: "1.5px solid #C4C4C4",
                borderRadius: "5px",
                outline: "none",
                padding: "16.5px",
              }}
            />
            <div>
              <input
                className="requestcallback-checkbox"
                type="checkbox"
                id="copyOfNDA"
              />
              <label htmlFor="copyOfNDA">Send me a copy of NDA</label>
            </div>
            <div>
              <input
                className="requestcallback-checkbox"
                type="checkbox"
                id="subscribe"
              />
              <label htmlFor="subscribe">
                Subscribe to our Geeky Newsletter (We promise not to spam)
              </label>
            </div>
            <div>
              <input
                className="requestcallback-checkbox"
                type="checkbox"
                id="acknowledge"
              />
              <label htmlFor="acknowledge">
                Acknowledge and agree to our Privacy Policy*
              </label>
            </div>
            <button className="requestcallback-button" type="submit">
              REQUEST A CALLBACK
            </button>
          </form>
        </div>
      </div>

      <div
        className="recordsContainer"
        style={{
          display: "flex",
          flexDirection: isMd && "column",
          gap: "1rem",
          padding: "2rem",
          justifyContent: "center",
        }}
      >
        <div className="recordItem stretch">
          <p className="recordNumber">500+</p>
          <p className="recordTitle">Client Partnerships</p>
        </div>
        <div className="recordItem stretch">
          <p className="recordNumber">700+</p>
          <p className="recordTitle">Projects Delivered</p>
        </div>
        <div className="recordItem stretch">
          <p className="recordNumber">10+</p>
          <p className="recordTitle">Projects Delivered</p>
        </div>
        <div className="recordItem stretch">
          <p className="recordNumber">450+</p>
          <p className="recordTitle">Team Members</p>
        </div>
      </div>

      <div
        className="reviewsContainer"
        style={{
          width: "100%",
          padding: isMd ? "2rem" : "2rem 14%",
        }}
      >
        <h2
          className="sectionHeading"
          style={{
            width: "100%",
            padding: "0",
          }}
        >
          We are Empowering Businesses to Lead their Industry
        </h2>
        {isMd ? (
          <Carousel
            arrows
            infinite={false}
            dots={false}
            className="custom-carousel"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            {reviewsList.map((eachReview) => (
              <>
                <div
                  key={eachReview.id}
                  className="reviewCard"
                  style={{ widht: "100%" }}
                >
                  <div
                    className="starsContainer-rating"
                    style={{ widht: "100%" }}
                  >
                    <p>{eachReview.rating}</p>
                    <Rating
                      style={{ color: "#E62415", width: "100%" }}
                      name="read-only"
                      value={5}
                      readOnly
                    />
                  </div>
                  <p className="rating">{`" ${eachReview.review} "`}</p>
                  <div className="verifiedReviewContianer">
                    <MdVerified className="verifiedIcon" />
                    <p className="verifiedReview">Veirifed Review</p>
                  </div>
                </div>
              </>
            ))}
          </Carousel>
        ) : (
          <Slider {...settings}>
            {reviewsList.map((eachReview) => (
              <>
                <div
                  key={eachReview.id}
                  className="reviewCard"
                  style={{ widht: "100%" }}
                >
                  <div
                    className="starsContainer-rating"
                    style={{ widht: "100%" }}
                  >
                    <p>{eachReview.rating}</p>
                    <Rating
                      style={{ color: "#E62415", width: "100%" }}
                      name="read-only"
                      value={5}
                      readOnly
                    />
                  </div>
                  <p className="rating">{`" ${eachReview.review} "`}</p>
                  <div className="verifiedReviewContianer">
                    <MdVerified className="verifiedIcon" />
                    <p className="verifiedReview">Veirifed Review</p>
                  </div>
                </div>
              </>
            ))}
          </Slider>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default LetsTalk;
