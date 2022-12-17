import React, { FC } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { map } from "lodash";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
interface WhatIsProps {}

const WhatIs = () => {
  const data = [
    {
      title: "What is Zety?",
      description:
        "Zety is a career website focused on the jobseeker’s journey. We share expert knowledge, tips, and tools to help everyone find their dream job. Our website is divided into two main sections:",
      list: [
        "Online Resume Builder and Cover Letter Generator: pick your favorite Resume Template, let our builder suggest and add content tailored to your profile, match your resume with a Cover Letter Template, and download your application documents in PDF or Word format.",
        "A Career Help Blog, where you can find guides and examples on how to make a resume, how to write a cover letter, or how to ace an interview. We have over a thousand guides, each of them written by career experts after hours of careful research. Need a specific guide? Check out hundreds of resume examples, as many CV examples and all the cover letter examples you’ll ever need.",
      ],
    },
    {
      title: "What are Zety's goals?",
      description:
        "Zety aims to make applying for a job fast and easy, for everyone. We believe that seasoned professionals and inexperienced candidates alike should be able to apply for any job they want, without being limited by their resume-making skills. We are committed to helping you every step along the way to your dream career. For nearly ten years now, Zety’s career specialists have been writing and publishing fresh career help guides for all jobseekers, industries, and professions. Through free resources accessible to everyone, everywhere, Zety has already helped hundreds of thousands of people to find the job they deserved. Find out how you can achieve your career goals with our guidance:",
      list: [
        "Resume Help",
        "CV help",
        "Cover Letter Help",
        "Interview help",
        "Job Search Help",
        "Career Advice",
      ],
      isListLink: true,
    },
    {
        title:'Who are Zetys CPRW career experts?',
        description:'Zety’s editorial team is led by senior writers, editors, and leads with extensive experience in career management and job search. Most of our writers hold the CPRW (Certified Professional Resume Writer) certification issued by the Professional Association of Résumé Writers & Career Coaches (PARWCC), the first association for career professionals in the world. Before writing any guide and sample, our CPRWs always undertake exhaustive research or interviews, to ensure all our articles are as impactful and useful as possible for your job search.'
    },
    {
        title:'How many people work at Zety?',
        description:'Zety’s team is composed of around a hundred employees, divided into several teams and offices around the world. Our engineers and developers make sure browsing and using our website and online builders is as smooth as possible for you, while our editorial team focuses on providing everyone with high-quality evergreen content.'
      },
      {
        title:'What is it like to work at Zety?',
        description:'Zety’s core values are Growth, Impact, Ownership, and Communication. At Zety, everyone is driven by the desire to grow their skills and have a decisive impact on the company, but also on our users’ job search and careers.All employees working at Zety are encouraged to learn and develop at all times, in a comfortable and casual work environment. Despite being a large company, risks and new ideas are always welcome, and impactful decisions are systematically rewarded. We want to move the needle rather than just “work" and call it a day.Interested in joining our friendly atmosphere and enjoying a flexible and healthy work-life balance? Check out our current job offers on our LinkedIn profile, or on our Job Board (site in Polish, job offers in English).'
      },
      {
        title:'In what languages is Zety available?',
        description:'By having a multicultural and multilingual team, we are able to help jobseekers from anywhere with content tailored to their specific job markets. Currently, we provide our job search advice and our online builders in 7 languages, for dozens of different countries: English, Spanish, French, Portuguese, German, Polish and Italian. And we keep expanding our content!'
      },
      {
        title:'Does Zety have customer service?',
        description:'Our customer service is available at all times, in all the languages we operate with. Want to download your account’s data or delete it entirely? Want to renew or cancel your subscription? You can easily do this anytime, we’re here for you! You can send us an email or a message using the contact form, or get in touch with our agents by phone during business hours. Check out our Contact page for more details.'
      },
      {
        title:'Where can I read legit reviews of Zety?',
        description:'To constantly improve our content and applications, we encourage our users to provide as much feedback as possible. When browsing our blog, don’t hesitate to read comments and check our reviews. Are you curious about how good Zety is for your job search? Read our reviews on Trustpilot!Our resume and cover letter builders were also tested by professional reviewers. For example, you can check out this review from Betterteam, or this other one from Sitejabber. Don’t hesitate to give us your own opinion, too!'
      },
      {
        title:'How does Zety work? How do I use it?',
        description:`Zety is convenient, fast, and easy to use. All you need to do is to pick a template, fill in the basic contact information, and input your job title. Our smart builder will then generate content tailored to your profile and experience, that you can then adjust to your needs. Start now and be done in a few minutes: Try our Resume Builder.But wait, there’s more! Our builder also compares your resume and cover letter to the average of all other candidates applying for the same profession as you. Based on that data, we will be able to check your resume and score it. 10/10 already? Just download it in PDF or Word and send it away! Bad score? Check out our suggestions and improve your document until it’s top-notch. Learn more about our Resume Checker here!`
      },
      {
        title:"Is Zety's Premium plan worth it?",
        description:`With our builder, professional templates, and job search guides, there’s a great chance that you’ll get good job offers in less than 14-days.
         But finding the best job for you is another matter! For this reason, taking your time to send more unique and tailored resumes is a great idea. Keeping a premium subscription to Zety’s builders will allow you to apply until you get your ideal position.`
      },

  ];

  return (
    <div>
      {map(data, (d, index) => (
        <div key={index}>
          <Typography sx={{ fontSize: 25, }}>{d.title}</Typography>
          <Typography sx={{ mt: 3 }}>{d.description}</Typography>
          <List sx={{borderBottom: "1px solid #007ACC", mt:3, mb:3}}>
            {map(d.list, (item, idx) => (
              <ListItem key={idx}>
                <ListItemIcon>
                  <FiberManualRecordIcon sx={{ fontSize: 9 }} />
                </ListItemIcon>
                <Typography color={d?.isListLink ? "primary" : "secondary"}>
                  {item}
                </Typography>
              </ListItem>
            ))}
          </List>
        </div>
      ))}
    </div>
  );
};

export default WhatIs;
