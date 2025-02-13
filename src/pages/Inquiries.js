//src\pages\Inquiries.js
import React, { useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import InquiryList from "../components/InquiryList";
import InquiryForm from "../components/InquiryForm";

const Inquiries = () => {
  const [selectedInquiry, setSelectedInquiry] = useState(null);

  const refreshInquiries = () => {
    setSelectedInquiry(null);
  };

  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h4">Inquiry Tracking</Typography>
        <InquiryForm
          selectedInquiry={selectedInquiry}
          refreshInquiries={refreshInquiries}
          clearSelection={() => setSelectedInquiry(null)}
        />
        <InquiryList onEdit={setSelectedInquiry} />
      </Box>
    </Container>
  );
};

export default Inquiries;
