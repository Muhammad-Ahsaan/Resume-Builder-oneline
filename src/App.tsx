import react, { useState } from "react";

import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import Refimport from "./container/Refimport";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./container/Home";
import About from './container/About/About'
import Contact from "./container/Contact/Contact";
import Resume from "./container/Resume";
import CVImage from "./container/Resume/CVImageContainer/CVImage";
export const theme = createTheme({
  palette: {
    primary: {
      main: "#4C85FA",
      dark: "#154dc1",
      light: "#6b8cd1",
      contrastText: "#fff",
    },
    secondary: {
      main: "#151515",
      dark: "#000000",
      light:"#151515a8",
      contrastText: "#fff",
    },
    error: {
      main: "#BD0043",
      contrastText: "#fff",
    },
    divider: "#727272",
    background: {
      paper: "#fff",
      default: "#fff",
    },
  },
  typography: {
    // Use the custom font over Roboto.
    fontFamily: "'HKGrotesk', sans-serif",
    htmlFontSize: 16,
    button: {
      textTransform: "none",
    },
  },
});



const App = () => {


  return (
    <>
   <ThemeProvider theme={responsiveFontSizes(theme)}>
   
   <div className="App">
      <Routes>
        <Route path="/" element={ <Refimport/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/contact" element={ <Contact/>} />
        <Route path= "/resume" element={ <Resume />} />
        <Route path= "/preview" element={ <CVImage />} />
        
      </Routes>
    </div>
 
   </ThemeProvider>

    </>
  );
};
export default App;
