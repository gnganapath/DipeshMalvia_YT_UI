import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}


//Usage:

const [name, setName] = useLocalStorage("name", "Guest");


// 6. useLocalStorage Hook
// The useLocalStorage hook helps you sync state to local storage so that you can cache data easily between user sessions. 
// Perfect for when you need to remember settings or user-specific data across different visits.