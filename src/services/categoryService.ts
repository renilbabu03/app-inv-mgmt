import axiosInstance from "../core/axiosConfig";


export const fetchCategories = () => axiosInstance.get('/categories');