import { useState, useEffect } from 'react';
import { fetchProducts } from '../../services/Product/productService';
import { Product } from '../../models/Product';

export const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const data: any = await fetchProducts();
                setProducts(data.data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getProducts();
    }, []);

    return { products, loading, error };
};
