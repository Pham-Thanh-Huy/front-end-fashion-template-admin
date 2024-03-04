import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './layout/admin/header-footer/Header';
import Order from './layout/admin/order/Order';
import Staff from './layout/admin/user/staff/Staff';
import User from './layout/admin/user/user/User';
import AddCategoryProduct from './layout/admin/product/add-category-product/AddCategoryProduct';
import AddProduct from './layout/admin/product/add-product/AddProduct';
import ChangeProduct from './layout/admin/product/change-product/ChangeProduct';
import ListProduct from './layout/admin/product/list-product/ListProduct';
import AddCategoryPost from './layout/admin/post/add-category-post/AddCategoryPost';
import AddPost from './layout/admin/post/add-post/AddPost';
import ChangePost from './layout/admin/post/change-post/ChangePost';
import ListPost from './layout/admin/post/list-post/ListPost';
import Info from './layout/admin/info/Info';





function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Header/>
      <Routes  >
       <Route path='/admin/' element={<Order/>} />
       <Route path='/admin-staff-management' element={<Staff/>} />
       <Route path='/admin-user-management' element={<User/>} />
       <Route path='/admin-add-category-product' element={<AddCategoryProduct/>} />
       <Route path='/admin-add-product' element={<AddProduct/>} />
       <Route path='/admin-change-product' element={<ChangeProduct/>} />
       <Route path='/admin-list-product' element={<ListProduct/>} />
       <Route path='/admin-add-category-post' element={<AddCategoryPost/>} />
       <Route path='/admin-add-post' element={<AddPost/>} />
       <Route path='/admin-change-post' element={<ChangePost/>} />
       <Route path='/admin-list-post' element={<ListPost/>} />
       <Route path='/admin-Info' element={<Info/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
