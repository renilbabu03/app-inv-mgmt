import { useState } from "react";
import { deleteCategory as deleteCategoryService } from "../../services/Category/categoryService";
import { deleteProductById } from "../../services/Product/productService";

export const useDeleteProduct = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const deleteProduct = async (id: number): Promise<void> => {
        setLoading(true);
        setError(null); // Reset error state before attempting deletion

        try {
            await deleteProductById(id); // Call the service
        } catch (e: any) {
            setError(e.message || "An error occurred while deleting the category");
            throw e; // Re-throw the error so the caller can handle it
        } finally {
            setLoading(false);
        }
    };

    return { deleteProduct, loading, error };
};
