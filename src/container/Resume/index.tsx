import { useState } from "react";
import Appbar from "../Appbar";
import CVImageSM from "./CVImageContainer/CVImageSM";
import BasicInfoForm from "./ResumeForm/BasicInfoForm";
import WorkHistoryForm from "./ResumeForm/WorkHistoryForm";
import JobDescription from "./ResumeForm/JobDescription";
import EducationForm from "./ResumeForm/EducationForm";
import UsefulLinks from "src/components/UsefulLinks";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import Item from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

import { Box, Typography, Button, Stack, Grid } from "@mui/material";
import FormFooter from "./ResumeForm/components/FormFooter";
import { TCVFormType } from "src/types";
import SkillsForm from "./ResumeForm/SkillsForm";

const Resume = () => {
  const navigate = useNavigate();

  const [active, setActive] = useState(1);
  const [form, setForm] = useState<TCVFormType>({
    //BASIC INFO SECTION
    firstName: "",
    surName: "",
    profession: "",
    city: "",
    country: "",
    postalCode: "",
    phone: "",
    email: "",
    //JOB SECTION
    jobTitle: "",
    employer: "",
    jobCity: "",
    jobCountry: "",
    jobDescription: "",
    startDate: new Date(),
    endDate: new Date(),
    //EDUCATION SECTION
    schoolName: "",
    schoolLocation: "",
    degreeName:"",
    fieldofStudy:"",
    educationEndDate:new Date(),
    educationStartDate:new Date(),
    skills: []
  });

  const handleFormValues = (e: any,value?:any) => {
    if(!value){
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }else{
      setForm({
        ...form,
        [e]: value,
      });
    }
  };

  return (
    <div>
      <Appbar />
      <Box sx={{ width: "80%", mx: "auto" }}>
        <Grid
          container
          spacing={7}
          sx={{ mt: 3, fontSize: 12, fontWeight: "bold" }}
        >
          <Grid item md={9}>
            {active === 1 ? (
              <BasicInfoForm form={form} setForm={handleFormValues} />
            ) : active === 2 ?
            <SkillsForm form={form} setForm={handleFormValues} />
            : active === 3 ? (
              <WorkHistoryForm form={form} setForm={handleFormValues} />
            ) : active === 4 ? (
              <JobDescription form={form} setForm={handleFormValues} />
            ) : (
              <EducationForm form={form} setForm={handleFormValues}/>
            )}
          </Grid>
          <Grid item md={3}>
            <Item>
              <CVImageSM form={form} />
              <Typography
                textAlign={"center"}
                color={"#007ACC"}
                fontWeight={"bold"}
              >
                Change Template
              </Typography>
              <Button
                variant="contained"
                onClick={() => navigate("/preview")}
                sx={{
                  fontWeight: "bold",
                  borderRadius: 10,
                  height: 27,
                }}
              >
                <ZoomInIcon />
                preview
              </Button>
            </Item>
          </Grid>
        </Grid>

        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          mt={5}
          fontWeight={"bold"}
        >
          {active > 1 ? (
            <Button
              variant="outlined"
              size="small"
              sx={{ "&:hover": { background: "lightgray" } }}
              onClick={() => setActive((active) => active - 1)}
            >
              Back
            </Button>
          ) : (
            <Box />
          )}
          <Button
            variant="contained"
            size="small"
            onClick={() => setActive((active) => active + 1)}
            sx={{ backgroundColor: "#E44737" }}
          >
            {active <= 3 ? "Next" : "Submit"}
          </Button>
        </Stack>
      </Box>
      <FormFooter />
    </div>
  );
};

export default Resume;
