import { useState, useEffect } from 'react';
import axios from 'axios';
import { ProductFormData } from '../../pages/Products/ProductForm/ProductForm';
import { fetchProductById } from '../../services/Product/productService';

export const useGetProductById = (id?: string) => {
    const [product, setProduct] = useState<ProductFormData | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return;

        const fetchProduct = async () => {
            setLoading(true);
            try {
                const response = await fetchProductById(id);
                setProduct(response.data);
            } catch (err) {
                setError('Failed to fetch product data');
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    return { product, loading, error };
};
