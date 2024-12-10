
import { Button, message, Space, Table, Typography } from 'antd';
import React from 'react';
import { useProducts } from '../hooks/useProducts';
import { Header } from 'antd/es/layout/layout';
import { useNavigate } from 'react-router-dom';
import { useDeleteProduct } from '../hooks/useDeleteProduct';



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
          <a  onClick={()=> navigate(`${record.id}`)}>
            Edit
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
  const { Title } = Typography;


  return (
    <>
      <Header  className='bg-white flex justify-between items-center mb-3'>
        <Title level={2}>Products</Title>
        <Button
          type="primary"
          
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