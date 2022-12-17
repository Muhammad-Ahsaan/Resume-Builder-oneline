import React, { FC } from "react";
import Box from "@mui/material/Box";
import MUICard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { truncate } from "lodash";

interface ICardProps {
  title: string;
  image: string;
  description: string;
}

const Card: FC<ICardProps> = ({ title, image, description }) => {
  return (
    <Box>
      <MUICard sx={{ maxWidth: 345, maxHeight: 250 }}>
        <CardActionArea>
          <Box position={"relative"}>
            <CardMedia
              component="img"
              height="140"
              image={image}
              alt="green iguana"
            />
          </Box>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                position: "absolute",
                top: "25%",
                left: "25%",
                fontFamily: "sans-serif",
                color: "white",
              }}
            >
              {title}
            </Typography>
            <Typography variant="body1" color="#838FA0" mb={"25%"}>
              {truncate(description, { length: 120 })}
            </Typography>
          </CardContent>
        </CardActionArea>
      </MUICard>
    </Box>
  );
};

export default Card;
