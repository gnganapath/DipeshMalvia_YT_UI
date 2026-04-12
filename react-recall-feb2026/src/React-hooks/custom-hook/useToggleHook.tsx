import { useState } from "react";

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = () => setValue((prev) => !prev);

  return [value, toggle];
}


//Usage:
const [isToggled, toggle] = useToggle();


//2. useToggle Hook
//The useToggle hook makes toggling between true and false states smoother than ever. 
// Whether you're working with a switch button or a dropdown menu, this hook will make the code clean and easy to manage.
//  You'll wonder how you ever coped in life without it!