import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Newcard = () => {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

  return (
    <Carousel autoPlay={false}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

function Item(props: any) {
  return (
    <Box sx={{ mx: "40%", pb:'10%' }}>
      <Grid item md={4} sm={6}>
        <Grid spacing={2}>
          <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">Check it out!</Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Newcard;
