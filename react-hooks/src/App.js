import React from 'react';
import  './App.css';
import { FunctionComponent } from './functioncomponent';  // type-3 => arrya export
import  UseStateHookDemo from './hooks-components/useStateHook';   // type-1 =>typical 2 line export default
import { UseEffectHook } from './hooks-components/useeffecthook';   // type-2 =>export without default 
import  UseRefHook from './hooks-components/useRefHook'; 

function App() {
  return (
    <div className="App">
      <div> Hello React Hooks 
        <FunctionComponent />

        <UseStateHookDemo />

        <UseEffectHook />

        <UseRefHook />

      </div>
    </div>
  );
}

export default App;
