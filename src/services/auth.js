import { axiosInstance } from "../utils/axios";


export async function adminLogin(data) {
    try {
        const response = await axiosInstance.post('/admin/auth/login', data);
        return response.data;
    } catch (error) {
        console.error('Error during admin login:', error.response || error);
        throw error.response ? error.response.data : { message: 'Network error' };
    }
}


export async function registerUser(data) {
    try {
        const response = await axiosInstance.post('/user/auth/register', data);
        return response.data;
    } catch (error) {
        console.error('Error during user registration:', error.response || error);
        throw error.response ? error.response.data : { message: 'Network error' };
    }
}
