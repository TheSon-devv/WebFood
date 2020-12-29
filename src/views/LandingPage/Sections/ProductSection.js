import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";
import { cardTitle } from "assets/jss/material-kit-react.js";

import image1 from "assets/img/menu/menu17.jpg";
import image2 from "assets/img/menu/menu1.jpg";
import image3 from "assets/img/menu/menu18.jpg";
import image5 from "assets/img/menu/menu5.jpg";

const useStyles = makeStyles(styles);
const usecardTitle = makeStyles(cardTitle);
const useImageStyle = makeStyles(imagesStyles);

export default function ProductSection() {
  const classes = useStyles();
  const classess = usecardTitle();
  const classesss = useImageStyle();
  return (
    <div className={classes.section}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={3}>
          <Card>
            <img
              className={classesss.imgCardTop}
              src={image5}
              alt="Second slide"
              style={{ height: "180px", width: "100%", display: "block" }}
            />
            <CardBody>
              <h4 className={classess.cardTitle}>Set Việt Nam</h4>
              <p>Gồm những món ăn mang đậm văn hóa Việt.</p>
              <Button
                style={{ backgroundColor: "#112", width: "40%" }}
                type="button"
                href="https://www.therhythmsrestaurant.com/files/upload/The-Soul-of-Asia.pdf"
              >
                CHI TIẾT
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Card>
            <img
              src={image2}
              className={classesss.imgCardTop}
              alt="Second slide"
              style={{ height: "180px", width: "100%", display: "block" }}
            />
            <CardBody>
              <h4 className={classess.cardTitle}>Set món Âu</h4>
              <p>Gồm những món Âu hảo hạng được chế biến cầu kì và tinh tế.</p>
              <Button
                style={{ backgroundColor: "#112", width: "40%" }}
                type="button"
                href="https://www.vn.therhythmsrestaurant.com/files/upload/Western-Delicacies.pdf"
              >
                CHI TIẾT
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
              <h4 className={classess.cardTitle}>Set đặc biệt</h4>
              <p>Gồm hơn 50 món Á - Âu đặc sắc được chọn lọc kĩ lưỡng.</p>
              <Button
                style={{ backgroundColor: "#112", width: "40%" }}
                type="button"
                href="https://www.vn.therhythmsrestaurant.com/files/upload/Menu_A_la_carte.pdf"
              >
                CHI TIẾT
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
              <h4 className={classess.cardTitle}>Set Chào Đông</h4>
              <p>Đón chào mùa đông với set ăn ấm cúng từ nhà hàng.</p>
              <Button
                style={{ backgroundColor: "#112", width: "40%" }}
                type="button"
                href="https://www.vn.therhythmsrestaurant.com/files/upload/Menu_Chao_Dong_A5.pdf"
              >
                CHI TIẾT
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
