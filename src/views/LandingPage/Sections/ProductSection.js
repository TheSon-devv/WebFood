import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons


// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from 'components/CustomButtons/Button.js';

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";
import { cardTitle } from "assets/jss/material-kit-react.js";

import image1 from "assets/img/menu/menu3.jpg";
import image2 from "assets/img/menu/menu1.jpg";
import image3 from "assets/img/menu/menu2.jpg";
import image5 from "assets/img/menu/menu5.jpg";

const useStyles = makeStyles(styles);
const usecardTitle = makeStyles(cardTitle);
const useImageStyle= makeStyles(imagesStyles);

export default function ProductSection() {
  const classes = useStyles();
  const classess = usecardTitle();
  const classesss= useImageStyle();
  return (
    <div className={classes.section}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={3}>
          <Card>
            <img
              src={image2}
              className={classesss.imgCardTop}
              alt="Second slide"
              style={{ height: "180px", width: "100%", display: "block" }}
            />
            <CardBody>
              <h4 className={classess.cardTitle}>Drink Menu</h4>
              <p>
                Explore our drinks menu ò handpicked wines, Rose, Cocktails,soft
                drinks,...
              </p>
              <Button
                style={{ backgroundColor: "#112", width: "40%" }}
                type="button"
                href="https://www.therhythmsrestaurant.com/files/upload/Wine_list.pdf"
              >
                SEE MENU
              </Button>
            </CardBody>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={3}>
          <Card>
            <img
              src={image1}
              className={classesss.imgCardTop}
              alt="Second slide"
              style={{ height: "180px", width: "100%", display: "block" }}
            />
            <CardBody>
              <h4 className={classess.cardTitle}>Western Set Menus</h4>
              <p>
                Including two dinfferent det menus with a careful selection of
                Western delicacies.
              </p>
              <Button
                style={{ backgroundColor: "#112", width: "40%" }}
                type="button"
                href="https://www.therhythmsrestaurant.com/files/upload/Menu_A_la_carte.pdf"
              >
                SEE MENU
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Card>
            <img
              className={classesss.imgCardTop}
              src={image5}
              alt="Second slide"
              style={{ height: "180px", width: "100%", display: "block" }}
            />
            <CardBody>
              <h4 className={classess.cardTitle}>Asian Set Menus</h4>
              <p>
                Including three set menus that represent Asian culinary
                experiences.
              </p>
              <Button
                style={{ backgroundColor: "#112", width: "40%" }}
                type="button"
                href="https://www.therhythmsrestaurant.com/files/upload/The-Soul-of-Asia.pdf"
              >
                SEE MENU
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Card>
            <img
              className={classesss.imgCardTop}
              src={image3}
              alt="Second slide"
              style={{ height: "180px", width: "100%", display: "block" }}
            />
            <CardBody>
              <h4 className={classess.cardTitle}>Love Set Menus</h4>
              <p>
                These set menus are tailored specifically for couples dining at
                our restaurant.
              </p>
              <Button
                style={{ backgroundColor: "#112", width: "40%" }}
                type="button"
                href="https://www.therhythmsrestaurant.com/files/upload/Lovely-Dovey.pdf"
              >
                SEE MENU
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
