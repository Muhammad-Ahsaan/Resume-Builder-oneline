import React, { FC } from "react";
import { Box, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { map } from "lodash";

interface ICVCompo {
  label: string;
  fontSize?: number;
}

const CVCompo: FC<ICVCompo> = ({ label, fontSize }) => {
  return (
    <Typography
      fontSize={fontSize || 15}
      pl={fontSize ? 1 : 2}
      py={fontSize ? 0.25 : 1}
      fontWeight={"bold"}
      mt={fontSize ? 1 : 3}
      sx={{ backgroundColor: "#00315C" }}
    >
      {" "}
      {label}
    </Typography>
  );
};

export default CVCompo;
