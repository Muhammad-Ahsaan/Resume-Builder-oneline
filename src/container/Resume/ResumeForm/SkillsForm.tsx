import React, { useState, FC } from "react";
import { SkillFormAttributes, TCVFormType } from "src/types";
import { Stack, Box } from "@mui/material";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { filter, map } from "lodash";
import SkillFormItem from "./components/SkillFormItem";

interface SkillsFormProps {
  form: TCVFormType;
  setForm(e: any,value?:any): void;
}

const SkillsForm: FC<SkillsFormProps> = ({ form, setForm }) => {
  const navigate = useNavigate();
  const [data, setdata] = useState<SkillFormAttributes[]>([
    {
      id: 1,
      label: "CSS",
      checked: false,
      expert: true,
    },
    {
        id: 2,
        label: "JavaScript",
        checked: false,
        expert: true,
      },
      {
        id: 3,
        label: "Pythan",
        checked: false,
        expert: false,
      },
      {
        id: 4,
        label: "Microsoft Word",
        checked: false,
        expert: false,
      },
      {
        id: 5,
        label: "C++",
        checked:false,
        expert: false,
      },
      {
        id: 6,
        label: "Typscript",
        checked:false,
        expert: false,
      },{
        id: 7,
        label: "Udduo",
        checked:false,
        expert: false,
      },{
        id: 8,
        label: "Wordpress",
        checked:false,
        expert: false,
      },{
        id: 9,
        label: "Data Structure",
        checked:false,
        expert: false,
      },{
        id: 10,
        label: "Automata",
        checked:false,
        expert: false,
      },
  ]);

  const handleSkillItemClick = (index: number) => {
    const updatedData = [...data];
    updatedData[index].checked = !updatedData[index].checked;
    setdata(updatedData);
    const formValues = filter(updatedData, item=> item.checked);
    setForm('skills',formValues);
  };

  return (
    <Box height={400} overflow="auto" >
      {map(data, (item, index) => (
        <SkillFormItem index={index} item={item} onClick={handleSkillItemClick} />
      ))}
    </Box>
  );
};

export default SkillsForm;
