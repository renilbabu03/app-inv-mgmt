
import { Button, Table } from 'antd';
import React from 'react';
import { useProducts } from '../../../hooks/Products/useProducts';
import { Header } from 'antd/es/layout/layout';
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
const Products: React.FC = () => {

    const { products, loading, error } = useProducts();
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