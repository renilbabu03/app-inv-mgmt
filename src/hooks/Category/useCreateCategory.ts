import { useState } from "react"
import { Category } from "../../models/Category";
import { CategoryFormData } from "../../pages/Category/CategoryForm/CategoryForm";
import { createCategory } from "../../services/categoryService";

export const useCreateCategory = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const create = async (category: CategoryFormData) => {
        setLoading(true);

        try {
            await createCategory(category);
        } catch (e: any) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    }


    return { create, loading, error };
}