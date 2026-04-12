import { useEffect } from "react";

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) return;
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

//Usage:

const modalRef = useRef();
useOnClickOutside(modalRef, () => setIsOpen(false));

//4. useOnClickOutside Hook

// Need an alert when a user clicks outside a menu? With the useOnClickOutside,
//  you can detect clicks outside of an element and manage dropdowns or modals like a breeze.
//  It comes in handy when you want to close these elements by clicking elsewhere on the screen.