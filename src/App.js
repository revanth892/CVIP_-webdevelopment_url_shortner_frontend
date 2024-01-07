
import React from 'react';
import { Typography } from "@mui/material";
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shortern from "./pages/Shortern";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <div>
      <Typography
        variant="h3"
        component="h3"
        sx={{
          fontSize: '2rem',
          fontFamily: 'sans-serif',
          textAlign: 'center',
          marginBottom: '50px'
        }}
      >
        URL Shortener Application
      </Typography>
      <Router>
        <Routes>
          <Route path="/" element={<Shortern />} />
          <Route path="analytics" element={<Analytics />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
