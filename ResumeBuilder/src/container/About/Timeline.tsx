import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import {Chrono} from "react-chrono";
import FlagIcon from '@mui/icons-material/Flag';
const Timeline = () => {
  const theme = useTheme();
  const data = [
    {
      title: "05.2014",
      cardTitle: "Official InterviewMe.pl launch.",
    },
    {
      title: "01.2015",
      cardTitle: "Founders quit their jobs, rent the first office, and adopt a dog.",
    },
    {
      title: "01.2016",
      cardTitle: "Xevin Lab/Tar Heel invests $200,000 in InterviewMe.pl. The company moves to a new, bigger office.",
    },
      {
        title: "01.2017",
      cardTitle: "Uptowork.com (now zety.com) is launched.",
      },
      {
        title: "01.2018",
      cardTitle: "Number of team members: 11",
      },
      {
        title: "01.2019",
      cardTitle: "Uptowork.com gets more than 1 million monthly visitors.",
      },
      {
        title: "01.2018",
      cardTitle: "Number of team members:28 We hired and promoted first Team Managers."
      },
      {
        title: "01.2015",
      cardTitle: "Uptowork.com nears 4 million visitors.Our monthly net revenue grows over 5,000% relative to May 2015",
      },
  ];
  return (
    <Box sx={{backgroundColor:'#F1F8FE', pt:1, mt:10}}>
      <Typography variant="h4"  mt={2} mb={10} textAlign='center'>
      Company Timeline
      </Typography>
      {/* Chrono code */}
      <Box width="65%" marginX="auto">
      <Chrono items={data} mode="VERTICAL_ALTERNATING"
      hideControls
      cardHeight={10}
      theme={{
        primary: theme.palette.primary.main,
        secondary: "transparent",
        cardBgColor: 'white',
        cardForeColor: 'black',
        textColor:"green",
        titleColor: theme.palette.primary.main,
        titleColorActive: theme.palette.primary.main,
      }}
      fontSizes={{
        cardTitle:"15px"
      }}
      >
        <div className="chrono-icons">
          <FlagIcon sx={{background:theme.palette.primary.main, color:"white",borderRadius:10,p:0.25}} fontSize="small" />
          <FlagIcon sx={{background:theme.palette.primary.main, color:"white",borderRadius:10,p:0.25}} fontSize="small" />
          <FlagIcon sx={{background:theme.palette.primary.main, color:"white",borderRadius:10,p:0.25}} fontSize="small" />
          <FlagIcon sx={{background:theme.palette.primary.main, color:"white",borderRadius:10,p:0.25}} fontSize="small" />
          <FlagIcon sx={{background:theme.palette.primary.main, color:"white",borderRadius:10,p:0.25}} fontSize="small" />
          <FlagIcon sx={{background:theme.palette.primary.main, color:"white",borderRadius:10,p:0.25}} fontSize="small" />
          <FlagIcon sx={{background:theme.palette.primary.main, color:"white",borderRadius:10,p:0.25}} fontSize="small" />
          <FlagIcon sx={{background:theme.palette.primary.main, color:"white",borderRadius:10,p:0.25}} fontSize="small" />
        </div>
      </Chrono>
    </Box>
    <Box>
    <Box sx={{backgroundColor:'#FFFFFF', mt:'5%', mb:'15%'}}>
      <Typography variant="h4"  textAlign='center' pt={5}>
      How It All Started
      </Typography>
      <Typography textAlign='center' marginX={35} mt={5} >
      Zety is the brainchild of three like-minded friends who set out on a mission to change the HR landscape forever.
      </Typography>
      <Typography textAlign='center' marginX={35} mt={5} color={'#676B78'}>
      Now, 100+ people strong, Zety started out as a local startup co-founded by three friends. With Kuba's passion and vision, Pete's expertise in HR, and Kacper's coding mastery, the company grew to become an international brand.
      </Typography>
    </Box>
    </Box>
    </Box>
  );
};

export default Timeline;
