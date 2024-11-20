import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import './AuthLayout.scss'
const AuthLayout: FC = () => {
  return (
    <><Outlet/></>
  );
};

export default AuthLayout;
