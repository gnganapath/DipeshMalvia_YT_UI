import React from 'react';
import  './../App.css';
import UseFetch from './customHook/useFetch';

export const CustomHook = () =>{

    const BASE_URL = "https://inshortsapi.vercel.app/news?category=science";
    const { data, loading, error } = UseFetch(BASE_URL);

    return(
        <div className="App">
            <h5> CustomHook ( Data Fetching )</h5>
            {loading && <h5> loading ...</h5>}
            {error && <h5>Error: Something went wrong </h5>}
            {data.length}
        </div>

    );
}