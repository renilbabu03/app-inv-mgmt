import { useState } from "react";
import { ProductFormData } from "../../pages/Products/ProductForm/ProductForm";
import { createProduct } from "../../services/Product/productService";

export const useCreateProduct = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const create = async (product: ProductFormData) => {
        setLoading(true);

        try {
            await createProduct(product);
        } catch (e: any) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    }


    return { create, loading, error };
}