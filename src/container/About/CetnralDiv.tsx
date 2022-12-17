import React from "react";
import { Typography, Stack } from "@mui/material";
import family from "../../assets/family.jpg";

function CetnralDiv() {
  return (
    <div className="App">
      <Typography variant="h3" mt={10} sx={{ textAlign: "center" }}>
        Zety is your ultimate career toolbox.
      </Typography>
      <Typography mt={3} sx={{ textAlign: "center" }}>
        Use it to fix your career.
      </Typography>
      <Stack mt={3} mx="20%" sx={{ textAlign: "center" }}>
        We offer you the best online resume builder and free professional advice
        from career experts. We’ll guide you through the entire recruitment
        process all the way to your dream job.
      </Stack>
      <Stack alignItems="center">
        <img src={family} style={{ width: "70%" }} />
      </Stack>
      <Stack sx={{ mt: 5, mx: "20%" }}>
        <Typography mt={5}>
          Since 2016, Zety has helped millions of job seekers worldwide find
          employment. With a rapidly growing community of more than 40 million
          readers a year, Zety is arguably the world’s fastest growing career
          advice website.
        </Typography>
        <Typography mt={5}>
          Each day, we help thousands of people write resumes and cover letters,
          and improve their chances of landing a job.
        </Typography>
        <Typography mt={5}>
          Zety is powered by a team of 10 career experts featured in Forbes, the
          Financial Times, CareerBuilder, and Glassdoor, among others.
        </Typography>
        <Typography variant="h4" mt={10}>
          We’re building the largest and best career site in the world to help
          you find the job you hope for.
        </Typography>
        <Typography mt={5}>
          Zety has published more than 400 career guides. Each one required
          extensive research, consultation, and fact-checking
        </Typography>
        <Typography mt={5}>
          From resume and interview advice to networking, our guides have been
          recognized by over 200 universities and organizations worldwide.
        </Typography>
      </Stack>
    </div>
  );
}

export default CetnralDiv;
