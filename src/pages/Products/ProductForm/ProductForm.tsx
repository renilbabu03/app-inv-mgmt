import { Button, Input, Select } from 'antd';
import React, { useEffect, useMemo, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom'; // For extracting the ID from the URL
import { useCategories } from '../../../hooks/Category/useCategories';
import { useCreateProduct } from '../../../hooks/Products/useCreateProducts';
import { useUpdateProduct } from '../../../hooks/Products/useUpdateProduct';
import { useGetProductById } from '../../../hooks/Products/useGetProductById'; // New hook for fetching a product by ID
import { Category } from '../../../models/Category';

export interface ProductFormData {
  name: string;
  description: string;
  price: number;
  quantityInStock: number;
  brand: string;
  expirationDate?: Date;
  categoryId: number;
}

const ProductForm: React.FC = () => {
  const { id } = useParams<{ id: string }>(); 
  const { control, handleSubmit, formState: { errors }, reset } = useForm<ProductFormData>();
  const { create, loading: createLoading, error: createError } = useCreateProduct();
  const { update, loading: updateLoading, error: updateError } = useUpdateProduct();
  const { categories, loading: categoryListLoading, error: categoryListError } = useCategories();
  const { product, loading: productLoading, error: productError } = useGetProductById(id); 

  // Reset the form with fetched product data when available
  useEffect(() => {
    if (product) {
      reset(product);
    }
  }, [product, reset]);

  const categoryOptions = useMemo(
    () =>
      categories.map((category: Category) => ({
        value: category.id,
        label: category.name,
      })),
    [categories]
  );

  const onSubmit: SubmitHandler<ProductFormData> = (data: ProductFormData) => {
    if (id) {
      update(Number(id), data);
    } else {
      create(data);
    }
  };

  if (productLoading || categoryListLoading) {
    return <div>Loading...</div>;
  }

  if (productError) {
    return <div className="text-sm text-red-500">Error fetching product data: {productError}</div>;
  }

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
        {id ? 'Edit Product' : 'Add New Product'}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col gap-y-1">
          <label htmlFor="name" className="form-label">Name</label>
          <Controller
            name="name"
            control={control}
            rules={{ required: 'Name is required' }}
            render={({ field }) => <Input {...field} id="name" placeholder="Enter product name" />}
          />
          {errors.name && <span className="text-sm text-red-500">{errors.name.message}</span>}

          <label htmlFor="description" className="form-label">Description</label>
          <Controller
            name="description"
            control={control}
            render={({ field }) => <Input {...field} id="description" placeholder="Description" />}
          />

          <label htmlFor="price" className="form-label">Price</label>
          <Controller
            name="price"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="number"
                id="price"
                placeholder="Price"
                onChange={(e) => field.onChange(Number(e.target.value))}
              />
            )}
          />

          <label htmlFor="quantityInStock" className="form-label">Qty In Stock</label>
          <Controller
            name="quantityInStock"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="number"
                id="quantityInStock"
                placeholder="Quantity In Stock"
                onChange={(e) => field.onChange(Number(e.target.value))}
              />
            )}
          />

          <label htmlFor="brand" className="form-label">Brand</label>
          <Controller
            name="brand"
            control={control}
            render={({ field }) => <Input {...field} id="brand" placeholder="Brand" />}
          />

          <label htmlFor="categoryId" className="form-label">Category</label>
          <Controller
            name="categoryId"
            control={control}
            rules={{ required: 'Category is required' }}
            render={({ field }) => <Select {...field} options={categoryOptions} placeholder="Select Category" />}
          />
        </div>

        {createLoading || updateLoading ? <div>Loading...</div> : null}
        {createError && <div className="text-sm text-red-500 mt-2">{createError}</div>}
        {updateError && <div className="text-sm text-red-500 mt-2">{updateError}</div>}

        <Button type="primary" htmlType="submit" className="w-full">
          {id ? 'Update Product' : 'Create Product'}
        </Button>
      </form>
    </div>
  );
};

export default ProductForm;
