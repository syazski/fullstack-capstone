import { NavLink } from "react-router-dom";

function Nav(props) {

    const logoutUser = () => {
      props.setToken(null)
    }
    
    if(props.token){
      return (
      <nav>
      <NavLink to ="/">Homepage</NavLink>
      <NavLink to ="/Account">Cart</NavLink>
      <a onClick={logoutUser}>Logout</a>
      </nav>
      );
    } 
    return (
      <>
      <NavLink to ="/">Homepage</NavLink>
      <NavLink to ="/login">Login</NavLink>
      <NavLink to ="/register">Register</NavLink>
      </>
    )
  }
  
  export default Nav;