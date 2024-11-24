
import { Table } from 'antd';
import React from 'react';
import { useProducts } from '../../hooks/useProducts';

  
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
const Products: React.FC = () => {

    const { products, loading, error } = useProducts();
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    
  

    return (
        <Table dataSource={products} columns={columns} />

    )
}

export default Products;