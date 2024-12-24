import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import './AuthLayout.scss'
import Logo from '../../components/Logo';
const AuthLayout: FC = () => {
  return (
    <>

      <div className="flex min-h-screen w-screen relative">

        <div className="bg-white rounded-lg shadow-lg h-screen w-full grid grid-cols-1 md:grid-cols-2 relative">

          <div className="absolute top-6 left-6  h-12">
            <Logo />
          </div>

          <div className="p-8 flex flex-col justify-center">
            <Outlet />
          </div>

          {/* Right Side: Image Section */}
          <div className="hidden md:block">
            <img
              src="/inventory.webp"
              alt="Workspace"
              className="h-screen w-full object-cover rounded-r-lg"
            />
          </div>

        </div>
      </div>


      {/* <Outlet/> */}
    </>
  );
};

export default AuthLayout;
