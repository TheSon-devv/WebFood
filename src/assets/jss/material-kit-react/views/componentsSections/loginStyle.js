import { container } from "assets/jss/material-kit-react.js";

import image from "assets/img/sign.jpg";
import { Autorenew } from "@material-ui/icons";

const loginStyle = {
  section: {
    minHeight: "110vh",
    maxHeight: "1600px",
    overflow: "hidden",
    padding: "70px 0",
    backgroundPosition: "top center",
    backgroundSize: "cover",
    margin: "0",
    border: "0",
    display: "flex",
    alignItems: "center",
    backgroundImage: "url(" + image + ")"
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 280,
  },
  top : {
    marginTop : 50,
    marginBottom : 50,  
  }
};

export default loginStyle;
