import axios from 'axios';

const baseURL = 'http://localhost:8000';

const config = axios.create({ baseURL });

export default config;
