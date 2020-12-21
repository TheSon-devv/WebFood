import React from "react";
// nodejs library that concatenates classes
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";


import styles from "assets/jss/material-kit-react/views/components.js";
import ProductSection from "views/LandingPage/Sections/ProductSection.js";
import WorkSection from "views/LandingPage/Sections/WorkSection.js";
import TeamSection from "views/LandingPage/Sections/TeamSection.js";
import HeadSection from "views/LandingPage/Sections/HeadSection.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
    const classes = useStyles();
    const { ...rest } = props;
    return (
      <div style={{ backgroundColor: "#fff" }}>
        <Header
          color="transparent"
          brand="Restaurant"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 500, 
          }}
          {...rest}
        />
        <Parallax image={require("assets/img/home/home2.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                    <div>
                        <span style={{ fontSize:"18px",fontFamily:"Roboto", fontWeight:"700",color:"#fff"}}>- Spcecial Offer -</span>
                        <h2 style={{textAlign:"center", fontSize:"45px",fontFamily:"Playfair Display", fontWeight:"400",color:"#fff"}}>Winter Special Offers At The Rhythms</h2>
                    </div>
                  <Button className={classes.button}>
                    <Link to="/reservation-page" className={classes.link}>
                      ĐẶT BÀN NGAY
                    </Link>
                  </Button>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classes.container}>
          <HeadSection />
        </div>
        <div className={classes.container}>
          <ProductSection />
        </div>

        <TeamSection />

        <div className={classes.container}>
          <WorkSection />
        </div>
        <Footer />
      </div>
    );
}
