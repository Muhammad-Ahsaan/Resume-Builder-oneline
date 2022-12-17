import React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import right from "../src/assets/right.png";
import Typography from "@mui/material/Typography";
import { Button, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import Box from "@mui/material/Box";
import banner from "../assets/banner.png";
import { NavLink, useNavigate } from "react-router-dom";

function DirectionStack() {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item md={6}>
            <Item>
              <Typography fontSize={25} color="primary" sx={{ marginLeft: 10 }}>
                Fast. Easy. Effective.
              </Typography>
              <Typography
                color="secondary"
                fontSize={55}
                sx={{ marginLeft: 10 }}
              >
                Zety. The Best CV Maker Online.
              </Typography>
              <Typography sx={{ marginLeft: 4, color: "#C9CBCF", padding: 6 }}>
                If a sheet of paper represents your entire work life,
                personality, and skills, it better be a pretty amazing piece of
                paper— Let Zety do the heavy lifting.
              </Typography>
              <Button
                variant="contained"
                onClick={()=>navigate('/resume')}
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
                  "&:hover": {
                    // background:theme.palette.primary.dark
                    background: "#e44747",
                  },
                }}
              >
                <Typography fontSize={17}>Create your cv now </Typography>
              </Button>
            </Item>
          </Grid>
          <Grid item md={5}>
            <Item>
              <img src={banner} width="100%" />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
export default DirectionStack;
