import axios from './root.service.js';
import { formatUserData } from '@helpers/formatData.js';
import { deleteDataAlert } from '@helpers/sweetAlert.js';

export async function getUsers() {
    try {
        const config = {
            headers: {
                'Cache-Control': 'no-cache'
            }
        };
        const { data } = await axios.get('/user/', config);
        const formattedData = data.data.map(formatUserData);
        return formattedData;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

export async function updateUser(data, rut) {
    try {
        const response = await axios.put(`/user/?rut=${rut}`, data);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

export async function deleteUser(rut) {
    try {
        const response = await axios.delete(`/user/detail/?rut=${rut}`);
        deleteDataAlert(response.status, response.data.message);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}