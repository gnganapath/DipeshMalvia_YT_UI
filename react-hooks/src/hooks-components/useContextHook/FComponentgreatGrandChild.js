import React , { useContext } from 'react';
import { CounterContext } from './createContext/counterContext';

export const FComponentGreatGrandChild = () =>{

    const value = useContext(CounterContext);

    return (
        <>
        <h5> Great grand child component recive from Parent --> {value}</h5>


        </>
    )
}