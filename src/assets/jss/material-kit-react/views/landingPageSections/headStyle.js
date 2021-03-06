import { title } from "assets/jss/material-kit-react.js";



const productStyle = {
  description: {
    fontSize: "4.2rem",
    fontWeight: "50",
    position: "relative",
    color: "#999"
  },
  section: {
    padding: "30px 0 10px 0",
    textAlign: "center",
    
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  button:{
    backgroundColor:"#222",
    minWidth:"200px"
  },
  link:{
    color:"#fff", 
    fontSize:"14px",
    fontFamily:"Roboto"
  }
  
};

export default productStyle;
