import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import Slider from "react-slick";

import image1 from "assets/img/menu/menu3.jpg";
import image3 from "assets/img/menu/menu2.jpg";
import image4 from "assets/img/menu/menu4.jpg";
import image5 from "assets/img/menu/menu5.jpg";

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
          <div style={{textAlign:"center"}}>
            <span style={{ fontSize:"18px",fontFamily:"Roboto", fontWeight:"700",color:"#1c1c1c"}}>DISCOVER OTHER SERVICES</span>
            <h2 style={{textAlign:"center", fontSize:"45px",fontFamily:"Playfair Display", fontWeight:"400",color:"#1c1c1c"}}>Themed Events</h2>
            <h2 style={{color:"#112", textAlign:"center"}}>~</h2>
            <h4 style={{ fontFamily:"Roboto",fontWeight:"400", margin:"0 0 12px", color:"#666666"}}>
            Our event planner team will help throughout the process to make your bespoke event a reality.
            </h4>
            <br />
          </div>
        </GridItem>

        <GridItem xs={3}></GridItem>
      </GridContainer>

      <GridContainer spacing={3} >
        <GridItem xs={1}></GridItem>
        <GridItem xs={10} >
          <Card>
            <Slider {...settings}>
              <div>
                <img src={image1} alt="First slide" className="slick-image" />
                <div className="slick-caption">
                  <h2>
                    Yellowstone National Park, United States
                  </h2>
                </div>
              </div>
              
              <div>
                <img src={image4} alt="First slide" className="slick-image" />
                <div className="slick-caption">
                  <h2>
                    
                    Yellowstone National Park, United States
                  </h2>
                </div>
              </div>
              <div>
                <img src={image5} alt="Second slide" className="slick-image" />
                <div className="slick-caption">
                  <h2>
                    
                    Somewhere Beyond, United States
                  </h2>
                </div>
              </div>
              <div>
                <img src={image3} alt="Third slide" className="slick-image" />
                <div className="slick-caption">
                  <h2>
                    Yellowstone National Park, United States
                  </h2>
                </div>
              </div>
            </Slider>
          </Card>
          </GridItem>
          <GridItem xs={1}></GridItem>
      </GridContainer>
      
    </div>
  );
}
