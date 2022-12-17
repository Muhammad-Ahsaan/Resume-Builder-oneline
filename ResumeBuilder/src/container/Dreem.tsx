import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Item from "@mui/material/Grid";
import triangle from "../assets/triangle.jpg";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Dreem = () => {
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
          <Box sx={{
            height:300,
            fontWeight: 'bold',
            m:1,
            display:'flex',
            flexDirection:'column',
            alignItems:"center",
            justifyContent:'center',
          }}>
          <Typography variant="h5" textAlign={"center"} color='white' >
            Try zety's professional CV builder now
          </Typography>
          <Button 
          sx={{
            px:3, 
            py:1.5,
            mt:5,
            color:'#3A82F8',
            backgroundColor:'#FFFFFF',
            borderRadius:7,
            textTransform:'uppercase',
            "&:hover":{
                background:"#B2D1FC"
            }
          }}
          >
            <Typography fontWeight={10}>Land Your Dreem Job Now</Typography>
          </Button>
          </Box>
        </Item>
      </Grid>
    </div>
  );
};

export default Dreem;
