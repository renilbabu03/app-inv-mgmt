import axiosInstance from "../../core/axiosConfig";
import { ProductFormData } from "../../pages/Products/ProductForm/ProductForm";

export const fetchProducts = () => axiosInstance.get('/products');
export const fetchProductById = (id: string) => axiosInstance.get(`/products/${id}`);

export const createProduct = (product: ProductFormData) => axiosInstance.post('/products', product)
export const updateProduct = (id: number, product: ProductFormData) => axiosInstance.post(`/products/${id}`, product)
export const deleteProductById = (id: number) => axiosInstance.delete(`/products/${id}`) 
