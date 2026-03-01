import React, { useReducer, useState } from "react";
import MyForm from "./useReducerFormFileds";

const initialState = [
    { id: Date.now(), name: 'ganapath', email :'ganapath@gmail.com'  }
];

function reducer (state, action){
    switch (action.type){
    case 'Add':
      return  [...state, action.payload]
    case 'Delete':
       return state.filter((user)=>{
            return user.id !== action.payload.id;
        }) 
    default:
     return new Error;
    }
}

const UseReducerComponent =()=>{
    const [state, dispatch] = useReducer(reducer, initialState);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    console.log(state);
    const addContact =(e)=>{
        e.preventDefault();
        const contact = {
            id: Date.now(),
            name, email }     // name: name, email : email
   
    setName("");
    setEmail("");
    dispatch({type: "Add", payload : contact});
    }
    return(
        <>
            <h3> Use Reducer hook </h3>
            <form onSubmit={addContact}>
               <div> Name: <input type="text" name="name" onChange={(e)=> setName(e.target.value)} /></div>
               <div> Email: <input type="email" name="email" onChange={(e)=> setEmail(e.target.value)} /></div>
               <div> <button> Add User Contact </button></div>
            </form>

            <h3>List of users </h3>
            {state.map((user)=>( 
                <li key={user.id} style={{ border: '2px solid red'}}>
                <h4>{user.name} </h4>            
                <h4>{user.email} </h4>
                <button onClick={()=>
                     dispatch({type: "Delete", payload: {id: user.id } } ) }> Delete user </button>
                </li>
                ))  
            }

            <MyForm />
                
        </>
    )
} 

export default UseReducerComponent;