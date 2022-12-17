import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Item from "@mui/material/Grid";
import triangle from "../../assets/triangle.jpg";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import banner from "../../assets/banner.png";
import logoone from "../../assets/logoone.png";
import logotwo from "../../assets/logotwo.png";
import logofour from "../../assets/logofour.png";
import forbes from "../../assets/forbes.png";
import lifehacker from "../../assets/lifehacker.png";
import time from "../../assets/time.png";
import Stack from "@mui/material/Stack";

const Caroseul = () => {
  return (
    <div>
      <Grid item md={5}>
        <Item
          sx={{
            mt: 10,
            height: 300,
            backgroundSize: "contain",
            backgroundImage: `url(${triangle})`,
          }}
        >
          <Box
            sx={{
              height: 300,
              fontWeight: "bold",
              m: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h3" textAlign={"center"} color="white">
              About Us
            </Typography>
            <Typography
              variant="subtitle1"
              textAlign={"center"}
              color="white"
              mt={3}
            >
              Zety is a career site fueled by some of the best career experts
              and a community of 40 million readers a year.
            </Typography>
          </Box>
        </Item>
      </Grid>
      <Stack
        direction="row"
        alignItems={"center"}
        spacing={10}
        sx={{
          borderBottom: "1px solid lightgrey",
          py: 3,
          px: "10%",
          "&:hover":{
            color:'#3981F7'
          }
        }}
      >
        <img src={logoone} style={{ width: 100, objectFit: "contain" }} />
        <img src={logotwo} style={{ width: 100, objectFit: "contain" }} />
        <img src={logofour} style={{ width: 100, objectFit: "contain" }} />
        <img src={forbes} style={{ width: 100, objectFit: "contain" }} />
        <img src={lifehacker} style={{ width: 100, objectFit: "contain" }} />
        <img src={time} style={{ width: 100, objectFit: "contain" }} />
      </Stack>
    </div>
  );
};

export default Caroseul;
