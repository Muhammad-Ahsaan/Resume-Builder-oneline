import React, {FC} from 'react';
import {Typography} from '@mui/material';

interface IFormHeader{
    title:string;
    subtitle?:string;
}

const FormHeader: FC<IFormHeader> = ({title,subtitle}) => {

  return (
    <div>
        
        <Typography variant="h5" fontWeight={"light"} color={"#007ACC"}>
         {title}
        </Typography>
        <Typography fontSize={13} color={"#666666"} mt={2}>
          {subtitle}
        </Typography>
        
    </div>
  );
};

export default FormHeader;