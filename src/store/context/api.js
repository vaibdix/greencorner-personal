import axios from 'axios';

const BASE_URL = 'http://localhost:3000';
// const BASE_URL = 'http://116.75.62.44:8000';

export const api = {
  fetchPlants: () => axios.get(`${BASE_URL}/plants`),
  getUsers: () => axios.get(`${BASE_URL}/users`),
  createUser: (userData) => axios.post(`${BASE_URL}/users`, userData),
};
