import axios from "axios";

const api = axios.create({
   baseURL: "http://localhost:3000", // URL BASE DA API.
});

export default api;