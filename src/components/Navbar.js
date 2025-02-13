import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          NiceTec Task Manager
        </Typography>
        <Button color="inherit" onClick={() => navigate("/dashboard")}>
          Dashboard
        </Button>
        <Button color="inherit" onClick={() => navigate("/tasks")}>
          Tasks
        </Button>
        <Button color="inherit" onClick={() => navigate("/inquiries")}>
          Inquiries
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
