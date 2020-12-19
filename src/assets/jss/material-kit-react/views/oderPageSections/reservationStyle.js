import { cardTitle, title } from "assets/jss/material-kit-react.js";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const teamStyle = {
  section: {
    padding: "70px 0 50px 0",
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  ...imagesStyle,
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  cardTitle: {
    fontSize:"2.2rem",
    color: "#fff",
    fontWeight:"400",
    lineHeight:"1.33333",
    fontFamily: "Playfair Display"
  },
  smallTitle: {
    fontSize:"18px",
    color: "#fff",
    fontWeight:"bold",
    fontFamily: "Roboto"
  },
  description: {
    color: "#999"
  },
  justifyCenter: {
    justifyContent: "center !important"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  button:{
    backgroundColor:"#112",
    minWidth:"200px"
  },
  link:{
    color:"#fff", 
    fontSize:"14px",
    fontFamily:"Roboto"
  },
  margin5: {
    margin: "5px"
  },
  input:{
    backgroundColor:"#fff", 
    fontSize:"14px",
    height:"55px", 
    width:"27%",
    border:"1px solid #dce0e3", 
    borderRadius:"5px", 
    marginLeft:"15px"
  },
  textArea:{
    minHeight:"200px",
    width:"53%", 
    fontSize:"14px"
  }
};

export default teamStyle;
