import React from 'react';
import ClassComponent from './useEffectHook/ClassComponent';
import { UseEffectFunctionComponent } from './useEffectHook/UseEffectFunctionComponent';


/*
// Type-1 compomnent mounted and updated - first time and Every method call/ variable update
// Type-2 Call only once which is component mounted - Mostly for Fetch / Axios call 
// Type-3 runs any time any dependency value changes
*/
export function UseEffectHook() {
    return (
        <div className="App" style={{border: '1px solid blue', margin: 5}}>
        <h5>2. useEffecte Hooks </h5>
        <h6> Export  fun Name() </h6>
        <div>
            <div style={{width: '50%', display: 'inline-block'}}> <ClassComponent  /> </div>
            <div style={{width: '50%', display: 'inline-block'}}> <UseEffectFunctionComponent /> </div>   
        </div>
        </div>
    );
}

 