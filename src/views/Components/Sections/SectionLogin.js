import React from "react";
// @material-ui/core components
import { makeStyles, Container, Grid, CardActionArea, CardMedia, CardContent, Typography, Button, CardActions } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import People from "@material-ui/icons/People";
import Email from "@material-ui/icons/Email";
import nhahang1 from "../../../assets/img/nhahang1.jpg";


import styles from "assets/jss/material-kit-react/views/componentsSections/loginStyle.js";

const useStyles = makeStyles(styles);

export default function SectionLogin() {
    const classes = useStyles();
    return (
        <Container>
            <div className={classes.top}>
                <Typography gutterBottom variant="h4" component="h1" align="center">
                    3 COURSE DINNER
                </Typography>
                <Typography gutterBottom variant="body2" color="textSecondary" align="center">
                    Paragraph Text. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                </Typography>

            </div>
            <Grid container xs={12} spacing={2}>
                <Grid item xs={4}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={require("assets/img/nhahang1.jpg")}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" align="center">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" align="center">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>

                </Grid>
                <Grid item xs={4}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={require("assets/img/nhahang2.jpg")}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" align="center">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" align="center">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>

                </Grid>

                <Grid item xs={4}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={require("assets/img/nhahang3.jpg")}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" align="center">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" align="center">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>

                </Grid>
            </Grid>
        </Container>
    );
}
