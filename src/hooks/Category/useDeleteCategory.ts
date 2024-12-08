import { useState } from "react";
import { deleteCategory as deleteCategoryService } from "../../services/Category/categoryService";

export const useDeleteCategory = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const deleteCategory = async (id: number): Promise<void> => {
        setLoading(true);
        setError(null); // Reset error state before attempting deletion

        try {
            await deleteCategoryService(id); // Call the service
        } catch (e: any) {
            setError(e.message || "An error occurred while deleting the category");
            throw e; // Re-throw the error so the caller can handle it
        } finally {
            setLoading(false);
        }
    };

    return { deleteCategory, loading, error };
};
