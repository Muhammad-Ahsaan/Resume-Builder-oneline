import React, { FC } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

interface FormProps {
  email: string;
  password: string;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  onClick:()=> void;
}

const Form: FC<FormProps> = ({ email, setEmail, password, setPassword ,onClick}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        "& .MuiTextField-root": { width: "60%" },
      }}
    >
      <Box
        width={"50%"}
        marginX={"auto"}
        textAlign="center"
        border={"solid"}
        borderRadius="0.5rem"
      >
        <h1>Login</h1>

        <TextField
          size="small"
          label={"Enter email"}
          value={email}
          onChange={(e:any)=> setEmail(e.target.value)}
          id="margin-none"
          type={"email"}
        />
        <TextField
          label={"Password"}
          id="margin-dense"
          margin="dense"
          value={password}
          onChange={(e:any)=> setPassword(e.target.value)}
          type={"password"}
        />
        <Button
          size="large"
          variant="contained"
          onClick={onClick}
        >
          Submit Form
        </Button>
      </Box>
    </Box>
  );
};

export default Form;
