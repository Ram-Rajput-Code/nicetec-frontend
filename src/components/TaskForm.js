import React, { useState, useEffect } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { createTask, updateTask } from "../api/api";

const TaskForm = ({ selectedTask, refreshTasks, clearSelection }) => {
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    assignedTo: "",
    deadline: "",
  });

  useEffect(() => {
    if (selectedTask) {
      setTaskData(selectedTask);
    } else {
      setTaskData({
        title: "",
        description: "",
        assignedTo: "",
        deadline: "",
      });
    }
  }, [selectedTask]);

  const handleChange = (e) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedTask) {
        await updateTask(selectedTask._id, taskData);
      } else {
        await createTask(taskData);
      }
      refreshTasks();
      clearSelection();
    } catch (error) {
      console.error("Error saving task:", error);
    }
  };

  return (
    <Container>
      <Box mt={3} p={3} boxShadow={3} bgcolor="background.paper">
        <Typography variant="h6" gutterBottom>
          {selectedTask ? "Edit Task" : "Add New Task"}
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Title"
            name="title"
            value={taskData.title}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Description"
            name="description"
            value={taskData.description}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Assigned To"
            name="assignedTo"
            value={taskData.assignedTo}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Deadline"
            name="deadline"
            type="datetime-local"
            value={taskData.deadline}
            onChange={handleChange}
            margin="normal"
            required
            InputLabelProps={{ shrink: true }}
          />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            {selectedTask ? "Update Task" : "Add Task"}
          </Button>
          {selectedTask && (
            <Button
              variant="outlined"
              color="secondary"
              onClick={clearSelection}
              sx={{ mt: 2, ml: 2 }}
            >
              Cancel
            </Button>
          )}
        </form>
      </Box>
    </Container>
  );
};

export default TaskForm;
