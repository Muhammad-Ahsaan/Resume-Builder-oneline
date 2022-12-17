import { FC } from "react";
import { Box } from "@mui/system";
import { Grid, Stack, Typography } from "@mui/material";
import { map } from "lodash";
import StarIcon from "@mui/icons-material/Star";

import RatingCard from "./RatingCard";
interface RatingcardCompoProps {}

const RatingcardCompo: FC<RatingcardCompoProps> = () => {
  const leftSide = {
    title: "Great",
    ratingstar: 5,
    description: "Based on 3,688 reviews",
  };
  const cardItems = [
    {
      ratingstar: 5,
      title: "Zety’s editorial team is led by senior.",
      description: `The cancel subscription button doesn't work.I communicated with them via email and the problem has been resolved with high response.
      I had a very good experience for making resumes and cover latter it’s really helpful.`,
      name: "chrolina camera",
      date: new Date(),
    },
    {
      ratingstar: 4,
      title: "We are committed to helping you",
      description: `I was about to subscribe to your services after doing the trial period which eventually landed me a job a year and half ago. Now I'm in market again to look for a job and came back but to your website to subscribe,but seems bit wonky for Canadian market it still asks for ZIP CODE instead of POSTAL CODE that's why I couldn't proceed with the payment as it failed validation which was GOOD I think after looking at the reviews here. Now I will not buy anything from you.`,
      name: "chrolina",
      date: new Date(),
    },
    {
      ratingstar: 0,
      title: "Zety aims to make applying for a job",
      description: `Built a resume in about an hour
      Very easy to use. Submitted resume to several companies.
      Within 5 days had 2 interviews.
      Two days later I got hired.
      I will definitely be letting my friends know about this service`,
      name: "jhon",
      date: new Date(),
    },
  ];
  return (
    <Box
      sx={{
        mx: "5%",
        mb: 10,
        mt:10
      }}
    >
      <Grid container spacing={2}>
        <Grid item md={3} sm={6}>
          <RatingCard {...leftSide} />
        </Grid>
        {map(cardItems, (item, index) => (
          <Grid item md={3} sm={6}>
            <RatingCard {...item} key={index} />
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={2}>
        <Grid item md={3}>
          <Stack
            sx={{ mt: 1 }}
            direction="row"
            justifyContent={"center"}
            alignItems={"flex-end"}
          >
            <StarIcon
              sx={{
                fontSize: 30,
                 color: "#00B67A",
              }}
            />
            <Typography
              fontSize={15}
              fontWeight="bold"
              textTransform={"capitalize"}
            >
              TrustPilot
            </Typography>
          </Stack>
        </Grid>
        <Grid item md={9}>
        <Typography
              fontSize={13}
              sx={{mt:2}}
            >
              Showing our 4 & 5 star reviews
            </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RatingcardCompo;
