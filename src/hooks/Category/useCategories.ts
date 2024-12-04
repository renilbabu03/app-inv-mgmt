import { useEffect, useState, useCallback } from "react";
import { Category } from "../../models/Category";
import { fetchCategories } from "../../services/categoryService";

export const useCategories = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    // Fetch data function
    const fetchData = useCallback(async () => {
        setLoading(true);
        setError(null); // Reset error state
        try {
            const data: any = await fetchCategories();
            setCategories(data.data);
        } catch (e: any) {
            setError(e.message || "Failed to fetch categories");
        } finally {
            setLoading(false);
        }
    }, []);

    // Initial data fetch
    useEffect(() => {
        fetchData();
    }, [fetchData]);

    // Return refetch function along with other states
    return { categories, loading, error, refetch: fetchData };
};
