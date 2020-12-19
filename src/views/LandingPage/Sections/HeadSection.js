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

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import { cardTitle } from "assets/jss/material-kit-react.js";

import image1 from "assets/img/home/home1.jpg";

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
    <div  className={classes.section}>
        <GridContainer style={{marginTop:"30px"}}>
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
                    style={{backgroundColor:"#222",minWidth:"200px"}}>
                    <Link to="/" className={classes.link} style={{color:"#fff", fontSize:"14px",fontFamily:"Roboto"}}>LEARN MORE</Link> 
                
                </Button>
                
            
          </GridItem>

          <GridItem xs={12} sm={12} md={6}>
            
                <img src={image1} alt="Second slide" 
                style={{height: "auto", width: "100%", display: "block"}}
                  />
          </GridItem>
        </GridContainer>
      </div>
  );
}
