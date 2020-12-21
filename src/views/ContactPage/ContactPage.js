import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import { Link } from "react-router-dom";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/contactPage/contactPage.js";

// Sections for this page
import ContactSection from "views/ContactPage/Sections/ContactSection.js"


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
      <Parallax filter image={require("assets/img/order1.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} style={{ zIndex: "13" }}>
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "45px",
                  fontFamily: "Playfair Display serif",
                  fontWeight: "400",
                  color: "#fff",
                }}
              >
                Contact
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
                Want to find out more about what we do? Feel free to contact us
                through the information below.
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div>
        <div>
          <div className={classes.container}>
            <ContactSection />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}