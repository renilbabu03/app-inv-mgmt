import axiosInstance from "../core/axiosConfig";

export const fetchProducts = () => axiosInstance.get('/products');
export const fetchProductById = (id: number) => axiosInstance.get(`/products/${id}`);
