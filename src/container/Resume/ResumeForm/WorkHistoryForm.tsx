import React, { FC, useState } from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import resume from "../../assets/resume.png";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import UsefulLinks from "src/components/UsefulLinks";
import CVImageSM from "../CVImageContainer/CVImageSM";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import { useNavigate } from "react-router-dom";
import FormHeader from "./components/FormHeader";

interface WorkHistoryFormProps {
    form: any;
    setForm(e: any): void;
}

const WorkHistoryForm: FC<WorkHistoryFormProps> = ({form, setForm}) => {
  return (
    <>
      <Box>
        <FormHeader title="Review or edit this job"
        subtitle="Start with your most recent job and work backward" />
       

            <Box>
              <Grid container spacing={3}>
                <Grid item md={6}>
                  <Typography>Job Title</Typography>
                  <TextField
                    size="small"
                    fullWidth
                    placeholder="e.g Retail Sales Associate"
                    value={form.jobTitle}
                    name="jobTitle"
                    onChange={(e: any) => setForm(e)}
                  />
                </Grid>
                <Grid item md={6}>
                  <Typography>Employer</Typography>
                  <TextField
                    size="small"
                    fullWidth
                    id="demo"
                    placeholder="e.g. H&M"
                    value={form.employer}
                    name="employer"
                    onChange={(e: any) => setForm(e)}
                  />
                </Grid>
                <Grid item md={6}>
                  <Typography>Job City</Typography>
                  <TextField
                    size="small"
                    fullWidth
                    placeholder="e.g Cebu City, Cubu"
                    value={form.jobCity}
                    name="jobCity"
                    onChange={(e: any) => setForm(e)}
                  />
                </Grid>
                <Grid item md={6}>
                  <Typography>Job Country</Typography>
                  <TextField
                    size="small"
                    fullWidth
                    id="demo"
                    placeholder="e.g. Pakistan"
                    value={form.jobCountry}
                    name="jobCountry"
                    onChange={(e: any) => setForm(e)}
                  />
                </Grid>
                <Grid item md={6}>
                  <Typography>Start Date</Typography>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      inputFormat="MM/dd/yyyy"
                      maxDate={new Date()}
                      value={new Date()}
                      onChange={(value: any) => {}}
                      renderInput={(params: any) => (
                        <TextField
                          size="small"
                          color="primary"
                          fullWidth
                          {...params}
                          value={form.startDate}
                          name="startDate"
                          onChange={(e: any) => setForm(e)}

                        />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item md={6}>
                  <Typography>End Date</Typography>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      inputFormat="MM/dd/yyyy"
                      maxDate={new Date()}
                      value={new Date()}
                      onChange={(value: any) => {}}
                      renderInput={(params: any) => (
                        <TextField
                          size="small"
                          color="primary"
                          fullWidth
                          {...params}
                          value={form.endDate}
                          name="endDate"
                          onChange={(e: any) => setForm(e)}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
              </Grid>
            </Box>         
      </Box>
    </>
  );
};

export default WorkHistoryForm;
