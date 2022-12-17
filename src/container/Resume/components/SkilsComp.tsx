import React, { FC } from "react";
import { Box, Grid } from "@mui/material";
import { Typography, Stack } from "@mui/material";
import { map } from "lodash";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { SkillFormAttributes } from "src/types";

interface ISkilComp {
  data: any ;
  fontSize?:number
}

const SkilsComp: FC<ISkilComp> = ({ data,fontSize }) => {
  return (
    <>
      {map(data, (item, index) => (
        <div key={index}>
            <Stack direction={'row'} sx={{ml:1, mt:fontSize?0.5: 2, color:"#9B9B9B"}} alignItems={'baseline'} >
            <FiberManualRecordIcon sx={{ fontSize:fontSize?4: 7 }} />
          
          <Typography fontSize={fontSize|| 15} ml={fontSize?0.5: 2} color="#9B9B9B">
            {item?.label}
          </Typography>
          </Stack>
        </div>
      ))}
    </>
  );
};

export default SkilsComp;
