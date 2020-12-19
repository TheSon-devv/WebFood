import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { cardTitle } from "assets/jss/material-kit-react.js";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";


import image1 from "assets/img/menu/menu10_2.jpg";


const useStyles = makeStyles(styles);
const useImageStyles=makeStyles(imagesStyles);

export default function TeamSection() {
  const classes = useStyles();
  const classess= useImageStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
        <Card>
          <img className={classess.imgCard1} src={image1} alt="Card-img" />
          <div className={classess.imgCardOverlay}>
            <h4 className={classes.cardTitle}>Thông Tin Đặt Bàn</h4>
            <p className={classes.smallTitle}>Khám phá những sự kiện đặc sắc tại Nhà hàng.</p>
            <h4 style={{color:"#fff", fontWeight:"400"}}>Lưu ý: Đặt bàn qua fanpage hoặc qua hotline của nhà hàng để được hưởng nhiều ưu đãi nhất.</h4>
            <Button style={{backgroundColor:"#112"}} type="button">ĐẶT BÀN NGAY</Button>
          </div>
        </Card>
        
    </div>
  );
}
