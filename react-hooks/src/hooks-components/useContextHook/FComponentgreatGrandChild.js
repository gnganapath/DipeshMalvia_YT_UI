import React , { useContext } from 'react';
import { CounterContext } from './createContext/counterContext';

export const FComponentGreatGrandChild = () =>{

    const {counter, setCounter} = useContext(CounterContext);

    return (
        <>
        <h5> Great grand child component recive from Parent --> {counter}</h5>
        <button onClick= { ()=> setCounter(counter +10 )}>Increment by 10</button>
        <button onClick= { ()=> setCounter(counter -5 )}>Decrement by 5</button>
        </>
    )
}