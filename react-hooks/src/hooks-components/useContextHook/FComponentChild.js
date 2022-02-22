import React, { useContext } from 'react';
import { FComponentGreatGrandChild } from './FComponentgreatGrandChild';
import { CounterContext } from './createContext/counterContext';

export const FComponentChild = () =>{
const {counter, setCounter} = useContext(CounterContext);
return (
     <div className="border">
        <h5> Function Child Component </h5>
        <h6>context value from parent componnet -> {counter }</h6>
        <button onClick= { ()=> setCounter(counter +1)}>Increment</button>
        <FChild />
    </div>
)

}

const FChild = () =>{
    const {counter, setCounter} = useContext(CounterContext);
    return (
        <>
            <span className="border1">
                <h5> Function grand Child Component </h5> 
                <h6> context value from parent componnet to grand child component ->- { counter } </h6>
                 <button onClick= { ()=> setCounter(counter -1)}>Decrement</button>
            </span>
            <FComponentGreatGrandChild />
        </>
    )
}