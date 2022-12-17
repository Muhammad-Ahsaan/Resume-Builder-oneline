import React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import Box from "@mui/material/Box";
import checkcv from "../assets/checkcv.png";

const ChangLife = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", padding: 70, marginTop: 60 }}>
        Change Your CV. Change your life.
      </h1>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid
            item
            md={6}
            sx={{ mt: 5, }}
            justifyContent="center"
            alignItems="center"
            alignSelf={"center"}
          >
            <Item>
              <img src={checkcv} style={{ height:200, width: 200, marginLeft:200}} />
            </Item>
          </Grid>
          <Grid item md={5}>
            <Item>
              <Typography sx={{ color: "#C9CBCF", padding: 5 }}>
                Zety CV builder. Not just an app. More like a personal career
                expert.
              </Typography>
              <Typography sx={{ color: "#C9CBCF", padding: 5 }}>
                Your CV is underwhelming and you deserve better. Get that fresh
                look with our CV templates. Click on ready-to-use expert
                suggestions to build your CV in minutes. Blow away recruiters
                with sleek designs. Let employers see your true self—the best
                candidate for the job.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  px: 3,
                  py: 1.5,
                  marginLeft: 10,
                  backgroundColor: "#e44747",
                  borderColor: "#e44747",
                  borderRadius: 7,
                  textTransform: "uppercase",
                }}
              >
                <Typography fontSize={17}>Create your cv now </Typography>
              </Button>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default ChangLife;
