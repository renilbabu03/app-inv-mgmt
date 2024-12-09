import { useEffect, useState, useCallback } from "react";
import { Category } from "../../../models/Category";
import { fetchCategories } from "../services/categoryService";

export const useCategories = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchData = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const data: any = await fetchCategories();
            setCategories(data.data);
        } catch (e: any) {
            setError(e.message || "Failed to fetch categories");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { categories, loading, error, refetch: fetchData };
};
