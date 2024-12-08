import { Button, Input, Select } from 'antd';
import React, { useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useCategories } from '../../../hooks/Category/useCategories';
import { useCreateProduct } from '../../../hooks/Products/useCreateProducts';
import { Category } from '../../../models/Category';


export interface ProductFormData  {
    name: string;
    description: string;
    price: number;
    quantityInStock: number;
    brand: string;
    expirationDate?: Date;
    categoryId: number;
};

const ProductForm: React.FC = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<ProductFormData>();
    const { create, loading, error } = useCreateProduct();
    const { categories, loading:categoryListLoading, error:categoryListError } = useCategories();


    useEffect(() => {
        if (error) {
         
        }
    }, [error]);

    const onSubmit: SubmitHandler<ProductFormData> = (data: ProductFormData) => {
        create(data);
    }

    return (
        <div className="p-6 max-w-sm mx-auto bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Add New Product</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
           
                <div className="flex flex-col gap-y-1">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        rules={{ required: "Name is required" }}
                        render={({ field }) => (
                            <Input
                                {...field}
                                id="name"
                                placeholder="Enter category name"
                                className="form-input"
                            />
                        )}
                    />
                    {errors.name && (
                        <span className=" text-sm text-red-500">{errors.name.message}</span>
                    )}
                    <label htmlFor="name" className="form-label">
                        Description
                    </label>
                    <Controller
                        name="description"
                        control={control}
                        defaultValue=""
                      
                        render={({ field }) => (
                            <Input
                                {...field}
                                id="name"
                                placeholder="Description"
                                className="form-input"
                            />
                        )}
                    />
                    <label htmlFor="price" className="form-label">
                        Price
                    </label>
                    <Controller
                        name="price"
                        control={control}
                        defaultValue={0}
                      
                        render={({ field }) => (
                            <Input
                                {...field}
                                type='number'
                                id="price"
                                placeholder="Price"
                                className="form-input"
                                onChange={(e) => field.onChange(Number(e.target.value))}
                            />
                        )}
                    />
                    <label htmlFor="price" className="form-label">
                        Qty In Stock
                    </label>
                    <Controller
                        name="quantityInStock"
                        control={control}
                        defaultValue={0}
                      
                        render={({ field }) => (
                            <Input
                                {...field}
                                type='number'
                                id="quantityInStock"
                                placeholder="Quantity In Stock"
                                onChange={(e) => field.onChange(Number(e.target.value))}
                                className="form-input"
                            />
                        )}
                    />
                    <label htmlFor="brand" className="form-label">
                        Brand
                    </label>
                    <Controller
                        name="brand"
                        control={control}
                        defaultValue=""
                      
                        render={({ field }) => (
                            <Input
                                {...field}
                                id="brand"
                                placeholder="Brand"
                                className="form-input"
                            />
                        )}
                    />
        
                    <label htmlFor="price" className="form-label">
                        Category
                    </label>
                    <Controller
                        name="categoryId"
                        control={control}
                      
                        render={({ field }) => (
                            <Select {...field} options={
                                categories.map((category:Category)=>{
                                    return {
                                        value:category.id,
                                        label:category.name
                                    }
                                })
                            } />
                        )}
                    />
                 
                </div>

             
                {loading && <div>Loading...</div>}

                
                {error && <div className="text-sm text-red-500 mt-2">{error}</div>}

              
                <Button
                    type="primary"
                    htmlType="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-md"
                >
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default ProductForm;
