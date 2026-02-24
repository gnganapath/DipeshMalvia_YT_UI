import  { useState } from "react";
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from './React-Router-dom/Navbar';


import { ProductsFeatures, ProductsDetails } from  "./React-Router-dom/Products";
import Products from "./React-Router-dom/Products";

import Users from "./React-Router-dom/Users";
import UserDetail from "./React-Router-dom/UserDetail";
import AdminUser from "./React-Router-dom/AdminUser";

import './App.css';

// import Login from "./React-Router-dom/Login";
const LazyLoginComponent = lazy(()=>import("./React-Router-dom/Login"));

function Home() {
  const navigate = useNavigate();
  return <>
  <h1>Home Page</h1>
 <button onClick={()=> navigate('login', {replace: true})}>Goto Login </button>
  </>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}


function PageNotFound() {
  return <h1>No Page found</h1>;
}
function RouterApp() {
  return (
    <>
      <BrowserRouter>
      {/* Navigation */}
      <NavBar />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/*<Route path="/login" element={<Login />} /> ,,, below is lazy loading*/}
        <Route path="/login" element={
          <Suspense fallback="...loading...">
            <LazyLoginComponent />
          </Suspense>
        } />

        <Route path="/products" element={<Products />}>    {/*nested route */}
            <Route index element={<ProductsFeatures />} />    {/* index route */}
            <Route path="feature" element={<ProductsFeatures />} />
            <Route path="details" element={<ProductsDetails />} />
        </Route>

        {/*<Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<UserDetail />} />
        <Route path="/users/admin" element={<AdminUser />} />*/}
        {/*We can make it sepeare or nested dynamic routes + useParams to get dynamic route value*/}

        <Route path="/users" element={<Users />} >
            <Route path=":userId" element={<UserDetail />} />
            <Route path="admin" element={<AdminUser />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default RouterApp
