import { useState, useEffect, useCallback } from 'react';
import { fetchProducts } from '../services/productService';
import { Product } from '../../../models/Product';

export const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const data: any = await fetchProducts();
            setProducts(data.data);
        } catch (e: any) {
            setError(e.message || "Failed to fetch categories");
        } finally {
            setLoading(false);
        }
    }, []);


    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { products, loading, error, refetch: fetchData };
};
