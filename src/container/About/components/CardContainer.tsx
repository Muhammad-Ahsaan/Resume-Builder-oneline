import { FC } from "react";
import Card from "./Card";
import triangle from "../../../assets/triangle.jpg";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import { map } from 'lodash';
interface CardContainerProps {}

const CardContainer: FC<CardContainerProps> = () => {
  const cardItems = [
    {
      title: "FINANCIAL TIME",
      image: triangle,
      description: `Gig economy looks for flexibility on rules.`,
    },
    {
      title: "Forbes",
      image: triangle,
      description: `The leap of Faith: from startup Founder To CEO.`,
    },
    {
      title: "IHUFFPOSTI",
      image: triangle,
      description: `Chosing the Right Resume Format Really Matters. Chosing the Right Resume Format Really MattersChosing the Right Resume Format Really MattersChosing the Right Resume Format Really MattersChosing the Right Resume Format Really MattersChosing the Right Resume Format Really Matters`,
    },
    {
        title: "IHUFFPOSTI",
        image: triangle,
        description: `Chosing the Right Resume Format Really Matters. Chosing the Right Resume Format Really MattersChosing the Right Resume Format Really MattersChosing the Right Resume Format Really MattersChosing the Right Resume Format Really MattersChosing the Right Resume Format Really Matters`,
      },
       {
      title: "IHUFFPOSTI",
      image: triangle,
      description: `Chosing the Right Resume Format Really Matters. Chosing the Right Resume Format Really MattersChosing the Right Resume Format Really MattersChosing the Right Resume Format Really MattersChosing the Right Resume Format Really MattersChosing the Right Resume Format Really Matters`,
    },
    {
      title: "IHUFFPOSTI",
      image: triangle,
      description: `Chosing the Right Resume Format Really Matters. Chosing the Right Resume Format Really MattersChosing the Right Resume Format Really MattersChosing the Right Resume Format Really MattersChosing the Right Resume Format Really MattersChosing the Right Resume Format Really Matters`,
    },
  ];

  return (
    <Box sx={{ mx: "5%", mb: 10 }}>
      <Grid container spacing={2}>
        {map(cardItems,(item, index) => (
          <Grid item md={4} sm={6}>
            <Card {...item} key={index} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardContainer;
