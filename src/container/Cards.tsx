import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import boy from "../assets/boy.jpeg";
import rocket from "../assets/rocket.jpeg";
import search from "../assets/search.jpeg";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Cards = () => {
  return (
    <>
      <Grid container sx={{mt:14,width:"90%",mx:"auto"}} spacing={3}>
        <Grid item md={4}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                src={boy}
                alt="green iguana"
              />

              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{width:'80%', mx:'auto',textAlign:'center' }}
                >
                  Pick a CV template.
                </Typography>
                <Typography variant="body2" color="text.secondary" textAlign={"center"} sx={{width:"80%",mx:"auto", textAlign:'center'}} >
                  Choose a sleek design and layout to get started.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item md={4}>

        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              src={rocket}
              alt="green iguana"
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{width:'80%', mx:'auto',textAlign:'center' }}>
                Fill in the blanks.
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{width:'80%', mx:'auto',textAlign:'center' }}>
                Type in a few words. Let the Zety CV wizard fill the rest.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Grid>
        <Grid item md={4}>

        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              src={search}
              alt="green iguana"
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{width:'70%', mx:'auto',textAlign:'center'}}>
              Customize you
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{width:'80%', mx:'auto',textAlign:'center' }}>
                Make it truly yours. Uniqueness in a few clicks.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Cards;
