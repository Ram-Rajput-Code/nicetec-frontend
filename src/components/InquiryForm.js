//src\components\InquiryForm.js


import React, { useState, useEffect } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { createInquiry, updateInquiry } from "../api/api";

const InquiryForm = ({ selectedInquiry, refreshInquiries, clearSelection }) => {
  const [inquiryData, setInquiryData] = useState({
    studentName: "",
    contactNumber: "",
    assignedTo: "",
    status: "Next Follow-up",
    followUpDate: "",
    courseInterested: "",
    description: ""
  });

  useEffect(() => {
    if (selectedInquiry) {
      setInquiryData(selectedInquiry);
    } else {
      setInquiryData({
        studentName: "",
        contactNumber: "",
        assignedTo: "",
        status: "Next Follow-up",
        followUpDate: "",
        courseInterested: "",
    description: ""
      });
    }
  }, [selectedInquiry]);

  const handleChange = (e) => {
    setInquiryData({ ...inquiryData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedInquiry) {
        await updateInquiry(selectedInquiry._id, inquiryData);
      } else {
        await createInquiry(inquiryData);
      }
      refreshInquiries();
      clearSelection();
    } catch (error) {
      console.error("Error saving inquiry:", error);
    }
  };

  return (
    <Container>
      <Box mt={3} p={3} boxShadow={3} bgcolor="background.paper">
        <Typography variant="h6" gutterBottom>
          {selectedInquiry ? "Edit Inquiry" : "Add New Inquiry"}
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Student Name"
            name="studentName"
            value={inquiryData.studentName}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Contact Number"
            name="contactNumber"
            value={inquiryData.contactNumber}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Assigned To"
            name="assignedTo"
            value={inquiryData.assignedTo}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Follow-Up Date"
            name="followUpDate"
            type="date"
            value={inquiryData.followUpDate}
            onChange={handleChange}
            margin="normal"
            required
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            fullWidth
            label="Course Interested"
            name="courseInterested"
            value={inquiryData.courseInterested}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Description"
            name="description"
            value={inquiryData.description}
            onChange={handleChange}
            margin="normal"
            required
          />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            {selectedInquiry ? "Update Inquiry" : "Add Inquiry"}
          </Button>
          {selectedInquiry && (
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

export default InquiryForm;
