import React from "react";
// nodejs library that concatenates classes

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";

// @material-ui/icons

// core components

import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

import image1 from "assets/img/menu/menu16_2.jpg";

const useStyles = makeStyles(styles);
const useImageStyles = makeStyles(imagesStyles);

export default function TeamSection() {
  const classes = useStyles();
  const classess = useImageStyles();

  return (
    <div className={classes.section}>
      <Card>
        <img className={classess.imgCard1} src={image1} alt="Card-img" />
        <div className={classess.imgCardOverlay}>
          <h4 className={classes.cardTitle}>Thông Tin Đặt Bàn</h4>
          <p className={classes.smallTitle}>
            Khám phá những sự kiện đặc sắc tại Nhà hàng.
          </p>
          <h5
            style={{
              marginTop: "25px",
              color: "#fff",
              fontSize: "25px",
              fontFamily: "Playfair Display serif",
              fontWeight: "400",
            }}
          >
            Quý khách vui lòng điền thông tin đặt bàn vào mẫu hoặc liên hệ
            hotline: 0981.042.460
          </h5>
          <h4 style={{ color: "#fff", fontStyle: "italic", fontWeight: "400" }}>
            Lưu ý: Đặt bàn qua fanpage hoặc qua hotline của nhà hàng để được
            hưởng nhiều ưu đãi nhất.
          </h4>
          <Button className={classes.button}>
            <Link to="/reservation-page" className={classes.link}>
              ĐẶT BÀN NGAY
            </Link>
          </Button>
        </div>
      </Card>
    </div>
  );
}
