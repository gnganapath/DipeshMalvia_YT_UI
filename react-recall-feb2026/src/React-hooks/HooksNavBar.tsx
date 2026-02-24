import {NavLink} from "react-router-dom";

export const HooksNavBar=()=>{

    return(
        <>
        <nav>
            <NavLink to="/">Hooks</NavLink>
            <NavLink to="/useState">useState</NavLink>
            <NavLink to="/useEffect">useEffecte</NavLink>
            <NavLink to="/useRef">useRef</NavLink>
            <NavLink to="/useMemo">useMemo</NavLink>
            <NavLink to="/useCallback">useCallback</NavLink>
            <NavLink to="/useContext">useContext</NavLink>
            <NavLink to="/useReducer">useReducer</NavLink>
            <NavLink to="/customHook">customHook</NavLink>
            <NavLink to="/usefetch">usefetch</NavLink>
        </nav>
        </>
    )
}

export default HooksNavBar;