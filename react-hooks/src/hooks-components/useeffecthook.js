import React from 'react';
import ClassComponent from './ClassComponent';
import { UseEffectFunctionComponent } from './UseEffectFunctionComponent';

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

 