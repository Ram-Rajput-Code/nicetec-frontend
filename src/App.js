import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Inquiries from "./pages/Inquiries";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/inquiries" element={<Inquiries />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
