import React from "react";
import { Container, Typography, Box } from "@mui/material";

const Dashboard = () => {
  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h4">Dashboard</Typography>
        <Typography variant="body1">Overview of tasks and inquiries.</Typography>
      </Box>
    </Container>
  );
};

export default Dashboard;
