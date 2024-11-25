import { useEffect, useState } from "react"
import { Category } from "../models/Category";
import { fetchCategories } from "../services/categoryService";

export const useCategories = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData: any = async () => {
            try {
                const data: any = await fetchCategories();
                setCategories(data.data);
            } catch (e: any) {
                setError(e.message)
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    return { categories, loading, error };
}