import axiosInstance from "../core/axiosConfig";
import { CategoryFormData } from "../pages/Category/CategoryForm/CategoryForm";


export const fetchCategories = () => axiosInstance.get('/categories');
export const createCategory = (category: CategoryFormData) => axiosInstance.post('/categories', category) 