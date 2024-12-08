import {
  DashboardOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  VideoCameraOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const MainLayout: React.FC = () => {
  const navigate = useNavigate(); 
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{height:"100vh"}}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <DashboardOutlined />,
              label: 'Dashboard',
              onClick:()=>{
                navigate('/dashboard')
              }
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'Products',
              onClick:()=>{
                navigate('/products')
              }
            },
            {
              key: '3',
              icon: <VideoCameraOutlined />,
              label: 'Categories',
              onClick:()=>{
                navigate('/categories')
              }
            },
            {
              key: '4',
              icon: <UploadOutlined />,
              label: 'Stocks',
              onClick:()=>{
                navigate('/dashboard')
              }
            },
            {
              key: '5',
              icon: <UploadOutlined />,
              label: 'Purchase Order',
              onClick:()=>{
                navigate('/dashboard')
              }
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            overflow:'auto',
            // background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;