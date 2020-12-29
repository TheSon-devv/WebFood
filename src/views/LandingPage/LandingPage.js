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
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div style={{ backgroundColor: "#fff" }}>
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
      <Parallax filter image={require("assets/img/menu/menu.jpg")}>
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
                Our Menus
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
                Our menu features the very best in authentic flavorful
                Vietnamese cuisine including dishes from all regions of the
                country as well
                <br /> as an extensive selection of favorite international fare.
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div>
        <div>
          <div className={classes.container}>
            <ProductSection />
          </div>

          <TeamSection />

          <div className={classes.container}>
            <WorkSection />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
