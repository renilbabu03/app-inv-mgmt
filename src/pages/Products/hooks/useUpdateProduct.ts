import { useState } from 'react';
import axios from 'axios';
import { ProductFormData } from '../ProductForm/ProductForm';
import { updateProduct } from '../services/productService';

export const useUpdateProduct = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const update = async (id: number, productData: ProductFormData) => {
        setLoading(true);
        setError(null);
        try {
            await updateProduct(id, productData);

        } catch (err) {
            setError('Failed to update product');
        } finally {
            setLoading(false);
        }
    };

    return { update, loading, error };
};
