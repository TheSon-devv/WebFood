import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import Slider from "react-slick";

import image1 from "assets/img/slider/slider6.jpg";
import image2 from "assets/img/slider/slider5.jpg";
import image3 from "assets/img/slider/slider7.jpg";
import image4 from "assets/img/slider/slider8.jpg";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";




const useStyles = makeStyles(styles);


export default function WorkSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer spacing={3}>
        <GridItem xs={3}></GridItem>
        <GridItem xs={6}>
          <div style={{ textAlign: "center" }}>
            <span
              style={{
                fontSize: "18px",
                fontFamily: "Roboto",
                fontWeight: "700",
                color: "#1c1c1c",
              }}
            >
              DISCOVER OTHER SERVICES
            </span>
            <h2
              style={{
                textAlign: "center",
                fontSize: "45px",
                fontFamily: "Playfair Display",
                fontWeight: "400",
                color: "#1c1c1c",
              }}
            >
              Themed Events
            </h2>
            <h2 style={{ color: "#112", textAlign: "center" }}>~</h2>
            <h4
              style={{
                fontFamily: "Roboto",
                fontWeight: "400",
                margin: "0 0 12px",
                color: "#666666",
              }}
            >
              Our event planner team will help throughout the process to make
              your bespoke event a reality.
            </h4>
            <br />
          </div>
        </GridItem>

        <GridItem xs={3}></GridItem>
      </GridContainer>

      <GridContainer spacing={3}>
        <GridItem xs={1}></GridItem>
        <GridItem xs={10}>
          <Card>
            <Slider {...settings}>
              <div>
                <img src={image1} alt="First slide" className="slick-image" />
                {/* <div className="slick-caption">
                  <span
                    style={{
                      fontSize: "14px",
                      fontFamily: "Roboto",
                      fontWeight: "700",
                      color: "#fff",
                    }}
                  >
                    One complimentary bottle of wine*
                  </span>
                  <h2
                    style={{
                      textAlign: "center",
                      fontSize: "30px",
                      fontFamily: "Playfair Display",
                      fontWeight: "400",
                      color: "#fff",
                    }}
                  >
                    BIRTHDAYS
                  </h2>
                  <h4
                    style={{
                      fontFamily: "Roboto",
                      fontWeight: "400",
                      margin: "0 0 12px",
                      color: "#666666",
                    }}
                  >
                    Our menu features the very best in authentic flavorful
                    Vietnamese cuisine including dishes from all regions of the
                    country as well as an extensive selection of favorite
                    international fare.
                  </h4>
                  <br />
                </div> */}
              </div>

              <div>
                <img src={image3} alt="First slide" className="slick-image" />
                {/* <div className="slick-caption">
                  <span
                    style={{
                      fontSize: "18px",
                      fontFamily: "Roboto",
                      fontWeight: "700",
                      color: "#1c1c1c",
                    }}
                  >
                    ENJOY
                  </span>
                  <h2
                    style={{
                      textAlign: "center",
                      fontSize: "45px",
                      fontFamily: "Playfair Display",
                      fontWeight: "400",
                      color: "#1c1c1c",
                    }}
                  >
                    OUR MENUS
                  </h2>
                  <h4
                    style={{
                      fontFamily: "Roboto",
                      fontWeight: "400",
                      margin: "0 0 12px",
                      color: "#666666",
                    }}
                  >
                    Our menu features the very best in authentic flavorful
                    Vietnamese cuisine including dishes from all regions of the
                    country as well as an extensive selection of favorite
                    international fare.
                  </h4>
                  <br />
                </div> */}
              </div>
              <div>
                <img src={image4} alt="Second slide" className="slick-image" />
                {/* <div className="slick-caption">
                  <span
                    style={{
                      fontSize: "18px",
                      fontFamily: "Roboto",
                      fontWeight: "700",
                      color: "#1c1c1c",
                    }}
                  >
                    ENJOY
                  </span>
                  <h2
                    style={{
                      textAlign: "center",
                      fontSize: "45px",
                      fontFamily: "Playfair Display",
                      fontWeight: "400",
                      color: "#1c1c1c",
                    }}
                  >
                    OUR MENUS
                  </h2>
                  <h4
                    style={{
                      fontFamily: "Roboto",
                      fontWeight: "400",
                      margin: "0 0 12px",
                      color: "#666666",
                    }}
                  >
                    Our menu features the very best in authentic flavorful
                    Vietnamese cuisine including dishes from all regions of the
                    country as well as an extensive selection of favorite
                    international fare.
                  </h4>
                  <br />
                </div> */}
              </div>
              <div>
                <img src={image2} alt="Third slide" className="slick-image" />
                {/* <div className="slick-caption">
                  <span
                    style={{
                      fontSize: "18px",
                      fontFamily: "Roboto",
                      fontWeight: "700",
                      color: "#1c1c1c",
                    }}
                  >
                    ENJOY
                  </span>
                  <h2
                    style={{
                      textAlign: "center",
                      fontSize: "45px",
                      fontFamily: "Playfair Display",
                      fontWeight: "400",
                      color: "#1c1c1c",
                    }}
                  >
                    OUR MENUS
                  </h2>
                  <h4
                    style={{
                      fontFamily: "Roboto",
                      fontWeight: "400",
                      margin: "0 0 12px",
                      color: "#666666",
                    }}
                  >
                    Our menu features the very best in authentic flavorful
                    Vietnamese cuisine including dishes from all regions of the
                    country as well as an extensive selection of favorite
                    international fare.
                  </h4>
                  <br />
                </div> */}
              </div>
            </Slider>
          </Card>
        </GridItem>
        <GridItem xs={1}></GridItem>
      </GridContainer>
    </div>
  );
}
