//src\components\InquiryList.js
// import React, { useEffect, useState } from "react";
// import {
//   Container,
//   Typography,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
//   IconButton,
//   Select,
//   MenuItem,
// } from "@mui/material";
// import { Edit, Delete } from "@mui/icons-material";
// import { fetchInquiries, deleteInquiry, updateInquiry } from "../api/api";


// const InquiryList = ({ onEdit }) => {
//   const [inquiries, setInquiries] = useState([]);

//   useEffect(() => {
//     loadInquiries();
//   }, []);

//   const loadInquiries = async () => {
//     try {
//       const response = await fetchInquiries();
//       setInquiries(response.data);
//     } catch (error) {
//       console.error("Error fetching inquiries:", error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await deleteInquiry(id);
//       setInquiries(inquiries.filter((inquiry) => inquiry._id !== id));
//     } catch (error) {
//       console.error("Error deleting inquiry:", error);
//     }
//   };

  
//   const handleStatusChange = async (id, newStatus) => {
//     try {
//       await updateInquiry(id, { status: newStatus }); // Use updateInquiry instead
//       setInquiries(inquiries.map((inq) => (inq._id === id ? { ...inq, status: newStatus } : inq)));
//     } catch (error) {
//       console.error("Error updating status:", error);
//     }
//   };
  

//   return (
//     <Container>
//       <Typography variant="h5" gutterBottom>
//         Inquiry List
//       </Typography>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Name</TableCell>
//               <TableCell>Contact</TableCell>
//               <TableCell>Course Interested</TableCell>
//               <TableCell>Status</TableCell>
//               <TableCell>Follow-Up Date</TableCell>
//               <TableCell>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {inquiries.map((inquiry) => (
//               <TableRow key={inquiry._id}>
//                 <TableCell>{inquiry.name}</TableCell>
//                 <TableCell>{inquiry.contact}</TableCell>
//                 <TableCell>{inquiry.course}</TableCell>
//                 <TableCell>
//                   <Select
//                     value={inquiry.status}
//                     onChange={(e) => handleStatusChange(inquiry._id, e.target.value)}
//                   >
//                     <MenuItem value="Admission Done">Admission Done</MenuItem>
//                     <MenuItem value="Not Interested">Not Interested</MenuItem>
//                     <MenuItem value="Next Follow-up">Next Follow-up</MenuItem>
//                   </Select>
//                 </TableCell>
//                 <TableCell>{new Date(inquiry.followUpDate).toLocaleDateString()}</TableCell>
//                 <TableCell>
//                   <IconButton color="primary" onClick={() => onEdit(inquiry)}>
//                     <Edit />
//                   </IconButton>
//                   <IconButton color="error" onClick={() => handleDelete(inquiry._id)}>
//                     <Delete />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Container>
//   );
// };

// export default InquiryList;

import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  IconButton,
  Select,
  MenuItem,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { fetchInquiries, deleteInquiry, updateInquiry } from "../api/api";

const InquiryList = ({ onEdit }) => {
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    loadInquiries();
  }, []);

  const loadInquiries = async () => {
    try {
      const response = await fetchInquiries();
      setInquiries(response.data);
    } catch (error) {
      console.error("Error fetching inquiries:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteInquiry(id);
      setInquiries(inquiries.filter((inquiry) => inquiry._id !== id));
    } catch (error) {
      console.error("Error deleting inquiry:", error);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await updateInquiry(id, { status: newStatus });
      setInquiries(inquiries.map((inq) => (inq._id === id ? { ...inq, status: newStatus } : inq)));
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Inquiry List
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Student Name</TableCell>
              <TableCell>Contact Number</TableCell>
              <TableCell>Assigned To</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Follow-Up Date</TableCell>
              
              <TableCell>Interested Course</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {inquiries.map((inquiry) => (
              <TableRow key={inquiry._id}>
                <TableCell>{inquiry.studentName}</TableCell>
                <TableCell>{inquiry.contactNumber}</TableCell>
                <TableCell>{inquiry.assignedTo}</TableCell>
                
                <TableCell>
                  <Select
                    value={inquiry.status}
                    onChange={(e) => handleStatusChange(inquiry._id, e.target.value)}
                  >
                    <MenuItem value="Admission Done">Admission Done</MenuItem>
                    <MenuItem value="Not Interested">Not Interested</MenuItem>
                    <MenuItem value="Next Follow-up">Next Follow-up</MenuItem>
                  </Select>
                </TableCell>
                <TableCell>
                  {inquiry.followUpDate ? new Date(inquiry.followUpDate).toLocaleDateString() : "N/A"}
                </TableCell>
               
                <TableCell>{inquiry.courseInterested}</TableCell>
                <TableCell>{inquiry.description}</TableCell>
                <TableCell>
                  <IconButton color="primary" onClick={() => onEdit(inquiry)}>
                    <Edit />
                  </IconButton>
                  <IconButton color="error" onClick={() => handleDelete(inquiry._id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default InquiryList;
