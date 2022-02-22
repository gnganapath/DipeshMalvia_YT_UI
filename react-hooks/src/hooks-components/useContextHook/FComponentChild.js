import React, { useContext } from 'react';
import { FComponentGreatGrandChild } from './FComponentgreatGrandChild';
import { CounterContext } from './createContext/counterContext';

export const FComponentChild = ({counter}) =>{
const value = useContext(CounterContext);
return (
     <div className="border">
        <h5> Function Child Component </h5>
        <h6>{counter }</h6>
        <h6> context value from parent componnet ->- { value } </h6>
        <FChild counter = {counter} />
    </div>
)

}

const FChild = ( {counter }) =>{
    const value = useContext(CounterContext);
    return (
        <>
            <span className="border1">
                <h5> Function grand Child Component </h5> 
                <h6>{counter }</h6>
                <h6> context value from parent componnet to grand child component ->- { value } </h6>
            </span>
            <FComponentGreatGrandChild />
        </>
    )
}