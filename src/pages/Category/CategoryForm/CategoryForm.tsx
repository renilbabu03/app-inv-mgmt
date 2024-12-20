import { Button, Input } from 'antd';
import React, { useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useCreateCategory } from '../hooks/useCreateCategory';
import './CategoryForm.scss';

export interface CategoryFormData  {
    name: string;
};

const CategoryForm: React.FC = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<CategoryFormData>();
    const { create, loading, error } = useCreateCategory();


    useEffect(() => {
        if (error) {
            // Do something when there's an error (e.g., display a message)
        }
    }, [error]);

    const onSubmit: SubmitHandler<CategoryFormData> = (data: CategoryFormData) => {
        create(data);
    }

    return (
        <div className="p-6 max-w-sm mx-auto bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Category Form</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Name Input */}
                <div className="flex flex-col gap-y-1">
                    <label htmlFor="name" className="text-gray-700 font-medium">
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
                                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        )}
                    />
                    {errors.name && (
                        <span className=" text-sm text-red-500">{errors.name.message}</span>
                    )}
                </div>

                {/* Loading State */}
                {loading && <div>Loading...</div>}

                {/* Error State */}
                {error && <div className="text-sm text-red-500 mt-2">{error}</div>}

                {/* Submit Button */}
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

export default CategoryForm;
