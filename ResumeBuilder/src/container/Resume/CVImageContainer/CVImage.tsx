import React from "react";
import { Box, Grid } from "@mui/material";
import { Typography, Stack } from "@mui/material";
import CVCompo from "../components/CVCompo";
import SkilsComp from "../components/SkilsComp";
import { map } from "lodash";
import Divider from "@mui/material/Divider";
import WrkHstry from "../components/WrkHstry";
import Education from "../components/Education";
import EduCom from "../components/EduCom";
import {skillist,wrkHstry,education} from '../components/data';

const CVImage = () => {

 
  return (
    <Box>
      <Grid container>
        <Grid
          item
          md={3}
          sx={{ backgroundColor: "#003D73", color: "white", textAlign: "left" }}
        >
          <Typography variant="h4" fontWeight={"bold"} ml={2}>
            Ahsaan Akhtar Pasha
          </Typography>
          <Typography variant="subtitle2" pl={2}>
            Software Developer
          </Typography>
          <CVCompo label="Contact" />

          <Typography variant="subtitle1" ml={2} fontWeight={"bold"} mt={2}>
            Address
          </Typography>
          <Typography variant="subtitle1" ml={2} mt={2}>
            Bahawalnagar Pakistan 12345
          </Typography>
          <Typography variant="subtitle1" ml={2} fontWeight={"bold"} mt={2}>
            Phone
          </Typography>
          <Typography variant="subtitle1" ml={2} mt={2}>
            +92123456789
          </Typography>
          <Typography
            variant="subtitle1"
            ml={2}
            fontWeight={"bold"}
            mt={2}
            sx={{ type: "email" }}
          >
            Email
          </Typography>
          <Typography variant="subtitle1" ml={2} mt={2} sx={{ type: "number" }}>
            a.akhtar@gmail.com
          </Typography>
          <CVCompo label="Skils" />
          <SkilsComp data={skillist} />
        </Grid>
        <Grid item md={9}>
          <Stack fontSize={18} px={5} color={"#9B9B9B"}>
            <Typography>
              Motivated Sales Associate with 5 years of experience boosting
              sales and customer loyalty through individualized service.
              Resourceful expert at learning customer needs, directing to
              desirable merchandise and upselling to meet sales quotas.
              Committed to strengthening customer experiences with positivity
              and professionalism when answering requests and processing sales.
            </Typography>
       
            <Box
              borderTop={"1px solid gray"}
              borderBottom={"1px solid gray"}
              py={1}
              mt={3}
            >
              <Typography fontSize={25} fontWeight={"bold"} color="#003D73">
                Work History
              </Typography>
              
            </Box>
            <WrkHstry data={wrkHstry} />
            <EduCom data="Education" />
            <Education form={education} />
           

            
            
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CVImage;
