import React, {FC} from 'react';
import { Box, Grid } from "@mui/material";
import { Typography, Stack } from "@mui/material";
import { map } from "lodash";
import { title } from 'process';
import { EducationInfoType } from 'src/types';
import { convertFormValue } from 'src/utils';
import { degreeData } from 'src/utils/constants';

interface IEducation {
    form: EducationInfoType[];
    fontSize?:number;
}


const Education:FC<IEducation> = ({form,fontSize}) => {
  return (
    <div>
        {map(form, (item, index) =>(
            <div key={index}>
               <Stack direction={"row"} sx={{mt:fontSize?0.5: 2}} spacing={fontSize ? 0.5: 4}>
               <Box width={120}></Box>
               <Box>
               <Typography fontSize={fontSize || 18} fontWeight={"bold"}>
               {convertFormValue(degreeData, item.degreeName)} - {item.fieldofStudy}
               </Typography>
               <Typography fontSize={fontSize || 15} fontStyle={"italic"} mt={fontSize?0.5: 2}>
               {item.schoolName} - {item.schoolLocation}
               </Typography>
    
               </Box>
               </Stack>

            </div>
        ))}
      
    </div>
  );
};

export default Education;
