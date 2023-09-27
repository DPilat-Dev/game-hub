import axios, { CanceledError } from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '3f56599caa604e8eafe04c96491104de'
    }
});

export { CanceledError };