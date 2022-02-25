import { useReducer, useEffect } from 'react';
import Axios from 'axios';

const ACTIONS = {
    API_REQUEST : "api-request",
    FETCH_DATA : 'fetch-data',
    ERROR: "error",
}
const initialState = {
    data:[],
    loading: false,
    error: null,
}

function reducer(state, {type, payload}){

}

function useFetch(url){
    const [ state, dispatch ] = useReducer(reducer, initialState);

    useEffect( ()=>{
        dispatch({ type:ACTIONS.API_REQUEST });
            Axios.get(url).then((res) => {
                dispatch({ type:ACTIONS.FETCH_DATA, payload: res.data })
            })
    },[url])
    return state;

}

export default useFetch;