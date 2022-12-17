import React, { useState } from "react";
import Appbar from "./Appbar";
import Cards from "./Cards";
import ChangLife from "./ChangLife";
import Dreem from "./Dreem";
import Footer from "./Footer";
import Header from "./Header";
import Logo from "./Logo";
import Box from "@mui/material/Box";
import BackImage from "../assets/right.png";
function Refimport() {

 
  return (
      <Box
        sx={{
          height: 700,
          backgroundImage: `url(${BackImage})`,
          backgroundPosition: "right",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Appbar hasAbout />
        <Header />
        <Logo />
        <Cards />
        <ChangLife />
        <Dreem />
        <Footer />
      </Box>
  );
}

export default Refimport;
