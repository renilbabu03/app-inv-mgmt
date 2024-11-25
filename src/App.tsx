import React, { FC } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout/MainLayout';
import AuthLayout from './layouts/AuthLayout/AuthLayout';
import Home from './pages/Home';
import Login from './pages/Login/Login';
import Products from './pages/Products/Product';
import { Categories } from './pages/Category/Category';
import { CategoryForm } from './pages/Category/CategoryForm';


const App: FC = () => {
  return (
    <Router>
      <Routes>
    
        <Route path="/" element={<MainLayout />}>
           <Route path='/' element={<Navigate to='/dashboard' />} />
          <Route path='/dashboard' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/categories/add' element={<CategoryForm />} />
        </Route>

     
        <Route path="/auth" element={<AuthLayout />}>
          <Route path='/auth' element={<Navigate to='/auth/login' />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
