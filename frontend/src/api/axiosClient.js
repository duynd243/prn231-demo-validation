import axios from "axios";
const axiosClient = axios.create({
    baseURL: 'https://localhost:7134/api',
});

axiosClient.interceptors.response.use(
    (response) => response,
    (error) =>
        Promise.reject(
            error.response && error.response.data
        )
);

export default axiosClient;