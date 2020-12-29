import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page

import image1 from "assets/img/Restaurant_5.jpg";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Restaurant"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 500,
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/menu/menu15.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} style={{ zIndex: "13" }}>
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "45px",
                  fontFamily: "Playfair Display",
                  fontWeight: "400",
                  color: "#fff",
                }}
              >
                Giới Thiệu
              </h1>
              <h2 className={classes.text}>~</h2>
              <h4
                style={{
                  textAlign: "center",
                  fontFamily: "Roboto",
                  fontWeight: "400",
                  margin: "0 0 12px",
                  display: "block",
                }}
              >
                Giai điệu ẩm thực đầy thăng hoa.
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <GridContainer
        spacing="3"
        style={{ marginTop: "50px", marginBottom: "100px" }}
      >
        <GridItem xs="2"></GridItem>
        <GridItem xs="8">
          <h4
            style={{
              fontSize: "25px ",
              fontFamily: "Playfair Display",
              fontWeight: "400",
              textAlign: "center",
              color: "#1c1c1c",
            }}
          >
            Thưởng thức ẩm thực Việt Nam tại Nhà hàng Restaurant đẳng cấp, sang
            trọng bậc nhất Phố Cổ với vị trí đắc địa tầm nhìn bao quát hồ Hoàn
            Kiếm.
          </h4>
        </GridItem>
        <GridItem xs="2"></GridItem>
      </GridContainer>

      <div className={classes.container}>
        <GridContainer style={{ marginTop: "30px", marginBottom: "50px" }}>
          <GridItem xs={12} sm={12} md={6}>
            <img src={image1} style={{ maxWidth: "100%" }} alt="Card-img-cap" />
          </GridItem>

          <GridItem xs={12} sm={12} md={6}>
            <div
              style={{
                float: "left",
                paddingLeft: "40px",
                paddingRight: "15px",
              }}
            >
              <p
                style={{
                  fontFamily: "Roboto",
                  fontWeight: "400",
                  margin: "0 0 32px",
                  color: "#666666",
                  fontSize: "16px",
                  textAlign: "justify",
                  lineHeight: "1.7",
                }}
              >
                <span style={{ fontWeight: "bold" }}> Quan điểm</span> cho rằng
                âm nhạc có thể chạm đến cốt lõi của con người, tâm trạng và thái
                độ của chúng ta đã được thể hiện thông qua sự liên kết lâu đời
                với những giai điệu du dương của các nhà thơ và nhà soạn nhạc
                lỗi lạc. Và mặc dù Shakespeare, nhà thơ bậc thầy của sự lãng
                mạn, từng gọi âm nhạc là “thức ăn của tình yêu”, ông đã đi xa
                hơn nhiều khi viết rằng âm nhạc có sức mạnh tạo ra nghệ thuật
                cũng như hủy diệt cuộc sống.
              </p>
              <p
                style={{
                  fontFamily: "Roboto",
                  fontWeight: "400",
                  margin: "0 0 32px",
                  color: "#666666",
                  fontSize: "16px",
                  textAlign: "justify",
                  lineHeight: "1.7",
                }}
              >
                Ý tưởng nhà hàng của chúng tôi được hình thành hài hòa với nhịp
                điệu của Bản giao hưởng của Nhà vua, giới thiệu một dàn nhạc ẩm
                thực chính thống của Việt Nam được tô điểm bằng sự hùng vĩ của
                bầu không khí hoàng gia. Sự hòa quyện giữa kiến ​​trúc phương
                Tây tinh tế với di sản địa phương đã tạo nên một giai điệu đẹp,
                kỳ vọng sẽ chạm đến cảm xúc của du khách và đưa họ vào một hành
                trình cảm nhận độc đáo.
              </p>

              <p
                style={{
                  fontFamily: "Roboto",
                  fontWeight: "400",
                  color: "#666666",
                  fontSize: "16px",
                  textAlign: "justify",
                }}
              >
                <span style={{ fontWeight: "bold" }}>Ước mơ của chúng tôi</span>{" "}
                là nắm bắt được nét quyến rũ của ẩm thực địa phương và nâng nó
                lên một tiêu chuẩn cao hơn với lòng nhân ái và sự sáng tạo. Sự
                phát triển của các nhà hàng sắp tới của chúng tôi được kỳ vọng
                sẽ tạo ra một xã hội hài hòa, nơi cả người dân địa phương và bạn
                bè quốc tế có thể đón nhận, trân trọng và lan tỏa hương vị ẩm
                thực Việt Nam khắp khu vực.
              </p>
              <br />
            </div>
          </GridItem>
        </GridContainer>
      </div>

      <Footer />
    </div>
  );
}
