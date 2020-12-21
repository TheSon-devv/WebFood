import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page


import image1 from "assets/img/Restaurant_5.jpg";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div style={{backgroundColor:"#fff"}}>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Restaurant"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 500,
          color: "#fff",
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/menu/menu15.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} style={{ zIndex: "13" }}>
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "45px",
                  fontFamily: "Playfair Display",
                  fontWeight: "400",
                  color: "#fff",
                }}
              >
                About Us
              </h1>
              <h2 className={classes.text}>~</h2>
              <h4
                style={{
                  textAlign: "center",
                  fontFamily: "Roboto",
                  fontWeight: "400",
                  margin: "0 0 12px",
                  display: "block",
                }}
              >
                An exquisite note of genuine local dishes
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <GridContainer
        spacing="3"
        style={{ marginTop: "50px", marginBottom: "100px" }}
      >
        <GridItem xs="2"></GridItem>
        <GridItem xs="8">
          <h4
            style={{
              fontSize: "25px ",
              fontFamily: "Playfair Display",
              fontWeight: "400",
              textAlign: "center",
              color: "#1c1c1c",
            }}
          >
            The Rhythms Restaurant takes inspiration from the fundamental
            characteristic of music. In frequencies, timbres, and the passage of
            beats through time to form rhythms, music can be considered as a
            carrier of life-information.
          </h4>
        </GridItem>
        <GridItem xs="2"></GridItem>
      </GridContainer>

      <div className={classes.container}>
        <GridContainer style={{ marginTop: "30px", marginBottom: "50px" }}>
          <GridItem xs={12} sm={12} md={6}>
            <img
              src={image1}
              style={{  maxWidth: "100%" }}
              alt="Card-img-cap"
            />
          </GridItem>

          <GridItem xs={12} sm={12} md={6}>
            <div style={{float:"left", paddingLeft:"40px", paddingRight:"15px"}}>
              <p
                style={{
                  fontFamily: "Roboto",
                  fontWeight: "400",
                  margin: "0 0 32px",
                  color: "#666666",
                  fontSize:"16px",
                  textAlign:"justify"
                }}
              >
                <span style={{fontWeight:"bold"}}>The notion</span> that music can touch the core of our being, mood and
                attitudes has been manifested through the time-honored bonding
                with melodic rhymes of prominent poets and music composers. And
                though Shakespeare, the master poet of romance, once referred to
                music as the “food of love”, he went much further, writing that
                music has the power to create art as well as to destroy life.
              </p>
              <p
                style={{
                  fontFamily: "Roboto",
                  fontWeight: "400",
                  margin: "0 0 32px",
                  color: "#666666",
                  fontSize:"16px",
                  textAlign:"justify"
                }}
              >
                <span style={{fontWeight:"bold"}}>Our restaurant</span> concept is formed in harmony with the rhythms of
                the King’s Symphony, showcasing an orchestra of Vietnamese
                authentic cuisine embellished with the grandeur of royal
                ambience. The blending of sophisticated Western architecture
                with local heritage has created a beautiful melody, expected to
                touch the emotion of guests and take them on a unique sensory
                journey.
              </p>
              
              <p
                style={{
                  fontFamily: "Roboto",
                  fontWeight: "400",
                  color: "#666666",
                  fontSize:"16px",
                  textAlign:"justify"
                }}
              >
                <span style={{fontWeight:"bold"}}>Our dream for The Rhythms</span> is to capture the charm of local
                cuisine and elevate it to an upper standard with compassion and
                creativity. The development of our upcoming restaurants is
                expected to cultivate a harmonious society where both locals and
                international friends can embrace, cherish and spread the taste
                of Vietnamese cuisine throughout the region.
              </p>
              <br />
            </div>
          </GridItem>
        </GridContainer>
      </div>

      <Footer />
    </div>
  );
}
