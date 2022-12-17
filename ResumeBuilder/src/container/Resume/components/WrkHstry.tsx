import React, { FC } from "react";
import { Box, Grid } from "@mui/material";
import { Typography, Stack } from "@mui/material";
import { map } from "lodash";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import SkilsComp from "./SkilsComp";
import moment from 'moment';

interface IWrkHstry {
  data: workobj[];
  fontSize?: number;
}

type workobj = {
  title: string;
  subtitle: string;
  date: Date;
  city?:string;
  country?:string;
  endingDate: Date | string;
  list: string;
};

const WrkHstry: FC<IWrkHstry> = ({ data, fontSize }) => {
  return (
    <Box sx={{minHeight:150}}>
      {map(data, (item, index) => (
        <div key={index}>
          <Stack direction={"row"} spacing={fontSize ?1: 4} sx={{ mt: 0.5 }}>
            <Box width={fontSize ? 70: 120}>
              <Typography fontSize={fontSize || 15}>
                {moment(item.date).format('MMMM Y')} -
                {typeof item.endingDate === "string"
                  ? item.endingDate
                  : moment(item.endingDate).format('MMMM Y')}
              </Typography>
            </Box>
            <Box>
              <Typography fontSize={fontSize || 18} fontWeight={"bold"}>
                {item.title}
              </Typography>
              <Typography fontSize={fontSize || 15} fontStyle={"italic"} mt={fontSize?0.5: 2}>
                {item.subtitle}, {item.city}
              </Typography>
              <Typography fontSize={fontSize || 15} fontStyle={"italic"} mt={fontSize?0.5: 2}>
                 {item.country}
              </Typography>
              <Typography fontSize={fontSize || 15}  mt={fontSize?0.5: 2}>
                {item.list}
              </Typography>
            </Box>
          </Stack>
        </div>
      ))}
    </Box>
  );
};

export default WrkHstry;
