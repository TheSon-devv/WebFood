import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Carousel from "react-slick";
import Slider from "react-slick";

import image1 from "assets/img/menu/menu3.jpg";
import image2 from "assets/img/menu/menu1.jpg";
import image3 from "assets/img/menu/menu2.jpg";
import image4 from "assets/img/menu/menu4.jpg";
import image5 from "assets/img/menu/menu5.jpg";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";



const useStyles = makeStyles(styles);
const useImageStyles=makeStyles(imagesStyles);

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
  const classess= useImageStyles();
  return (
    <div className={classes.section}>
      <GridContainer>
        <GridItem >
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
      </GridContainer>
      
    </div>
  );
}
