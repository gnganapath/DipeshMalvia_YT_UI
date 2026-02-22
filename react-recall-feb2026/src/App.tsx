import  { useState } from "react";
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from './components/Navbar';



import './App.css';

// import Login from "./components/Login";
const LazyLoginComponent = lazy(()=>import("./components/Login"));


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
        
        <Route path="/" element={
          <Suspense fallback="...loading...">
            <LazyLoginComponent />
          </Suspense>
        } />

        <Route path="/products" element={<Products />}>    {/*nested route */}
            <Route index element={<ProductsFeatures />} />    {/* index route */}
            <Route path="feature" element={<ProductsFeatures />} />
            <Route path="details" element={<ProductsDetails />} />
        </Route>

        
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
