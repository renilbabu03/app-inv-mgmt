
import { Button, message, Space, Table } from 'antd';
import React from 'react';
import { useProducts } from '../../../hooks/Products/useProducts';
import { Header } from 'antd/es/layout/layout';
import { useNavigate } from 'react-router-dom';
import { useDeleteProduct } from '../../../hooks/Products/useDeleteProduct';



const Products: React.FC = () => {
  const { deleteProduct, loading: deleting, error: deleteError } = useDeleteProduct();
  const { products, loading, error, refetch } = useProducts();

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
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (_: any, record: any) => (
        <Space size="middle">
          <a onClick={() => deleteProductById(record.id)} >
            Delete
          </a>
        </Space>
      ),
    },
  ];

  const deleteProductById = async (id: number) => {
    try {
      await deleteProduct(id);
      message.success('Category deleted successfully');
      refetch();
    } catch (err: any) {
      message.error(`Failed to delete category: ${err.message}`);
    }
  };

  const navigate = useNavigate();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;


  return (
    <>
      <Header style={{ padding: 0, background: 'white' }}>
        <Button
          type="primary"
          style={{
            fontSize: '16px',
            float: 'right',
          }}
          onClick={() => navigate('add')}

        >
          Add
        </Button>
      </Header>
      <Table dataSource={products} columns={columns} />
    </>

  )
}

export default Products;