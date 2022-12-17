import React, { FC } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import NavigationIcon from "@mui/icons-material/Navigation";
import {
  ButtonGroup,
  Fab,
  FormControlLabel,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useTheme, Button, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import zte from "../assets/zte.png";
import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/system";

interface IAppBarProps {
  hasLinks?: boolean;
  hasAbout?: boolean;
}

const Appbar: FC<IAppBarProps> = ({ hasLinks, hasAbout }) => {
  const navigate = useNavigate();
  const theme = useTheme();

  const items = [
    "Tools",
    "Resume",
    "CV",
    "Cover Letter",
    "Carrer Blog",
    "About",
  ];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0} style={{ background: "#FFFFFF" }}>
        <Toolbar>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            flexGrow={1}
          >
            <Box sx={{ cursor: "pointer" }}>
              <img src={zte} onClick={() => navigate("/")} />
            </Box>
            <Stack direction={"row"} alignItems={"center"}>
              {hasLinks && (
                <List sx={{ marginRight: 10 }}>
                  <Stack direction="row" spacing={1}>
                    {items.map((item, index) => (
                      <ListItemButton key={index}>
                        <Typography color="black">{item}</Typography>
                      </ListItemButton>
                    ))}
                  </Stack>
                </List>
              )}
              {hasAbout && (
                <Button
                  variant="contained"
                  onClick={() => navigate("/about")}
                  sx={{
                    color: "white",
                    borderRadius: 5,
                    py: 1.25,
                    px: 4,
                    background: "white",
                    "&:hover": {
                      background: theme.palette.primary.light,
                      color: "white",
                    },
                  }}
                >
                  <Typography
                    fontSize={17}
                    sx={{ color: "black", "&:hover": { color: "white" } }}
                  >
                    About Us
                  </Typography>
                </Button>
              )}
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Appbar;
