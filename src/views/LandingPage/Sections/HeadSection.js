import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/headStyle.js";
import { cardTitle } from "assets/jss/material-kit-react.js";

import image1 from "assets/img/home/home3.jpg";
import icon1 from "assets/img/icons/meat1.png";
import icon2 from "assets/img/icons/fish1.png";
import icon3 from "assets/img/icons/menu1.png";

const useStyles = makeStyles(styles);
const usecardTitle = makeStyles(cardTitle);

export default function HeadSection() {
  const classes = useStyles();
  const classess = usecardTitle();
  return (
    <div className={classes.section}>
      <GridContainer style={{ marginTop: "50px", marginBottom: "50px" }}>
        <GridItem xs={12} sm={12} md={6}>
          <div style={{ textAlign: "center" }}>
            <span
              style={{
                fontSize: "18px",
                fontFamily: "Roboto",
                fontWeight: "700",
                color: "#1c1c1c",
              }}
            >
              RESTAURANT
            </span>
            <h2
              style={{
                textAlign: "center",
                fontSize: "35px",
                fontFamily: "Playfair Display",
                fontWeight: "400",
                color: "#1c1c1c",
              }}
            >
              Giai điệu ẩm thực đầy thăng hoa
            </h2>
            <h2 style={{ color: "#112", textAlign: "center" }}>~</h2>
            <h4
              style={{
                fontFamily: "Roboto",
                fontWeight: "400",
                margin: "0 0 12px",
                color: "#666666",
              }}
            >
              Nâng tầm tinh túy ẩm thực Á - Âu trong không gian fine-dining đầy
              sang trọng, dịch vụ đẳng cấp, với tầm view cao bao trọn 360 độ
              toàn cảnh Hồ Gươm và Phố Cổ tạo thành một chuyến hành trình đầy
              cảm xúc trong trải nghiệm của thực khách khi đến với nhà hàng của
              chúng tôi.
            </h4>
            <br />
          </div>
          <Button className={classes.button}>
            <Link to="/profile-page" className={classes.link}>
              CHI TIẾT
            </Link>
          </Button>
        </GridItem>

        <GridItem xs={12} sm={12} md={6}>
          <img
            src={image1}
            alt="Second slide"
            style={{ height: "auto", width: "100%", display: "block" }}
          />
        </GridItem>
      </GridContainer>

      <GridContainer spacing={3}>
        <GridItem xs={4}>
          <div>
            <img src={icon1} alt="Card-img-cap"></img>
            <h4 className={classess.cardTitle}>Vị Trí Hoàn Hảo</h4>
            <p>
              Là một trong những nhà hàng hiếm hoi tọa lạc ở khu vực phố đi bộ -
              trung tâm của thành phố.
            </p>
          </div>
        </GridItem>
        <GridItem xs={4}>
          <div>
            <img src={icon2} alt="Card-img-cap"></img>
            <h4 className={classess.cardTitle}>Thiết Kế Sang Trọng</h4>
            <p>
              Kiến trúc tân cổ điển sang trọng với những trang thiết bị tinh tế
              đến từng chi tiết.
            </p>
          </div>
        </GridItem>
        <GridItem xs={4}>
          <div>
            <img src={icon3} alt="Card-img-cap"></img>
            <h4 className={classess.cardTitle}>Nguyên liệu hảo hạng</h4>
            <p>
              Mọi thực phẩm tươi sống được nhập vào hàng ngày để đảm bảo chất
              lượng thực phẩm chế biến ở trạng thái tốt nhất.
            </p>
          </div>
        </GridItem>
      </GridContainer>

      <GridContainer spacing={3} style={{ marginTop: "40px" }}>
        <GridItem xs={3}></GridItem>
        <GridItem xs={6}>
          <div style={{ textAlign: "center" }}>
            <span
              style={{
                fontSize: "18px",
                fontFamily: "Roboto",
                fontWeight: "700",
                color: "#1c1c1c",
              }}
            >
              THƯỞNG THỨC
            </span>
            <h2
              style={{
                textAlign: "center",
                fontSize: "45px",
                fontFamily: "Playfair Display",
                fontWeight: "400",
                color: "#1c1c1c",
              }}
            >
              THỰC ĐƠN CỦA NHÀ HÀNG
            </h2>
            <h4
              style={{
                fontFamily: "Roboto",
                fontWeight: "400",
                margin: "0 0 12px",
                color: "#666666",
              }}
            >
              Thưởng thức các Set Menu đặc biệt, được thiết kế riêng biệt mang
              đến những lựa chọn phong phú từ ẩm thực Việt và quốc tế.
            </h4>
            <br />
          </div>
        </GridItem>

        <GridItem xs={3}></GridItem>
      </GridContainer>
    </div>
  );
}
