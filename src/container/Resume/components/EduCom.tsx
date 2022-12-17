import React, { FC } from "react";
import { Box, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { map } from "lodash";

interface IEducom {
  data: string;
  fontSize?:number;
}

const EduCom: FC<IEducom> = ({ data,fontSize }) => {
  return (
    
      <Box
        borderTop={"1px solid gray"}
        borderBottom={"1px solid gray"}
        py={fontSize?0.25:1}
        mt={fontSize?1: 3}
      >
        <Typography fontSize={fontSize || 25} fontWeight={"bold"} color="#003D73">
          {data}
        </Typography>
      </Box>
    
  );
};

export default EduCom;
