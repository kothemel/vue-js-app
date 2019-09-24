import axios from 'axios';
const BASE_URL = 'http://localhost:3000';

export function getUser() {
        return axios.get(`${BASE_URL}/users`)
                .then(response => response.data);
}

export function deleteUser(id){
        return axios.post(`${BASE_URL}/api/users/delete/${id}`)
                .then(response => response.data)
                .catch(err => Promise.reject(err.message));
}
export function createUser(data) {
        return axios.post(`${BASE_URL}/users`, 
        { name: data.name, username: data.username, password: data.password}
        )      .then(response => {
                        return response.data
                })
                .catch(err => Promise.reject(err.message));
}