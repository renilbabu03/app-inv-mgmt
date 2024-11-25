import React from 'react';
import { Button, Form, Input, Select, Space } from 'antd';
import { Typography } from 'antd';

const { Option } = Select;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const CategoryForm: React.FC = () => {
    const [form] = Form.useForm();
    const { Title } = Typography;



    const onFinish = (values: any) => {

    };

    const onReset = () => {
        form.resetFields();
    };

    const onFill = () => {
        // form.setFieldsValue({ note: 'Hello world!', gender: 'male' });
    };

    return (
        <>
            <Title level={2}>Create Category</Title>
            <Form
                {...layout}
                form={form}
                name="control-hooks"
                onFinish={onFinish}
                style={{ maxWidth: 600 }}
            >
                <Form.Item name="name" label="Name" rules={[{ required: true, len: 8 }]}>
                    <Input />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Space>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        <Button htmlType="button" onClick={onReset}>
                            Reset
                        </Button>

                    </Space>
                </Form.Item>
            </Form>
        </>

    );
};

export default CategoryForm;