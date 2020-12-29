import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import Slider from "react-slick";

import image1 from "assets/img/slider/slider2.jpg";
import image2 from "assets/img/slider/slider3.jpg";
import image3 from "assets/img/slider/slider1.jpg";
import image4 from "assets/img/slider/slider4.jpg";

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
          <div style={{ textAlign: "center" }}>
            <span
              style={{
                fontSize: "18px",
                fontFamily: "Roboto",
                fontWeight: "700",
                color: "#1c1c1c",
              }}
            >
              KHÁM PHÁ NHỮNG SỰ KIỆN ĐẶC SẮC
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
              Chủ Đề Sự Kiện
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
              Mọi sự kiện đều được chuẩn bị hết sức chu đáo từ khâu trang trí
              đến khi phục vụ. Chúng tôi trân trọng từng trải nghiệm của bạn khi
              đến với nhà hàng trong những dịp đặc biệt.
            </h4>
            <br />
          </div>
        </GridItem>

        <GridItem xs={3}></GridItem>
      </GridContainer>

      <GridContainer spacing={3}>
        <GridItem xs={1}></GridItem>
        <GridItem xs={10}>
          <Slider {...settings}>
            <div>
              <img src={image3} alt="First slide" className="slick-image" />
              <div style={{ marginBottom: "30px", textAlign: "center" }}>
                <span
                  style={{
                    fontSize: "14px",
                    fontFamily: "Roboto",
                    fontWeight: "700",
                    color: "#1c1c1c",
                    textAlign: "center",
                  }}
                >
                  TẶNG GÓI DECOR TRANG TRÍ BÓNG BAY*
                </span>
                <h2
                  style={{
                    textAlign: "center",
                    fontSize: "30px",
                    fontFamily: "Playfair Display",
                    fontWeight: "400",
                    color: "#1c1c1c",
                  }}
                >
                  SINH NHẬT
                </h2>
                <h4
                  style={{
                    fontFamily: "Roboto",
                    fontWeight: "400",
                    margin: "0 100px 0px 100px",
                    color: "#1c1c1c",
                    fontSize: "14px",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  Trải nghiệm sinh nhật đáng nhớ trên tầng cao với dịch vụ đẳng
                  cấp, cung cấp các dịch vụ đi kèm như trang trí bóng, làm bánh
                  riêng tặng trong ngày sinh nhật.
                </h4>
                <br />
              </div>
            </div>

            <div>
              <img src={image1} alt="First slide" className="slick-image" />
              <div style={{ marginBottom: "30px", textAlign: "center" }}>
                <span
                  style={{
                    fontSize: "14px",
                    fontFamily: "Roboto",
                    fontWeight: "700",
                    color: "#1c1c1c",
                    textAlign: "center",
                  }}
                >
                  MIỄN PHÍ TƯ VẤN TỔ CHỨC SỰ KIỆN CHO DOANH NGHIỆP*
                </span>
                <h2
                  style={{
                    textAlign: "center",
                    fontSize: "30px",
                    fontFamily: "Playfair Display",
                    fontWeight: "400",
                    color: "#1c1c1c",
                  }}
                >
                  TIỆC CUỐI NĂM
                </h2>
                <h4
                  style={{
                    fontFamily: "Roboto",
                    fontWeight: "400",
                    margin: "0 100px 0px 100px",
                    color: "#1c1c1c",
                    fontSize: "14px",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  Dù là một bữa tiệc ấm cúng, riêng tư với ánh nến tại nhà hàng
                  tầng 7 hay một đêm tiệc ngoài trời thoáng đãng đầy sôi động
                  với nhạc và cocktail trên Skybar tầng 8 thì chúng tôi đều luôn
                  sẵn lòng phục vụ thực khách.
                </h4>
                <br />
              </div>
            </div>

            <div>
              <img src={image4} alt="Second slide" className="slick-image" />
              <div style={{ marginBottom: "30px", textAlign: "center" }}>
                <span
                  style={{
                    fontSize: "14px",
                    fontFamily: "Roboto",
                    fontWeight: "700",
                    color: "#1c1c1c",
                    textAlign: "center",
                  }}
                >
                  TẶNG GÓI DECO TRANG TRÍ BÓNG BAY*
                </span>
                <h2
                  style={{
                    textAlign: "center",
                    fontSize: "30px",
                    fontFamily: "Playfair Display",
                    fontWeight: "400",
                    color: "#1c1c1c",
                  }}
                >
                  CẦU HÔN
                </h2>
                <h4
                  style={{
                    fontFamily: "Roboto",
                    fontWeight: "400",
                    margin: "0 100px 0px 100px",
                    color: "#1c1c1c",
                    fontSize: "14px",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  Chinh phục trái tim nàng bằng một bữa tối đầy lãng mạn với hoa
                  hồng, nến, nhạc Jazz và Lava Chocolate.
                </h4>
                <br />
              </div>
            </div>
            <div>
              <img src={image2} alt="Third slide" className="slick-image" />
              <div style={{ marginBottom: "30px", textAlign: "center" }}>
                <span
                  style={{
                    fontSize: "14px",
                    fontFamily: "Roboto",
                    fontWeight: "700",
                    color: "#1c1c1c",
                    textAlign: "center",
                  }}
                >
                  TẶNG GÓI DECO TRANG TRÍ BÓNG BAY*
                </span>
                <h2
                  style={{
                    textAlign: "center",
                    fontSize: "30px",
                    fontFamily: "Playfair Display",
                    fontWeight: "400",
                    color: "#1c1c1c",
                  }}
                >
                  KỈ NIỆM NGÀY CƯỚI
                </h2>
                <h4
                  style={{
                    fontFamily: "Roboto",
                    fontWeight: "400",
                    margin: "0 100px 0px 100px",
                    color: "#1c1c1c",
                    fontSize: "14px",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  Lưu lại những giây phút ngọt ngào bên người thương trong không
                  gian ấm cúng, đầy sang trọng. Trang trí theo yêu cầu tặng gói
                  trang trí hoa và nến.
                </h4>
                <br />
              </div>
            </div>
          </Slider>
        </GridItem>
        <GridItem xs={1}></GridItem>
      </GridContainer>
    </div>
  );
}
