import React, { useState, FC } from "react";
import { SkillFormAttributes, TCVFormType } from "src/types";
import { Stack, Box } from "@mui/material";
import { Button, ButtonBase, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { filter, map } from "lodash";
import DoneIcon from "@mui/icons-material/Done";

interface SkillFormItemProps {
  item: SkillFormAttributes;
  index: number;
  onClick(index: number): void;
}

const SkillFormItem: FC<SkillFormItemProps> = ({ item, onClick, index }) => {
  return (
    <Stack direction="row" key={item.id} alignItems="center" spacing={2}>
      <ButtonBase
        onClick={() => onClick(index)}
        sx={{
          background: "#3983FA",
          color: "#fff",
          borderRadius: 2,
          "&:hover": {
            background: "#E44747",
          },
          mt: 1,
          width: 45,
          height: 45,
        }}
      >
        {item.checked ? <DoneIcon /> : <Typography>Add</Typography>}
      </ButtonBase>
      <Box sx={{ display: "flex", flexDirection: "column", pt: 1 }}>
        {item.expert && (
          <Typography sx={{ color: "#007ACC", textWeight: "bold" }}>
            Expert Recommended
          </Typography>
        )}
        <Typography
          sx={{
            color: "#000",
            textWeight: "bold",
          }}
        >
          {item.label}
        </Typography>
      </Box>
    </Stack>
  );
};

export default SkillFormItem;
