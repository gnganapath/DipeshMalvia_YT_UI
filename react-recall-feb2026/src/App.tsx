import  { useState } from "react";
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import HooksNavBar from "./React-hooks/HooksNavBar";
import UseStateComponent from './React-hooks/useStateHook/UseStateComponent';
import UseEffectComponent from './React-hooks/useEffectHook/UseEffectComponent';
import UseRefComponent from './React-hooks/useRefHook/UseRefComponent';
import UseMemoComponent from './React-hooks/useMemoHook/UseMemoComponent';
import UseReducerComponent from './React-hooks/UseReducerHook/UseReducerComponent';

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

        <Route path="/useState" element={<UseStateComponent />} />
        <Route path="/useEffect" element={<UseEffectComponent />} />
        <Route path="/useRef" element={<UseRefComponent />} />
        <Route path="/useMemo" element={<UseMemoComponent />} />
        <Route path="/useReducer" element={<UseReducerComponent />} />
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
