import axios from 'axios';
const API = axios.create({ baseURL: 'https://api.github.com/search' });
export default API;