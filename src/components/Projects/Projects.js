import {
  Box,
  Container,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";
import webOne from "../../img/webOne.png";
import webThree from "../../img/resto.png";
import webTwo from "../../img/movie.png";
import webFour from "../../img/blog.png";
import webFive from "../../img/shop.png";
import webSix from "../../img/lava.png";
import webSeven from "../../img/town.png";
import webEight from "../../img/school.png";
import webNine from "../../img/kitchen.png";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    padding: 0,
  },
  projects: {
    height: "auto",
    padding: "100px 0",
    backgroundColor: "#f5f5f5",
  },
  title: {
    color: "#444649",
    textTransform: "uppercase",
    fontFamily: "Raleway",
    fontSize: 40,
    fontWeight: "bold",
  },
  center: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  underline: {
    width: "80px",
    height: 4,
    backgroundColor: "#444649",
  },
  tabs: {
    marginTop: 100,
    width: 1200,
  },
  webImg: {
    width: "390px",
    height: "300px",
    transition: "all 0.3s  ease-in",
  },
  webBack: {
    transition: "all 0.3s  ease-in",
  },
  gridCont: {
    marginTop: 50,
    animation: `$myEffectUp 1000ms ${theme.transitions.easing.easeInOut}`,
  },
  gridItem: {
    width: 390,
    height: 300,
    animation: `$myEffectExit 1000ms ${theme.transitions.easing.easeInOut}`,
    transition: "all 0.3s  ease-in",
    "&:hover": {
      cursor: "pointer",
      "& $webBack": {
        width: "100%",
        height: "100%",
        backgroundColor: "green",
      },
      "& $webImg": {
        display: "none",
      },
    },
  },
  "@keyframes myEffectExit": {
    "0%": {
      opacity: 0,
      transform: "scale(0)",
    },
    "100%": {
      opacity: 1,
      transform: "scale(1)",
    },
  },
  "@keyframes myEffectUp": {
    "0%": {
      opacity: 0,
      transform: "translateY(20%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
}));
export const Projects = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  console.log(value);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className={classes.projects} id="projects">
      <Container className={classes.bigCont}>
        {/* Title */}
        <Typography align="center" className={classes.title}>
          Projects
        </Typography>
        <Box className={classes.center}>
          <div className={classes.underline} />
        </Box>
        <Box className={classes.center}>
          <Box className={classes.tabs}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="fullWidth"
              textColor="secondary"
              scrollButtons="auto"
            >
              <Tab label="ALL" {...a11yProps(0)} />
              <Tab label="REACT-JS" {...a11yProps(1)} />
              <Tab label="JAVASCRIPT" {...a11yProps(2)} />
            </Tabs>

            <TabPanel value={value} index={0}>
              <Grid container className={classes.gridCont}>
                <Grid item className={classes.gridItem}>
                  <Box className={classes.webBack}>
                    <img src={webOne} alt="crypto" className={classes.webImg} />
                  </Box>
                </Grid>
                <Grid item className={classes.gridItem}>
                  <Box className={classes.webBack}>
                    <img
                      src={webTwo}
                      alt="restoraunt"
                      className={classes.webImg}
                    />
                  </Box>
                </Grid>
                <Grid item className={classes.gridItem}>
                  <Box className={classes.webBack}>
                    <img
                      src={webThree}
                      alt="crypto"
                      className={classes.webImg}
                    />
                  </Box>
                </Grid>
                <Grid item className={classes.gridItem}>
                  <Box className={classes.webBack}>
                    <img
                      src={webFour}
                      alt="crypto"
                      className={classes.webImg}
                    />
                  </Box>
                </Grid>
                <Grid item className={classes.gridItem}>
                  <Box className={classes.webBack}>
                    <img src={webSix} alt="crypto" className={classes.webImg} />
                  </Box>
                </Grid>
                <Grid item className={classes.gridItem}>
                  <Box className={classes.webBack}>
                    <img
                      src={webFive}
                      alt="crypto"
                      className={classes.webImg}
                    />
                  </Box>
                </Grid>
                <Grid item className={classes.gridItem}>
                  <Box className={classes.webBack}>
                    <img
                      src={webSeven}
                      alt="crypto"
                      className={classes.webImg}
                    />
                  </Box>
                </Grid>
                <Grid item className={classes.gridItem}>
                  <Box className={classes.webBack}>
                    <img
                      src={webEight}
                      alt="crypto"
                      className={classes.webImg}
                    />
                  </Box>
                </Grid>
                <Grid item className={classes.gridItem}>
                  <Box className={classes.webBack}>
                    <img
                      src={webNine}
                      alt="crypto"
                      className={classes.webImg}
                    />
                  </Box>
                </Grid>
              </Grid>
            </TabPanel>

            <TabPanel value={value} index={1}>
              <Grid container className={classes.gridCont}>
                <Grid item className={classes.gridItem}>
                  <Box className={classes.webBack}>
                    <img src={webOne} alt="crypto" className={classes.webImg} />
                  </Box>
                </Grid>
                <Grid item className={classes.gridItem}>
                  <Box className={classes.webBack}>
                    <img
                      src={webTwo}
                      alt="restoraunt"
                      className={classes.webImg}
                    />
                  </Box>
                </Grid>
                <Grid item className={classes.gridItem}>
                  <Box className={classes.webBack}>
                    <img
                      src={webThree}
                      alt="crypto"
                      className={classes.webImg}
                    />
                  </Box>
                </Grid>
                <Grid item className={classes.gridItem}>
                  <Box className={classes.webBack}>
                    <img
                      src={webFour}
                      alt="crypto"
                      className={classes.webImg}
                    />
                  </Box>
                </Grid>
                <Grid item className={classes.gridItem}>
                  <Box className={classes.webBack}>
                    <img src={webSix} alt="crypto" className={classes.webImg} />
                  </Box>
                </Grid>
                <Grid item className={classes.gridItem}>
                  <Box className={classes.webBack}>
                    <img
                      src={webFive}
                      alt="crypto"
                      className={classes.webImg}
                    />
                  </Box>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Grid container className={classes.gridCont}>
                <Grid item className={classes.gridItem}>
                  <Box className={classes.webBack}>
                    <img
                      src={webFive}
                      alt="crypto"
                      className={classes.webImg}
                    />
                  </Box>
                </Grid>
                <Grid item className={classes.gridItem}>
                  <Box className={classes.webBack}>
                    <img
                      src={webSeven}
                      alt="crypto"
                      className={classes.webImg}
                    />
                  </Box>
                </Grid>
                <Grid item className={classes.gridItem}>
                  <Box className={classes.webBack}>
                    <img
                      src={webEight}
                      alt="crypto"
                      className={classes.webImg}
                    />
                  </Box>
                </Grid>
                <Grid item className={classes.gridItem}>
                  <Box className={classes.webBack}>
                    <img
                      src={webNine}
                      alt="crypto"
                      className={classes.webImg}
                    />
                  </Box>
                </Grid>
              </Grid>
            </TabPanel>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default Projects;
