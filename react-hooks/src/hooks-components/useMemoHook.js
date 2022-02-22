import React from 'react';
import { UseMemoScenarioDemo } from './useMemoHook/useMeroScenarioDemo';
import { UseMemoHooEg } from './useMemoHook/useMemoHookEg';

/* 
useMemo:
=======
1. useMemo Hooks is used to optimize components/function light instead of heavy operations
2. Refernecial operations

*/
export const UseMemoHook = () =>{

    return(
        <>
        <div className="App" style={{border: '1px solid blue', margin: 5}}>
        <h5> useMemo Hooks </h5>        
        <div>
            <div style={{width: '50%', display: 'inline-block'}}> <UseMemoScenarioDemo  /> </div>
            <div style={{width: '50%', display: 'inline-block'}}> <UseMemoHooEg /> </div>   
        </div>
        </div>
        </>
    )
}