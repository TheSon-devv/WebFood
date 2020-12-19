import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import LocationOn from "@material-ui/icons/LocationOn";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from 'components/CustomButtons/Button.js';
import Carousel from "react-slick";

import styles from "assets/jss/material-kit-react/views/landingPageSections/headStyle.js";
import { cardTitle } from "assets/jss/material-kit-react.js";

import image1 from "assets/img/home/home1.jpg";
import icon1 from "assets/img/icons/meat1.png";
import icon2 from "assets/img/icons/fish1.png";
import icon3 from "assets/img/icons/menu1.png";


const useStyles = makeStyles(styles);
const usecardTitle = makeStyles(cardTitle);

export default function ProductSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  const classes = useStyles();
  const classess = usecardTitle();
  return (
    <div  className={classes.section} >
        <GridContainer style={{marginTop:"50px",marginBottom:"50px"}}>
          <GridItem xs={12} sm={12} md={6}>
                <div style={{textAlign:"center"}}>
                        <span style={{ fontSize:"18px",fontFamily:"Roboto", fontWeight:"700",color:"#1c1c1c"}}>RESTAURANT</span>
                        <h2 style={{textAlign:"center", fontSize:"45px",fontFamily:"Playfair Display", fontWeight:"400",color:"#1c1c1c"}}>Satisfy the thirst for<br/> authenticity</h2>
                        <h2 style={{color:"#112", textAlign:"center"}}>~</h2>
                        <h4 style={{ fontFamily:"Roboto",fontWeight:"400", margin:"0 0 12px", color:"#666666"}}>
                        While all of our restaurants are elaborated to elicit an ambience of aesthetics and sophistication, each location embodies a unique style and characteristic which we are particularly proud of. Rejoicing in local flavors and culinary innovation, we specialize in elevating classic Vietnamese recipes to international standards whilst managing to retain their quintessence.
                        </h4>
                        <br />
                </div>
                <Button
                    className={classes.button}
                >
                    <Link to="/" className={classes.link}>LEARN MORE</Link> 
                </Button>
          </GridItem>

          <GridItem xs={12} sm={12} md={6}>
            
                <img src={image1} alt="Second slide" 
                style={{height: "auto", width: "100%", display: "block"}}
                  />
          </GridItem>
        </GridContainer>

        <GridContainer spacing="3">
            <GridItem xs="4">
                <div>
                    <img src={icon1}></img>
                    <h4 className={classess.cardTitle}>Vietnamese Culinary Artisanship</h4>
                    <p>We create menu that highlights traditional Vietnamese cuisine and showcases national heritage, enticing the senses of fine dining enthusiasts.</p>
                </div>
            </GridItem>
            <GridItem xs="4">
                <div>
                    <img src={icon2}></img>
                    <h4 className={classess.cardTitle}>Premium Ingredients</h4>
                    <p>We are proud to offer fresh food from daily deliveries to ensure that only the finest ingredients are used to create our premium dishes.</p>
                </div>
            </GridItem>
            <GridItem xs="4">
                <div>
                    <img src={icon3}></img>
                    <h4 className={classess.cardTitle}>Classy Design</h4>
                    <p>Luxurious and timeless, our design is greatly inspired by neoclassicism that manifests utmost elegance and sophistication from the mid-18th century.</p>
                </div>
            </GridItem>
        </GridContainer>

        <GridContainer spacing="3" style={{marginTop:"40px"}}>
            <GridItem xs="3"></GridItem>
            <GridItem xs="6">
            <div style={{textAlign:"center"}}>
                <span style={{ fontSize:"18px",fontFamily:"Roboto", fontWeight:"700",color:"#1c1c1c"}}>ENJOY</span>
                <h2 style={{textAlign:"center", fontSize:"45px",fontFamily:"Playfair Display", fontWeight:"400",color:"#1c1c1c"}}>OUR MENUS</h2>
                <h4 style={{ fontFamily:"Roboto",fontWeight:"400", margin:"0 0 12px", color:"#666666"}}>
                Our menu features the very best in authentic flavorful Vietnamese cuisine including dishes from all regions of the country as well as an extensive selection of favorite international fare.
                </h4>
                <br />
            </div>
            </GridItem>

            <GridItem xs="3"></GridItem>
      </GridContainer>
      </div>
  );
}
