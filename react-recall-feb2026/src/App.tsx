import  { useState } from "react";
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from './components/Navbar';


import { ProductsFeatures, ProductsDetails } from  "./components/Products";
import Products from "./components/Products";

import Users from "./components/Users";
import UserDetail from "./components/UserDetail";
import AdminUser from "./components/AdminUser";

import './App.css';

// import Login from "./components/Login";
const LazyLoginComponent = lazy(()=>import("./components/Login"));

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

function App() {

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
        {/*<Route path="/login" element={<Login />} />*/}
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

export default App
