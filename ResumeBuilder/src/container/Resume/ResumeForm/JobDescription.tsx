import React, { FC } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import FormHeader from "./components/FormHeader";
import { TCVFormType } from "src/types";

interface JobDescriptionProps {
  form: TCVFormType;
  setForm(e: any): void;
}

const JobDescription: FC<JobDescriptionProps> = ({ form, setForm }) => {
  return (
    <>
      <FormHeader title="Nice! Now let's add the job description" />
      <Typography>
        <TextField
          fullWidth
          rows={6}
          maxRows={8}
          multiline
          value={form.jobDescription}
          name="jobDescription"
          onChange={(e: any) => setForm(e)}
          inputProps={{ maxLength: 300 }}
        />
      </Typography>
    </>
  );
};

export default JobDescription;
