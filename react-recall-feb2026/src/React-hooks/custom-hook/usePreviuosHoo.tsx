import { useRef, useEffect } from "react";

function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

//Usage:
const previousCount = usePrevious(count);

//1. usePrevious Hook
//Ever needed to keep track of the previous value of a prop or state? The usePrevious hook is your friend!
//  It’s super simple and returns the previous value of a prop or state to track changes over time.
//   For instance, navigating through a photo gallery might require this to check which photo was viewed before.