import React, { FC } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Rating } from "@mui/material";
import StarsIcon from "@mui/icons-material/Stars";
import { isNumber, truncate } from "lodash";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { Stack } from "@mui/system";

interface RatingCardProps {
  ratingstar: number;
  title: string;
  description: string;
  name?: string;
  date?: Date;
}
const RatingCard: FC<RatingCardProps> = ({
  ratingstar,
  title,
  description,
  name,
  date,
}) => {
  return (
    <Box sx={{ minWidth: "33%" }}>
      {!date && (
        <Typography fontSize={24} sx={{mt:-1,mb:1}} textAlign="center">
          {title}
        </Typography>
      )}
      <Rating
        sx={{
          display: "flex",
          justifyContent: date ? "flex-start" : "center",
          alignItems: "center",
        }}
        name="half-rating-read"
        defaultValue={ratingstar}
        precision={1}
        icon={
          <StarIcon
            sx={{
              background: date ? "#00B67A" : "#73CF11",
              fontSize: !date ? 25 : 11,
              mr: 0.35,
              color: "white",
              p: 0.25,
            }}
          />
        }
        emptyIcon={
          <StarIcon
            sx={{
              background: "gray" ,
              fontSize: 11,
              mr: 0.35,
              color: "white",
              p: 0.25,
            }}
          />
        }
        readOnly
      />
      {date && (
        <Typography fontSize={14} fontWeight="bold">
          {title}
        </Typography>
      )}
      <Typography
        fontSize={13}
        sx={{ mt: !date ? 1.25 : 0 }}
        textAlign={date ? "left" : "center"}
      >
        {truncate(description, { length: 90 })}
      </Typography>
     
      {date && (
        <Stack direction="row" alignItems="center">
          <Typography
            fontSize={14}
            fontWeight="bold"
            textTransform={"capitalize"}
          >
            {name},{" "}
          </Typography>
          <Typography fontSize={11}>{date.toLocaleDateString()}</Typography>
        </Stack>
      )}
    </Box>
  );
};

export default RatingCard;
