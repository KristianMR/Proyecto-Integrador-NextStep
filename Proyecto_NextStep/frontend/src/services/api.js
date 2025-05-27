import axios from 'axios';

const api = axios.create8({
    baseURL: 'HTTP://localhost:4000',
})
    
export default api;