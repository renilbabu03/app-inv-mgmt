import { Button, Input, Typography } from 'antd';
import React from 'react';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import './CategoryForm.scss';

type CategoryFormData = {
    name: string;
};

const CategoryForm: React.FC = () => {
    const { Title } = Typography;
    const { control, handleSubmit, formState: { errors } } = useForm<CategoryFormData>();
    const onSubmit: SubmitHandler<CategoryFormData> = data => console.log(data);

    return (
        <div className='formContainer'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Name is required" }}
                    render={({ field }) => (
                        <Input placeholder="Name" {...field} />
                    )}
                />
                {errors.name && <span>{errors.name.message}</span>}

                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default CategoryForm;
