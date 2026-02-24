import { NavLink } from 'react-router-dom';

export const Navbar =()=>{
return(

    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink> 
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/products"> [Product - Nested Routes + index route] </NavLink>
        <NavLink to="/users"> [Users - Dynamic routes, specific, then nested routes] </NavLink>
        <NavLink to="/login"> Login </NavLink>
      </nav>
)
}

export default Navbar;