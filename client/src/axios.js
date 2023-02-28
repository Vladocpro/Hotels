import axios from 'axios';

const instance = axios.create({
   baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:4444"
})

instance.interceptors.request.use((config) => {
   config.headers.Authorization = window.localStorage.getItem('token')
   return config;
})

export default instance;