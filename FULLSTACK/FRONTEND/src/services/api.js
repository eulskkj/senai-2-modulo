import axios from "axios";
    
// Configuração da instancia do axios com a url base da api

const api = axios.create({
    baseURL: "https://localhost:3000",
});
export default api;    

