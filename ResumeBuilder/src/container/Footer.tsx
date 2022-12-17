import { symlink } from "fs";
import React from "react";
import Typography from "@mui/material/Typography";
import { Divider,Grid, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import ndca from "../assets/ncda.png";
import cprw from "../assets/cprw.png";
import {NavLink} from 'react-router-dom'
import { Link } from "react-router-dom";
import UsefulLinks from "src/components/UsefulLinks";

const Footer = () => {
  const footerLinks = [
    {
      label:"About",
      to:"/about"
    },
    {
      label:"Accessibility",
      to:"/about"
    },
    {
      label:"Contact",
      to:"/contact"
    },
    {
      label:"Privacy Policy",
      to: "/about"
    },
    {
      label:"Terms of Services",
      to:"/about"
    }
  ];
  return (
    <Box mt={3}>
      <Box display={"flex"} alignItems="center" justifyContent={"space-around"}>
        <Typography
          style={{
            fontSize: 10,
            marginLeft: "5%",
            width: "70%",
          }}
        >
          *The names and logos of the companies referred to above are all
          trademarks of their respective holders. Unless specifically stated
          otherwise, such references are not intended to imply any affiliation
          or association with Zety.
        </Typography>

        <Typography
          sx={{
            marginLeft: "5%",
          }}
        >
          Call Us {" "}
          <Typography
          sx={{
            "&:hover": {
              color: "#3F88FD",
            },
            cursor:"pointer"
          }}
          component="span"
        >
           800-985-7561
        </Typography>
        </Typography>
      </Box>
      
        <UsefulLinks links={footerLinks} />
      
      <Divider style={{borderBottom:"1px solid lightgrey"}} />
      

      <Stack direction={'row'}
             justifyContent='space-between'
             px="5%"
             mt={'2%'}
             pb={2}
             
      
      >
        <Typography>
        © 2022 Works Limited. All Rights Reserved.
        </Typography>
        <Typography>
        <img src={ndca} style={{  width: 50,objectFit:"contain", }} />
        <img src={cprw} style={{marginLeft:15,  width: 40,objectFit:"contain", }} />
        </Typography>

      </Stack>
    </Box>
  );
};

export default Footer;
