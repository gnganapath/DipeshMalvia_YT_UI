import  { useState } from "react";
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import HooksNavBar from "./React-hooks/HooksNavBar";
import UseStateComponent from './React-hooks/useStateHook/UseStateComponent';


import './App.css';

// import hooks home from "./React-hooks/HooksHome";
const LazyHookComponent = lazy(()=>import("./React-hooks/HooksHome"));


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

        <Route path="/usestate" element={<UseStateComponent />} />
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
