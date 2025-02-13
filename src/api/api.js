//src\api\api.js
import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const fetchTasks = async () => axios.get(`${API_URL}/tasks`);
export const createTask = async (task) => axios.post(`${API_URL}/tasks`, task);
export const updateTask = async (id, task) => axios.put(`${API_URL}/tasks/${id}`, task);
export const deleteTask = async (id) => axios.delete(`${API_URL}/tasks/${id}`);

// export const fetchInquiries = async () => axios.get(`${API_URL}/inquiries`);
// export const createInquiry = async (inquiry) => axios.post(`${API_URL}/inquiries`, inquiry);
// export const updateInquiry = async (id, inquiry) => axios.put(`${API_URL}/inquiries/${id}`, inquiry);
// // export const updateInquiry = async (id, updatedData) => {
// //     return await axios.put(`${BASE_URL}/inquiries/${id}`, updatedData);
// //   }; 
// export const deleteInquiry = async (id) => axios.delete(`${API_URL}/inquiries/${id}`);

export const createInquiry = async (inquiry) =>
    axios.post(`${API_URL}/inquiries`, inquiry);
  export const updateInquiry = async (id, inquiry) =>
    axios.put(`${API_URL}/inquiries/${id}`, inquiry);
  export const fetchInquiries = async () => axios.get(`${API_URL}/inquiries`);
  export const deleteInquiry = async (id) =>
    axios.delete(`${API_URL}/inquiries/${id}`);
  
