import {
  DashboardOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons';
import { Button, Dropdown, Layout, Menu, MenuProps, Space, theme } from 'antd';
import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const MainLayout: React.FC = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" onClick={()=>navigate('/auth/login')}>
          Logout
        </a>
      ),
    },
  ];

  return (
    <Layout style={{ height: "100vh" }}>
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
              onClick: () => {
                navigate('/dashboard')
              }
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'Products',
              onClick: () => {
                navigate('/products')
              }
            },
            {
              key: '3',
              icon: <VideoCameraOutlined />,
              label: 'Categories',
              onClick: () => {
                navigate('/categories')
              }
            },
            {
              key: '4',
              icon: <UploadOutlined />,
              label: 'Stocks',
              onClick: () => {
                navigate('/dashboard')
              }
            },
            {
              key: '5',
              icon: <UploadOutlined />,
              label: 'Purchase Order',
              onClick: () => {
                navigate('/dashboard')
              }
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header className='flex items-center justify-between' style={{ padding: 0, background: colorBgContainer }}>
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
          <Space className='p-2'>
            <Dropdown menu={{ items }} placement="bottomRight">
              <Button type="primary" shape="circle" icon={<UserOutlined />} />

            </Dropdown>
          </Space>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            overflow: 'auto',
            // background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;