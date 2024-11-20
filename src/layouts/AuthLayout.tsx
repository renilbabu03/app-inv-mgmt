import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout: FC = () => {
  return (
    <div>
      <header>Auth Header</header>
      <main>
        <Outlet /> {/* Render nested routes */}
      </main>
    </div>
  );
};

export default AuthLayout;
