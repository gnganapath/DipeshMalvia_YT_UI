import { useState, useEffect } from "react";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

//Usage:
const debouncedSearchTerm = useDebounce(searchTerm, 500);

// 3. useDebounce Hook
// Sometimes, it's better to delay. The useDebounce hook is perfect for minimizing the number of calls you make for certain functions,
//  especially in scenarios involving APIs. Whenever a user types in a search box, this hook waits for a pause, 
// so it won't bombard the search with every keystroke!


import React, { useState } from 'react';
import useDebounce from './useDebounce'; // Assuming useDebounce.js is in the same directory

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  // Set delay time according to your needs
  const debouncedSearchTerm = useDebounce(searchTerm, 300); 

  useEffect(() => {
    // Here you can trigger your search logic, like an API call
    // For demonstration, let's just console log the debounced search term
    console.log("Search triggered with term:", debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchComponent;