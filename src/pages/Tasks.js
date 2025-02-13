import React, { useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";

const Tasks = () => {
  const [selectedTask, setSelectedTask] = useState(null);

  const refreshTasks = () => {
    setSelectedTask(null);
  };

  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h4">Task Management</Typography>
        <TaskForm
          selectedTask={selectedTask}
          refreshTasks={refreshTasks}
          clearSelection={() => setSelectedTask(null)}
        />
        <TaskList onEdit={setSelectedTask} />
      </Box>
    </Container>
  );
};

export default Tasks;
