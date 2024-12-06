import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://roundclock.roundstone.solutions',
    headers: {
        'Content-Type': 'application/json',
    },
});