import React from 'react';
import  './App.css';
import { FunctionComponent } from './functioncomponent'
import { UseStateHookDemo} from './hooks-components/usestatehook';
function App() {
  return (
    <div className="App">
      <div> Hello React Hooks 
        <FunctionComponent />
        <UseStateHookDemo />
      </div>
    </div>
  );
}

export default App;
