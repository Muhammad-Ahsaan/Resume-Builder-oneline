import React, { FC } from "react";
import { Box, Grid } from "@mui/material";
import { Typography, Stack } from "@mui/material";
import CVCompo from "../components/CVCompo";
import SkilsComp from "../components/SkilsComp";
import { map } from "lodash";
import Divider from "@mui/material/Divider";
import WrkHstry from "../components/WrkHstry";
import Education from "../components/Education";
import EduCom from "../components/EduCom";
import { skillist } from "../components/data";
import { TCVFormType } from "src/types";

interface ICVImageSMProps {
  form: TCVFormType;
}

const CVImageSM: FC<ICVImageSMProps> = ({ form }) => {
  const wrkHstry = [
    {
      title: form.jobTitle,
      subtitle: form.employer,
      city: form.jobCity,
      country: form.jobCountry,
      list: form.jobDescription,
      date: form.startDate,
      endingDate: form.endDate,
    },
  ];
  const education = [
    {
      schoolName: form.schoolName,
      schoolLocation: form.schoolLocation,
      degreeName:form.degreeName,
      fieldofStudy: form.fieldofStudy,
      educationStartDate: form.educationStartDate,
      educationEndDate: form.educationEndDate,
    },
  ];

  return (
    <Box>
      <Grid container>
        <Grid
          item
          md={4}
          sx={{
            backgroundColor: "#003D73",
            color: "white",
            textAlign: "left",
            pt: 1,
          }}
        >
          <Box sx={{ pl: 1 }}>
            <Typography fontSize={8} fontWeight={"bold"}>
              {form?.firstName} {form.surName}
            </Typography>
          </Box>
          <CVCompo label="Contact" fontSize={7} />
          <Box sx={{ pl: 1 }}>
            <Typography fontSize={5} fontWeight={"bold"} mt={0.5}>
              {form.profession}
            </Typography>
            <Typography fontSize={5}>{form.city}</Typography>
            <Typography fontSize={7} fontWeight={"bold"} mt={1}>
              {form.phone}
            </Typography>
            <Typography fontSize={5}>{form.country}</Typography>
            <Typography
              fontSize={7}
              fontWeight={"bold"}
              mt={1}
              sx={{ type: "email" }}
            >
              {form.postalCode}
            </Typography>
            <Typography fontSize={5} sx={{ type: "number" }}>
              {form.email}
            </Typography>
          </Box>
          <CVCompo label="Skils" fontSize={7} />
          <SkilsComp data={form.skills} fontSize={4} />
        </Grid>
        <Grid item md={8}>
          <Stack px={1} color={"#9B9B9B"}>
            <Typography fontSize={4}>
              Motivated Sales Associate with 5 years of experience boosting
              sales and customer loyalty through individualized service.
              Resourceful expert at learning customer needs, directing to
              desirable merchandise and upselling to meet sales quotas.
              Committed to strengthening customer experiences with positivity
              and professionalism when answering requests and processing sales.
            </Typography>

            <EduCom data="Work History" fontSize={4} />

            <WrkHstry data={wrkHstry} fontSize={5} />
            <EduCom data="Education" fontSize={4} />
            <Education form={education} fontSize={5} />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CVImageSM;
