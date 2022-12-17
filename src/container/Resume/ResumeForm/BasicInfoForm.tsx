import { FC, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import FormHeader from "./components/FormHeader";

interface IBasicInfoFormProps {
  form: any;
  setForm(e: any): void;
}

const BasicInfoForm: FC<IBasicInfoFormProps> = ({ form, setForm }) => {
  return (
    <>
        <FormHeader
          title="What’s the best way for employers to contact you?"
          subtitle="We suggest including an email and phone number"
        />
        <Box>
          <Grid container spacing={3}>
            <Grid item md={6}>
              <Typography>First Name</Typography>
              <TextField
                size="small"
                fullWidth
                id="demo"
                placeholder="e.g.Maria"
                value={form.firstName}
                name="firstName"
                onChange={(e: any) => setForm(e)}
              />
            </Grid>
            <Grid item md={6}>
              <Typography>Surname</Typography>
              <TextField
                size="small"
                fullWidth
                id="demo"
                placeholder="e.g.Dela Cruz"
                value={form.surName}
                name="surName"
                onChange={(e: any) => setForm(e)}
              />
            </Grid>
            <Grid item md={12}>
              <Typography>Profession</Typography>
              <TextField
                size="small"
                fullWidth
                placeholder="e.g. Sr. Accountant"
                value={form.profession}
                name="profession"
                onChange={(e: any) => setForm(e)}
              />
            </Grid>
            <Grid item md={6}>
              <Typography>City/Municipality</Typography>
              <TextField
                id="demo"
                size="small"
                fullWidth
                placeholder="e.g Cebu City, Cebu"
                value={form.city}
                name="city"
                onChange={(e: any) => setForm(e)}
              />
            </Grid>
            <Grid item md={3}>
              <Typography>Country</Typography>
              <TextField
                id="demo"
                size="small"
                fullWidth
                placeholder="e.g Philippines"
                value={form.country}
                name="country"
                onChange={(e: any) => setForm(e)}
              />
            </Grid>
            <Grid item md={3}>
              <Typography>Postal Code</Typography>
              <TextField
                id="demo"
                size="small"
                fullWidth
                placeholder="e.g 6000"
                value={form.postalCode}
                name="postalCode"
                onChange={(e: any) => setForm(e)}
              />
            </Grid>
            <Grid item md={6}>
              <Typography>Phone</Typography>
              <TextField
                id="demo"
                size="small"
                fullWidth
                placeholder="e.g +923018189696"
                value={form.phone}
                name="phone"
                onChange={(e: any) => setForm(e)}
              />
            </Grid>
            <Grid item md={6}>
              <Typography>Email</Typography>
              <TextField
                id="demo"
                size="small"
                fullWidth
                placeholder="e.g. Mdelacruz@sample.ph"
                value={form.email}
                name="email"
                onChange={(e: any) => setForm(e)}
              />
            </Grid>
          </Grid>
        </Box>
        <Stack spacing={2} direction="row">
          <Button variant="text" sx={{ fontWeight: "bold" }}>
            + Add Social Link
          </Button>
        </Stack>
    </>
  );
};

export default BasicInfoForm;
