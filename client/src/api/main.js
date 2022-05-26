import axios from 'axios';
const BASE_URL =  "https://localhost:5050"

export const foodAxios = axios.create({
    baseURL: BASE_URL
})

export const axiosTransaction = () =>
  axios.create({
    baseURL: BASE_URL,
    headers: {
      access_token: localStorage.getItem("access_token"),
    },
  });
