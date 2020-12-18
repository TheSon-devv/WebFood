import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

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

import image1 from "assets/img/menu/menu3.jpg";
import image2 from "assets/img/menu/menu1.jpg";
import image3 from "assets/img/menu/menu2.jpg";
import image4 from "assets/img/menu/menu4.jpg";
import image5 from "assets/img/menu/menu5.jpg";

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
    <div className={classes.section}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <Carousel {...settings}>
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
            </Carousel>
          </Card>
        </GridItem>
      </GridContainer>
      <div>

        <GridContainer>
          <GridItem xs={12} sm={12} md={3}>
            <Card>
                <img src={image2} alt="Second slide" 
                      style={{height: "180px", width: "100%", display: "block"}}
                />
              <CardBody>
                <h4 className={classess.cardTitle}>A la Carte Menu</h4>
                <p>Including the quintessence of Asian and Western cuisine.</p>
                
              </CardBody>
            </Card>
            <Button type="button">SEE MENU</Button>
          </GridItem>

          <GridItem xs={12} sm={12} md={3}>
            <Card>
                <img src={image1} alt="Second slide" 
                style={{height: "180px", width: "100%", display: "block"}}
                  />
              <CardBody>
                <h4 className={classess.cardTitle}>Western Set Menus</h4>
                <p>Including two dinfferent det menus with a careful selection of Western delicacies.</p>
              </CardBody>
            </Card>
            <Button type="button">SEE MENU</Button>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
              <Card>
                  <img src={image5} alt="Second slide" 
                  style={{height: "180px", width: "100%", display: "block"}}
                    />
                <CardBody>
                  <h4 className={classess.cardTitle}>Asian Set Menus</h4>
                  <p>Including three set menus that represent Asian culinary experiences.</p>
                </CardBody>
              </Card>
              
              <Button type="button">SEE MENU</Button>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
              <Card>
                  <img src={image3} alt="Second slide" 
                  style={{height: "180px", width: "100%", display: "block"}}
                    />
                <CardBody>
                  <h4 className={classess.cardTitle}>Love Set Menus</h4>
                  <p>These set menus are tailored specifically for couples dining at our restaurant.</p>
                </CardBody>
              </Card>
              <Button type="button">SEE MENU</Button>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
