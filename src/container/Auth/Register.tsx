import React, { FC } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
interface FormProps {
  name: string;
  setname: (value: string) => void;
  email: string;
  gender: string;
  setgender: (value: string) => void;
  password: string;
  confirmPassword:string;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  setconfirmPassword: (value: string) => void;
  onClick: () => void;
}

const Register: FC<FormProps> = ({
  name,
  setname,
  email,
  gender,
  setgender,
  password,
  setEmail,
  setPassword,
  confirmPassword,
  setconfirmPassword,
  onClick,
}) => {
  const Gender = [
    {
      value: 1,
      label: 'Male',
    },
    {
      value: 0,
      label: 'Female',
    },
    {
      value: 2,
      label: 'Shemale',
    },
    
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        "& .MuiTextField-root": { width: "60%" },
        marginTop: 10,
      }}
    >
      <Box
        width={"50%"}
        marginX={"auto"}
        textAlign={"center"}
        border={"solid"}
        borderRadius={"0.5rem"}
      >
        <h1 style={{ color: "red" }}>New Login</h1>
        <Grid container marginTop={3}>
          <Grid item md={12}>
            <TextField 
             label={"Enter Name"}
             margin={"dense"}
             value={name}
             onChange={(e: any) => setname(e.target.value)}
             
             
             />
          </Grid>
          <Grid item md={12}>
            <TextField
              label={"Enter Email"}
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
              id="margin-none"
              type={"email"}
              margin={"dense"}
            />
          </Grid>
          <Grid item md={12}>
              <TextField 
              label={"Gender"}
              value={gender}
              select
          
              onChange={(e: any) => setgender (e.target.value)}
              >
                {Gender.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              <Typography>
              {option.label}
              </Typography>
             
            </MenuItem>
          ))}
              </TextField>
          </Grid>
          <Grid item md={12}>
            <TextField
              id="margin-dense"
              margin="dense"
              label={"Password"}
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
              type={"password"}
            />
          </Grid>
          <Grid item md={12}>
            <TextField
              id="margin-dense"
              margin="dense"
              label={"confirmpassword"}
              value={confirmPassword}
              onChange={(e: any) => setconfirmPassword(e.target.value)}
              type={"password"}
            />
          </Grid>

          <Grid item md={12}>
            <Button
              size="large"
              variant="contained"
              onClick={onClick}
              sx={{ my: 2 }}
            >
              Submit Form
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Register;
