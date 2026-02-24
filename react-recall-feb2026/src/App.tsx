import  { useState } from "react";
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import HooksNavBar from './hooks/HooksNavbar';


import './App.css';

// import hooks home from "./components/HooksHome";
const LazyHookComponent = lazy(()=>import("./hooks/HooksHome"));


function PageNotFound() {
  return <h1>No Page found</h1>;
}

function App() {

  return (
    <>
      <BrowserRouter>
      <HooksNavBar />

      <Routes>        
        <Route path="/" element={ <Suspense fallback="...loading...">
                                              <LazyHookComponent />
                                  </Suspense>
                                } />

        {/*<Route path="/products" element={<Products />}>    
            <Route index element={<ProductsFeatures />} />     
            <Route path="feature" element={<ProductsFeatures />} />
            <Route path="details" element={<ProductsDetails />} />
        </Route>*/}

        
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
