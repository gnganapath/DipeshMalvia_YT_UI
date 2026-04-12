import { useEffect, useRef } from "react";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay !== null) {
      const id = setInterval(() => savedCallback.current(), delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}


//Usage:

useInterval(() => {
  setCount((prevCount) => prevCount + 1);
}, 1000);


// 5. useInterval Hook
// Perfect for handling repeated actions over time, 
// the useInterval hook lets you set up intervals without the mess. Whether it's updating a timer or fetching data regularly, this hook keeps everything tidy and efficient.