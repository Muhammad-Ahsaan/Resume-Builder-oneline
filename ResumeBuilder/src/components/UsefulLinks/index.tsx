import React, { FC } from "react";
import { Typography, Stack } from "@mui/material";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { map } from "lodash";

interface UsefulLinksProps {
  links: LinkType[];
}

type LinkType = {
  label: string;
  to: string;
};

const UsefulLinks: FC<UsefulLinksProps> = ({ links }) => {
  const navigate = useNavigate();
  return (
    <Stack
      spacing={1.5}
      direction="row"
      alignItems="center"
      justifyContent={"center"}
    >
      {map(links, (f) => (
        <Typography
          onClick={() => navigate(f.to)}
          sx={{
            borderRight: "1.5px solid grey",
            paddingRight: 1,
            fontSize: "14px",
            my: 6,
            "&:hover": {
              color: "#3F88FD",
            },
            "&:last-child": {
              borderRight: "none",
            },
            cursor: "pointer",
          }}
        >
          {f.label}
        </Typography>
      ))}
      
    </Stack>
  );
};

export default UsefulLinks;
