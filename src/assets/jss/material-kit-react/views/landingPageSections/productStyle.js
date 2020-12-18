import { title } from "assets/jss/material-kit-react.js";



const productStyle = {
  title:{
    fontSize:"15px",
    fontWeight:"20"
  },
  description: {
    fontSize: "4.2rem",
    fontWeight: "50",
    position: "relative"
  },
  section: {
    padding: "30px 0 10px 0",
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  description: {
    color: "#999"
  },
  
};

export default productStyle;
