import React,{FC} from 'react';
import { Box, Typography, Button, Stack } from "@mui/material";
import UsefulLinks from 'src/components/UsefulLinks';

interface FormFooterProps {
    
}
 
const FormFooter: FC<FormFooterProps> = () => {
    const footerLinks = [
        {
          label: "Accessibility",
          to: "/about",
        },
        {
          label: "Contact",
          to: "/about",
        },
        {
          label: "Privacy Policy",
          to: "/about",
        },
        {
          label: "Terms of Services",
          to: "/about",
        },
      ];
    return ( 
        <>
        <UsefulLinks links={footerLinks} />
        <Box
          sx={{
            backgroundColor: "#43434A",
            p: 2,
            pr: "10%",
          }}
        >
          <Typography
            color={"#888878"}
            textAlign={"right"}
            fontSize={10}
            fontWeight={"bold"}
          >
            © 2022, Works Limited. All rights reserved.
          </Typography>
        </Box>
        </>

     );
}
 
export default FormFooter;