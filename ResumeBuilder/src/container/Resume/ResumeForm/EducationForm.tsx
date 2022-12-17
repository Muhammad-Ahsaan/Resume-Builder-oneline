import React, { FC } from "react";
import FormHeader from "./components/FormHeader";
import Box from "@mui/material/Box";
import { Grid, MenuItem } from "@mui/material";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { find, map } from "lodash";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { TCVFormType } from "src/types";
import { degreeData } from "src/utils/constants";

interface EducationFormProps {
  form: TCVFormType;
  setForm(e: any): void;
}

const EducationForm: FC<EducationFormProps> = ({ form, setForm }) => {
  return (
    <>
      <FormHeader
        title="Tell us about your education"
        subtitle="Include every school, even if you're still there or didn't graduate."
      />
      <Grid container spacing={3} sx={{ mt: 1 }}>
        <Grid item md={6}>
          <Typography>School Name</Typography>
          <TextField
            size="small"
            fullWidth
            id="demo"
            placeholder="e.g. University of San Carlos"
            value={form.schoolName}
            name="schoolName"
            onChange={(e: any) => setForm(e)}
          />
        </Grid>
        <Grid item md={6}>
          <Typography>School Location</Typography>
          <TextField
            size="small"
            fullWidth
            id="demo"
            placeholder="e.g. Cebu City, Cebu Pakistan"
            value={form.schoolLocation}
            name="schoolLocation"
            onChange={(e: any) => setForm(e)}
          />
        </Grid>
        <Grid item md={6} sx={{ mb: 2 }}>
          <Typography>Degree</Typography>
          <TextField
            select
            fullWidth
            size="small"
            name="degreeName"
            value={form.degreeName}
            onChange={(e) => setForm(e)}
          >
            <MenuItem disabled selected>
              Select Degree
            </MenuItem>
            {map(degreeData, (option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item md={6}>
          <Typography>Field of Study</Typography>
          <TextField
            size="small"
            fullWidth
            id="demo"
            placeholder="e.g. Accounting Technology"
            value={form.fieldofStudy}
            name="fieldofStudy"
            onChange={(e: any) => setForm(e)}
          />
        </Grid>
        <Grid item md={3}>
          <Typography>Graduation Start Date</Typography>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              inputFormat="MM/dd/yyyy"
              maxDate={new Date()}
              value={new Date()}
              onChange={(value: any) => {}}
              renderInput={(params: any) => (
                <TextField size="small" color="primary" fullWidth {...params} />
              )}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item md={3}>
          <Typography>Graduation End Date</Typography>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              inputFormat="MM/dd/yyyy"
              maxDate={new Date()}
              value={new Date()}
              onChange={(value: any) => {}}
              renderInput={(params: any) => (
                <TextField size="small" color="primary" fullWidth {...params} />
              )}
            />
          </LocalizationProvider>
        </Grid>
      </Grid>
    </>
  );
};

export default EducationForm;
