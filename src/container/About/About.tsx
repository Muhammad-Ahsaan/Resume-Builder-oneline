import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import NavigationIcon from "@mui/icons-material/Navigation";
import { ButtonGroup, Fab, FormControlLabel } from "@mui/material";
import { useTheme, Button, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import zte from "../../assets/zte.png";
import Popover from "@mui/material/Popover";

import triangle from "../../assets/triangle.jpg";
import logoone from "../../assets/logoone.png";
import logotwo from "../../assets/logotwo.png";
import logofour from "../../assets/logofour.png";
import forbes from "../../assets/forbes.png";
import lifehacker from "../../assets/lifehacker.png";
import time from "../../assets/time.png";
import Stack from "@mui/material/Stack";
import Caroseul from "./Caroseul";
import CetnralDiv from "./CetnralDiv";
import Timeline from "./Timeline";
import Appbar from "../Appbar";
import CardContainer from "./components/CardContainer";
import Newcard from "./Newcard";
import RatingcardCompo from "./Propscompo/RatingcardCompo";
import FAQ from "./FAQ/FAQ";
import AboutFooter from "./footer/AboutFooter";

const About = () => {
 
  return (
    <Box>
    <Appbar hasLinks />
    <Caroseul/>
    <CetnralDiv/>
    <Timeline />
    <CardContainer />
    <Newcard />
    <RatingcardCompo />
    <FAQ />
    <AboutFooter />
    </Box>
  );
};

export default About;
