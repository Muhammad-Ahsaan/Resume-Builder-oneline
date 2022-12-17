import React from 'react';
import banner from "../assets/banner.png";
import logoone from "../assets/logoone.png";
import logotwo from "../assets/logotwo.png";
import logofour from "../assets/logofour.png";
import forbes from "../assets/forbes.png";
import lifehacker from "../assets/lifehacker.png";
import time from "../assets/time.png";


import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const Logo = () => {
  return (
    <>
        
        <Stack direction="row" alignItems={"center"} spacing={10} sx={{mt:15,
          borderTop:"1px solid lightgrey",
          borderBottom:"1px solid lightgrey",
py:3,
             px:"10%"}}>
        <img src={logoone} style={{  width: 100,objectFit:"contain", }} />
        <img src={logotwo} style={{  width: 100,objectFit:"contain", }} />
        <img src={logofour} style={{  width: 100,objectFit:"contain", }} />
        <img src={forbes} style={{  width: 100,objectFit:"contain", }} />
        <img src={lifehacker} style={{ width: 100,objectFit:"contain", }} />
        <img src={time} style={{  width: 100,objectFit:"contain", }} />
        </Stack>
        

    
      </>
  );
};

export default Logo;
