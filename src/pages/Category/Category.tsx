import React from 'react';
import { useCategories } from '../../hooks/useCategories';
import { Button, Table } from 'antd';
import { Header } from 'antd/es/layout/layout';
import {
    PlusOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    }
];
export const Categories: React.FC = () => {
    const navigate = useNavigate();
    const { error, loading, categories } = useCategories();

    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error: {error}</p>;



    return (
        <>
            <Header style={{ padding: 0, background: 'white' }}>
                <Button type="primary" style={{
                    fontSize: '16px',
                    float: 'right',

                }}
                    onClick={() => navigate('add')}
                    icon={<PlusOutlined />}>Add</Button>


            </Header>
            <Table dataSource={categories} columns={columns} />
        </>
    )
}