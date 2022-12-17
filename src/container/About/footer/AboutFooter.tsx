import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { map } from "lodash";
import { Divider, Grid, Stack } from "@mui/material";
import Item from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ndca from "../../../assets/ncda.png";
import cprw from "../../../assets/cprw.png";
import triangle from "../../../assets/triangle.jpg";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = [
    {
      title: "Resume",
      list: [
        "Resume Builder",
        "Resume Template",
        "Resume Examples",
        "Resume Formate",
        "How to Write Resume",
        "Resume hecker",
        "Resume hecker",
        "Resume help",
        "Best Resume Template",
        "Free Resume Template",
      ],
    },
    {
      title: "CV",
      list: [
        "CV Builder",
        "CV Template",
        "CV Example",
        "CV Format",
        "How to Write CV",
        "CV Help",
      ],
    },
    {
      title: "Cover Letter",
      list: [
        "Cover Letter Builder",
        "Cover Letter Template",
        "Cover Letter Example",
        "Cover Letter Format",
        "How to Write Cover Letter",
        "Cover Letter Help",
      ],
    },
    {
      title: "Support",
      list: [
        "About",
        "Contact",
        "Frequently Asked Question",
        "Accessibility",
        "Privacy Policy",
        "Terms of Services",
        "Cookies & Tracking Policy",
      ],
    },
  ];
  return (
    <Box>
      <Stack
        sx={{
          mt: 10,
          height: 300,
          backgroundSize: "contain",
          backgroundImage: `url(${triangle})`,
        }}
        direction="column"
        justifyContent={"center"}
        alignItems="center"
      >
        <Typography variant="h4" textAlign={"center"} color="white">
          Do you have any questions?
        </Typography>
        <Button
          sx={{
            px: 3,
            py: 1.5,
            mt: 5,
            color: "#3A82F8",
            backgroundColor: "#FFFFFF",
            borderRadius: 7,
            textTransform: "uppercase",
            "&:hover": {
              background: "#B2D1FC",
            },
          }}
        >
          <Typography fontSize={20}>We are Hear to help you Out!</Typography>
        </Button>
      </Stack>
      <Box mt={3}>
        <Box sx={{ mx: "5%" }}>
          <Typography
            sx={{
              fontSize: 10,
              mb:1.5
            }}
          >
            *The names and logos of the companies referred to above are all
            trademarks of their respective holders. Unless specifically stated
            otherwise, such references are not intended to imply any affiliation
            or association with Zety.
          </Typography>
          <Grid container>
            {map(footerLinks, (d, index) => (
              <Grid item md={3} key={index}>
                <ListItem sx={{p:0}}>
                  <Typography fontWeight={"bold"}>{d.title}</Typography>
                </ListItem>
                <List>
                  {map(d.list, (item, idx) => (
                    <ListItem key={idx} sx={{p:0, cursor: "pointer" }}>
                      <Typography fontSize={12} fontWeight="300" sx={{ "&:hover": { color: "#007ACC" } }}>
                        {item}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* <Stack
        spacing={1.5}
        direction="row"
        alignItems="center"
        justifyContent={"center"}
      >
        {footerLinks.map((f) => (
          <Typography
            sx={{
              borderRight: "1.5px solid grey",
              paddingRight: 1,
              fontSize:'14px',
              my:6,
              "&:hover": {
                color: "#3F88FD",
              },
              "&:last-child":{
              borderRight: "none",
              },
              cursor:"pointer"
            }}
          >
            {f==='About'?<Link to='/about'>{f}</Link>:f==='Contact'?<Link to='/contact'>{f}</Link>:f}
          </Typography>
        ))}
      </Stack> */}
        <Divider style={{ borderBottom: "1px solid lightgrey" }} />

        <Stack
          direction={"row"}
          justifyContent="space-between"
          px="5%"
          mt={"2%"}
          pb={2}
        >
          <Typography color={"#676B78"}>
            © 2022 Works Limited. All Rights Reserved.
          </Typography>
          <Typography>
            <img src={ndca} style={{ width: 50, objectFit: "contain" }} />
            <img
              src={cprw}
              style={{ marginLeft: 15, width: 40, objectFit: "contain" }}
            />
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
