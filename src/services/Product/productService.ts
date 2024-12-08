import axiosInstance from "../../core/axiosConfig";
import { ProductFormData } from "../../pages/Products/ProductForm/ProductForm";

export const fetchProducts = () => axiosInstance.get('/products');
export const fetchProductById = (id: number) => axiosInstance.get(`/products/${id}`);

export const createProduct = (product: ProductFormData) => axiosInstance.post('/products', product)
export const deleteProduct = (id: number) => axiosInstance.delete(`/products/${id}`) 
